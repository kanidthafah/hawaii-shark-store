"use client";
import HeroSection from "@/components/HeroSection";
import { FaTruck } from "react-icons/fa6";
import { BiSolidWasher } from "react-icons/bi";
import { TbIroningFilled } from "react-icons/tb";
import FeaturedProducts from "@/components/FeaturedProducts";
import NewProducts from "@/components/NewProducts";
import {motion} from "framer-motion"
interface Services {
  title: string;
  icon: JSX.Element;
  description: string;
}

export default function Home() {
  const services: Services[] = [
    {
      title: "Free Shipping",
      icon: <FaTruck />,
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      title: "Washed Clothing",
      icon: <BiSolidWasher />,
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      title: "Ironed Clothing",
      icon: <TbIroningFilled />,
      description: "Lorem ipsum dolor sit amet.",
    },
  ];

  return (
    <main className="h-full">
      <section className="w-full max-h-[60dvh] px-4 md:px-8 lg:px-14 xl:px-48 py-4">
        <HeroSection />
      </section>
      <section className="w-full h-auto p-4 ">
        <motion.div
          initial={{ y: "20%", opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { delay: 2.2, duration: 0.6, ease: "easeIn" },
          }}
          className="max-h-[200px] container bg-zinc-100 rounded-3xl p-4 flex justify-center items-center gap-2 lg:gap-10"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center text-center xl:mx-10"
            >
              <div className="bg-secondary text-bg text-xl p-4 rounded-full mb-4">
                {service.icon}
              </div>
              <p className="text-font2 text-sm md:text-base capitalize font-semibold text-nowrap">
                {service.title}
              </p>
              <p className="text-font text-xs md:text-sm font-light">
                {service.description}
              </p>
            </div>
          ))}
        </motion.div>
      </section>
      <section className="w-full h-auto px-4 md:px-8 lg:px-14 xl:px-20 py-20">
        <motion.div
          initial={{ y: "10%", opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { delay: 2.2, duration: 0.6, ease: "easeIn" },
          }}
          className="flex items-center"
        >
          <div className="flex flex-col gap-2">
            <div className="mb-3">
              <h3 className="text-center md:text-start text-font2 font-medium text-base md:text-lg lg:text-lg">
                Featured Hawaii Shirts
              </h3>
              <p className="text-center md:text-start text-font italic text-sm md:text-base">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus,
                facilis.
              </p>
            </div>
            <FeaturedProducts />
          </div>
        </motion.div>
      </section>
      <section className="w-full h-auto px-4 md:px-8 lg:px-14 xl:px-20 pt-4 pb-20">
        <motion.div
          initial={{ y: "10%", opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { delay: 2.2, duration: 0.6, ease: "easeIn" },
          }}
          className="flex items-center"
        >
          <div className="flex flex-col gap-2">
            <div className="mb-3">
              <h3 className="text-center md:text-start text-font2 font-medium text-base md:text-lg lg:text-lg">
                New Arrival!
              </h3>
              <p className="text-center md:text-start text-font italic text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                error quia modi veritatis? Voluptates facilis nesciunt quam ad
                inventore soluta sapiente molestiae cupiditate minus debitis!
              </p>
            </div>
            <NewProducts />
          </div>
        </motion.div>
      </section>
    </main>
  );
}
