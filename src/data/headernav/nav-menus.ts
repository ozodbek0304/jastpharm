
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
    link: "#",
  },
  { id: 3, hasDropdown: false, label: "Mahsulotlar", link: "/shop" },

  // {
  //   id: 4,
  //   label: "Mahsulotlar",
  //   link: "#",
  //   hasDropdown: true,
  //   subMenu: [
  //     { id: 16, label: "Blog page", link: "/blog" },
  //     { id: 17, label: "blog-details", link: "/blog-details" },
  //   ],
  // },
  { id: 5, hasDropdown: false, lastItem: "mr-0", label: "Xizmatlar", link: "/contact" },
  { id: 6, hasDropdown: false, lastItem: "mr-0", label: "Kontakt", link: "/contact" },

];

export default navMenuData;
