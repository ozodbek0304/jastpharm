
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
  { id: 2, hasDropdown: false, label: "Mahsulotlar", link: "/shop" },
  {
    id: 3,
    label: "Kompaniya haqida",
    link: "#",
    hasDropdown: true,
    subMenu: [
      { id: 6, hasDropdown: false, label: "Tariximiz", link: "/history" },
      { id: 7, hasDropdown: false, label: "Vazifamiz", link: "/mission" },
      // { id: 8, hasDropdown: false, label: "Hamkorlarimiz", link: "/partners" },
      { id: 9, hasDropdown: false, label: "Jamoamiz", link: "/about" },
    ]
  },
  { id: 5, hasDropdown: false, lastItem: "mr-0", label: "Xizmatlar", link: "/services" },
  { id: 6, hasDropdown: false, lastItem: "mr-0", label: "Kontakt", link: "/contact" },

];

export default navMenuData;
