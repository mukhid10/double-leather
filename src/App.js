import * as Icon from 'react-feather'

import IconLaslesVpn from "./assets/Logo.jpeg";
import shop from "./assets/shop.jpg";
import IconUsers from "./assets/users.png";
import Netflix from "./assets/sosmed/Netflix.png";
import Spotify from "./assets/sosmed/Spotify.png";
import Discord from "./assets/sosmed/Discord.png";
import reddit from "./assets/sosmed/reddit.png";
import Facebook from "./assets/sosmed/Facebook.png";
import Instagram from "./assets/sosmed/Instagram.png";
import Twitter from "./assets/sosmed/Twitter.png";
import Wa from "./assets/sosmed/whatsapp.svg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardPlan from "./components/CardPlan";
import Review from "./components/Review";
import TitleDesc from "./components/TitleDesc";
import SubscribeNow from "./components/SubscribeNow";

function App() {
  const menus = ["About", "Features", "Pricing", "Testimonials", "Help"];
  const section3 = [
    {
      icon: IconUsers,
      lable: "Staff",
      total: "5+",
    },
    {
      icon: IconUsers,
      lable: "Products",
      total: "30+",
    },
    {
      icon: IconUsers,
      lable: "Customers",
      total: "10.000+",
    },
  ];

  const features = [
    "Powerfull online protection.",
    "Internet without borders.",
    "Internet without borders.",
    "No specific time limits.",
  ];

  const plans = [
    {
      title: "Free Plan",
      features: [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices",
      ],
      price: "Free",
    },
    {
      title: "Standard Plan",
      features: [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices",
        "Connect Anyware",
      ],
      price: "$9 / mo",
    },
    {
      title: "Premium Plan",
      features: [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices",
        "Connect Anyware",
        "Connect Anyware",
      ],
      price: "$12 / mo",
    },
  ];

  const sosmed = [Discord, reddit, Netflix, Spotify];

  return (
    <div className="bg-white">
      <header className="navbar-cp container max-w-5xl mx-auto flex flex-row justify-between pt-12 items-center space-x-36">
        <img alt="icon-laslesvpn" src={IconLaslesVpn} className="w-36 rounded-md" />
        <div className="flex-1">
          <div className="flex flex-row justify-end" style={{fontSize:'25px', fontWeight:'bold', fontStyle:'italic'}}>
            <span className='text-orange-500'>
              Double Leather
            </span>
            <span className='text-slate-500'>Keep Growing</span>
          </div>
          {/* <ul className="flex flex-row space-x-6 justify-end">
            {menus.map((val, index) => (
              <li className='text-lg font-bold text-orange-500 cursor-pointer' key={index}>{val}</li>
            ))}
          </ul> */}
        </div>
        {/* <div className="space-x-6 flex flex-row items-center ">
          <button className="font-bold">Sign In</button>
          <button className="border border-red-500 rounded-full py-2 px-6">
            Sign Up
          </button>
        </div> */}
      </header>
      <main className='main-cp'>
        <div className="container max-w-5xl mx-auto  grid grid-cols-2 py-24" id='about'>
          <div>
            <h1 className="font-bold text-4xl pb-5">
              Double Leather
            </h1>
            <div className="font-normal text-medium text-justify pb-12">
              Double leather adalah sebuah usaha di bidang fashion yang menjual beberapa produk seperti, baju, jilbab, dan sepatu.
              <br/>
              Ragam produk yang kami jual diantara lain : baju wanita, sepatu dan jilbab,
              Yang diantaranya merupakan baju produk dalam negeri. Kami melayani pembelian secara grosir dan eceran. Kami juga melayani pengiriman ke seluruh wilayah di Indonesia.
              <br/>
              Kami yakin dengan produk kami yang berkualitas dan harga yang sangat kompetitif, kami mampu untuk bersaing dengan toko-toko online lainnya. Dan kami yakin, bahwa Double leather mampu memberi yang terbaik untuk semua pelanggan. Kami bisa hadir disini berkat dukungan semua customer yang kami cintai. Tanpa adanya dukungan dari pelanggan kami, kami tidak mempunyai arti apa apa.
              </div>
            <button
            onClick={()=>window.location.href='https://wa.link/048fvu'} 
            className="py-4 px-16 border-orange-500 rounded-md text-orange-500 drop-shadow-3xl flex items-center"
            style={{border:'1px solid'}}>
              <img src={Wa} style={{width:'25px', marginRight:'10px'}}/> Hubungi Kami
            </button>
          </div>
          <div>
            <img src={shop} alt="ilustration" className='rounded-md' style={{marginLeft:'30px', marginTop:'20px'}}/>
          </div>
        </div>
        <div className="container max-w-5xl mx-auto grid grid-cols-3 shadow-2xl rounded-md py-4 bg-orange-500">
          {section3.map((val, index) => {
            return (
              <div
                key={index}
                className={`flex flex-row py-4  space-x-6 justify-center ${
                  index + 1 !== section3.length && "border-r border-gray-200"
                }`}
              >
                <div className="rounded-full bg-red-100 p-3 ">
                  <img alt={val.lable} src={val.icon} className="w-6 h-6" />
                </div>
                <div>
                  <div>{val.total}</div>
                  <div>{val.lable}</div>
                </div>
              </div>
            );
          })}
        </div>
        {/* <div className="container max-w-5xl mx-auto grid grid-cols-2 py-24  items-center ">
          <img src={Ilustration2} alt={"features-lasles-vpn"} />
          <div className="px-16 space-y-4 ">
            <div className="font-medium text-3xl">
              We Provide Many Features You Can Use
            </div>
            <div className="text-sm font-normal">
              You can explore the features that we provide with fun and have
              their own functions each feature.
            </div>
            {features.map((val, index) => {
              return (
                <div className="flex items-center space-x-3" key={index}>
                  <img
                    src={Check}
                    alt="features-check-laslesvpn"
                    className="w-6 h-6"
                  />
                  <div className="text-xs">{val}</div>
                </div>
              );
            })}
          </div>
        </div> */}
        <div className="bg-gray-50 py-24">
          <TitleDesc
            title={"Produk Terlaris"}
            desc={`Produk terlaris dari toko kami telah menemani ribuan customer kami`}
          />

          <div className="">
            <CardPlan            />
          </div>

          {/* <div className="container max-w-5xl mx-auto py-24">
            <TitleDesc
              title={" Huge Global Network of Fast VPN"}
              desc={` See LaslesVPN everywhere to make it easier for you when you move locations.`}
            />

            <img src={Global} alt={"Global"} className="my-20" />
            <div className="flex flex-row justify-center">
              {sosmed.map((val, index) => (
                <img key={index} src={val} className="w-44 h-14" alt={val} />
              ))}
            </div>
          </div> */}

          <Review />
        </div>
        <div className="bg-gray-100">
          <SubscribeNow />
        </div>
      </main>
      <footer className="footer-cp bg-gray-100 py-20">
        <div className="container mx-auto max-w-5xl flex flex-row  space-x-24">
          <div className="flex-1 space-y-5">
            <img src={IconLaslesVpn} alt="logo lasles vpn" className="w-36 rounded-md" />
            <div>
              Double Leather <br />
              Toko pakaian yang menjual berbagai pakain dengan kualitas dan service terbaik.
            </div>
            {/* <div className="flex flex-row">
              <img src={Facebook} alt="facebook icon" className="w-16 h-16" />
              <img src={Twitter} alt="twitter icon" className="w-16 h-16" />
              <img src={Instagram} alt="IG icon" className="w-16 h-16" />
            </div> */}
            <div>©MUKHID-DEV</div>
          </div>
          <div className="">
            <div className="text-lg font-semibold mb-6">Products</div>
            <ul className="space-y-6 text-sm text-gray-500">
              <li>Baju</li>
              <li>Jilbab</li>
              <li>Sepatu</li>
              <li>Pakaian Dalam</li>
              <li>Dan lainnya</li>
            </ul>
          </div>
          <div>
            <div className="text-lg font-semibold mb-6">Engage</div>
            <ul className="space-y-6  text-sm text-gray-500">
              <li>Kontak</li>
              <li>FAQ</li>
              <li>Tutorial</li>
              <li>Privasi</li>
              <li>Jangka Waktu Layanan</li>
            </ul>
          </div>
          <div>
            <div className="text-lg font-semibold mb-6">Earn Money</div>
            <ul className="space-y-6  text-sm text-gray-500">
              <li>Berjualan</li>
              <li>Menjadi Mitra</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
