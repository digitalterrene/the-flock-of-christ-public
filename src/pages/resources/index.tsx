import { BlogBanner } from "@/components/BlogBanner";
import { BlogCard } from "@/components/BlogCard";
import Layout from "@/components/Layout";
import React from "react";
interface Blog {
  id: string;
  title: string;
  images: any;
  date: string;
  content: string;
}
export default function index({ blogs, featuredBlogs }: any) {
  return (
    <Layout>
      <div className="px-20 py-10">
        <BlogBanner featuredBlogs={featuredBlogs} />
        {/* <!-- Card Blog --> */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* <!-- Title --> */}
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
              Featured Resources
            </h2>
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              Here is our top picks that we believe can educate you more about
              the Word and our alignment to the sacred teachings of the bible
            </p>
          </div>
          {/* <!-- End Title --> */}

          {/* <!-- Grid --> */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* <!-- Card --> */}
            {blogs?.map((blog: Blog) => (
              <BlogCard blog={blog} />
            ))}
            {/* <!-- End Card --> */}
          </div>
          {/* <!-- End Grid --> */}
        </div>
        {/* <!-- End Card Blog --></div> */}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  try {
    const response = await fetch("http://server.theflockofchrist.org/blogs");
    if (!response.ok) {
      throw new Error("Failed to fetch blogs");
    }
    const blogs = await response.json();
    // Shuffle the blogs array to get a random order
    const shuffledBlogs = blogs.sort(() => Math.random() - 0.5);

    // Pick the first three blogs as featured blogs
    const featuredBlogs = shuffledBlogs.slice(0, 3);
    return {
      props: {
        blogs,
        featuredBlogs,
      },
    };
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return {
      props: {
        blogs: [],
      },
    };
  }
}
