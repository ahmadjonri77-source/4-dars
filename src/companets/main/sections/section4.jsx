export default function Section4() {
  return (
    <section class="m-auto max-w-300 p-2.5 xl:px-0 flex flex-col items-center py-15">
      <h2 className="font-medium text-[35px] text-[#0B132A] w-105 text-center">
        Trusted by Thousands of Happy Customer
      </h2>
      <p className="text-center w-100 sm:w-130 mt-5 mb-15 text-[#4F5665]">
        These are the stories of our customers who have joined us with great
        pleasure when using this crazy feature.
      </p>
      <div class="flex gap-4 w-full overflow-auto">
        {/* 1 */}
        <div className="w-100 h-57 border-2 border-[#DDDDDD] rounded-xl p-7.5 shrink-0">
          <div className="flex items-center justify-between">
            <img src="./images/Ellipse 175.svg" alt="" />
            <h3 className="w-35 text-[18px] font-medium text-[#0B132A] -ml-18">
              Yessica Christy{" "}
              <span className="text-[14px] font-normal text-[#4F5665]">
                Seoul, South Korea
              </span>
            </h3>
            <h4>
              4.5 <i class="fa-solid fa-star text-[#FEA250]"></i>
            </h4>
          </div>
          <p className="text-[#0B132A] mt-2">
            “Wow... I am very happy to use this VPN, it turned out to be more
            than my expectations and so far there have been no problems.
            LaslesVPN always the best”.
          </p>
        </div>
        {/* 2 */}
        <div className="w-100 h-57 border-2 border-[#DDDDDD] rounded-xl p-7.5 shrink-0">
          <div className="flex items-center justify-between">
            <img src="./images/Ellipse 175 (1).svg" alt="" />
            <h3 className="w-35 text-[18px] font-medium text-[#0B132A] -ml-18">
              Yessica Christy{" "}
              <span className="text-[14px] font-normal text-[#4F5665]">
                Shanxi, China
              </span>
            </h3>
            <h4>
              4.5 <i class="fa-solid fa-star text-[#FEA250]"></i>
            </h4>
          </div>
          <p className="text-[#0B132A] mt-2">
            “I like it because I like to travel far and still can connect with
            high speed.”.
          </p>
        </div>
        {/* 3 */}
        <div className="w-100 h-57 border-2 border-[#DDDDDD] rounded-xl p-7.5 shrink-0">
          <div className="flex items-center justify-between">
            <img src="./images/Ellipse 175 (2).svg" alt="" />
            <h3 className="w-35 text-[18px] font-medium text-[#0B132A] -ml-18">
              Yessica Christy <span className="text-[14px] font-normal text-[#4F5665]">Seoul, South Korea</span>
            </h3>
            <h4>
              4.5 <i class="fa-solid fa-star text-[#FEA250]"></i>
            </h4>
          </div>
          <p className="text-[#0B132A] mt-2">
            “This is very unusual for my business that currently requires a
            virtual private network that has high security.”.
          </p>
        </div>
      </div>

      <div class="flex justify-between items-center w-full mt-4">
        <div>
          <i class="fa-solid fa-circle text-[#F53838]"></i>
          <i class="fa-solid fa-circle text-[#F53838]"></i>
          <i class="fa-solid fa-circle text-[#DDE0E4]"></i>
          <i class="fa-solid fa-circle text-[#DDE0E4]"></i>
          <i class="fa-solid fa-circle text-[#DDE0E4]"></i>
        </div>
        <div className="flex gap-3">
            <button className="w-15 h-15 rounded-[50%] border-2 border-[#F53838]">
            <i class="fa-solid fa-arrow-left text-[#F53838]"></i>
          </button>
          <button  className="w-15 h-15 rounded-[50%] border-2 border-[#F53838] bg-[#F53838]">
            <i class="fa-solid fa-arrow-right text-white"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
