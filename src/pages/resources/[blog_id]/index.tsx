import { BlogPage } from "@/components/BlogPage";
import Layout from "@/components/Layout";
import React from "react";
interface Blog {
  id: string;
  title: string;
  images: any;
  date: string;
  content: string;
}
export default function index({ blog, relatedArticles }: any) {
  return (
    <Layout>
      <BlogPage relatedArticles={relatedArticles} blog={blog} />
    </Layout>
  );
}
export async function getServerSideProps(context: any) {
  // Access route parameters (dynamic route parameters)
  const { params } = context;
  const { blog_id } = params;
  try {
    // Fetch the current blog post
    const response = await fetch(
      `http://server.theflockofchrist.org/blogs/${blog_id}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch blog post");
    }
    const blog = await response.json();

    // Fetch related articles based on some criteria (e.g., tags)
    const relatedArticlesResponse = await fetch(
      "http://server.theflockofchrist.org/blogs"
    );
    if (!relatedArticlesResponse.ok) {
      throw new Error("Failed to fetch related articles");
    }
    const relatedArticles = await relatedArticlesResponse.json();

    return {
      props: {
        blog,
        relatedArticles,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        blog: null,
        relatedArticles: [],
      },
    };
  }
}
