import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const FooterLinks = () => {

  const { t } = useTranslation()

  return (
    <>
      <li>
        <Link href="/" className="position-relative d-inline-block">
          {t("Asosiy sahifa")}
        </Link>
      </li>
      <li>
        <Link
          href="/shop"
          className="position-relative d-inline-block"
        >
          {t("Mahsulotlar")}
        </Link>
      </li>
      <li>
        <Link href="/history" className="position-relative d-inline-block">
          {t("Kompniya tarixi")}
        </Link>
      </li>
      <li>
        <Link href="/mission" className="position-relative d-inline-block">
          {t("Vazifa va qadriyatlar")}
        </Link>
      </li>
    </>
  );
};

export default FooterLinks;
