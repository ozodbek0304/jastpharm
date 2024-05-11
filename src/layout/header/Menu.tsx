import navMenuData from "@/data/headernav/nav-menus";
import Link from "next/link";
import React from "react";

const Menu = () => {
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
            >
              {item?.label}
            </Link>
            {item.hasDropdown === true && (
              <ul className="mega-menu box-shadow-gray pt-25 pb-20 pl-30 pr-30">
                {item?.subMenu?.map((itm) => (
                  <li key={itm.id}>
                    <Link href={itm.link}> {itm.label} </Link>
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
