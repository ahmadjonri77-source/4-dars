import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="m-auto max-w-300 p-2.5 xl:px-0">
      {/* top */}


      {/* middle */}
      <div className="flex justify-between py-25 flex-col-reverse lg:flex-row items-center gap-4">
        {/* left */}
        <div className="self-center lg:self-end ">
          <button className="w-62 h-15 rounded-2xl bg-[#F53838] text-white font-bold">
            Get Started
          </button>
        </div>
        {/* right */}
        <div>
          <img src="/images/header.svg" alt="" />
        </div>
      </div>

      {/* bottom */}

      <div className="box2 h-50 rounded-xl py-9 flex overflow-auto">
        <div className="w-95 flex items-center gap-8 justify-center  shrink-0 md:shrink">
          <div className="bg-[#FFECEC] w-14 h-14 rounded-[50%] flex justify-center items-center">
            <i class="fa-solid fa-user text-[#F53838]"></i>
          </div>
          <div>
            <h2 className="text-[#0B132A] text-[25px] font-bold ">90+</h2>
            <p className="text-[#4F5665] text-[18px]">Users</p>
          </div>
        </div>
         <div className="w-100 border-x-2 border-[#EEEFF2] flex items-center gap-8 justify-center  shrink-0 md:shrink">
          <div className="bg-[#FFECEC] w-14 h-14 rounded-[50%] flex justify-center items-center">
            <i class="fa-solid fa-location-dot text-[#F53838]"></i>
          </div>
          <div>
            <h2 className="text-[#0B132A] text-[25px] font-bold ">30+</h2>
            <p className="text-[#4F5665] text-[18px]">Locations</p>
          </div>
        </div>
         <div className="w-95 flex items-center gap-8 justify-center  shrink-0 md:shrink">
          <div className="bg-[#FFECEC] w-14 h-14 rounded-[50%] flex justify-center items-center">
            <i class="fa-solid fa-server text-[#F53838]"></i>
          </div>
          <div>
            <h2 className="text-[#0B132A] text-[25px] font-bold ">50+</h2>
            <p className="text-[#4F5665] text-[18px]">Servers</p>
          </div>
        </div>
      </div>
    </header>
  );
}
