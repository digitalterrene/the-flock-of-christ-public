import dynamic from "next/dynamic";
import React from "react";
const Layout = dynamic(() => import("@/components/Layout"), {
  ssr: false,
});
export default function index({ quotes }: any) {
  return (
    <Layout>
      <div className="lg:px-28 px-6 py-20">
        {/* <!-- Title --> */}
        <div className="  mx-autob flex items-center justify-between  mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Quotes
          </h2>{" "}
          <span>{quotes?.length}</span>
        </div>
        {/* <!-- End Title --> */}
        <div>
          {quotes.map(({ quote, date }: any, i: any) => (
            <div key={i}>
              <div className="mt-4">
                <div className=" hover:bg-neutral-100 cursor-pointer gap-2 rounded-b-none flex w-full justify-between rounded-lg   dark:bg-[#165153]/10 dark:hover:bg-[#165153]/10 px-2 lg:px-4 py-4 text-left text-base font-medium ">
                  <h2 className="font-semibold w-10/12">{quote}</h2>
                  <span className="text-[#F43F5E] dark:text-[#0D99FF]">
                    {date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  try {
    const response = await fetch("http://server.theflockofchrist.org/quotes");
    if (!response.ok) {
      throw new Error("Failed to fetch quotes");
    }
    const quotes = await response.json();
    // Shuffle the quotes array to get a random order
    const shuffledBlogs = quotes.sort(() => Math.random() - 0.5);

    // Pick the first three quotes as featured quotes
    const featuredBlogs = shuffledBlogs.slice(0, 3);
    return {
      props: {
        quotes,
        featuredBlogs,
      },
    };
  } catch (error) {
    console.error("Error fetching quotes:", error);
    return {
      props: {
        quotes: [],
      },
    };
  }
}
