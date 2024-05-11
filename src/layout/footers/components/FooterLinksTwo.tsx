import Link from "next/link";
import React from "react";

const FooterLinksTwo = () => {
  return (
    <>
      <li>
        <Link href="/contact" className="position-relative d-inline-block">
          Customer Service
        </Link>
      </li>
      <li>
        <Link href="/contact" className="position-relative d-inline-block">
          Contact Us
        </Link>
      </li>
      <li>
        <Link href="/shop" className="position-relative d-inline-block">
          Accessibility
        </Link>
      </li>
    </>
  );
};

export default FooterLinksTwo;
