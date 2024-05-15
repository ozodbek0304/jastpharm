import Link from "next/link";
import React from "react";

const Socials = () => {
  return ( 
    <> 
      <div className="f-social mt-20">
        <Link href="https://www.facebook.com/">
          <i className="fab fa-facebook-f"></i>
        </Link>
        <Link href="https://twitter.com/">
          <i className="fab fa-twitter"></i>
        </Link>
        <Link href="https://bd.linkedin.com/">
          <i className="fab fa-linkedin-in"></i>
        </Link>
        <Link href="https://www.instagram.com/">
          <i className="fab fa-instagram"></i>
        </Link>
      </div>
    </>
  );
};

export default Socials;
