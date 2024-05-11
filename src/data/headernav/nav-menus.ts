
interface MenuItem {
  id: number;
  label: string;
  link: string;
  lastItem?: string;
  hasDropdown?: boolean;
  subMenu?: MenuItem[];
}

const navMenuData: MenuItem[] = [
  {
    id: 1,
    label: "Asosiy",
    link: "/",
  },
  {
    id: 2,
    label: "Kompaniya haqida",
    link: "/about",
  },
  { id: 3, hasDropdown: false, label: "Mahsulotlar", link: "/shop" },
  { id: 5, hasDropdown: false, lastItem: "mr-0", label: "Xizmatlar", link: "/services" },
  { id: 6, hasDropdown: false, lastItem: "mr-0", label: "Kontakt", link: "/contact" },

];

export default navMenuData;
