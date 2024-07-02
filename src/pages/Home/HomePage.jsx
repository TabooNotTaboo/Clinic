import ScrollTransform from "@/components/ScrollTransform";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

// css bị lỗi [@media(min-width:*)] vs [@media(max-width:*)] là do thư viện material-tailwind
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

export default function HomePage() {
  return (
    <div className="text-[var(--neutral-600)]">
      {/* Header */}
      <header className="sticky top-0 w-full z-50">
        <section
          className="h-[80px]"
          style={{
            backgroundSize: 1920,
            backgroundPosition: "50%",
            backgroundImage: "url('/gifs/bukku-banner.gif')",
          }}
        />
        <section className="bg-[var(--neutral-200)] p-[24px]">
          <div className="flex items-center justify-between">
            <Link className="transition-transform hover:scale-95" to="/">
              <img src="/images/bukku-logo.png" width={120} alt="Bukku Logo" />
            </Link>
            <div className="flex [@media(max-width:480px)]:flex-col items-center gap-8">
              <Link
                className="hover:text-[var(--bukku-accent-1)] text-black"
                to="/"
              >
                Call 019-215 1510
              </Link>
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
        </section>
      </header>

      {/* Content */}
      <main>
        <section>
          <div className="bg-[var(--neutral-200)] p-[24px] flex flex-col gap-[100px] overflow-hidden">
            <div className="flex justify-between [@media(max-width:992px)]:flex-col [@media(max-width:992px)]:items-center gap-[30px] [@media(max-width:992px)]:gap-[100px] mt-[40px]">
              <div className="flex-1 flex flex-col [@media(max-width:992px)]:items-center [@media(max-width:992px)]:max-w-[700px] gap-8 mt-[55px]">
                <h1 className="text-[58px] [@media(max-width:992px)]:text-[48px] [@media(max-width:768px)]:text-[40px] [@media(max-width:480px)]:text-[34px] [@media(max-width:992px)]:max-w-[478px] [@media(max-width:992px)]:text-center font-bold leading-normal text-black">
                  A Cloud Accounting Software for Malaysia, Finally.
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
                  Bukku automates your tedious accounting & invoicing tasks in a
                  few clicks. It also gives you better insights on how your
                  business is doing in real-time, anytime, anywhere with any
                  devices.
                </motion.p>
                <Link
                  className="bg-[var(--primary-1)] mt-[12px] w-fit hover:bg-black group flex items-center gap-2 rounded-full px-[42px] py-[22px] leading-[18px] text-white font-bold transition-transform hover:scale-95"
                  to="/sign-up"
                >
                  Sign Up for Free
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
                      className="[@media(min-width:992px)]:-right-10 -top-6 [@media(max-width:992px)]:left-[60%] w-[110px]"
                      src="/svgs/bukku-dots-saas-x-template.svg"
                      alt="Dashboard Dot"
                    />
                    <img
                      className="[@media(min-width:992px)]:left-1/2 transform -translate-x-12 [@media(min-width:992px)]:-bottom-10 [@media(max-width:992px)]:bottom-0 [@media(max-width:992px)]:right-0 w-[110px]"
                      src="/svgs/bukku-dots-saas-x-template.svg"
                      alt="Dashboard Dot"
                    />
                    <div className="[@media(max-width:992px)]:pl-[62px] [@media(max-width:992px)]:pb-[47px] [@media(min-width:992px)]:absolute [@media(min-width:992px)]:left-[10%] [@media(min-width:992px)]:w-[775px]">
                      <img
                        className="rounded-3xl !relative transition-transform"
                        style={{
                          transform: `translate(0px,-${10 * hookedYPostion}px)`,
                          boxShadow:
                            "0 20px 87px 0 var(--shadow-illustration-bottom)",
                        }}
                        src="/images/bukku-dashboard-hero-desktop.jpg"
                        alt="Dashboard Desktop"
                        sizes="(max-width: 479px) 84vw, (max-width: 991px) 87vw, (max-width: 1919px) 64vw, 755px"
                      />
                    </div>
                    <img
                      className="rounded-3xl left-0 bottom-0 max-w-[54%] [@media(max-width:992px)]:max-w-[36%] transition-transform"
                      style={{
                        transform: `translate(0px,${10 * hookedYPostion}px)`,
                        boxShadow: "0 41px 105px rgba(0, 0, 0, .2)",
                      }}
                      src="/images/bukku-dashboard-hero-mobile.jpg"
                      alt="Dashboard Mobile"
                      sizes="(max-width: 991px) 34vw, (max-width: 1919px) 25vw, 294.109375px"
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
                className="flex [@media(max-width:992px)]:flex-wrap [@media(max-width:992px)]:gap-[20px] [@media(max-width:992px)]:justify-center items-center justify-between gap-[100px] [@media(min-width:992px)]:[&_img]:max-h-[41px] [@media(max-width:992px)]:[&_img]:w-[16%] [@media(max-width:480px)]:[&_img]:w-[90px]"
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
                  { src: "/images/bukku-logo-hbnoodle.png", alt: "Hb Noodle" },
                  {
                    src: "/images/bukku-logo-alphacreative.png",
                    alt: "Alphacreative",
                  },
                  {
                    src: "/images/bukku-logo-silentmode.png",
                    alt: "Silent Mode",
                  },
                  {
                    src: "/images/bukku-logo-runningmen.png",
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

        <section className="flex flex-col gap-8 items-center py-[128px]">
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
            Introducing Bukku Accounting
          </motion.h2>
          <motion.iframe
            className="w-[80%]"
            height="593"
            src="https://www.youtube.com/watch?v=NgBNW09YwGE"
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
                <p>Rated as top accounting software in Malaysia.</p>
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
                <p>Best accounting software for SMEs in Malaysia.</p>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </main>

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
                  src="/images/bukku-logo.png"
                  width={120}
                  alt="Bukku Logo"
                />
              </Link>
              <p>
                Bukku is a homegrown cloud based accounting software designed
                specifically for SME business owners and accountants in
                Malaysia.
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
            © 2019 - 2023 Nukleus Ventures Sdn Bhd (201501026187).{" "}
            <Link to="/terms">Terms of Service</Link> |{" "}
            <Link to="/privacy-policy">Privacy Policy</Link>
          </motion.section>
        </div>
      </footer>
    </div>
  );
}
