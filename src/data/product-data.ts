import imgOne from "../../public/assets/images/product/product1.jpg";
import imgTwo from "../../public/assets/images/product/product2.jpg";
import imgThree from "../../public/assets/images/product/product3.jpg";
import imgFour from "../../public/assets/images/product/product4.jpg";
import imgFive from "../../public/assets/images/product/product5.jpg";
import imgSix from "../../public/assets/images/product/product6.jpg";
import imgSeven from "../../public/assets/images/product/product7.jpg";
import imgEight from "../../public/assets/images/product/product8.jpg";
import imgNine from "../../public/assets/images/product/product9.jpg";
import imgTen from "../../public/assets/images/product/product10.jpg";
import imgEleven from "../../public/assets/images/product/product11.jpg";
import imgTwelve from "../../public/assets/images/product/product12.jpg";
// large images
import imgOneLarge from "../../public/assets/images/product/product-large-img1.jpg";
import imgTwoLarge from "../../public/assets/images/product/large-2.png";
import imgThreeLarge from "../../public/assets/images/product/lagre-3.png";
import imgFourLarge from "../../public/assets/images/product/large-4.png";
import imgFiveLarge from "../../public/assets/images/product/large-5.png";
import imgSixLarge from "../../public/assets/images/product/large-6.png";
import imgSevenLarge from "../../public/assets/images/product/large-7.png";
import imgEightLarge from "../../public/assets/images/product/large-8.png";
import imgNineLarge from "../../public/assets/images/product/large-9.png";
import imgTenLarge from "../../public/assets/images/product/large-10.png";
import imgElevenLarge from "../../public/assets/images/product/large-11.png";
import imgTwelveLarge from "../../public/assets/images/product/large-12.png";

import { ProductType } from "@/interFace/interFace";

export const productData: ProductType[] = [
  {
    id: 1,
    discount: 20,
    img: imgOne,
    largeImg:imgOneLarge,
    ratting: 5,
    title: "Face Disinfection",
    details:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms we denounce with righteous indignation and dislike men who are so beguiled with righteous But I must explain to you how all this mistaken idea of denouncing pleasure men who are so beguiled and demoralized",
    price: 59,
    oldPrice: 96,
    offer: true,
    day:15,
    min:40,
    review: 5,
  },
  {
    id: 2,
    discount: false,
    img: imgThree,
    largeImg:imgThreeLarge,
    ratting: 4,
    title: "IT Contact Thermometer",
    details:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms we denounce with righteous indignation and dislike men who are so beguiled with righteous But I must explain to you how all this mistaken idea of denouncing pleasure men who are so beguiled and demoralized",
    price: 199,
    oldPrice: false,
    offer: false,
    day:20,
    min:10,
    review: 5,
  },
  {
    id: 3,
    discount: false,
    img: imgTwo,
    largeImg:imgTwoLarge,
    ratting: 4.5,
    title: "Bifunctional Scale X200",
    details:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms we denounce with righteous indignation and dislike men who are so beguiled with righteous But I must explain to you how all this mistaken idea of denouncing pleasure men who are so beguiled and demoralized",
    price: 109,
    oldPrice: false,
    offer: false,
    day:20,
    min:10,
    review: 5,
  },
  {
    id: 4,
    discount: false,
    img: imgFive,
    largeImg:imgFiveLarge,
    ratting: 4.5,
    title: "Blood Pressure Monitor",
    details:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms we denounce with righteous indignation and dislike men who are so beguiled with righteous But I must explain to you how all this mistaken idea of denouncing pleasure men who are so beguiled and demoralized",
    price: 175,
    oldPrice: false,
    offer: false,
    day:20,
    min:10,
    review: 5,
  },
  {
    id: 5,
    discount: false,
    status: "new",
    img: imgFour,
    largeImg:imgFourLarge,
    ratting: 3.5,
    title: "Nursing Care Protection",
    details:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms we denounce with righteous indignation and dislike men who are so beguiled with righteous But I must explain to you how all this mistaken idea of denouncing pleasure men who are so beguiled and demoralized",
    price: 31,
    oldPrice: 94,
    offer: false,
    day:20,
    min:10,
    review: 5,
  },

  {
    id: 6,
    discount: 15,
    img: imgSix,
    largeImg:imgSixLarge,
    ratting: 5,
    title: "Nursing Care Protection",
    details:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms we denounce with righteous indignation and dislike men who are so beguiled with righteous But I must explain to you how all this mistaken idea of denouncing pleasure men who are so beguiled and demoralized",
    price: 59,
    oldPrice: false,
    offer: false,
    day:20,
    min:10,
    review: 5,
  },

  // update
  {
    id: 7,
    discount: false,
    img: imgTwo,
    largeImg:imgTwoLarge,
    status: "new",
    ratting: 4.5,
    title: "Bifunctional Scale X200",
    details:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms we denounce with righteous indignation and dislike men who are so beguiled with righteous But I must explain to you how all this mistaken idea of denouncing pleasure men who are so beguiled and demoralized",
    price: 109,
    oldPrice: false,
    offer: true,
    day:20,
    min:10,
    review: 5,
  },

  {
    id: 8,
    discount: 22,
    img: imgSix,
    largeImg:imgSixLarge,
    ratting: 3.5,
    title: "Nursing Care Protection",
    details:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms we denounce with righteous indignation and dislike men who are so beguiled with righteous But I must explain to you how all this mistaken idea of denouncing pleasure men who are so beguiled and demoralized",
    price: 59,
    oldPrice: false,
    offer: false,
    day:20,
    min:10,
    review: 5,
  },

  {
    id: 9,
    discount: 20,
    img: imgOne,
    largeImg:imgOneLarge,
    ratting: 5,
    title: "Face Disinfection",
    details:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms we denounce with righteous indignation and dislike men who are so beguiled with righteous But I must explain to you how all this mistaken idea of denouncing pleasure men who are so beguiled and demoralized",
    price: 59,
    oldPrice: 96,
    offer: true,
    day:10,
    min:59,
    review: 5,
  },
  {
    id: 10,
    discount: false,
    status: "new",
    img: imgFive,
    largeImg:imgFiveLarge,
    ratting: 2.5,
    title: "Blood Pressure Monitor",
    details:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms we denounce with righteous indignation and dislike men who are so beguiled with righteous But I must explain to you how all this mistaken idea of denouncing pleasure men who are so beguiled and demoralized",
    price: 175,
    oldPrice: false,
    offer: false,
    day:20,
    min:10,
    review: 5,
  },
  {
    id: 11,
    discount: false,
    img: imgThree,
    largeImg:imgThreeLarge,
    ratting: 4.5,
    title: "IT Contact Thermometer",
    details:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms we denounce with righteous indignation and dislike men who are so beguiled with righteous But I must explain to you how all this mistaken idea of denouncing pleasure men who are so beguiled and demoralized",
    price: 199,
    oldPrice: false,
    offer: true,
    day:35,
    min:20,
    review: 5,
  },
  {
    id: 12,
    discount: 20,
    img: imgOne,
    largeImg:imgOneLarge,
    ratting: 4,
    title: "Face Disinfection",
    details:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms we denounce with righteous indignation and dislike men who are so beguiled with righteous But I must explain to you how all this mistaken idea of denouncing pleasure men who are so beguiled and demoralized",
    price: 59,
    oldPrice: 96,
    offer: false,
    day:20,
    min:10,
    review: 5,
  },
  {
    id: 13,
    discount: false,
    img: imgFive,
    largeImg:imgFiveLarge,
    ratting: 4.5,
    title: "Blood Pressure Monitor",
    details:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms we denounce with righteous indignation and dislike men who are so beguiled with righteous But I must explain to you how all this mistaken idea of denouncing pleasure men who are so beguiled and demoralized",
    price: 175,
    oldPrice: false,
    offer: false,
    day:20,
    min:10,
    review: 5,
  },

  {
    id: 14,
    discount: false,
    img: imgTwo,
    largeImg:imgTwoLarge,
    ratting: 5,
    title: "Bifunctional Scale X200",
    details:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms we denounce with righteous indignation and dislike men who are so beguiled with righteous But I must explain to you how all this mistaken idea of denouncing pleasure men who are so beguiled and demoralized",
    price: 109,
    oldPrice: false,
    offer: false,
    day:20,
    min:10,
    review: 5,
  },

  {
    id: 15,
    discount: 15,
    img: imgSix,
    largeImg:imgSixLarge,
    ratting: 3.5,
    title: "Nursing Care Protection",
    details:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms we denounce with righteous indignation and dislike men who are so beguiled with righteous But I must explain to you how all this mistaken idea of denouncing pleasure men who are so beguiled and demoralized",
    price: 59,
    oldPrice: false,
    day:20,
    min:10,
    offer: true,
    review: 5,
  },

  //   slider data

  {
    id: 16,
    discount: false,
    status: "new",
    img: imgSeven,
    largeImg:imgSevenLarge,
    ratting: 3.5,
    title: "Face Disinfection",
    details:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms we denounce with righteous indignation and dislike men who are so beguiled with righteous But I must explain to you how all this mistaken idea of denouncing pleasure men who are so beguiled and demoralized",
    price: 59,
    oldPrice: 115,
    offer: true,
    day:20,
    min:10,
    review: 15,
  },
  {
    id: 17,
    discount: 20,
    img: imgEight,
    largeImg:imgEightLarge,
    ratting: 4.5,
    title: "Bifunctional Scale X200",
    details:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms we denounce with righteous indignation and dislike men who are so beguiled with righteous But I must explain to you how all this mistaken idea of denouncing pleasure men who are so beguiled and demoralized",
    price: 35,
    oldPrice: 94,
    offer: false,
    day:20,
    min:10,
    review: 5,
  },
  {
    id: 18,
    discount: 20,
    img: imgNine,
    largeImg:imgNineLarge,
    ratting: 4.5,
    title: "Nursing Care Protection",
    details:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms we denounce with righteous indignation and dislike men who are so beguiled with righteous But I must explain to you how all this mistaken idea of denouncing pleasure men who are so beguiled and demoralized",
    price: 96,
    oldPrice: 196,
    offer: false,
    day:20,
    min:10,
    review: 5,
  },
  {
    id: 19,
    discount: false,
    img: imgEight,
    largeImg:imgEightLarge,
    status: "new",
    ratting: 4.5,
    title: "Bifunctional Scale X200",
    details:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms we denounce with righteous indignation and dislike men who are so beguiled with righteous But I must explain to you how all this mistaken idea of denouncing pleasure men who are so beguiled and demoralized",
    price: 59,
    oldPrice: 120,
    offer: true,
    day:24,
    min:30,
    review: 12,
  },

  // most poular porduct

  {
    id: 20,
    discount: 20,
    img: imgTen,
    largeImg:imgTenLarge,
    ratting: 4.5,
    title: "Face Disinfection",
    details:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms we denounce with righteous indignation and dislike men who are so beguiled with righteous But I must explain to you how all this mistaken idea of denouncing pleasure men who are so beguiled and demoralized",
    price: 59,
    oldPrice: 120,
    offer: false,
    day:20,
    min:10,
    review: 18,
  },
  {
    id: 21,
    discount: false,
    img: imgEleven,
    largeImg:imgElevenLarge,
    status: "new",
    ratting: 4.5,
    title: "Bifunctional Scale X200",
    details:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms we denounce with righteous indignation and dislike men who are so beguiled with righteous But I must explain to you how all this mistaken idea of denouncing pleasure men who are so beguiled and demoralized",
    price: 104,
    oldPrice: false,
    offer: false,
    day:20,
    min:10,
    review: 10,
  },
  {
    id: 22,
    discount: false,
    img: imgTwelve,
    largeImg:imgTwelveLarge,
    status: "new",
    ratting: 4.5,
    title: "Nursing Care Protection",
    details:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms we denounce with righteous indignation and dislike men who are so beguiled with righteous But I must explain to you how all this mistaken idea of denouncing pleasure men who are so beguiled and demoralized",
    price: 40,
    oldPrice: 80,
    offer: false,
    day:20,
    min:10,
    review: 12,
  },
  {
    id: 23,
    discount: 20,
    img: imgTen,
    largeImg:imgTenLarge,
    ratting: 4.5,
    title: "Face Disinfection",
    details:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms we denounce with righteous indignation and dislike men who are so beguiled with righteous But I must explain to you how all this mistaken idea of denouncing pleasure men who are so beguiled and demoralized",
    price: 59,
    oldPrice: 120,
    offer: false,
    day:20,
    min:10,
    review: 40,
  },
  {
    id: 24,
    discount: false,
    img: imgEleven,
    largeImg:imgElevenLarge,
    status: "new",
    ratting: 4.5,
    title: "Bifunctional Scale X200",
    details:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms we denounce with righteous indignation and dislike men who are so beguiled with righteous But I must explain to you how all this mistaken idea of denouncing pleasure men who are so beguiled and demoralized",
    price: 109,
    oldPrice: false,
    offer: true,
    day:11,
    min:11,
    review: 55,
  },
  {
    id: 25,
    discount: false,
    img: imgTwelve,
    largeImg:imgElevenLarge,
    status: "new",
    ratting: 4.5,
    title: "Nursing Care Protection",
    details:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms we denounce with righteous indignation and dislike men who are so beguiled with righteous But I must explain to you how all this mistaken idea of denouncing pleasure men who are so beguiled and demoralized",
    price: 31,
    oldPrice: 94,
    offer: false,
    day:20,
    min:10,
    review: 40,
  },
];
