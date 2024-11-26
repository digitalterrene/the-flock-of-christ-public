import React from "react";
interface Blog {
  id: string;
  title: string;
  images: any;
  date: string;
  content: string;
}
interface Props {
  featuredBlogs: Blog[];
}
import { FaBookOpen } from "react-icons/fa";
import { BsChatSquareQuoteFill } from "react-icons/bs";
import { LuFileHeart } from "react-icons/lu";
export const BlogBanner: React.FC<Props> = ({ featuredBlogs }) => {
  return (
    <>
      {featuredBlogs && (
        <div>
          {/* <!-- Card Blog --> */}
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            {/* <!-- Title --> */}
            <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
              <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
                Resources For Studying
              </h2>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                Stay up to date with the latest content written by our trusted
                shepherds
              </p>
            </div>
            {/* <!-- End Title --> */}
            {/* <!-- Tab Nav --> */}
            <nav className="  mx-auto grid py-4 sm:flex gap-y-px sm:gap-y-0 sm:gap-x-4">
              <button
                type="button"
                className="hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent w-full flex flex-col text-start hover:bg-gray-100 p-3 md:p-5 rounded-xl dark:hs-tab-active:bg-white/[.05] dark:hover:bg-gray-700 active"
              >
                <FaBookOpen />
                <span className="mt-5">
                  <span className="hs-tab-active:text-blue-600 block font-semibold text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                    Blogs
                  </span>
                  <span className="hidden lg:block mt-2 text-gray-800 dark:text-gray-200">
                    Indulge into our blogs, that upack indivdual christian
                    teachings
                  </span>
                </span>
              </button>

              <a
                href="/resources/quotes"
                className="hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent w-full flex flex-col text-start hover:bg-gray-100 p-3 md:p-5 rounded-xl dark:hs-tab-active:bg-white/[.05] dark:hover:bg-gray-700"
              >
                <BsChatSquareQuoteFill />
                <span className="mt-5">
                  <span className="hs-tab-active:text-blue-600 block font-semibold text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                    Quotes
                  </span>
                  <span className="hidden lg:block mt-2 text-gray-800 dark:text-gray-200">
                    Poetic writing never gets old, delve into our
                    gathered-over-time quotes that
                  </span>
                </span>
              </a>

              <button
                type="button"
                className="hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent w-full flex flex-col text-start hover:bg-gray-100 p-3 md:p-5 rounded-xl dark:hs-tab-active:bg-white/[.05] dark:hover:bg-gray-700"
              >
                <LuFileHeart />
                <span className="mt-5">
                  <span className="hs-tab-active:text-blue-600 block font-semibold text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                    Poetry
                  </span>
                  <span className="hidden lg:block mt-2 text-gray-800 dark:text-gray-200">
                    Who don't love poetry?, have your heart swept into the world
                    of empathy
                  </span>
                </span>
              </button>
            </nav>
            {/* <!-- End Tab Nav --> */}
            {/* <!-- Grid --> */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* <!-- Card --> */}
              <a
                className="group dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href={`/resources/${featuredBlogs[0]?.id}`}
              >
                <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                  <img
                    className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                    src={`${featuredBlogs[0]?.images[0]?.image}`}
                    alt={`${featuredBlogs[0]?.title}`}
                  />
                </div>

                <div className="mt-7">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
                    {featuredBlogs[0]?.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-gray-800 dark:text-gray-200">
                    {(featuredBlogs[0]?.content as string)?.substring(0, 310) ||
                      "No intro paragraph"}
                  </p>
                  <p className="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium">
                    Read more
                    <svg
                      className="flex-shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </p>
                </div>
              </a>
              {/* <!-- End Card --> */}

              {/* <!-- Card --> */}
              <a
                className="group dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href={`/resources/${featuredBlogs[1]?.id}`}
              >
                <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                  <img
                    className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                    src={`${featuredBlogs[1]?.images[1]?.image}`}
                    alt={`${featuredBlogs[1]?.title}`}
                  />
                </div>

                <div className="mt-7">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
                    {featuredBlogs[1]?.title}{" "}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-gray-800 dark:text-gray-200">
                    {(featuredBlogs[1]?.content as string)?.substring(0, 310) ||
                      "No intro paragraph"}{" "}
                  </p>
                  <p className="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium">
                    Read more
                    <svg
                      className="flex-shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </p>
                </div>
              </a>
              {/* <!-- End Card --> */}

              {/* <!-- Card --> */}
              <a
                className="group relative flex flex-col w-full min-h-60 bg-center bg-cover rounded-xl hover:shadow-lg transition bg-[url('https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80')] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href={`/resources/${featuredBlogs[2]?.id}`}
                style={{
                  backgroundImage: `url(${featuredBlogs[2]?.images[1]?.image})`,
                }}
              >
                <div className="flex-auto p-4 md:p-6">
                  <h3 className="text-xl line-clamp-4 text-white/[.9] group-hover:text-white">
                    <span className="font-bold">
                      {" "}
                      {featuredBlogs[2]?.title}:
                    </span>{" "}
                    {(featuredBlogs[2]?.content as string)?.substring(0, 310) ||
                      "No intro paragraph"}{" "}
                  </h3>
                </div>
                <div className="pt-0 p-4 md:p-6">
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/[.7]">
                    Visit the site
                    <svg
                      className="flex-shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </div>
                </div>
              </a>
              {/* <!-- End Card --> */}
            </div>
            {/* <!-- End Grid --> */}
          </div>
          {/* <!-- End Card Blog --> */}
        </div>
      )}
    </>
  );
};
