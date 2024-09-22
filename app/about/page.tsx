"use client";
import React from "react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { FaFacebookF } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaLine } from "react-icons/fa6";
import { motion } from "framer-motion";

interface Socials {
  name: string;
  icon: JSX.Element;
  link: string;
}

export default function About() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const about_image: { image: string }[] = [
    { image: "/about-page/about-img1.jpg" },
    { image: "/about-page/about-img2.jpg" },
    { image: "/about-page/about-img3.jpg" },
  ];

  const socials: Socials[] = [
    { name: "Facebook", icon: <FaFacebookF />, link: "/" },
    { name: "Instagram", icon: <BiLogoInstagramAlt />, link: "/" },
    { name: "Line", icon: <FaLine />, link: "/" },
  ];

  return (
    <main className="h-full">
      <section className="w-full px-4 md:px-8 lg:px-14 xl:px-48 py-14">
        <div className="flex flex-col gap-2 items-center justify-center">
          <motion.h1
            initial={{ y: "-20%", opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { delay: 0.4, duration: 0.6, ease: "easeIn" },
            }}
            className="text-3xl md:text-4xl lg:text-6xl text-font2 font-medium uppercase"
          >
            About us
          </motion.h1>
          <motion.h3
            initial={{ y: "-10%", opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { delay: 0.6, duration: 0.6, ease: "easeIn" },
            }}
            className="text-lg md:text-2xl lg:text-4xl text-font font-medium uppercase mb-4 lg:mb-10"
          >
            &quot;Second Hand Hawaii Shirts&quot;
          </motion.h3>
          <div className="flex flex-col lg:flex-row gap-5">
            <motion.div
              initial={{ x: "-20%", opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { delay: 1, duration: 0.6, ease: "easeIn" },
              }}
              className="mx-auto xl:mx-0"
            >
              <Carousel
                plugins={[plugin.current]}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
                className="w-full max-w-[312px] lg:max-w-[350px]"
              >
                <CarouselContent>
                  {about_image.map((item, index) => (
                    <CarouselItem key={index}>
                      <div className="flex w-[312px] h-[392px] lg:w-[350px] lg:h-[430px] items-center justify-center p-1">
                        <img
                          src={item.image}
                          alt={item.image}
                          className="w-full rounded-lg"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </motion.div>
            <motion.div
              initial={{ y: "20%", opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { delay: 1, duration: 0.6, ease: "easeIn" },
              }}
              className="flex flex-col gap-y-4 md:gap-y-0 md:justify-between h-[350px] lg:h-auto text-wrap"
            >
              <p className=" text-font font-light text-sm md:text-base first-letter:text-primary first-letter:text-lg md:first-letter:text-2xl first-letter:font-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
                assumenda, corrupti atque temporibus perferendis quas vitae!
                Consequatur, voluptatibus commodi quibusdam possimus iusto nisi
                dolores obcaecati? Dolores adipisci facilis itaque perferendis
                corporis omnis distinctio asperiores animi perspiciatis?
                Quibusdam deserunt dolor ducimus cumque sunt rerum incidunt amet
                suscipit facilis enim, quidem tempora cum, officia saepe!
                Praesentium, eos autem! Similique dicta placeat omnis.
              </p>
              <p className=" text-font font-light text-sm md:text-base">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
                reiciendis quam, ea fugiat nesciunt expedita, ut sequi unde
                doloribus aut quia molestias, hic placeat voluptates veniam
                dolore laborum magni at?
              </p>
              <div className="flex gap-2 mb-2 justify-center lg:justify-start">
                {socials.map((item, index) => (
                  <Link
                    key={index}
                    href={item.link}
                    className="h-8 w-8 md:w-32 p-2 flex items-center justify-center gap-2 text-bg bg-primary rounded-3xl hover:text-color1 active:bg-secondary active:scale-105 active:text-color1 hover:bg-secondary hover:scale-105 transition-all duration-150 ease-out"
                  >
                    <span className="w-4 h-4">{item.icon}</span>
                    <span className="hidden md:block">{item.name}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
