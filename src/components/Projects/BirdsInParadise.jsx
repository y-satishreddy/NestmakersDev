import { motion } from "framer-motion";
const BirdsInParadise = () => {
  return (
    <>
      <section className="bg-birds-in-the-paradise-projects h-[100vh] w-full flex items-center justify-center">
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full h-full flex items-center justify-center"
        >
          <h1 className="text-white w-full text-center ">Birds in Paradise</h1>
        </motion.div>
      </section>
      <motion.section
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
        className=" w-full flex items-center justify-center"
      >
        <div className="max-w-[1400px] w-full py-[50px] md:py-[100px] px-[20px] md:px-[50px] flex items-center justify-center">
          <motion.p className="w-full md:w-[550px] text-center">
            Birds in Paradise is a high-toned apartment project built on 10
            acres of endless greenery. Integrating the most coveted technologies
            into design, the apartments are planned with landscaped living
            areas, eco-friendly parking spaces and terrace gardens to unveil a
            unique and exclusive lifestyle.
          </motion.p>
        </div>
      </motion.section>
    </>
  );
};
export default BirdsInParadise;
