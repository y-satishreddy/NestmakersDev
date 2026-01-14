import { motion } from "framer-motion";
const Banner = () => {
  return (
    <section className="h-[100vh] w-full bg-about-img pt-[120px]">
      <div className="flex flex-col items-center justify-center md:px-[50px] px-[20px]">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
          viewport={{ once: true }}
          className="text-white text-center w-full font-weight-500 mb-[10px]"
        >
          We thrive where <br /> nature thrives
        </motion.h1>
        <motion.p
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        viewport={{once:true}}
        transition={{duration:1,delay:0.4,ease:"easeIn"}} className="text-white w-full md:w-[400px] text-center font-weight-400">
          With a passion for nature-centric living spaces, we bring you closer
          to the beauty and serenity of the natural world.
        </motion.p>
      </div>
    </section>
  );
};
export default Banner;
