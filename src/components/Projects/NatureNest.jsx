import { motion } from "framer-motion";
const NatureNest = () => {
  return (
    <>
      <section className="bg-nature-nest-projects h-[100vh] w-full flex items-center justify-center">
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full h-full flex items-end justify-end"
        >
          <h1 className="text-white w-full text-center mb-[20px]">
            Nature’s Nest
          </h1>
        </motion.div>
      </section>
      <section className=" w-full flex items-center justify-center">
        <div className="max-w-[1400px] w-full py-[50px] md:py-[100px] px-[20px] md:px-[50px] flex items-center justify-center">
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeIn" }}
            viewport={{ once: true, viewport: 0.2 }}
            className="w-full md:w-[550px] text-center"
          >
            Planned and built to extract nature’s beauty into design, Nature’s
            Nest is a half-acre apartment project with 25 nestlings ready to set
            your lifestyle apart through architecture, amenities, and an
            abundance of open space far from the clogged city life.
          </motion.p>
        </div>
      </section>
    </>
  );
};
export default NatureNest;
