import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <div id="home" className="bg-white dark:bg-[#131921]">
      <div className="max-w-7xl mx-auto pt-20 pb-16 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2">
        <div className="pt-6 md:pt-32 justify-center text-center sm:justify-start sm:text-start">
          <h1 className="text-5xl font-bold">
            Welcome to <br />{" "}
            <span className="text-rose-500 font-extrabold">
              The Flock Of Christ
            </span>
          </h1>
          <p className="pt-6 text-base w-auto sm:w-10/12 md:w-10/12 dark:text-neutral-400">
            At The Flock Of Christ, we are dedicated to embracing the essence of
            the early church believers, returning to the foundational principles
            that knit the body of Christ together in unity, love, and purpose.
          </p>
          <p className="pt-6 text-base w-auto sm:w-10/12 md:w-10/12 dark:text-neutral-400">
            Our organization is driven by a vision to dismantle barriers,
            denominational divides, and distractions, focusing instead on what
            truly matters: a profound relationship with our Shepherd, Jesus
            Christ.
          </p>
          <div className="flex flex-auto pt-10 gap-2 min-w-[350px] justify-center sm:justify-start">
            <div>
              <Link href="/resources">
                <button className="bg-black dark:bg-white text-white dark:text-black text-base rounded-full px-4 p-2 font-medium">
                  Learn More
                </button>
              </Link>
            </div>

            <div>
              <Link href="#contact">
                <button className="bg-rose-500 text-white text-base rounded-full px-4 p-2 font-medium">
                  Join Us
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center  mt-12">
          <Image
            src="/images/hero/jesus-and-his-flock.png"
            alt="Jesus and His Flock - The Flock Of Christ"
            width={425}
            className="mx-auto"
            height={262}
            quality={75}
            sizes="100vw"
            priority
          />
        </div>
      </div>
    </div>
  );
}
