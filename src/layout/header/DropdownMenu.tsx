import Link from "next/link";
import React from "react";

type propsType = {
    openDropdown:boolean
}

const DropdownMenu = ({openDropdown}:propsType) => {
  return (
    <>
      <ul style={openDropdown === true ? { display: "block"} : { display: "none"}} className="show-currency box-shadow-gray position-absolute pl-25 pt-22 pb-22 right0 z-index1 bg-white">
        <li className="pb-6">
          <Link href="#" className="text-capitalize">
            Accessories
          </Link>
        </li>
        <li className="pb-6">
          <Link href="#" className="text-capitalize">
            Devices
          </Link>
        </li>
        <li className="pb-6">
          <Link href="#" className="text-capitalize">
            Diagnostic tests
          </Link>
        </li>
        <li className="pb-6">
          <Link href="#" className="text-capitalize">
            Electrosurgery
          </Link>
        </li>
        <li className="pb-6">
          <Link href="#" className="text-capitalize">
            Care products
          </Link>
        </li>
        <li className="pb-6">
          <Link href="#" className="text-capitalize">
            Biopsy tools
          </Link>
        </li>
      </ul>
    </>
  );
};

export default DropdownMenu;
