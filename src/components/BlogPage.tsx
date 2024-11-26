import { Blog } from "@/tsTypes";
import React from "react";

interface Props {
  blog: Blog;
  relatedArticles: Blog[]; // Add relatedArticles property
}
export const BlogPage: React.FC<Props> = ({ blog, relatedArticles }) => {
  const { id, title, date, images, content } = blog;
  const paragraphs = content
    .split("\n")
    .map((paragraph, index) => <span key={index}>{paragraph}</span>);
  const handleGoBack = () => {
    window.history.back();
  };
  return (
    <div className="px-20 relative py-10">
      {/* <!-- Blog Article --> */}
      <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6">
          {/* <!-- Content --> */}
          <div className="lg:col-span-2">
            <div className="py-8 lg:pe-8">
              <div className="space-y-5 lg:space-y-8">
                <button
                  className="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline dark:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  onClick={() => handleGoBack()}
                >
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
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                  Back to Blog
                </button>

                <h2 className="text-3xl font-bold capitalize lg:text-5xl dark:text-white">
                  {title}
                </h2>

                <div className="flex items-center gap-x-5">
                  <a
                    className="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-800 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                  >
                    Articles
                  </a>
                  <p className="text-xs sm:text-sm text-gray-800 dark:text-gray-200">
                    {date}
                  </p>
                </div>

                <p className="text-lg  text-gray-800 dark:text-gray-200">
                  {paragraphs[0]}
                </p>

                <div className="text-center ">
                  <div className="grid lg:grid-cols-2 my-10 gap-3">
                    <div className="grid grid-cols-2 lg:grid-cols-1 gap-8">
                      <img
                        className="size-full   h-60 w-full   object-cover rounded-xl"
                        src={`${images[0]?.image}`}
                        alt={`${images[0]?.name}`}
                      />

                      <img
                        className="size-full    h-60 w-full start-0 object-cover rounded-xl"
                        src={`${images[1]?.image}`}
                        alt={`${images[1]?.name}`}
                      />
                    </div>
                    <img
                      className="size-full h-[512px] w-full   object-cover rounded-xl"
                      src={`${images[2]?.image}`}
                      alt={`${images[2]?.name}`}
                    />
                  </div>
                </div>
                {paragraphs.slice(1, -2)?.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-lg text-gray-800 dark:text-gray-200"
                  >
                    {paragraph}
                  </p>
                ))}

                <figure>
                  <img
                    className="w-full   h-[550px] object-cover object-center rounded-xl"
                    src={`${images[3]?.image}`}
                    alt={`${images[3]?.name}`}
                  />
                  <figcaption className="mt-3 text-sm text-center text-gray-500">
                    {images[3]?.name}
                  </figcaption>
                </figure>

                <div className="space-y-3">
                  <p className="text-lg text-gray-800 dark:text-gray-200">
                    {paragraphs[paragraphs.length - 2]}
                  </p>
                </div>

                <p className="text-lg text-gray-800 dark:text-gray-200">
                  {paragraphs[paragraphs.length - 1]}
                </p>

                <div className="grid lg:flex lg:justify-between lg:items-center gap-y-5 lg:gap-y-0">
                  {/* <!-- Badges/Tags --> */}
                  <div>
                    <a
                      className="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      href="#"
                    >
                      Teaching
                    </a>
                    <a
                      className="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      href="#"
                    >
                      Christian Sermons
                    </a>
                    <a
                      className="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      href="#"
                    >
                      Blogs
                    </a>
                    <a
                      className="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      href="#"
                    >
                      Encouragement
                    </a>
                  </div>
                  {/* <!-- End Badges/Tags --> */}
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Content --> */}

          {/* <!-- Sidebar --> */}
          <div className="lg:col-span-1 lg:w-full lg:h-full sticky  top-16 lg:bg-gradient-to-r lg:from-gray-50 lg:via-transparent lg:to-transparent dark:from-slate-800">
            <div className="sticky top-0 start-0 py-8 lg:ps-8">
              {/* <!-- Avatar Media --> */}
              <div className="group flex items-start  gap-x-3 border-b border-gray-200 p-6 mb-8 dark:border-gray-700">
                <a
                  className="block flex-shrink-0"
                  href="https://www.linkedin.com/in/larry-kingstone-71516824a/"
                >
                  <img
                    className="size-10 h-16 rounded-full"
                    src="/images/people/Larry Kingstone Working.jpg"
                    alt="Larry Kingstone - The Flock Of Christ"
                  />
                </a>

                <a
                  className="group grow block"
                  href="https://www.linkedin.com/in/larry-kingstone-71516824a/"
                >
                  <h5 className="group-hover:text-gray-600 text-sm font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                    Larry Kingstone
                  </h5>
                  <p className="text-sm text-gray-500">
                    Writer | Software Developer
                  </p>
                </a>

                <div className="grow">
                  <div className="flex whitespace-nowrap justify-end">
                    <a href="https://www.linkedin.com/in/larry-kingstone-71516824a/">
                      {" "}
                      <button
                        type="button"
                        className="py-1.5 px-2.5 inline-flex  items-center gap-x-2 text-xs font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        View Website
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- End Avatar Media --> */}

              <div className="space-y-6 pl-10">
                {relatedArticles?.map(({ title, images, id }) => (
                  <a
                    className="group flex items-center gap-x-6"
                    href={`/resources/${id}`}
                  >
                    <div className="grow">
                      <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-blue-500">
                        {title}
                      </span>
                    </div>

                    <div className="flex-shrink-0 relative rounded-lg overflow-hidden size-20">
                      <img
                        className="h-16 w-16 object-center  object-cover rounded-lg"
                        src={`${images[0]?.image}`}
                        alt={`${images[0]?.name}`}
                      />
                    </div>
                  </a>
                ))}
                {/* <!-- Media --> */}
              </div>
            </div>
          </div>
          {/* <!-- End Sidebar --> */}
        </div>
      </div>
      {/* <!-- End Blog Article --> */}
    </div>
  );
};
