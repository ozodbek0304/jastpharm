import { StaticImageData } from "next/image";
// children type

export interface childrenType {
  children: React.ReactNode;
}
// context api data type
export interface AppContextType {
  sideMenuOpen: boolean;
  setSideMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleSideMenu?: () => void;
  toggleModal?: () => void;
  scrollDirection?: string;
  setScrollDirection?: React.Dispatch<React.SetStateAction<string>> | undefined;
  showSidebar?: boolean;
  setShowSidebar?: React.Dispatch<React.SetStateAction<boolean>>
  showSidebarWishlist?: boolean;
  setShowSidebarWishlist?: React.Dispatch<React.SetStateAction<boolean>>;
  openWishlist?: boolean;
  setOpenWishlist: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  openCart: boolean;
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
  modalId: number;
  setModalId: React.Dispatch<React.SetStateAction<number>>;
}
export interface idType {
  id?: number | string;
}

// slider one type

export interface sliderOnetype {
  id: number;
  heading: string;
  afterBr: string;
  title: string;
  titleBr: string;
  img: string

}

export interface ProductType {
  id: number;
  discount: number | boolean;
  img: StaticImageData;
  largeImg?: StaticImageData;
  ratting: number;
  title: string;
  details: string;
  price: number;
  oldPrice: number | boolean;
  offer: boolean;
  day: number;
  min: number;
  review: number;
  status?: string;
  totalCard?: number | undefined;
}

export interface blogDataType {
  id: number;
  date: number;
  img: StaticImageData;
  month: string;
  year: number;
  title: string;
  details: string;
}







