import { scale } from "framer-motion";
import bannerVideo from "../../assets/banner_video.mp4";
import { motion } from "framer-motion";
const Banner = () => {
  return (
    <section className="h-[100vh] w-full border-box relative">
      <video
        src={bannerVideo}
        className="w-full h-full absolute top-0 left-0 right-0 bottom-0 object-cover"
        autoPlay
        muted
        loop
      ></video>
      <div className="absolute bottom-6 flex flex-col items-center w-full justify-center px-[20px] md:px-[50px]">
        <motion.h2
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full text-[#95B67B] text-center leading-10 font-weight-500"
        >
          Creating nature’s <br /> very own addresses
        </motion.h2>

        <motion.p
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="w-full text-white text-center pt-[10px]"
        >
          Experience the perfect blend of urban sophistication{" "}
          <br className="hidden md:block" /> and natural beauty with Nestmakers.
        </motion.p>
      </div>
    </section>
  );
};

export default Banner;
