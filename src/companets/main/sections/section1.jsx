// export default function Section1() {
//   return <section className="py-30 flex flex-col lg:flex-row gap-4  items-center justify-between m-auto max-w-300 p-2.5 xl:px-0">
//     {/* left */}
//     <div>
//       <img src="/images/s1img.svg" alt="" />
//     </div>
//     {/* right */}
//     <div className="flex flex-col gap-4">
//       <h2 className="text-[35px] font-medium text-[#0B132A] max-w-100 lg:w-95 text-center lg:text-start">
//         We Provide Many Features You Can Use
//       </h2>
//       <p className="text-[#4F5665] max-w-100 lg:w-110 my-1.5 text-center lg:text-start">
//         You can explore the features that we provide with fun and have their own
//         functions each feature.
//       </p>
//       <div className="flex lg:flex-col gap-3">
//         <div className="flex flex-col gap-3">
//           <div className="flex items-center gap-2">
//             <i class="fa-solid fa-circle-check text-[#2FAB73]"></i>
//             <p className="text-[14px] text-[#4F5665]">
//               Powerfull online protection.
//             </p>
//           </div>
//           <div className="flex items-center gap-2">
//             <i class="fa-solid fa-circle-check text-[#2FAB73]"></i>
//             <p className="text-[14px] text-[#4F5665]">
//               Internet without borders.
//             </p>
//           </div>
//         </div>
//         <div className="flex flex-col gap-3">
//           <div className="flex items-center gap-2">
//             <i class="fa-solid fa-circle-check text-[#2FAB73]"></i>
//             <p className="text-[14px] text-[#4F5665]">Supercharged VPN</p>
//           </div>
//           <div className="flex items-center gap-2">
//             <i class="fa-solid fa-circle-check text-[#2FAB73]"></i>
//             <p className="text-[14px] text-[#4F5665]">
//               No specific time limits.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>;
// }
export default function Section1() {
  return (
    <section className="py-30 flex flex-col lg:flex-row gap-4 items-center justify-between m-auto max-w-300 p-2.5 xl:px-0">
      {/* left */}
      <div>
        <img src="/images/s1img.svg" alt="" />
      </div>
      {/* right */}
      <div className="flex flex-col gap-4">
        <h2 className="text-[35px] font-medium text-[#0B132A] max-w-100 lg:w-95 text-center lg:text-start">
          We Provide Many Features You Can Use
        </h2>
        <p className="text-[#4F5665] max-w-100 lg:w-110 my-1.5 text-center lg:text-start">
          You can explore the features that we provide with fun and have their
          own functions each feature.
        </p>
        <div className="flex lg:flex-col gap-3">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-circle-check text-[#2FAB73]"></i>
              <p className="text-[14px] text-[#4F5665]">Powerfull online protection.</p>
            </div>
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-circle-check text-[#2FAB73]"></i>
              <p className="text-[14px] text-[#4F5665]">Internet without borders.</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-circle-check text-[#2FAB73]"></i>
              <p className="text-[14px] text-[#4F5665]">Supercharged VPN</p>
            </div>
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-circle-check text-[#2FAB73]"></i>
              <p className="text-[14px] text-[#4F5665]">No specific time limits.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}