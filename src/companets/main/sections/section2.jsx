export default function Section2() {
  return (
    <section className="m-auto max-w-300 p-2.5 xl:px-0 flex items-center flex-col py-20 gap-8">
      <h2 className="font-medium text-[35px] text-[#0B132A]">
        Choose Your Plan
      </h2>
      <p className="text-[#4F5665] w-100 sm:w-138 text-center">
        Let's choose the package that is best for you and explore it happily and
        cheerfully.
      </p>
      <div className="flex gap-10 overflow-auto max-w-full">
        {/* 1 */}
        <div className=" px-17 h-190 border-2 border-[#DDDDDD] rounded-xl py-12.5 flex flex-col items-center justify-between shrink-0">
          <div>
            <img src="/images/s2box.svg" alt="" />
          </div>
          <h2 className="font-medium text-[#0B132A] text-[18px]">Free Plan</h2>
          <div className="h-65 flex flex-col gap-5">
            <div className="flex items-center gap-5">
              <i class="fa-solid fa-check text-[#2FAB73]"></i>{" "}
              <p className="text-[14px] text-[#4F5665]">Unlimited Bandwitch</p>
            </div>
            <div className="flex items-center gap-5">
              <i class="fa-solid fa-check text-[#2FAB73]"></i>{" "}
              <p className="text-[14px] text-[#4F5665]">Encrypted Connection</p>
            </div>
            <div className="flex items-center gap-5">
              <i class="fa-solid fa-check text-[#2FAB73]"></i>{" "}
              <p className="text-[14px] text-[#4F5665]">No Traffic Logs</p>
            </div>
            <div className="flex items-center gap-5">
              <i class="fa-solid fa-check text-[#2FAB73]"></i>{" "}
              <p className="text-[14px] text-[#4F5665]">Works on All Devices</p>
            </div>
          </div>
          <h2 className="font-medium text-[25px] text-[#0B132A]">Free</h2>
          <button className="px-16 h-11 border-[#F53838] border-2 text-[#F53838] font-bold rounded-[50px] ">
            Select
          </button>
        </div>
        {/* 2 */}
        <div className=" px-17 h-190 border-2 border-[#DDDDDD] rounded-xl py-12.5 flex flex-col items-center justify-between shrink-0">
          <div>
            <img src="/images/s2box.svg" alt="" />
          </div>
          <h2 className="font-medium text-[#0B132A] text-[18px]">
            Standard Plan
          </h2>
          <div className="h-65 flex flex-col gap-5">
            <div className="flex items-center gap-5">
              <i class="fa-solid fa-check text-[#2FAB73]"></i>{" "}
              <p className="text-[14px] text-[#4F5665]">Unlimited Bandwitch</p>
            </div>
            <div className="flex items-center gap-5">
              <i class="fa-solid fa-check text-[#2FAB73]"></i>{" "}
              <p className="text-[14px] text-[#4F5665]">Encrypted Connection</p>
            </div>
            <div className="flex items-center gap-5">
              <i class="fa-solid fa-check text-[#2FAB73]"></i>{" "}
              <p className="text-[14px] text-[#4F5665]">Yes Traffic Logs</p>
            </div>
            <div className="flex items-center gap-5">
              <i class="fa-solid fa-check text-[#2FAB73]"></i>{" "}
              <p className="text-[14px] text-[#4F5665]">Works on All Devices</p>
            </div>
            <div className="flex items-center gap-5">
              <i class="fa-solid fa-check text-[#2FAB73]"></i>{" "}
              <p className="text-[14px] text-[#4F5665]">Connect Anyware</p>
            </div>
          </div>
          <h2 className="font-medium text-[25px] text-[#0B132A]">9 $</h2>
          <button className="px-16 h-11 border-[#F53838] border-2 text-[#F53838] font-bold rounded-[50px] ">
            Select
          </button>
        </div>
        {/* 3 */}
        <div className=" px-17 h-190 border-2 border-[#DDDDDD] rounded-xl py-12.5 flex flex-col items-center justify-between shrink-0">
          <div>
            <img src="/images/s2box.svg" alt="" />
          </div>
          <h2 className="font-medium text-[#0B132A] text-[18px]">Free Plan</h2>
          <div className="h-65 flex flex-col gap-5">
            <div className="flex items-center gap-5">
              <i class="fa-solid fa-check text-[#2FAB73]"></i>{" "}
              <p className="text-[14px] text-[#4F5665]">Unlimited Bandwitch</p>
            </div>
            <div className="flex items-center gap-5">
              <i class="fa-solid fa-check text-[#2FAB73]"></i>{" "}
              <p className="text-[14px] text-[#4F5665]">Encrypted Connection</p>
            </div>
            <div className="flex items-center gap-5">
              <i class="fa-solid fa-check text-[#2FAB73]"></i>{" "}
              <p className="text-[14px] text-[#4F5665]">Yes Traffic Logs</p>
            </div>
            <div className="flex items-center gap-5">
              <i class="fa-solid fa-check text-[#2FAB73]"></i>{" "}
              <p className="text-[14px] text-[#4F5665]">Works on All Devices</p>
            </div>
            <div className="flex items-center gap-5">
              <i class="fa-solid fa-check text-[#2FAB73]"></i>{" "}
              <p className="text-[14px] text-[#4F5665]">Connect Anyware</p>
            </div>
            <div className="flex items-center gap-5">
              <i class="fa-solid fa-check text-[#2FAB73]"></i>{" "}
              <p className="text-[14px] text-[#4F5665]">Get New Features</p>
            </div>
          </div>
          <h2 className="font-medium text-[25px] text-[#0B132A]">12 $</h2>
          <button className="px-16 h-11 border-[#F53838] border-2 text-[#F53838] font-bold rounded-[50px] ">
            Select
          </button>
        </div>
      </div>
    </section>
  );
}
