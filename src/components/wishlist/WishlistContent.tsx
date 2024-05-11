"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { cart_product, } from "@/redux/slices/cartSlice";
import { ProductType } from "@/interFace/interFace";
import { remove_wishlist_product } from "@/redux/slices/wishlistSlice";
const WishlistContent = () => {
  const dispatch = useDispatch();
  const wishlistProducts = useSelector(
    (state: RootState) => state.wishlist.cartProducts
  );

  const handleAddToCart = (product: ProductType) => {
    dispatch(cart_product(product));
  };

  const handleDelteProduct = (product: ProductType) => {
    dispatch(remove_wishlist_product(product));
  };

  return (
    <>
      <div className="wishlist-area mt-100">
        <div className="container">
          <div className="row pb-100 cart-table">
            <div className="col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12">
               {
                wishlistProducts.length > 0 ?
                <>
                 <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr className="text-center">
                      <th scope="col">Price images</th>
                      <th scope="col">Product name </th>
                      <th scope="col">Unit price</th>
                      <th scope="col">Add to cart</th>
                      <th scope="col">Total</th>
                      <th scope="col">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {wishlistProducts.map((item) => {
                      const productPrice =
                        (item.price ?? 0) * (item.totalCard ?? 0);

                      return (
                        <tr key={item?.id} className="text-center">
                          <td>
                            <Link
                              href={`/shop-details/${item?.id}`}
                              className="cart-img d-block"
                            >
                              <Image
                                style={{ width: "100%", height: "auto" }}
                                src={item?.img}
                                alt=""
                              />
                            </Link>
                          </td>
                          <td>
                            <Link
                              href={`/shop-details/${item?.id}`}
                              className="p-name primary-color"
                            >
                              {item?.title}
                            </Link>
                          </td>
                          <td>
                            <div className="cart-price">${item?.price}.00</div>
                          </td>
                          <td>
                            <Link
                              href="#"
                              onClick={()=>handleAddToCart(item)}
                              className="web-btn h2-theme-border1 d-inline-block text-capitalize white rounded-0 h2-theme-color h2-theme-bg position-relative over-hidden pl-30 pr-30 ptb-17"
                            >
                              add to cart
                            </Link>
                          </td>
                          <td>
                            <div className="cart-price">${productPrice}.00</div>
                          </td>
                          <td>
                            <Link onClick={()=>handleDelteProduct(item)} href="#" className="p-remove theme-color">
                              <span className="icon-clear"></span>
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
                </>
                :
                <>
                 <h2 className="text-center">No Wishlist Porduct</h2>
                </>
               }
            </div>
          </div>
          <div className="bottom-line"></div>
        </div>
      </div>
    </>
  );
};

export default WishlistContent;
