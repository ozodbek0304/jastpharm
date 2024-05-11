import { ProductType } from "@/interFace/interFace";
import { cart_product } from "@/redux/slices/cartSlice";
import { wishlist_product } from "@/redux/slices/wishlistSlice";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import Modal from "./Modal";
import ModalView from "@/components/shop-details/ModalView";

interface propsType {
  item: ProductType;
}

const ShopHoverIconDiv = ({ item }: propsType) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalId, setModalId] = useState(0);
  const openModal = (id: number) => {
    setModalIsOpen(true);
    setModalId(id);
  };
  const closeModal = () => setModalIsOpen(false);
  const dispatch = useDispatch();
  const handleAddToCart = (product: ProductType) => {
    dispatch(cart_product(product));
  };
  const handleAddToWishlist = (product: ProductType) => {
    dispatch(wishlist_product(product));
  };
  //

  return (
    <>
      <div className="">
        <div className=" d-flex align-items-center mb-25 add-cart-div-two">
          <div className="pro-list-btn d-inline-block common-icon">
            <button
             
              className="cart-btn"
              data-toggle="tooltip"
              data-placement="top"
              title="Quick Shop"
              onClick={() => handleAddToCart(item)}
            >
              <i className="fal fa-cart-arrow-down"></i>
            </button>
          </div>
          <div className="pro-wishlist d-inline-block ml-10 common-icon">
            <button
               
              onClick={() => openModal(item.id)}
              data-toggle="tooltip"
              data-placement="top"
              title="Quick View"
              data-bs-toggle="modal"
              data-bs-target="#productmodal"
            >
              <i className="fal fa-eye"></i>
            </button>
          </div>
          <div className="pro-wishlist d-inline-block ml-10 common-icon">
            <button
              className="wishlist-btn"
              data-toggle="tooltip"
              data-placement="top"
              title="Quick Wishlist"
              onClick={() => handleAddToWishlist(item)}
            >
              <i className="fal fa-heart"></i>
            </button>
          </div>
        </div>
      </div>

    </>
  );
};

export default ShopHoverIconDiv;
