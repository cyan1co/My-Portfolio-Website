import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

function BackToTop() {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }

    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  const scrollToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  };

  if (!showButton) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 bg-[#E36888] text-white p-4 rounded-full shadow-lg hover:bg-pink-700 hover:scale-110 transition-all duration-300 z-50"
    >
      <ArrowUp size={22} />
    </button>
  );
}

export default BackToTop;