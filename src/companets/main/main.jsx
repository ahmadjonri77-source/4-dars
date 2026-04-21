import { Link, Outlet } from "react-router-dom";

export default function Main() {
  return (
    <main className="m-auto max-w-300 p-2.5 xl:px-0">
      <nav className="flex justify-between items-center fixed top-0 left-1/2 -translate-x-1/2 bg-white w-full max-w-300 h-20 px-5 z-50">
        <img src="/images/Logo.svg" alt="logo" />
        <div className="items-center gap-10 text-[#4F5665] hidden lg:flex">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/features">Features</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/testimonials">Testimonials</Link>
        </div>
        <div className="flex items-center gap-5">
          <i className="fa-solid fa-bars text-[#0B132A] text-xl block lg:!hidden"></i>
          <a href="#" className="font-semibold text-[#0B132A]">Sign In</a>
          <button className="w-37 h-11 border-[#F53855] border text-[#F53855] font-medium rounded-[50px]">
            Sign Up
          </button>
        </div>
      </nav>
      <div className="mt-20">
        <Outlet />
      </div>
    </main>
  );
}
