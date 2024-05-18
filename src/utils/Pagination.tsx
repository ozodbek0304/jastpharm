import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const Pagination = () => {

  const { t } = useTranslation()

  return (
    <>
      <ul className="pagination align-items-center justify-content-center">
        <li className="page-item">
          <Link className="page-link prev" href="#">
            <i className="fas fa-angle-left"></i>
            {" "}{t("Oldingi")}
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" href="#">
            1
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link next" href="#">
            {t("Keyingi")} <i className="fas fa-angle-right"></i>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Pagination;
