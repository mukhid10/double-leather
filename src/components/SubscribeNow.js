import React from "react";

import Wa from "../assets/sosmed/whatsapp.svg";


export default function SubscribeNow() {
  return (
    <div className=" relative">
      <div className="absolute left-0 right-0 bg-gray-50 h-1/2" />
      <div className=" container mx-auto relative max-w-5xl bg-white rounded-lg px-12 py-10 flex items-center justify-between">
        <div>
        <div className="flex flex-row justify-end" style={{fontSize:'25px', fontWeight:'bold', fontStyle:'italic'}}>
            <span className='text-orange-500'>
              Double Leather
            </span>
            <span className='text-slate-500'>Keep Growing</span>
          </div>
          <div className="font-normal text-xs">
            Silahkan Hubungi Kami Jika ada Pertanyaan.
          </div>
        </div>
        <button
            onClick={()=>window.location.href='https://wa.link/048fvu'} 
            className="py-4 px-16 border-orange-500 rounded-md text-orange-500 drop-shadow-3xl flex items-center"
            style={{border:'1px solid'}}>
              <img src={Wa} style={{width:'25px', marginRight:'10px'}}/> Hubungi Kami
            </button>
      </div>
    </div>
  );
}
