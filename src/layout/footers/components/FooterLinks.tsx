import Link from "next/link";
import React from "react";

const FooterLinks = () => {
    
  return (
    <>
      <li>
        <Link href="/" className="position-relative d-inline-block">
          Asosiy sahifa
        </Link>
      </li>
      <li>
        <Link
          href="/shop"
          className="position-relative d-inline-block"
        >
          Mahsulotlar
        </Link>
      </li>
      <li>
        <Link href="/history" className="position-relative d-inline-block">
          Kompniya tarixi
        </Link>
      </li>
      <li>
        <Link href="/mission" className="position-relative d-inline-block">
          Vazifa va qadriyatlar
        </Link>
      </li>
    </>
  );
};

export default FooterLinks;
