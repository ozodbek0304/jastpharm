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
  activeTab:number
}
const ShopListView = ({activeTab}:propsType) => {

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
        {productData?.slice(19, 23)?.map((item) => (
          <div key={item.id} className="row">
            <div className="single-pro-list d-sm-flex p-0 px-0">
              <div className="col-xl-5 col-lg-5  col-md-5  col-sm-5 col-12 plr-14">
                <div className="single-product mb-40">
                  <div className="single-product-img position-relative over-hidden">
                    <div className="single-product-label position-absolute theme-bg text-center  transition-3 z-index1">
                      <span className="white text-uppercase d-block font500">
                        -20%
                      </span>
                    </div>
                    {/* <!-- /product-label --> */}
                    <Link
                      className="position-relative d-block"
                      href={`/shop-details/${item?.id}`}
                    >
                      <Image
                        className=" border-gray1"
                        src={item?.img}
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
                      {item?.oldPrice === false || (
                        <span className="pr-2 d-inline-block">
                          <del>${item?.oldPrice}.00</del>
                        </span>
                      )}
                      <span className="theme-color d-inline-block font600">
                        ${item?.price}.00
                      </span>
                    </li>
                  </ul>
                  <div className="rating rating-shop d-flex mb-20">
                    <ul className="d-flex mr-2">
                      <GetRatting averageRating={item?.ratting} />
                    </ul>
                  </div>
                  <p className="light-black-color5 font300 mb-40">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Alias porro dolor accusantium autem neque atque veritatis ex
                    obcaecati fugiat iure culpa, tempora unde quisquam
                    perspiciatis, accusamus minus ullam eius? Cupiditate.
                  </p>
                  <div className=" d-flex align-items-center mb-25">
                    <div className="pro-list-btn d-inline-block">
                      <Link
                        href="#"
                        onClick={()=>handleAddToCart(item)}
                        className="web-btn h2-theme-border1 d-inline-block rounded-0 text-capitalize white h2-theme-bg position-relative over-hidden pl-35 pr-35 ptb-17"
                      >
                        add to cart
                      </Link>
                    </div>
                    <div className="pro-wishlist d-inline-block ml-10">
                      <Link
                        href="#"
                        onClick={()=>handleAddToWishlist(item)}
                        className="web-btn h2-theme-border1 d-inline-block rounded-0 text-capitalize white h2-theme-bg position-relative over-hidden plr-16 ptb-15"
                      >
                        <span className="icon-heart"></span>
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
