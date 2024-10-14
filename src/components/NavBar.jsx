import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 60) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const sticky = isSticky ? "sticky" : "";
  return (
    <nav className={sticky}>
      <ul>
        {/*   <Link to="/" className="li">
          Home
        </Link>
        <Link to="/setting" className="li">
          Setting
        </Link> */}
      </ul>
    </nav>
  );
}
