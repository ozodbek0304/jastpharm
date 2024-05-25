import navMenuData from "@/data/headernav/nav-menus";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useTranslation } from "react-i18next";

const Menu = () => {
  const pathName = usePathname();
  const { t } = useTranslation()

  return (
    <>
      <ul className="d-block d-flex justify-content-between">
        {navMenuData?.map((item) => (
          <li key={item?.id}>
            <Link
              className={`${item?.hasDropdown
                ? `dp-menu ${item?.id === 1 ? "active" : ""}`
                : `${item?.lastItem ? "mr-0" : ""}`
                }`}
              href={item?.link}
              style={pathName?.split('/')?.[1] === item.link.replace('/', '') ? { color: '#2135B0' } : {}}
              legacyBehavior
            >
              <a>{t(item.translateKey)}</a>
            </Link>
            {item.hasDropdown === true && (
              <ul className="mega-menu box-shadow-gray pt-25 pb-20 pl-30 pr-30">
                {item?.subMenu?.map((itm) => (
                  <li key={itm.id}>
                    <Link href={itm.link} legacyBehavior>
                      <a>{t(itm.translateKey)}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Menu;
