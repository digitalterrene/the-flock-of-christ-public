"use client";
import Link from "next/link";
import Image from "next/image";
import ThemeSwitchButton from "./ThemeSwitchButton";

import { Disclosure } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const navigation = [
  { name: "Home", href: "/", id: "home", current: false },
  { name: "Values", href: "#values", id: "values", current: false },
  { name: "About Us", href: "#about", id: "about", current: false },
  {
    name: "Beliefs",
    href: "#beliefs",
    id: "beliefs",
    current: false,
  },
  {
    name: "Resources",
    href: "/resources",
    id: "resources",
    current: false,
  },
  {
    name: "Events",
    href: "/events",
    id: "events",
    current: false,
  },
  { name: "Faq", href: "#faq", id: "faq", current: false },
  { name: "Contact Us", href: "#contact", id: "contact", current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const { theme } = useTheme();
  const router = useRouter();

  const [currentSection, setCurrentSection] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollOffset = 100; // Adjust this value as needed

      // Loop through each navigation item to find the current section
      navigation.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const sectionTop = section.offsetTop - scrollOffset;
          const sectionBottom = sectionTop + section.clientHeight;

          // Check if the current scroll position is within the section
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setCurrentSection(item.id);
          }
        }
      });
    };
    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Empty dependency array ensures the effect runs only once
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Disclosure
      as="nav"
      className="fixed top-0 left-0 right-0 bg-[#F2F2F2] dark:bg-[#131921] text-neutral-900 dark:text-neutral-400 border-b border-neutral-200 dark:border-neutral-700 backdrop-blur-sm bg-white/90 z-20"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-start">
                <div className="flex flex-shrink-0 items-center md:pl-0">
                  <Link href="/" className="flex items-center gap-3">
                    <Image
                      className="block h-8 w-auto"
                      src={`/images/logos/${
                        theme === "dark" ? "logodark" : "logo"
                      }.png`}
                      alt="The Flock Of Christ"
                      width={250}
                      height={250}
                      quality={75}
                      sizes="100vw"
                    />
                    {theme !== "dark" && (
                      <h2 className="font-bold text-[#F43F5E]">
                        The Flock Of Christ
                      </h2>
                    )}
                  </Link>
                </div>

                <div className="hidden ml-auto sm:ml-6 sm:block md:block">
                  <div className="flex space-x-5 items-center">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={`${router.pathname !== "/" ? "/" : ""}${
                          item.href
                        }`}
                        onClick={(e) => {
                          // Check if the link is an in-page anchor and we're on the root page
                          if (
                            item.href.startsWith("#") &&
                            router.pathname === "/"
                          ) {
                            e.preventDefault(); // Prevent default behavior for in-page anchors
                            handleSmoothScroll(e, item.id); // Smooth scroll to the anchor
                          }
                        }}
                        className={classNames(
                          item.current || currentSection === item.id
                            ? "text-neutral-900 dark:text-neutral-400 border-b-2 border-rose-500 dark:border-[#0D99FF]"
                            : "text-neutral-900 dark:text-neutral-400 hover:underline",
                          "text-base font-medium"
                        )}
                      >
                        {item?.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="absolute inset-y-0 right-10 sm:right-0 flex items-center gap-2">
                  <span className="hidden sm:block">
                    <button className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-4 p-2 text-base font-medium dark:hover:bg-rose-500 hover:bg-rose-500 hover:text-white dark:hover:text-white rounded-full">
                      Register
                    </button>
                  </span>
                  <ThemeSwitchButton />
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center md:hidden sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md text-neutral-900 dark:text-white ">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden md:hidden">
            <div className="space-y-1 px-4 min-h-screen border-t border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current || currentSection === item.id
                      ? "text-neutral-900 dark:text-neutral-400 border-b-2 border-rose-500"
                      : "text-neutral-900 dark:text-neutral-400",
                    "block py-4 text-base font-medium border-b border-neutral-200 dark:border-neutral-700"
                  )}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <Link href="#" target="">
                <button className="mt-12 bg-rose-500 text-white px-4 p-3 font-medium rounded-full w-full">
                  Contact Us
                </button>
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
