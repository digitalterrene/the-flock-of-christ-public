import Image from "next/image";

const values = [
  {
    title: "Unity in Diversity",
    description: `The Flock Of Christ is a community of believers from diverse backgrounds and 
    denominations that holds sacred the "Salvation Issue" doctrines , united in our shared faith in Jesus Christ. We prioritize love, fellowship, 
    and support for one another, regardless of differences that do not affect our salvation.`,
    image: "/images/values/Unity In Diversity - The Flock Of Christ.png",
    alt: "Service description",
    link: {
      button: "Salvation Issue Doctrines",
      link: "/resources/salvation-issue-doctrines",
    },
  },
  {
    title: "Christ-Centered Living",
    description: `At the core of our organization is a commitment to living out the teachings of 
    Jesus Christ. We strive to emulate the love, compassion, 
    and servant leadership modeled by Christ and His disciples to cultivate an environment where individuals can thrive spiritually, emotionally, and socially.`,
    image: "/images/values/Christ Centered Living - The Flock Of Christ.png",
    alt: "Service description",
    link: {
      button: "Christ-Centered Lifestyles",
      link: "/resources/christ-centered-lifestyles",
    },
  },
  {
    title: "Global Impact",
    description: `The Flock Of Christ is not confined by geographical boundaries but seeks to 
    make a global impact. Through our advocacy efforts, outreach initiatives, 
    and community-building endeavors, we aim to positively influence society at large.`,
    image: "/images/values/Global Impact.png",
    alt: "Service description",
    link: {
      button: "Meeting Locations",
      link: "/resources/salvation-issue-doctrines",
    },
  },
  {
    title: "Empowerment and Support",
    description: `We are dedicated to empowering and supporting believers in every aspect of their lives. 
    Whether through spiritual guidance, practical assistance, or resources for personal growth, 
    we endeavor to uplift and equip our community members for success.`,
    image: "/images/values/Empowerment and Support.png",
    alt: "Service description",
    link: {
      button: "Support Programs",
      link: "/resources/support-programs",
    },
  },
  {
    title: "Principled Engagement",
    description: `Our organization is committed to engaging with the world around us in a principled 
    and ethical manner. We advocate for justice, righteousness, and the common good, striving to 
    be a light in the darkness of political, social, and economic systems.`,
    image: "/images/values/Principled Engagement.png",
    alt: "Service description",
    link: {
      button: "Partner Organizations",
      link: "/resources/support-programs",
    },
  },
  {
    title: "Commitment to Biblical Truth",
    description: `The Flock Of Christ is firmly grounded in the truths of Scripture. 
    We believe in the authority of the Bible as 
    God's inspired Word and seek to align our beliefs and practices with its teachings.`,
    image: "/images/values/Commitment to Biblical Truth.png",
    alt: "Service description",
    link: {
      button: "Beliefs And Practices",
      link: "/resources/support-programs",
    },
  },
];
export function Values() {
  return (
    <div className="bg-gray-50 dark:bg-[#131921]" id="values">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h2 className="text-4xl font-bold">What is The Flock Of Christ?</h2>
        <div className="flex justify-center mt-12">
          <p className="pt-6 pb-6 text-base w-[36rem] text-center m-auto dark:text-neutral-400">
            The Flock Of Christ is an organization led by a dedicated team,
            deeply engaged in eco-politics, with a mission to advocate for the
            voices of believers in global decision-making arenas.
          </p>
          <div className="h-32 w-0.5 bg-black" />
          <p className="pt-6 pb-6 text-base w-[36rem] text-center m-auto dark:text-neutral-400">
            The Flock Of Christ is a community of Christ's followers committed
            to loving, walking alongside, and supporting fellow believers,
            regardless of differences, in beliefs on which our salvation does
            not depent on.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
        {values.map(({ title, description, image, alt }) => (
          <div key={title}>
            <div className="h-32 w-32 flex justify-center mx-auto">
              <Image
                src={image}
                alt={alt}
                width={130}
                height={130}
                quality={75}
                sizes="100vw"
                priority
              />
            </div>
            <h2 className="font-bold text-lg text-center">{title}</h2>
            <p className="pt-2 text-base text-center dark:text-neutral-400">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
