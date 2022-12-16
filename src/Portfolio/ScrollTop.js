import React from "react";
import { useState } from "react";

import { HiArrowNarrowUp } from "react-icons/hi";

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 180) {
      setVisible(true);
    } else if (scrolled <= 180) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <div>
      {visible ? (
        <button
          className="btn  rounded-circle "
          style={{
            width: "40px",
            height: "40px",
            position: "fixed",
            right: "20px",
            bottom: "20px",
            backgroundColor: "#149ddd",
          }}
          onClick={scrollToTop}
        >
          <HiArrowNarrowUp className="arrow-icon text-white  " />
        </button>
      ) : (
        ""
      )}
    </div>
  );
};
export default ScrollTop;
