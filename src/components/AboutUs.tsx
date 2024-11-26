import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/solid";
import { time } from "console";

const contents = [
  {
    title: "Community and Fellowship",
    description: `Cultivating a sense of belonging and supportive relationships within our 
    community strengthens our faith and encourages mutual growth.`,
    features: [
      "Prioritizing authentic relationships and connections within our community.",
      "Providing a safe and nurturing environment where individuals can share struggles and victories.",
      "Supporting one another through prayer, encouragement, and practical assistance.",
      "Celebrating milestones and achievements together as a family of believers.",
    ],
    image:
      "/images/about-us/Community and Fellowship - The Flock Of Christ.png",
    order: false,
  },
  {
    title: "Compassion and Justice",
    description: `Demonstrating compassion and advocating for justice aligns with God's 
    heart for the marginalized and oppressed, reflecting His love for all humanity.`,
    features: [
      "Showing compassion and empathy towards those who are suffering or in need.",
      "Standing up against injustice and oppression in our communities and beyond.",
      "Engaging in acts of mercy and generosity to alleviate human suffering and promote dignity.",
      "Advocating for systemic change and societal transformation to uphold God's principles of righteousness and equity.",
    ],
    image: "/images/about-us/Compassion and Justice.png",
    order: true,
  },
  {
    title: "Building Bridges of Understanding",
    description: `Facilitating dialogue and fostering understanding across diverse perspectives promotes unity 
    and cooperation within the body of Christ and beyond.`,
    features: [
      "Creating opportunities for meaningful conversations and exchanges of ideas among believers with differing viewpoints.",
      "Encouraging empathy, humility, and respect in interactions with others, even amidst disagreements.",
      "Seeking common ground and shared values to strengthen relationships and build bridges of understanding.",
      "Engaging in interfaith dialogue and collaboration to promote peace, reconciliation, and mutual respect in our global community.",
    ],
    image: "/images/about-us/Building Bridges of Understanding.png",
    order: false,
  },
  {
    title: "Stewardship and Sustainability",
    description: `Responsible stewardship of God's creation and resources reflects our gratitude 
    towards Him and our commitment to future generations.`,
    features: [
      "Caring for the environment and promoting sustainability in our practices and lifestyles.",
      "Using resources wisely and ethically, considering the impact on both people and the planet.",
      "Investing in initiatives that address environmental degradation, climate change, and ecological justice.",
      "Educating and empowering believers to be faithful stewards of God's creation, recognizing our interconnectedness with all living beings.",
    ],
    image: "/images/about-us/Stewardship and Sustainability.png",
    order: true,
  },
];

export function AboutUs() {
  return (
    <div className="bg-white dark:bg-[#131921]" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-x-40 pt-16 pb-16">
        <h2 className="text-4xl font-bold text-center">Vision & Mission</h2>
        <p className="pt-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
          Through unity, relational intimacy, and a focus on Christ, we
          cultivate a vibrant community of believers dedicated to making a
          meaningful impact in the world.
        </p>

        {contents.map((content) => (
          <div
            key={content.title}
            className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-28 items-center"
          >
            <div
              className={`pt-8 md:pt-16 ${
                content.order ? "order-1 md:order-2" : "order-1"
              }`}
            >
              <h1 className="text-2xl font-bold">{content.title}</h1>
              <p className="pt-6 pb-6 text-base dark:text-neutral-400">
                {content.description}
              </p>

              <ul className="font-medium space-y-1 flex-1">
                {content.features.map((feature) => (
                  <li key={feature} className="leading-6 flex">
                    <CheckIcon className="mt-2 w-3 h-3 text-rose-500 shrink-0" />
                    <span className="ml-3 dark:text-neutral-400">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`order-1 pt-8 md:pt-16 ${
                content.order ? "ml-0 2xl:-ml-40" : "mr-0 2xl:-mr-40"
              }`}
            >
              <div className="flex items-center">
                <Image
                  src={content.image}
                  alt={`${content?.title}`}
                  width={520}
                  height={280}
                  quality={100}
                  sizes="100vw"
                  priority
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
