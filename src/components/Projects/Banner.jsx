import BlissInTheWoodsLogo from "../../assets/Home/Projects/bliss_in_the_woods_logo.svg";
import BirdsInParadiseLogo from "../../assets/Home/Projects/birds_in_paradise_logo.svg";
import NatureNestImageLogo from "../../assets/Home/Projects/nature_nest_logo.svg";
import MudIsMyNameLogo from "../../assets/Home/Projects/mud_is_my_name_logo.svg";
import { useState } from "react";
import { motion } from "framer-motion";
const Banner = () => {
  const [opacityBTW, setOpacityBTW] = useState(false);
  const [opacityMMN, setOpacityMMN] = useState(false);
  const [opacityNN, setOpacityNN] = useState(false);
  const [opacityBIP, setOpacityBIP] = useState(false);
  return (
    <>
      <section className="h-[40vh] w-full bg-projects-img pt-[120px]">
        <div className="flex flex-col items-center justify-center md:px-[50px] px-[20px]">
          <motion.h1
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeIn" }}
            className="text-white text-center w-full font-weight-500 mb-[10px]"
          >
            Projects
          </motion.h1>
        </div>
      </section>
      <section className="w-full flex items-center justify-center overflow-x-hidden">
        <div className="max-w-[1400px] px-[20px] md:px-[50px] w-full py-[50px] md:py-[100px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px] ">
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.01 }}
              onViewportEnter={() => console.log('BTW entered viewport')}
              onViewportLeave={() => console.log('BTW left viewport')}
              className="h-[400px] group w-full relative"
              onClick={() => {
                setOpacityBTW(!opacityBTW);
                setOpacityBIP(false);
                setOpacityMMN(false);
                setOpacityNN(false);
              }}
            >
              <div className="z-10 absolute rounded-xl background-image-blissInTheWoods h-full w-full flex items-end flex-col justify-between p-2 ">
                <img src={BlissInTheWoodsLogo} alt="Bliss In The Woods" />
                <h2 className="w-full text-center text-white">
                  Bliss In The Woods
                </h2>
              </div>
              <div
                className={`p-6 rounded-xl z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-[#35674e] to-[#95b67b] h-full w-full ${
                  opacityBTW ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="border h-full w-full border-[#ccc] flex flex-col items-center justify-center gap-[15px]">
                  <img src={BlissInTheWoodsLogo} alt="Bliss In The Woods" />
                  <h2 className="w-full text-center text-white">
                    Bliss In The Woods
                  </h2>
                  <a
                    href="https://blissinthewoods.com/"
                    target="_blank"
                    className="py-5 pt-6 rounded px-6 bg-[#436550] hover:bg-[#35674E] text-white text-center leading-0 text-[18px]"
                  >
                    Know More
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.01 }}
              onViewportEnter={() => console.log('MMN entered viewport')}
              onViewportLeave={() => console.log('MMN left viewport')}
              className="h-[400px] group w-full relative"
              onClick={() => {
                setOpacityBTW(false);
                setOpacityBIP(false);
                setOpacityMMN(!opacityMMN);
                setOpacityNN(false);
              }}
            >
              <div className="z-10 absolute rounded-xl background-image-mudIsMyName h-full w-full flex items-end flex-col justify-between p-2">
                <img src={MudIsMyNameLogo} alt="Mud Is My Name" />
                <h2 className="w-full text-center text-white">
                  Mud Is My Name
                </h2>
              </div>
              <div
                className={`p-6 rounded-xl z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-[#6E3F00] to-[#95b67b] h-full w-full ${
                  opacityMMN ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="border h-full w-full border-[#ccc] flex flex-col items-center justify-center gap-[15px]">
                  <img src={MudIsMyNameLogo} alt="Mud Is My Name" />
                  <h2 className="w-full text-center text-white">
                    Mud Is My Name
                  </h2>
                  <a
                    href="https://mudismyname.com/"
                    target="_blank"
                    className="py-5 pt-6 rounded px-6 bg-[#6E3F00] hover:bg-[#35674E] text-white text-center leading-0 text-[18px]"
                  >
                    Know More
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.01 }}
              onViewportEnter={() => console.log('NN entered viewport')}
              onViewportLeave={() => console.log('NN left viewport')}
              className="h-[400px] group w-full relative"
              onClick={() => {
                setOpacityBTW(false);
                setOpacityBIP(false);
                setOpacityMMN(false);
                setOpacityNN(!opacityNN);
              }}
            >
              <div className="z-10 absolute rounded-xl background-image-nature-nest-image h-full w-full flex items-end flex-col justify-between p-2">
                <img src={NatureNestImageLogo} alt="Nature's Nest" />
                <h2 className="w-full text-center text-white">
                  Nature's Nest{" "}
                </h2>
              </div>
              <div
                className={`p-6 rounded-xl z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-[#35674e] to-[#E39F25] h-full w-full ${
                  opacityNN ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="border h-full w-full border-[#ccc] flex flex-col items-center justify-center gap-[15px]">
                  <img src={NatureNestImageLogo} alt="Nature's Nest" />
                  <h2 className="w-full text-center text-white">
                    Nature's Nest
                  </h2>
                  <a
                    href="#"
                    target="_blank"
                    className="py-5 pt-6 rounded px-6 bg-[#00AF4C] hover:bg-[#35674E] text-white text-center leading-0 text-[18px]"
                  >
                    Know More
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.01 }}
              onViewportEnter={() => console.log('BIP entered viewport')}
              onViewportLeave={() => console.log('BIP left viewport')}
              className="h-[400px] group w-full relative"
              onClick={() => {
                setOpacityBTW(false);
                setOpacityBIP(!opacityBIP);
                setOpacityMMN(false);
                setOpacityNN(false);
              }}
            >
              <div className="z-10 absolute rounded-xl background-image-birdsInParadise h-full w-full flex items-end flex-col justify-between p-2">
                <img src={BirdsInParadiseLogo} alt="Bird's In Paradise" />
                <h2 className="w-full text-center text-white">
                  Bird's In Paradise{" "}
                </h2>
              </div>
              <div
                className={`p-6 rounded-xl z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b
                    from-[#222222]/90
                    to-[#95b67b]/90 h-full w-full ${
                      opacityBIP ? "opacity-100" : "opacity-0"
                    }`}
              >
                <div className="border h-full w-full border-[#ccc] flex flex-col items-center justify-center gap-[15px]">
                  <img src={BirdsInParadiseLogo} alt="Bird's In Paradise" />
                  <h2 className="w-full text-center text-white">
                    Bird's In Paradise
                  </h2>
                  <a
                    href="#"
                    target="_blank"
                    className="py-5 pt-6 rounded px-6 bg-[#009992] hover:bg-[#35674E] text-white text-center leading-0 text-[18px]"
                  >
                    Know More
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Banner;
