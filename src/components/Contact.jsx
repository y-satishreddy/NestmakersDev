import { motion } from "framer-motion";
import Form from "./Form";
const Contact = () => {
  return (
    <>
      <section className="h-[40vh] w-full bg-projects-img pt-[120px]">
        <div className="flex flex-col items-center justify-center md:px-[50px] px-[20px]">
          <motion.h1
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-white text-center w-full font-weight-500"
          >
            Let’s build your nest together!
          </motion.h1>
<motion.button
  onClick={() => {
    const form = document.getElementById("form");
    if (!form) return;

    const header = document.querySelector("header"); // or your navbar selector
    const headerHeight = header ? header.offsetHeight : 120;

    const y =
      form.getBoundingClientRect().top +
      window.pageYOffset -
      headerHeight -
      20; // small breathing space

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  }}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1.8, ease: "easeIn" }}
  className="mt-[15px] bg-transparent text-white hover:text-light-green border border-white px-6 py-2 cursor-pointer hover:bg-[#FFFFFF36] transition-hover duration-300"
>
  GET IN TOUCH
</motion.button>

        </div>
      </section>
      <section className="w-full flex items-center justify-center">
        <div className="w-full max-w-[1400px] px-[20px] md:px-[50px] flex flex-col justify-center items-center pt-[50px] md:pt-[100px] pb-[25px] md:pb-[50px] overflow-x-hidden">
          <div className="flex w-full gap-[50px] flex-col md:flex-row ">
            <motion.div
              className="md:w-[70%] w-full h-[350px]"
              initial={{ x: "-100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeIn" }}
              viewport={{ once: true }}
            >
              <iframe
                loading="lazy"
                src="https://maps.google.com/maps?q=nest%20makers&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"
                title="nest makers"
                aria-label="nest makers"
                className="w-full h-full"
              ></iframe>
            </motion.div>
            <div className="md:w-[30%] w-full">
              <motion.h2
                className="text-[#35674E] font-semibold mb-[15px]"
                initial={{ x: "100%", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeIn" }}
                viewport={{ once: true }}
              >
                <a href="">(+91) 63669 63669</a>
              </motion.h2>
              <motion.p
                className="text-light-green font-semibold mb-[15px]"
                initial={{ x: "100%", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeIn", delay: 0.4 }}
                viewport={{ once: true }}
              >
                <a href="">sales@nestmakers.in</a>
              </motion.p>
              <motion.p
                initial={{ x: "100%", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeIn", delay: 0.8 }}
                viewport={{ once: true }}
              >
                #201, Concrete Building, Behind Care Hospital Jayabheri Pine
                Valley, Gachibowli, Hyderabad Telangana – 500 032
              </motion.p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex items-center justify-center">
        <div className="w-full max-w-[1400px] px-[20px] md:px-[50px] flex flex-col justify-start items-start pt-[25px] md:pt-[50px] pb-[50px] md:pb-[100px] overflow-x-hidden">
          <div className="w-full scroll-mt-[550px]" id="form">
            <Form />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
