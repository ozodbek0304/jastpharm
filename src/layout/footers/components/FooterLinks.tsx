import Link from "next/link";
import React from "react";

const FooterLinks = () => {
    
  return (
    <>
      <li>
        <Link href="/login" className="position-relative d-inline-block">
          My Account
        </Link>
      </li>
      <li>
        <Link
          href="/shopping-cart"
          className="position-relative d-inline-block"
        >
          Order Status
        </Link>
      </li>
      <li>
        <Link href="/shop" className="position-relative d-inline-block">
          Shipping
        </Link>
      </li>
      <li>
        <Link href="/checkout" className="position-relative d-inline-block">
          Billing
        </Link>
      </li>
      <li>
        <Link
          href="/terms-and-condition"
          className="position-relative d-inline-block"
        >
          Terms & Condition
        </Link>
      </li>
      <li>
        <Link href="/shop" className="position-relative d-inline-block">
          International Shipments
        </Link>
      </li>
    </>
  );
};

export default FooterLinks;
