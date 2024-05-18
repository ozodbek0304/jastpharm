import { productData } from "@/data/product-data";
import GetRatting from "@/hooks/GetRatting";
import { ProductType } from "@/interFace/interFace";
import { cart_product } from "@/redux/slices/cartSlice";
import { wishlist_product } from "@/redux/slices/wishlistSlice";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
interface propsType {
  activeTab: number
  data: any[]
}
const ShopListView = ({ activeTab, data }: propsType) => {

  const dispatch = useDispatch();
  const handleAddToCart = (product: ProductType) => {
    dispatch(cart_product(product));

  };
  const handleAddToWishlist = (product: ProductType) => {
    dispatch(wishlist_product(product));

  };
  return (
    <>
      <div
        className={`tab-pane fade ${activeTab === 2 ? "show active" : ""}`}
        id="profile"
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
        {data.map((item) => (
          <div key={item.id} className="row">
            <div className="single-pro-list d-sm-flex p-0 px-0">
              <div className="col-xl-3 col-lg-3  col-md-3  col-sm-3 col-2 plr-14">
                <div className="single-product mb-40">
                  <div className="single-product-img position-relative over-hidden">
                    <Link
                      className="position-relative d-block"
                      href={`/shop-details/${item?.id}`}
                    >
                      <Image
                        className=" border-gray1"
                        src={item?.poster}
                        width={100}
                        height={100}
                        alt="product"
                        style={{ width: "100%", height: "auto" }}
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-7 col-lg-7  col-md-7  col-sm-7 col-12 plr-14">
                <div className="single-product-info  mb-40">
                  <h5 className="light-black-color2 font500">
                    <Link href={`/shop-details/${item?.id}`}> {item?.title} </Link>
                  </h5>
                  <ul className="single-product-price d-flex mt-2 mb-15">
                    <li>
                      <span className="theme-color d-inline-block font600">
                        ${item?.price}.00
                      </span>
                    </li>
                  </ul>
                  <div className=" d-flex align-items-center mb-25">
                    <div className="pro-list-btn d-inline-block">
                      <Link
                        href="#"
                        onClick={() => handleAddToCart(item)}
                        className="web-btn h2-theme-border1 d-inline-block rounded-0 text-capitalize white h2-theme-bg position-relative over-hidden pl-35 pr-35 ptb-17"
                      >
                        {("To'liq ma'lumot olish")}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShopListView;
