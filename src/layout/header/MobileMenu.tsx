import navMenuData from "@/data/headernav/nav-menus";
import useGlobalContext from "@/hooks/use-context";
import Link from "next/link";
import React,{useState} from "react";

const MobileMenu = () => {
    const {toggleSideMenu} = useGlobalContext()
    const [openMenu, setopenMenu] = useState<boolean>(false)
    const [activeId, setActiveId] = useState<number>(0)

    const handleActiveMenu = (id:number) =>{
        setopenMenu(!openMenu)
        setActiveId(id)
    }



  return (
    <>
      <ul className="d-block" style={{ display: "none"}}>
        {navMenuData?.map((item) => (
          <li onClick={item?.hasDropdown === true ? ()=>handleActiveMenu(item.id) : toggleSideMenu} key={item?.id}>
            <Link
              className={`${
                item?.hasDropdown
                  ? ` dp-menu`
                  : `mr-0 menu-item`
              }`}
              href={item?.link}
            >
              {item?.label}
            </Link>
            {item.hasDropdown === true && (
               <>
                <ul className="mega-menu"  style={{ display: `${openMenu && activeId === item.id ? "" : "none"}` }}>
                {item?.subMenu?.map((itm) => (
                  <li className="dropdown-list" key={itm.id}>
                    <Link onClick={toggleSideMenu} href={itm.link}> {itm.label} </Link>
                  </li>
                ))}
              </ul>
              <Link className={`mean-expand ${openMenu && activeId === item.id ? "mean-clicked" : ""}`} href="#" style={{ fontSize: '18px' }}> {openMenu && activeId === item.id ? `-` : `+`} </Link>
               </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default MobileMenu;
