import Link from "next/link";
import React from "react";

const SocialLinks = () => {
  return (
    <>
      <li>
        <Link
          className="d-inline-block font13 text-uppercase transition-3 mb-20"
          href="https://www.facebook.com/"
        >
          <span className="d-inline-block h3-theme-bg text-center">
            <i className="fab fa-facebook-f"></i>
          </span>
          Facebook
        </Link>
      </li>
      <li>
        <Link
          className="d-inline-block font13 text-uppercase transition-3 mb-20"
          href="https://twitter.com/"
        >
          <span className="d-inline-block h3-theme-bg text-center">
            <i className="fab fa-twitter"></i>
          </span>
          Twitter
        </Link>
      </li>
      <li>
        <Link
          className="d-inline-block font13 text-uppercase transition-3 mb-20"
          href="https://www.instagram.com/"
        >
          <span className="d-inline-block h3-theme-bg text-center">
            <i className="fab fa-instagram"></i>
          </span>
          Instagram
        </Link>
      </li>
      <li>
        <Link
          className="d-inline-block font13 text-uppercase transition-3 mb-20"
          href="https://www.behance.net/"
        >
          <span className="d-inline-block h3-theme-bg text-center">
            <i className="fab fa-linkedin-in"></i>
          </span>
          behance
        </Link>
      </li>
      <li>
        <Link
          className="d-inline-block font13 text-uppercase transition-3 mb-20"
          href="https://dribbble.com/"
        >
          <span className="d-inline-block h3-theme-bg text-center">
            <i className="fab fa-dribbble"></i>
          </span>
          dribbble+
        </Link>
      </li>
    </>
  );
};

export default SocialLinks;
