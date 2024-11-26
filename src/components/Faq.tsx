import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqitems = [
  {
    question: "What is The Flock Of Christ?",
    response: `The Flock Of Christ is a Christian organization dedicated to returning to the simplicity of early church believers. We prioritize unity, relational intimacy, and Christ-centered living, 
    aiming to foster a global community of believers who love and support one another.`,
  },
  {
    question: "How can I get involved with The Flock Of Christ?",
    response: `There are various ways to get involved, including joining a small group, participating in outreach projects, attending worship gatherings, and accessing resources for personal growth. 
    Explore our website or reach out to us for more information on how to get involved.`,
  },
  {
    question: "What denominations does The Flock Of Christ affiliate with",
    response: `The Flock Of Christ welcomes believers from all denominational backgrounds. While we may have theological differences, we prioritize unity in 
    essential matters of faith and focus on our shared devotion to Jesus Christ.`,
  },
  {
    question: "How does The Flock Of Christ promote unity among believers?",
    response: `We promote unity by emphasizing the foundational truths of Christianity, fostering authentic relationships within our community, and creating opportunities for dialogue 
    and reconciliation. Our focus on Christ and His teachings serves as a unifying force among believers.`,
  },
  {
    question: "Does The Flock Of Christ engage in political activism?",
    response: `While we advocate for justice, righteousness, and the common good, our primary focus is on spiritual growth, community building, and serving others. 
    We believe in stewarding God's resources wisely and engaging in responsible citizenship, but we do not align ourselves with any specific political party or agenda.`,
  },
  {
    question:
      "How does The Flock Of Christ support believers in practical ways?",
    response: `We provide support through prayer, encouragement, and practical assistance, including counseling, mentorship, and financial aid when needed. Our community is committed to walking alongside one another in times of joy and struggle, offering both spiritual and tangible support.`,
  },
  {
    question: "Is The Flock Of Christ involved in missions or outreach work?",
    response: `Yes, we are actively engaged in local and global missions, partnering with organizations and ministries to share the love of Christ and meet the physical and spiritual needs of others. We believe in living out our faith through acts of compassion, service, and evangelism.`,
  },
];

export default function Faq() {
  return (
    <div
      className="bg-white dark:bg-[#131921] w-full px-4 pt-16 pb-16"
      id="faq"
    >
      <h2 className="text-4xl font-bold text-center">
        Frequently Asked Questions
      </h2>

      <p className="pt-6 pb-16 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
        Your curiosity, satisfied. Here we answer some of the keys questions
        asked about our organization. We hope the answers are satisfactory, but
        you can always reach to us for more information.
      </p>
      <div className="mx-auto w-full max-w-4xl rounded-2xl bg-transparent dark:bg-transparent">
        {faqitems.map(({ question, response }) => (
          <div key={question}>
            <Disclosure>
              {({ open }) => (
                <div className="mt-4">
                  <Disclosure.Button
                    className={`${
                      open
                        ? "bg-neutral-100 dark:bg-[#165153]/10 hover:bg-neutral-100 rounded-b-none"
                        : ""
                    } flex w-full justify-between rounded-lg bg-neutral-100 dark:bg-[#165153]/10 dark:hover:bg-[#165153]/10 px-4 py-4 text-left text-base font-medium `}
                  >
                    <h2 className="font-semibold">{question}</h2>
                    <ChevronDownIcon
                      className={`${
                        open ? "rotate-180 transition-transform" : ""
                      } h-5 w-5 flex-shrink-0`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel
                    className={`${
                      open
                        ? "px-4 pt-4 pb-2 text-base dark:text-neutral-400"
                        : ""
                    } bg-neutral-100 dark:bg-[#165153]/10 rounded-b-lg`}
                  >
                    <p>{response}</p>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </div>
  );
}
