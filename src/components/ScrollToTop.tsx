import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="cursor-pointer fixed bottom-8 right-8 z-50 p-3 rounded-full bg-primary-500 text-white shadow-md hover:bg-secondary-500 animate"
        aria-label="To top"
      >
        <FaArrowUp />
      </button>
    )
  );
};
