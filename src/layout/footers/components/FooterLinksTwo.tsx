import Link from "next/link";
import React from "react";

const FooterLinksTwo = () => {
  return (
    <>
      <li>
        <Link href="/services" className="position-relative d-inline-block">
          Xizmatlar
        </Link>
      </li>
      <li>
        <Link href="/contact" className="position-relative d-inline-block">
          Jamoa
        </Link>
      </li>
      <li>
        <Link href="/shop" className="position-relative d-inline-block">
          Aloqa
        </Link>
      </li>
    </>
  );
};

export default FooterLinksTwo;
