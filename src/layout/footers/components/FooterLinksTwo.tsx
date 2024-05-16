import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const FooterLinksTwo = () => {

  const { t } = useTranslation()

  return (
    <>
      <li>
        <Link href="/services" className="position-relative d-inline-block">
          {t("services")}
        </Link>
      </li>
      <li>
        <Link href="/contact" className="position-relative d-inline-block">
          {t("Jamoa")}
        </Link>
      </li>
      <li>
        <Link href="/shop" className="position-relative d-inline-block">
          {t("contact")}
        </Link>
      </li>
    </>
  );
};

export default FooterLinksTwo;
