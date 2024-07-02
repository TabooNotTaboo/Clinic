import { IconButton, MobileNav } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosCall } from "react-icons/io";

export default function HomeHeader() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 992 && setOpenNav(false)
    );
  }, []);

  return (
    <header className="sticky top-0 w-full z-50">
      <section className="bg-[var(--neutral-200)] p-[24px]">
        <div className="flex items-center justify-between">
          <Link className="transition-transform hover:scale-95" to="/">
            <img
              src="src/assets/Logo.png"
              width={150}
              alt="Logo"
            />
          </Link>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent [@media(min-width:992px)]:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
          <div class="flex [@media(max-width:992px)]:hidden header">
            <Link
              className="bg-[var(--bukku-accent-1)] group flex items-center gap-2 rounded-full px-[20px] py-[16px] leading-[18px] text-white font-bold transition-transform hover:scale-95"
              to="/login"
            >
              Login
              <FaArrowRight
                className="transition-transform group-hover:translate-x-[6px]"
                size={13}
              />
            </Link>

            <Link
              className="hover:text-[var(--bukku-accent-1)] text-black"
              to="/"
              style={{ marginRight: "20px", marginLeft: "20px" }}
            >
              Call 019-215 1510
            </Link>
            <div class="flex flex-col">
              <Link
                className="bg-[var(--bukku-accent-1)] group flex items-center gap-2 rounded-full px-[24px] py-[16px] leading-[18px] text-white font-bold transition-transform hover:scale-95"
                to="/sign-up"
              >
                Try Now
                <FaArrowRight
                  className="transition-transform group-hover:translate-x-[6px]"
                  size={13}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <MobileNav
        className="bg-[var(--neutral-200)] px-[24px] text-black"
        open={openNav}
      >
        <div className="container mx-auto flex flex-col gap-4 divide-black">
          <Link className="hover:text-[var(--bukku-accent-1)] flex items-center gap-2" to="/">
            <IoIosCall size={20} />
            019-215 1510
          </Link>
          <Link to="/sign-up">Try Now</Link>
          <Link to="/login">Login</Link>
        </div>
      </MobileNav>
    </header>
  );
}
