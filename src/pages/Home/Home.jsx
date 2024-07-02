import ScrollTransform from "@/components/ScrollTransform";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import {
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaLongArrowAltRight,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import avatar from "../../assets/avatar.png";
import avatar2 from "../../assets/avatar2.png";
import expense from "../../assets/1.png";
import revenue from "../../assets/2.png";
import "./Home.css";
import ShowCaseItem from "./components/showCaseItem";
import { homeShowCaseData } from "./data";
import HomeHeader from "./components/HomeHeader";

// css bị lỗi min-[*] vs max-[*] là do thư viện material-tailwind
// thư viện trông ngu đần thật sự

const appearVariants = {
  init: { opacity: 0 },
  view: {
    opacity: 1,
    transition: {
      duration: 0.5,
      opacity: {
        duration: 0.5,
      },
    },
  },
};

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("show", entry.isIntersecting);
        });
      },
      {
        threshold: 0.1,
      }
    );

    const target = document.querySelectorAll(".reveal-onshow");
    if (target) {
      target.forEach((el) => {
        observer.observe(el);
      });
    }

    return () => {
      if (target) {
        if (target) {
          target.forEach((el) => {
            observer.observe(el);
          });
        }
      }
    };
  }, []);

  return (
    <div className="text-[var(--neutral-600)]">
      {/* Header */}
      <HomeHeader />

      {/* Content */}
      <section>
        <section>
          <div className="bg-[var(--neutral-200)] p-[36px] [@media(min-width:992px)]:px-[5%] flex flex-col gap-[100px] overflow-hidden">
            <div className="flex justify-between [@media(max-width:992px)]:flex-col [@media(max-width:992px)]:items-center gap-[30px] [@media(min-width:1600px)]:gap-[100px] [@media(max-width:992px)]:gap-[100px] mt-[40px]">
              <div className="[@media(max-width:1300px)]:flex-1 [@media(min-width:1300px)]:w-[60%] flex flex-col [@media(max-width:992px)]:items-center gap-8 mt-[55px]">
                <h1 className="text-[48px] [@media(max-width:768px)]:text-[40px] [@media(max-width:480px)]:text-[34px] max-w-[478px] text-center font-bold leading-normal text-black">
                  Vietnam now has a dental appointment booking solution.
                </h1>
                <motion.p
                  className="[@media(max-width:992px)]:max-w-[650px] [@media(max-width:992px)]:text-center text-[18px]"
                  initial="init"
                  whileInView="view"
                  viewport={{ once: true }}
                  variants={{
                    init: { y: 10, ...appearVariants.init },
                    view: { y: 0, ...appearVariants.view },
                  }}
                >
                  Duck Clinic is a convenient and efficient online scheduling platform for dental clinics.
                  With Duck Clinic, patients can easily book appointments online from anywhere, anytime they need.
                  Additionally, the platform offers additional features such as personal medical notes, appointment reminders, and updates on the latest dental services.
                  Furthermore, Duck Clinic continuously evolves to provide the best user experience and enhance service quality for the community.
                </motion.p>
                <Link
                  className="bg-[var(--primary-1)] mt-[12px] w-fit hover:bg-black group flex items-center gap-2 rounded-full px-[42px] py-[22px] leading-[18px] text-white font-bold transition-transform hover:scale-95"
                  to="/sign-up"
                >
                  Booking Now!
                  <FaArrowRight
                    className="transition-transform group-hover:translate-x-[6px]"
                    size={13}
                  />
                </Link>
              </div>
              <ScrollTransform className="flex-1 relative [&_img]:absolute container mx-auto">
                {(hookedYPostion) => (
                  <>
                    <img
                      className="left-0 top-20 w-[110px]"
                      src="/svgs/bukku-dots-saas-x-template.svg"
                      alt="Dashboard Dot"
                    />
                    <img
                      className="[@media(min-width:992px)]:right-10 top-6 [@media(max-width:992px)]:left-[60%] w-[110px]"
                      src="/svgs/bukku-dots-saas-x-template.svg"
                      alt="Dashboard Dot"
                    />
                    <img
                      className="transform -translate-x-12 [@media(min-width:992px)]:bottom-[25%] [@media(max-width:992px)]:bottom-0 right-0 w-[110px]"
                      src="/svgs/bukku-dots-saas-x-template.svg"
                      alt="Dashboard Dot"
                    />
                    <div className="[@media(max-width:992px)]:pl-[62px] [@media(max-width:992px)]:pb-[47px] [@media(min-width:992px)]:absolute [@media(min-width:992px)]:left-[10%] [@media(min-width:992px)]:top-[10%]">
                      <img
                        className="rounded-3xl !relative transition-transform [@media(min-width:992px)]:max-h-[312px]"
                        style={{
                          transform: `translate(0px,-${10 * hookedYPostion}px)`,
                          boxShadow:
                            "0 20px 87px 0 var(--shadow-illustration-bottom)",
                        }}
                        src="/images/Dentist1.png"
                        alt="Dashboard Desktop"
                        sizes="(max-width: 479px) 84vw, (max-width: 991px) 87vw, (max-width: 1919px) 20vw, 755px"
                      />
                    </div>
                    <img
                      className="rounded-3xl left-0 bottom-0 [@media(min-width:992px)]:bottom-[15%] max-w-[36%] transition-transform"
                      style={{
                        maxHeight: "260px",
                        transform: `translate(0px,${10 * hookedYPostion}px)`,
                        boxShadow: "0 41px 105px rgba(0, 0, 0, .2)",
                      }}
                      src="/images/Dentist2.png"
                      alt="Dashboard Mobile"
                      sizes="(max-width: 991px) 34vw, (max-width: 1919px) 20vw, 294.109375px"
                    />
                  </>
                )}
              </ScrollTransform>
            </div>
            <div className="flex [@media(max-width:992px)]:flex-col [@media(max-width:992px)]:gap-[10px] items-center justify-between">
              <motion.div
                className="text-[24px]"
                initial="init"
                whileInView="view"
                viewport={{ once: true }}
                variants={{
                  init: { y: 10, ...appearVariants.init },
                  view: { y: 0, ...appearVariants.view },
                }}
              >
                Trusted by:
              </motion.div>
              <motion.div
                className="flex [@media(max-width:992px)]:flex-wrap [@media(max-width:992px)]:gap-[20px] [@media(max-width:992px)]:justify-center items-center justify-between gap-[100px] [@media(min-width:992px)]:[&_img]:max-h-[41px] [@media(max-width:992px)]:[&_img]:w-[16%] [@media(max-width:768px)]:[&_img]:!w-[40%] [@media(max-width:480px)]:[&_img]:w-[90px]"
                initial="init"
                whileInView="view"
                viewport={{ once: true }}
                variants={{
                  view: {
                    transition: {
                      delayChildren: 0.2,
                      staggerChildren: 0.2,
                    },
                  },
                }}
              >
                {[
                  { src: "/images/Trusted by 1.png", alt: "Hb Noodle" },
                  {
                    src: "/images/Trusted by 2.png",
                    alt: "Alphacreative",
                  },
                  {
                    src: "/images/Trusted by 3.png",
                    alt: "Silent Mode",
                  },
                  {
                    src: "/images/Trusted by 4.png",
                    alt: "Running Men",
                  },
                ].map((item) => (
                  <motion.img
                    key={item.src}
                    src={item.src}
                    alt={item.alt}
                    viewport={{ once: true }}
                    variants={{
                      init: { y: 10, ...appearVariants.init },
                      view: { y: 0, ...appearVariants.view },
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </div>
          <div className="flex h-[100px]">
            <div className="flex-1 relative">
              <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-br from-0% from-[var(--neutral-200)] via-50% via-[var(--neutral-200)] to-50% to-transparent" />
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-10 items-center py-[128px]">
          <motion.h2
            className="text-[40px] text-black font-bold [@media(max-width:992px)]:text-[33px] [@media(max-width:768px)]:text-[28px] [@media(max-width:480px)]:text-[27px] text-center"
            initial="init"
            whileInView="view"
            viewport={{ once: true }}
            variants={{
              init: { y: 10, ...appearVariants.init },
              view: { y: 0, ...appearVariants.view },
            }}
          >
            Introducing about Duck Clinic
          </motion.h2>
          <motion.iframe
            className="w-[80%]"
            height="593"
            src="https://www.youtube.com/embed/74DWwSxsVSs?si=6SNZIEFN2wtbHdyc"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
            initial="init"
            whileInView="view"
            viewport={{ once: true }}
            variants={appearVariants}
          />
          <motion.div
            className="flex [@media(max-width:768px)]:flex-col gap-[40px] [&_img]:w-[141px] [&>div]:w-[260px] [&_p]:text-[18px] [&_p]:text-center"
            initial="init"
            whileInView="view"
            viewport={{ once: true }}
            variants={{ view: { transition: { staggerChildren: 0.2 } } }}
          >
            <motion.div
              className="flex flex-col items-center gap-[30px]"
              viewport={{ once: true }}
              variants={{
                init: { y: 10, ...appearVariants.init },
                view: { y: 0, ...appearVariants.view },
              }}
            >
              <img src="/svgs/bukku-google.svg" alt="Google" />
              <div className="flex flex-col items-center gap-[15px]">
                <img
                  src="/svgs/bukku-stars-ratings-saas-x-template.svg"
                  alt="Rating"
                />
                <p>Rated as top accounting software in VietNam.</p>
              </div>
            </motion.div>
            <motion.div
              className="flex flex-col items-center gap-[30px]"
              viewport={{ once: true }}
              variants={{
                init: { y: 10, ...appearVariants.init },
                view: { y: 0, ...appearVariants.view },
              }}
            >
              <img src="/svgs/bukku-facebook.svg" alt="Facebook" />
              <div className="flex flex-col items-center gap-[15px]">
                <img
                  src="/svgs/bukku-stars-ratings-saas-x-template.svg"
                  alt="Rating"
                />
                <p>Best accounting software in VietNam.</p>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </section>

      <div className="mx-auto max-w-7xl ">
        <div className="flex flex-col">
          {homeShowCaseData.map((item, index) => {
            return (
              <div>
                <ShowCaseItem key={index} item={item} index={index} />
                <div className="p-6">
                  <p className="h-[1px] bg-blue-gray-100"></p>
                </div>
              </div>
            );
          })}
          {/* client say section */}
          <div className="pb-32 pt-16">
            <div className={"flex p-6 flex-col "}>
              <div className="w-full md:w-1/2 flex flex-col  items-start mb-32">
                <span className="tracking-wide text-sm px-6 py-3 font-bold rounded-3xl mb-6 bg-[#F3F5ff] text-[#4457ff]">
                  Feedback:
                </span>
                <h1 className="text-[40px] text-[#0b0a33] font-bold ">
                  Feed back from customers who came here this month.
                </h1>
              </div>
              <div className="grid md:grid-cols-2 gap-8 grid-cols-1 relative reveal-onshow">
                <div className="p-10 shadow-md rounded-3xl flex flex-col ">
                  <div className="w-full flex gap-3 mb-4 items-center justify-start">
                    <img
                      src={avatar}
                      alt="avatar"
                      className="w-1/5 object-cover rounded-full"
                    />
                    <div className="flex flex-col gap-0.5">
                      <h1 className="text-[22px] font-semibold text-[#0b0a33]">
                        Anh Trường
                      </h1>
                      <h1 className="text-[20px] text-[#4457ff]">
                        Check-ups and cleanings.
                      </h1>
                    </div>
                  </div>
                  <p className="text-[18px] text-[#7a7d9c]  leading-[30px] font-medium tracking-wider">
                    "Dr. Duc was amazing! He made me feel comfortable throughout the entire appointment and took the time to explain everything clearly. Highly recommend his services
                    <br />
                  </p>
                </div>
                <div className="p-10 shadow-md rounded-3xl flex flex-col ">
                  <div className="w-full flex gap-3 mb-4 items-center justify-start">
                    <img
                      src={avatar2}
                      alt="avatar"
                      className="w-1/5 object-cover rounded-full"
                    />
                    <div className="flex flex-col gap-0.5">
                      <h1 className="text-[22px] font-semibold text-[#0b0a33]">
                        Minh Quang
                      </h1>
                      <h1 className="text-[20px] text-[#4457ff]">
                        Cosmetic dentistry interventions. Gum disease treatment.
                      </h1>
                    </div>
                  </div>
                  <p className="text-[18px] text-[#7a7d9c]  leading-[30px] font-medium tracking-wider">
                    "My experience at Dr. Duc's clinic was excellent. The staff was friendly and professional, and Dr. Duc provided top-notch care. I'm very satisfied with the results and will definitely be returning for future dental needs.
                    <br />
                  </p>
                </div>
                <div className="home-testimonials inset-x-0 mx-auto"></div>
              </div>
            </div>
          </div>
          <div className="p-6">
            <p className="h-[1px] bg-blue-gray-100"></p>
          </div>
          <div className="px-8 py-4 grid grid-col-1 sm:grid-cols-2  lg:grid-cols-4 gap-4 reveal-onshow ">
            <div className="flex flex-col  justify-center items-center font-semibold">
              <div className="flex items-center">
                <span className="text-[#596aff] text-[56px]">25K</span>
                <span className="text-[56px] text-[#0b0a33]">+</span>
              </div>
              <span className="text-[#0b0a33] text-[22px] mb-2 tracking-wide text-center  ">
                Customers
              </span>
            </div>
            <div className="flex flex-col  justify-center items-center font-semibold">
              <div className="flex items-center">
                <span className="text-[#ff5f88] text-[56px]">75K</span>
                <span className="text-[56px] text-[#0b0a33]">+</span>
              </div>
              <span className="text-[#0b0a33] text-[22px] mb-2 tracking-wide text-center ">
                Monthly active users
              </span>
            </div>
            <div className="flex flex-col  justify-center items-center font-semibold">
              <div className="flex items-center">
                <span className="text-[#ffc147] text-[56px]">5M</span>
                <span className="text-[56px] text-[#0b0a33]">+</span>
              </div>
              <span className="text-[#0b0a33] text-[22px] mb-2 tracking-wide text-center ">
                Transactions recorded
              </span>
            </div>
            <div className="flex flex-col  justify-center items-center font-semibold">
              <div className="flex items-center">
                <span className="text-[#4457ff] text-[56px]">629M</span>
                <span className="text-[56px] text-[#0b0a33]">+</span>
              </div>
              <span className="text-[#0b0a33] text-[22px] mb-2 tracking-wide text-center ">
                Monthly transactions
              </span>
            </div>
          </div>
          <div className="p-6">
            <p className="h-[1px] bg-blue-gray-100"></p>
          </div>
          <div className="p-6  py-32">
            <div className="px-20 pb-10 bg-[#4457ff] rounded-3xl grid gap-8 lg:grid-cols-2 grid-cols-1 reveal-onshow ">
              <div className="flex flex-col   text-[18px] items-start justify-center lg-max:mb-12 lg-max:py-12 lg-max:items-center">
                <h1 className="font-bold mb-7 text-[40px] text-white lg-max:text-center">
                  Come to Duck Clinic right now for advice and dedicated care.
                </h1>
                <div className="transition-all duration-500 ease-in-out hover:scale-90 cursor-pointer px-[42px] py-[24px] font-semibold rounded-[150px] bg-white text-[#4457ff] flex gap-3 justify-center items-center">
                  <span className="cursor-pointer">Booking now!</span>
                  <FaLongArrowAltRight />
                </div>
              </div>
              <div className="relative">
                <img
                  src={revenue}
                  alt="revenue"
                  className="relative w-3/4 ml-auto object-cover rounded-3xl -top-10 shadow-2xl border"
                />
                <img
                  src={expense}
                  alt="expense"
                  className="absolute inset-0 w-1/2 rounded-3xl border shadow-2xl left-0 object-cover top-1/2 -translate-y-1/2"
                />
              </div>
            </div>
          </div>
          <div className="p-6">
            <p className="h-[1px] bg-blue-gray-100"></p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="container mx-auto pt-[88px] pb-[30px]">
        <div className="p-[24px] flex flex-col gap-[110px] divide-y-2">
          <section className="flex justify-between [@media(max-width:992px)]:flex-col text-[18px] gap-[110px]">
            <div className="flex flex-col max-w-[440px] gap-[40px]">
              <Link
                className="transition-transform hover:scale-95 w-fit"
                to="/"
              >
                <img
                  src="src/assets/Logo.png"
                  width={120}
                  alt="Bukku Logo"
                />
              </Link>
              <p>
                "Smile Brighter, Smile with Confidence - Your Trusted Dental Care Partner"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-[44px] h-[44px] flex items-center justify-center border rounded-full transition-transform hover:-translate-y-1 hover:shadow-md">
                  <FaFacebookF size={20} />
                </div>
                <div className="w-[44px] h-[44px] flex items-center justify-center border rounded-full transition-transform hover:-translate-y-1 hover:shadow-md">
                  <FaInstagram size={20} />
                </div>
                <div className="w-[44px] h-[44px] flex items-center justify-center border rounded-full transition-transform hover:-translate-y-1 hover:shadow-md">
                  <FaYoutube size={20} color="black" />
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-[48px]">
              <div className="font-bold text-[20px] text-[var(--bukku-accent-1)]">
                Pages
              </div>
              <div className="flex justify-between gap-[20px] [&_li]:transition-transform hover:[&_li]:translate-x-1 hover:[&_li]:text-[var(--bukku-accent-1)] [&_a]:font-bold">
                <ul className="flex-1 flex flex-col gap-[24px]">
                  <li>
                    <Link to="/bukku-for-smes">For SMEs</Link>
                  </li>
                  <li>Ecommerce Accounting</li>
                  <li>Payroll Integrations</li>
                  <li>Find Bookkeepers & Accountants</li>
                  <li>
                    <Link to="/bukku-for-accountants">For Accountants</Link>
                  </li>
                  <li>Partner Program</li>
                </ul>
                <ul className="flex-1 flex flex-col gap-[24px]">
                  <li> Our Features</li>
                  <li>Pricing Plans</li>
                  <li>Learn Bukku</li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
          </section>
          <motion.section
            className="[&_a]:text-[var(--bukku-accent-1)] [@media(max-width:992px)]:max-w-[472px] [&_a]:underline hover:[&_a]:text-[var(--neutral-800)] pt-[35px]"
            initial="init"
            whileInView="view"
            viewport={{ once: true }}
            variants={appearVariants}
          >
            © 2024 - 2025 Made by Group 6 (SEFPT).{" "}
            <Link to="/terms">Terms of Service</Link> |{" "}
            <Link to="/privacy-policy">Privacy Policy</Link>
          </motion.section>
        </div>
      </footer>
    </div>
  );
}
