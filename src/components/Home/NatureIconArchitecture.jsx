import BlissInTheWoodsLogo from "../../assets/Home/Projects/bliss_in_the_woods_logo.svg";
import BirdsInParadiseLogo from "../../assets/Home/Projects/birds_in_paradise_logo.svg";
import NatureNestImageLogo from "../../assets/Home/Projects/nature_nest_logo.svg";
import MudIsMyNameLogo from "../../assets/Home/Projects/mud_is_my_name_logo.svg";
import EcoConsciousCommunities from "../../assets/Home/icons/eco_conscious_communities.svg";
import SerenityAmongstNature from "../../assets/Home/icons/serenity_amongst_nature.svg";
import StrategicallyLocatedProjects from "../../assets/Home/icons/strategically_located_projects.svg";
import ExceptionalValueAppreciation from "../../assets/Home/icons/exceptional_value_appreciation.svg";
import UrbanLivingAwayFromCityBuzz from "../../assets/Home/icons/urban_living_away_from_city_buzz.svg";
import WellnessCenteredLivingSpaces from "../../assets/Home/icons/wellness_centred_living_spaces.svg";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
const slides = [
  {
    title: "Rajasthan's Thar desert\nsees successful reforestation",
    date: "Apr ‘24",
  },
  {
    title: "Nature exposure boosts creativity\nand problem-solving skills",
    date: "Jun ‘24",
  },
  {
    title: "Singapore's 'City in a Garden'\ninspires urban planners",
    date: "Jun ’24",
  },
  {
    title: "Green schoolyards improve\nacademic performance",
    date: "Jun ’24",
  },
  {
    title: "European Union criminalises\neco-destruction",
    date: "Jun ’24",
  },
  {
    title: "Time in nature linked to\nreduced chronic disease risk",
    date: "Jun ’24",
  },
  {
    title: "Tadoba Andhari Tiger Reserve\nrecords highest tiger density",
    date: "Jun ’24",
  },
  {
    title: "Study reveals that urban greenery\ncrucial for air quality",
    date: "Jun ’24",
  },
  {
    title: "Iceland leads in\ngeothermal energy",
    date: "Jun ’24",
  },
  {
    title: "Colombian deforestation drops\nto its lowest",
    date: "Jun ’24",
  },
  {
    title: "Tree bark plays vital role\nin removing methane",
    date: "Jun ’24",
  },
  {
    title: "Hawaii replaced its last coal plant\nwith a battery",
    date: "Jun ’24",
  },
  {
    title: "Hawaii replaced its last coal plant\nwith a battery",
    date: "Jun ’24",
  },
];

const NatureIconArchitecture = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [opacityBTW, setOpacityBTW] = useState(false);
  const [opacityMMN, setOpacityMMN] = useState(false);
  const [opacityNN, setOpacityNN] = useState(false);
  const [opacityBIP, setOpacityBIP] = useState(false);
  return (
    <>
      <section className="w-full flex items-center justify-center background-image-nature">
        <div className="max-w-[1400px] w-full h-[90vh] px-[20px] md:px-[50px] flex items-center justify-center">
          <div className="flex flex-col gap-[20px] items-center justify-center">
            <h2 className="w-full text-center text-[#95B67B]">
              Love nature? <br /> Have it love you back!
            </h2>
            <p className="w-full md:w-[600px] text-center">
              We believe a greener future starts with today’s choices. We
              envision communities that provide a connection with nature.
            </p>
            <p className="w-full md:w-[600px] text-center">
              Our commitment to sustainability goes beyond eco-friendly
              materials. It’s about designing spaces that inspire mindful living
              and a bond with the environment.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full flex items-center justify-center bg-[#35674E]">
        <div className="max-w-[1400px] px-[20px] md:px-[50px] w-full py-[50px] md:py-[100px]">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-[30px]">
            <div className="w-full h-full flex flex-col items-center justify-center">
              <img src={SerenityAmongstNature} alt="Serenity amongst nature" />
              <p className="text-center w-full mt-[10px] text-white">
                Serenity amongst nature
              </p>
            </div>
            <div className="w-full h-full flex flex-col items-center justify-center">
              <img
                src={UrbanLivingAwayFromCityBuzz}
                alt="Urban living away from city buzz"
              />
              <p className="text-center w-full mt-[10px] text-white">
                Urban living away from city buzz
              </p>
            </div>
            <div className="w-full h-full flex flex-col items-center justify-center">
              <img
                src={EcoConsciousCommunities}
                alt="Eco-conscious communities"
              />
              <p className="text-center w-full mt-[10px] text-white">
                Eco-conscious communities
              </p>
            </div>
            <div className="w-full h-full flex flex-col items-center justify-center">
              <img
                src={WellnessCenteredLivingSpaces}
                alt="Wellness-centred living spaces"
              />
              <p className="text-center w-full mt-[10px] text-white">
                Wellness-centred living spaces
              </p>
            </div>
            <div className="w-full h-full flex flex-col items-center justify-center">
              <img
                src={StrategicallyLocatedProjects}
                alt="Strategically located projects"
              />
              <p className="text-center w-full mt-[10px] text-white">
                Strategically located projects
              </p>
            </div>
            <div className="w-full h-full flex flex-col items-center justify-center">
              <img
                src={ExceptionalValueAppreciation}
                alt="Exceptional value appreciation"
              />
              <p className="text-center w-full mt-[10px] text-white">
                Exceptional value appreciation
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="md:h-[800px] lg:h-[900px] xl:h-[110vh] w-full hidden md:flex items-center justify-center bg-image-architecture">
        <div className="max-w-[1400px] flex items-center justify-center relative h-full w-full">
          <div
            className="
    absolute
    w-[320px] md:w-[360px] lg:w-[400px]
    md:right-[40px] md:top-[280px]
    lg:right-[80px] lg:top-[320px]
    xl:right-[20%] xl:top-[30%]
    2xl:right-[18%] 2xl:top-[40%]
    bg-white
    flex flex-col
    gap-[10px]
    p-4
  "
          >
            <h2 className="text-[#35674E]">
              Architecture, inspired by the art of nature
            </h2>
            <p className="text-[black]">
              Every community we build seamlessly breathes life into innovative
              architectural ideas without causing a disturbance to the natural
              environment. Each detail is crafted to enhance your connection
              with Mother Earth, from expansive green spaces to panoramic
              landscapes.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full flex md:hidden items-center justify-center">
        <div className="max-w-[1400px] flex items-center justify-center relative h-full w-full px-[20px] md:px-[50px] py-[50px] md:py-[100px]">
          <div className=" bg-white flex flex-col gap-[10px] md:gap-[20px]">
            <h2 className="text-[#95B67B]">
              Architecture, <br />
              inspired by the art of nature
            </h2>
            <p className="text-[black]">
              Every community we build seamlessly breathes life into innovative
              architectural ideas without causing a disturbance to the natural
              environment. Each detail is crafted to enhance your connection
              with Mother Earth, from expansive green spaces to panoramic
              landscapes.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full flex items-center justify-center background-image-slider-one">
        <div className="max-w-[1400px] flex items-end justify-center relative w-full px-[20px] md:px-[50px]">
          <div className="relative w-full md:max-w-2xl ">
            {/* FIXED FRAME */}
            <div className="relative rounded-3xl bg-[#f8f8f8] h-[200px] flex items-center justify-center overflow-hidden ">
              <Swiper
                modules={[Autoplay]}
                onSwiper={setSwiperInstance}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                grabCursor={true}
                className="w-full h-full"
              >
                {slides.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex flex-col items-center justify-center h-full text-center px-6">
                      <h4 className="text-[#7A7A7A] max-w-2xl slide-title font-18 font-semibold italic">
                        {item.title}
                      </h4>
                      <p className="mt-4 text-light-green">
                        {item.date}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* LEFT ARROW */}
              <button
                onClick={() => swiperInstance?.slidePrev()}
                className="absolute left-6 top-1/2 -translate-y-1/2 
             text-[#95B67B] text-3xl 
             hover:scale-110 transition
             z-20 pointer-events-auto"
              >
                ‹
              </button>

              {/* RIGHT ARROW */}
              <button
                onClick={() => swiperInstance?.slideNext()}
                className="absolute right-6 top-1/2 -translate-y-1/2 
             text-[#95B67B] text-3xl 
             hover:scale-110 transition
             z-20 pointer-events-auto"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex items-center justify-center">
        <div className="max-w-[1400px] px-[20px] md:px-[50px] w-full py-[50px] md:py-[100px]">
          <h2 className="w-full text-center mb-[30px] text-[#95B67B]">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px] ">
            <div
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
                <h2 className="w-full text-center text-white">Bliss In The Woods</h2>
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
                    href="https://blissinthewoods.com/" target="_blank"
                    className="py-5 pt-6 rounded px-6 bg-[#436550] hover:bg-[#35674E] text-white text-center leading-0 text-[18px]"
                  >
                    Know More
                  </a>
                </div>
              </div>
            </div>

            <div
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
                <h2 className="w-full text-center text-white">Mud Is My Name</h2>
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
                    href="https://mudismyname.com/" target="_blank"
                    className="py-5 pt-6 rounded px-6 bg-[#6E3F00] hover:bg-[#35674E] text-white text-center leading-0 text-[18px]"
                  >
                    Know More
                  </a>
                </div>
              </div>
            </div>

            <div
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
                <h2 className="w-full text-center text-white">Nature's Nest </h2>
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
                    href="#" target="_blank"
                    className="py-5 pt-6 rounded px-6 bg-[#00AF4C] hover:bg-[#35674E] text-white text-center leading-0 text-[18px]"
                  >
                    Know More
                  </a>
                </div>
              </div>
            </div>

            <div
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
                <h2 className="w-full text-center text-white">Bird's In Paradise </h2>
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
                    href="#" target="_blank"
                    className="py-5 pt-6 rounded px-6 bg-[#009992] hover:bg-[#35674E] text-white text-center leading-0 text-[18px]"
                  >
                    Know More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex items-center justify-center">
        <div className="w-full px-[20px] md:px-[50px] flex flex-col items-center justify-center">
          <div className="testmonials-bg-image">

          </div>
        </div>
      </section>
    </>
  );
};

export default NatureIconArchitecture;
