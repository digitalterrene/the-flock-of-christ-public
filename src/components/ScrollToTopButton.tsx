"use client";
import { useEffect, useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

const ScrollToTopButton = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    // Check if the user is at the top when the component mounts
    const isTop = window.scrollY === 0;
    setIsAtTop(isTop);

    // Show or hide the button based on the scroll position
    const handleScroll = () => {
      const isTop = window.scrollY === 0;
      setIsAtTop(isTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = (y: any) => {
    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  const scrollToTopOrBottom = () => {
    if (isAtTop) {
      // Scroll to the bottom if already at the top
      scrollTo(document.body.scrollHeight);
    } else {
      // Scroll to the top
      scrollTo(0);
    }
  };

  return (
    <button
      onClick={scrollToTopOrBottom}
      className="fixed bottom-4 right-4 bg-[#F43F5E] dark:bg-[#0D99FF]  text-white dark:text-white p-2 rounded-lg shadow-md opacity-100 z-50"
    >
      {isAtTop ? (
        <ChevronDownIcon className="h-6 w-6" />
      ) : (
        <ChevronUpIcon className="h-6 w-6" />
      )}
    </button>
  );
};

export default ScrollToTopButton;
