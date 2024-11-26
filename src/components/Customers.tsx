import Image from "next/image";
import Link from "next/link";

const customers = [
  {
    name: "RODLIP",
    href: "https://rodlip.org/",
    src: "/images/logos/supporters/rodlip.webp",
    alt: "RODLIP logo",
  },
  {
    name: "world-health-organization",
    href: "https://www.who.int/",
    src: "/images/logos/supporters/who.png",
    alt: "WHO logo",
  },
  {
    name: "World Vision",
    href: "https://www.worldvision.org/",
    src: "/images/logos/supporters/worldvision.svg",
    alt: "World Vision Logo logo",
  },
  {
    name: "Samaritan's Purse",
    href: "https://www.samaritanspurse.org/",
    src: "/images/logos/supporters/samaritan.png",
    alt: "Samaritan's Purse Logo",
  },
  {
    name: "Greenpeace",
    href: "https://www.greenpeace.org/",
    src: "/images/logos/supporters/greenpeace.svg",
    alt: "Greenpeace Logo",
  },

  {
    name: "Teach For All",
    href: "https://www.teachforall.org/",
    src: "/images/logos/supporters/tfo.jpeg",
    alt: "Teach For All Logo",
  },
];

export default function Customers() {
  return (
    <div
      className="bg-white dark:bg-[#131921] w-full px-4 pt-16 pb-16"
      id="faq"
    >
      <h2 className="text-4xl font-bold text-center">Our Supporters</h2>

      <p className="pt-6 pb-8 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
        These are organizations, whether profit-making or non-profit, that aim
        to deliver valuable services or products to their audience, and we
        aspire to contribute to the community in a similar manner.
      </p>
      <div className="mx-auto w-full max-w-4xl bg-white dark:bg-transparent">
        <div className="text-center justify-center items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
          {customers.map((item) => (
            <Link key={item.name} href={item.href} target="_blank">
              <Image
                className="h-10 w-auto mt-6 justify-center text-center mx-auto hover:scale-110 transition"
                src={item.src}
                alt={item.alt}
                width={150}
                height={150}
                quality={75}
                sizes="100vw"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
