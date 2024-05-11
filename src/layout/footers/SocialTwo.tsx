import Link from "next/link";
import React from "react";

const SocialTwo = () => {
  return (
    <>
      <ul className="social-link pt-2 mb-150">
        <li className="d-inline-block">
          <Link
            className="active  primary-color-center pr-0 d-inline-block transition-3"
            href="https://www.facebook.com/"
          >
            <i className="fab fa-facebook-f"></i>
          </Link>
        </li>
        <li className="d-inline-block">
          <Link
            className=" primary-color text-center pr-0 d-inline-block transition-3"
            href="https://twitter.com/"
          >
            <i className="fab fa-twitter"></i>
          </Link>
        </li>
        <li className="d-inline-block">
          <Link
            className=" primary-color text-center pr-0 d-inline-block transition-3"
            href="https://www.instagram.com/"
          >
            <i className="fab fa-instagram"></i>
          </Link>
        </li>
        <li className="d-inline-block">
          <Link
            className=" primary-color text-center pr-0 d-inline-block transition-3"
            href="https://www.behance.net/"
          >
            <i className="fab fa-behance"></i>
          </Link>
        </li>
        <li className="d-inline-block">
          <Link
            className=" primary-color text-center pr-0 d-inline-block transition-3"
            href="https://www.youtube.com/"
          >
            <i className="fab fa-youtube"></i>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default SocialTwo;
