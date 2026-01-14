import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
const Footer = () => {
  const location = useLocation();

  const navClass = (path) =>
    location.pathname === path
      ? "text-[#95b67b]"
      : "text-white hover:text-[#95b67b]";
  return (
    <footer className="w-full flex items-center justify-center bg-[#35674E]">
      <div className="text-white max-w-[1400px] px-[20px] md:px-[50px] flex overflow-hidden flex-col items-center justify-center pt-[50px] md:pt-[70px] pb-[30px]">
        <div className="flex md:flex-row flex-col gap-[20px]">
          <div className="w-full md:w-[30%] lg:w-[25%] flex flex-col items-start gap-[10px]">
            <motion.h3
              initial={{ x: "-100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeIn" }}
              viewport={{ once: true }}
              className="font-semibold"
            >
              RERA No: REA02400085612
            </motion.h3>
            <motion.p
              initial={{ x: "-100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeIn", delay: 0.4 }}
              viewport={{ once: true }}
              className="text-white text-[18px]"
            >
              From preserving green spaces to promoting biodiversity, we are
              committed to developing communities that respect and embrace the
              natural environment.
            </motion.p>
          </div>
          <div className="w-full md:w-[40%] lg:w-[55%] flex flex-col md:items-center justify-start">
            <motion.h2
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeIn", delay: 0.4 }}
              viewport={{ once: true }}
              className="w-full md:text-center text-left font-semibold mb-[10px] md:mb-[0px]"
            >
              <a
                href="tel:+91 63669 63669" target="_blank"
                className="font-semibold text-[#95b67b]"
              >
                (+91) 63669 63669
              </a>
            </motion.h2>
            <motion.p
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeIn", delay: 0.4 }}
              viewport={{ once: true }}
              className="w-full md:text-center text-left mb-[10px]"
            >
              <a href="mailto:sales@nestmakers.in" target="_blank"className="text-white">
                sales@nestmakers.in
              </a>
            </motion.p>
            <div className="flex flex-col gap-[10px] items-baseline justify-baseline">
              <motion.h2
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeIn", delay: 0.4 }}
                viewport={{ once: true }}
                className="w-full md:text-center text-left text-[#95b67b] font-18 font-semibold"
              >
                Quick Links
              </motion.h2>
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeIn", delay: 0.4 }}
                viewport={{ once: true }}
                className="flex text-[18px] flex-wrap gap-y-[8px] gap-x-[15px] items-start justify-baseline md:items-center md:justify-center"
              >
                <Link to="/" className={navClass("/")}>
                  Home
                </Link>

                <Link to="/about" className={navClass("/about")}>
                  About
                </Link>

                <Link to="/projects" className={navClass("/projects")}>
                  Projects
                </Link>

                <Link to="/careers" className={navClass("/careers")}>
                  Careers
                </Link>

                <Link to="/contact" className={navClass("/contact")}>
                  Contact
                </Link>
              </motion.div>
            </div>
          </div>
          <div className="w-full md:w-[30%] lg:w-[25%] ">
            <motion.p
              initial={{ x: "100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeIn", delay: 0.4 }}
              viewport={{ once: true }}
              className="w-full md:text-right text-left text-white"
            >
              #201, Concrete Building Behind Care Hospital Gachibowli Hyderabad
              Telangana – 500 032
            </motion.p>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeIn", delay: 0.4 }}
          viewport={{ once: true }}
          className="border h-[1px] w-full md:w-[60%] border-[#95B67B] my-[20px] "
        ></motion.div>
        <p>
          <div>
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeIn", delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center text-[white] text-[16px] font-normal w-full"
            >
              © 2024 Nestmakers. All Rights Reserved | Terms & Conditions |
              Privacy Policy <br />
              Designed & Developed by{" "}
              <a
                href="https://whitethoughts.in"
                target="_blank"
                className="hover:text-[#95B67B]"
              >
                White Thoughts and Branding
              </a>
            </motion.div>
          </div>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
