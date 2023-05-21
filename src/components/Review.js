import React, { useRef, useState } from "react";
import Slider from "react-slick";
import TitleDesc from "./TitleDesc";
import CardReview from "./CardReview";
import IconArrowLeft from "../assets/arrow-left.png";
import IconArrowRight from "../assets/arrow-right.png";

const reviews = [
  {
    name: "Rabiatuz",
    img : 'https://images.unsplash.com/photo-1621160103539-3548a9016539?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    address: "Bandung, Jawa Barat",
    comment:
      "“Barangnya bagus berkuliatas. Packingnya mantep pisan, rapi banget. Sellernya juga ramah, Pokoknya recomended”.",
  },
  {
    name: "Arif Faizin",
    img : 'https://images.unsplash.com/photo-1528264772489-c565bf801259?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    address: "Surabaya, Jawa Timur",
    comment:
      "“Kak, paketnya sudah datang, packagingnya aman. Sudah dibuka dan ternyata krimnya orisinal ya. Akan segera dicoba, semoga cocok. Terima kasih.”.",
  },
  {
    name: "Yessica Christy",
    img : 'https://images.unsplash.com/photo-1530254541043-129f4c372200?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=930&q=80',
    address: "Palembang, Sumatera Selatan",
    comment:
      "““Suka model bajunya, pas dibadan aku yg BB 45kg, ini crop , cocok dipake ama clana High waist. Bahannya jg g panas, nyaman. Puas lah dgn hrga segitu . Trimksh seller.”.",
  },
  {
    name: "Molly Cristin",
    img : 'https://images.unsplash.com/photo-1526288417508-9811d4a31686?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    address: "Jakarta, Indonesia",
    comment:
      "““Bagus banget inima sesuai sama harga, keracunan di tiktok untung kebagian warna yang ini. Udah lama datengnya barus sempet review.”.",
  },
  {
    name: "Rizal Syaputra",
    img : 'https://images.unsplash.com/photo-1517905751514-84f5e40ff141?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    address: "Bandung, Jawa Barat",
    comment:
      "““Bagus banget inima sesuai sama harga, keracunan di tiktok untung kebagian warna yang ini. Udah lama datengnya barus sempet review.”.",
  },
];

export default function Review() {
  const [indexSlick, setIndexSlick] = useState(0);

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    afterChange: (index) => setIndexSlick(index),
  };

  const slickRef = useRef();

  function fnNext() {
    slickRef?.current?.slickNext();
  }

  function fnPrev() {
    slickRef?.current?.slickPrev();
  }

  return (
    <div style={{marginTop:'15vh'}}>
      <TitleDesc
        title={"Testimony Customer"}
        desc="Ribuan customer belanja di toko kami dan menyakan kepuasannya baik dari service yang kami berikan dan kualitas product yang kami jual.
        banyak customer telah melakukan repeat order, tunggu apa lagi saatnya kalian membuktikan kualitas product kami."
      />

      <div>
        <Slider {...settings} arrows={false} ref={slickRef}>
          {reviews.map((val, index) => (
            <div className={index === 0 ? "ml-28" : ""}>
              <CardReview {...val} key={index} isSelect={index === 0} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="container mx-auto max-w-5xl flex flex-row justify-between items-center mt-12 ">
        <div className="flex space-x-2">
          {reviews.map((_, index) => (
            <div
              className={`${
                indexSlick === index
                  ? "w-8 bg-orange-500 transition-all duration-200 ease-in-out"
                  : "w-4 bg-gray-300 transition-all duration-200 ease-in-out"
              } h-4 rounded-full`}
            />
          ))}
        </div>
        <div className="flex flex-row space-x-5">
          <div
            className="flex self-center border border-orange-500 rounded-full p-5 cursor-pointer"
            onClick={() => fnPrev()}
          >
            <img src={IconArrowLeft} alt="arrow-left" className="w-5 h-5" />
          </div>
          <div
            className="flex self-center bg-orange-500 rounded-full p-5 cursor-pointer"
            onClick={() => fnNext()}
          >
            <img src={IconArrowRight} alt="arrow-right" className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
}
