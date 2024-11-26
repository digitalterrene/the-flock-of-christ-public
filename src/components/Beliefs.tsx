import Link from "next/link";
import { CheckIcon } from "@heroicons/react/24/solid";

const beliefs = [
  {
    title: "The Triune Nature of God",
    para1: `God the Father is the creator and sustainer of the universe, Jesus 
    Christ is the Son of God who became incarnate, 
    and the Holy Spirit is the divine presence who empowers and guides believers.`,
    para2: `We affirm the mystery of the Trinity, recognizing the interdependent 
    relationship between the Father, Son, and Holy Spirit, and their unity in purpose and essence.`,
    description: `We believe in one God who exists eternally in three persons: Father, 
      Son, and Holy Spirit, each fully God and yet distinct in function.`,
    href: "#",
    cta: "Learn More",
  },
  {
    title: "The Authority of Scripture",
    para1: `The Bible is God's revelation to humanity, providing instructions for righteous living, 
    spiritual guidance, and understanding of God's character and purposes.`,
    para2: `We affirm the infallibility and sufficiency of Scripture, recognizing its power to 
    transform lives, shape beliefs, and illuminate truth in all aspects of life.`,
    description: `We believe that the Bible is the inspired and authoritative Word of God, 
    serving as the ultimate guide for faith and practice.`,
    href: "#",
    cta: "Learn More",
  },
  {
    title: "Salvation by Grace through Faith",
    para1: `Salvation is made possible through the sacrificial death and resurrection of 
    Jesus Christ, and it is appropriated by faith in Him as Lord and Savior.`,
    para2: ` We affirm that salvation is a free gift offered to all humanity, irrespective of race, 
    ethnicity, or social status, and it is received by grace through faith in Jesus Christ alone.`,
    description: `We believe that salvation is a gift of God's grace, 
    received through faith in Jesus Christ alone, apart from works.`,
    href: "#",
    cta: "Learn More",
  },
  {
    title: "The Priesthood of All Believers",
    para1: `Through the indwelling presence of the Holy Spirit, every believer has direct access to God 
    and is called to participate in the ministry of reconciliation and proclamation of the Gospel.`,
    para2: ` We affirm the dignity and value of every member of the body of Christ, recognizing their unique gifts 
    and calling to contribute to the building up of the Church and the advancement of God's kingdom.`,
    description: `We believe in the priesthood of all believers, affirming the spiritual equality and 
    calling of every believer to serve God and others.`,
    href: "#",
    cta: "Learn More",
  },
];

export default function Beliefs() {
  return (
    <div className="bg-gray-50 dark:bg-[#131921]" id="beliefs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <h2 className="text-4xl font-bold text-center">Beliefs</h2>

        <p className="pt-6 text-base max-w-5xl text-center m-auto dark:text-neutral-400">
          Our beliefs form the foundation of our identity as followers of Jesus
          Christ and guide our understanding of God, humanity, and the world.
          Rooted in Scripture and grounded in centuries of Christian tradition,
          these core beliefs shape our values, inform our practices, and unite
          us as a community of faith. As we journey together, we hold firmly to
          these foundational truths, seeking to grow in knowledge and
          understanding, and to live out our faith with integrity and
          conviction.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 grid md:grid-cols-2     gap-x-6 gap-y-16">
        {beliefs.map(({ title, para1, para2, description, href, cta }) => {
          return (
            <>
              <div
                key={title}
                className={`rounded-lg py-8 relative flex flex-col border-neutral-300 border dark:border-neutral-600`}
              >
                <h3 className="px-6 text-lg font-semibold leading-5">
                  {title}
                </h3>

                <p className="px-6 mt-4 leading-6 dark:text-neutral-400">
                  {description}
                </p>

                {/* Call to action */}
                <Link
                  href={`/resources/${title
                    ?.replaceAll(" ", "-")
                    ?.toLowerCase()}`}
                  className={`mt-4 mx-6 block px-6 py-3 w-fit font-medium leading-4 text-center rounded-lg bg-black text-white dark:bg-white dark:text-black
                    `}
                >
                  {cta}
                </Link>

                {/* features */}
                <ul className="mt-6 px-6 space-y-4 flex-1 border-t border-neutral-300 dark:border-neutral-500">
                  <p className="mt-6 font-semibold dark:text-neutral-300">
                    Notable Points
                  </p>
                  <li className="leading-6 flex">
                    <CheckIcon className="mt-2 w-3 h-3 text-rose-500 shrink-0" />
                    <span className="ml-3 dark:text-neutral-400">{para1}</span>
                  </li>
                  <li className="leading-6 flex">
                    <CheckIcon className="mt-2 w-3 h-3 text-rose-500 shrink-0" />
                    <span className="ml-3 dark:text-neutral-400">{para2}</span>
                  </li>
                </ul>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
