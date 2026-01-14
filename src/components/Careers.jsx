import { useState } from "react";
import CareerForm from "./CareersForm";
import { motion, AnimatePresence } from "framer-motion";

const Careers = () => {
  const [readMore, setReadMore] = useState(null);
  return (
    <>
      <section className="w-full bg-careers-img flex items-center justify-center">
        <div className="max-w-[1400px] w-full flex flex-col items-center justify-center md:px-[50px] px-[20px] h-[100vh]">
          <div className="flex flex-col items-start justify-baseline w-full">
            <motion.h2
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeIn" }}
              viewport={{ once: true }}
              className="text-white"
            >
              Grow with Nest Makers
            </motion.h2>
            <div id="form">
              <CareerForm />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex justify-center overflow-hidden">
        <div className="w-full max-w-[1400px] flex flex-col px-[20px] md:px-[50px] py-[50px] md:py-[100px]">
          {/* Heading */}
          <motion.h2
            className="w-full mb-[30px] text-light-green"
            initial={{ x: "-100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeIn" }}
            viewport={{ once: true }}
          >
            Job Opportunities
          </motion.h2>

          <div className="w-full flex md:flex-row flex-col items-start gap-[20px]">
            <div className="w-full md:w-[70%]">
              <motion.h4
                className="font-weight-600 mb-[10px] text-[#35674E]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeIn" }}
                viewport={{ once: true }}
              >
                Store Manager - Civil
              </motion.h4>

              <motion.p
                initial={{ opacity: 0, y: "100%" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeIn" }}
                viewport={{ once: true }}
              >
                <strong>Role:</strong> Store Manager – Civil <br />
                <strong>Company:</strong> Nestmakers Builders and Developers{" "}
                <br />
                <strong>Project:</strong> Bliss in the Woods <br />
                <strong>Location:</strong> Harshaguda, RR District, Telangana{" "}
                <br />
                <strong>Experience:</strong> 5 – 7 Years (with a preference for
                construction site store/warehouse management) <br />
                <strong>Compensation:</strong> 4.8 – 5.4 LPA
              </motion.p>

              <motion.button
                onClick={() =>
                  setReadMore(
                   readMore === "storeManager1" ? null : "storeManager1"
                  )
                }
                className="my-[10px] flex items-center gap-2 font-medium text-[#35674E]"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeIn" }}
                viewport={{ once: true }}
              >
                <span
                  className={`inline-block transition-transform duration-300 ${
                    readMore ? "rotate-90" : "rotate-0"
                  }`}
                  style={{ fontSize: "16px", lineHeight: "5px" }}
                >
                  ❯❯
                </span>
                Job Description
              </motion.button>

              <AnimatePresence initial={false}>
                {readMore === "storeManager1" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p>
                      <strong>
                        About Nestmakers: Where Vision Meets Concrete
                      </strong>
                      <br />
                      At Nestmakers, we don’t just develop properties; we craft
                      the future of living spaces in Telangana. Our commitment
                      to thoughtful design, robust quality, and timely delivery
                      transforms landscapes and enriches lives. If you believe
                      in building with integrity and innovation, you belong with
                      us.
                    </p>

                    <p>
                      <strong>The Challenge You’ll Own:</strong>
                      <br />
                      We’re looking for a highly organized and sharp{" "}
                      <strong>Store Manager – Civil</strong> who thrives in the
                      fast-paced environment of a construction site. This role
                      goes beyond managing a stockroom; it’s about strategically
                      safeguarding and distributing all site materials, tools,
                      and equipment. You’ll be the orchestrator of material
                      flow, ensuring seamless availability for our construction
                      teams while maintaining strict control over inventory,
                      costs, and safety. Your efficiency and foresight will
                      directly impact project timelines and profitability.
                    </p>

                    <p>
                      <strong>Your Impact Will Include:</strong>
                    </p>
                    <ul>
                      <li>
                        <strong>Mastering Material Flow:</strong> Overseeing the
                        systematic receipt, proper storage, precise issuance,
                        and secure dispatch of all construction materials,
                        tools, and equipment on site.
                      </li>
                      <li>
                        <strong>Precision Inventory Control:</strong>{" "}
                        Implementing robust inventory management systems (both
                        physical and digital), conducting regular stock
                        verification and reconciliation.
                      </li>
                      <li>
                        <strong>Optimizing Site Logistics:</strong> Coordinating
                        with suppliers, transporters, and internal teams to
                        ensure timely deliveries and an organized site yard.
                      </li>
                      <li>
                        <strong>Cost & Waste Reduction:</strong> Identifying
                        opportunities to reduce material wastage, prevent
                        pilferage, and manage obsolete stock.
                      </li>
                      <li>
                        <strong>Upholding Safety & Security:</strong>{" "}
                        Maintaining a clean, organized store area that complies
                        with all safety standards and safeguards materials.
                      </li>
                      <li>
                        <strong>Accurate Record-Keeping:</strong> Maintaining
                        detailed records of incoming and outgoing materials,
                        inventory reports, and stock reconciliation.
                      </li>
                      <li>
                        <strong>Team Leadership:</strong> Supervising and
                        guiding store assistants/laborers and ensuring adherence
                        to procedures.
                      </li>
                      <li>
                        <strong>Cross-Functional Collaboration:</strong> Working
                        closely with Project Managers, Site Engineers, and the
                        Purchase team to anticipate material needs and resolve
                        supply issues.
                      </li>
                    </ul>

                    <p>
                      <strong>Who You Are:</strong>
                    </p>
                    <ul>
                      <li>
                        <strong>The Organizer:</strong> 5–7 years of experience
                        managing construction site stores or warehouses.
                      </li>
                      <li>
                        <strong>The Material Expert:</strong> Strong
                        understanding of construction materials and storage
                        requirements.
                      </li>
                      <li>
                        <strong>The System Thinker:</strong> Experience with
                        inventory software and MS Office (Excel required).
                      </li>
                      <li>
                        <strong>The Detail-Oriented:</strong> Excellent accuracy
                        in tracking quantities and documentation.
                      </li>
                      <li>
                        <strong>The Problem Solver:</strong> Ability to
                        anticipate shortages and resolve logistical challenges.
                      </li>
                      <li>
                        <strong>The Leader:</strong> Proven experience
                        supervising store staff or laborers.
                      </li>
                      <li>
                        <strong>The Communicator:</strong> Clear and effective
                        communication with on-site and off-site teams.
                      </li>
                      <li>
                        <strong>The Site-Ready:</strong> Comfortable working in
                        a demanding construction site environment.
                      </li>
                    </ul>

                    <p>
                      <strong>Why Nestmakers?</strong>
                      <br />
                      Join a team where your organizational expertise forms the
                      backbone of our operations. Your role directly contributes
                      to efficient, high-quality project delivery. We offer a
                      competitive package and a culture that supports
                      professional growth and innovation.
                    </p>

                    <p>
                      <strong>Ready to Build Something Great?</strong>
                      <br />
                      If you’re a meticulous manager with a passion for
                      efficient site operations, send your resume and a brief
                      note about your most impactful experience managing a
                      construction site store to
                      <strong> info@nestmakers.in</strong>. Please mention
                      <strong>“Store Manager – Civil (BIW – NM)”</strong> in the
                      subject line.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="w-full md:w-[30%] flex md:justify-center items-start">
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.4, ease: "easeIn" }}
                viewport={{ once: true }}
                className="bg-[#35674E] mt-[10px] hover:bg-white cursor-pointer font-weight-400 text-light-green-hover transition-all duration-300 ease-in text-center leading-[16px] py-2 pb-3 px-6 text-white border-[2px] border-[#95b67b]"
                onClick={() => {
                  const form = document.getElementById("form");
                  if (!form) return;
                  window.scrollTo({ top: form.offsetTop, behavior: "smooth" });
                }}
              >
                Apply Now
              </motion.button>
            </div>
          </div>

          <motion.div 
          initial={{y:"100%", opacity:0}}
          whileInView={{y:0,opacity:1}}
          transition={{duration:0.8, ease:"easeIn"}}
          viewport={{once:true}}
          className="w-full bg-[#ccc] h-[1px] mt-[20px] mb-[50px]"></motion.div>

          <div className="w-full flex md:flex-row flex-col items-start gap-[20px]">
            <div className="w-full md:w-[70%]">
              <motion.h4
                className="font-weight-600 mb-[10px] text-[#35674E]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeIn" }}
                viewport={{ once: true }}
              >
                Store Manager - Civil
              </motion.h4>

              <motion.p
                initial={{ opacity: 0, y: "100%" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeIn" }}
                viewport={{ once: true }}
              >
                <strong>Role:</strong> Store Manager – Civil <br />
                <strong>Company:</strong> Nestmakers Builders and Developers{" "}
                <br />
                <strong>Project:</strong> Bliss in the Woods <br />
                <strong>Location:</strong> Harshaguda, RR District, Telangana{" "}
                <br />
                <strong>Experience:</strong> 5 – 7 Years (with a preference for
                construction site store/warehouse management) <br />
                <strong>Compensation:</strong> 4.8 – 5.4 LPA
              </motion.p>

              <motion.button
                onClick={() =>
                  setReadMore(
                    readMore === "storeManager2" ? null : "storeManager2"
                  )
                }
                className="my-[10px] flex items-center gap-2 font-medium text-[#35674E]"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeIn" }}
                viewport={{ once: true }}
              >
                <span
                  className={`inline-block transition-transform duration-300 ${
                    readMore ? "rotate-90" : "rotate-0"
                  }`}
                  style={{ fontSize: "16px", lineHeight: "5px" }}
                >
                  ❯❯
                </span>
                Job Description
              </motion.button>

              <AnimatePresence initial={false}>
                {readMore === "storeManager2" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p>
                      <strong>
                        About Nestmakers: Where Vision Meets Concrete
                      </strong>
                      <br />
                      At Nestmakers, we don’t just develop properties; we craft
                      the future of living spaces in Telangana. Our commitment
                      to thoughtful design, robust quality, and timely delivery
                      transforms landscapes and enriches lives. If you believe
                      in building with integrity and innovation, you belong with
                      us.
                    </p>

                    <p>
                      <strong>The Challenge You’ll Own:</strong>
                      <br />
                      We’re looking for a highly organized and sharp{" "}
                      <strong>Store Manager – Civil</strong> who thrives in the
                      fast-paced environment of a construction site. This role
                      goes beyond managing a stockroom; it’s about strategically
                      safeguarding and distributing all site materials, tools,
                      and equipment. You’ll be the orchestrator of material
                      flow, ensuring seamless availability for our construction
                      teams while maintaining strict control over inventory,
                      costs, and safety. Your efficiency and foresight will
                      directly impact project timelines and profitability.
                    </p>

                    <p>
                      <strong>Your Impact Will Include:</strong>
                    </p>
                    <ul>
                      <li>
                        <strong>Mastering Material Flow:</strong> Overseeing the
                        systematic receipt, proper storage, precise issuance,
                        and secure dispatch of all construction materials,
                        tools, and equipment on site.
                      </li>
                      <li>
                        <strong>Precision Inventory Control:</strong>{" "}
                        Implementing robust inventory management systems (both
                        physical and digital), conducting regular stock
                        verification and reconciliation.
                      </li>
                      <li>
                        <strong>Optimizing Site Logistics:</strong> Coordinating
                        with suppliers, transporters, and internal teams to
                        ensure timely deliveries and an organized site yard.
                      </li>
                      <li>
                        <strong>Cost & Waste Reduction:</strong> Identifying
                        opportunities to reduce material wastage, prevent
                        pilferage, and manage obsolete stock.
                      </li>
                      <li>
                        <strong>Upholding Safety & Security:</strong>{" "}
                        Maintaining a clean, organized store area that complies
                        with all safety standards and safeguards materials.
                      </li>
                      <li>
                        <strong>Accurate Record-Keeping:</strong> Maintaining
                        detailed records of incoming and outgoing materials,
                        inventory reports, and stock reconciliation.
                      </li>
                      <li>
                        <strong>Team Leadership:</strong> Supervising and
                        guiding store assistants/laborers and ensuring adherence
                        to procedures.
                      </li>
                      <li>
                        <strong>Cross-Functional Collaboration:</strong> Working
                        closely with Project Managers, Site Engineers, and the
                        Purchase team to anticipate material needs and resolve
                        supply issues.
                      </li>
                    </ul>

                    <p>
                      <strong>Who You Are:</strong>
                    </p>
                    <ul>
                      <li>
                        <strong>The Organizer:</strong> 5–7 years of experience
                        managing construction site stores or warehouses.
                      </li>
                      <li>
                        <strong>The Material Expert:</strong> Strong
                        understanding of construction materials and storage
                        requirements.
                      </li>
                      <li>
                        <strong>The System Thinker:</strong> Experience with
                        inventory software and MS Office (Excel required).
                      </li>
                      <li>
                        <strong>The Detail-Oriented:</strong> Excellent accuracy
                        in tracking quantities and documentation.
                      </li>
                      <li>
                        <strong>The Problem Solver:</strong> Ability to
                        anticipate shortages and resolve logistical challenges.
                      </li>
                      <li>
                        <strong>The Leader:</strong> Proven experience
                        supervising store staff or laborers.
                      </li>
                      <li>
                        <strong>The Communicator:</strong> Clear and effective
                        communication with on-site and off-site teams.
                      </li>
                      <li>
                        <strong>The Site-Ready:</strong> Comfortable working in
                        a demanding construction site environment.
                      </li>
                    </ul>

                    <p>
                      <strong>Why Nestmakers?</strong>
                      <br />
                      Join a team where your organizational expertise forms the
                      backbone of our operations. Your role directly contributes
                      to efficient, high-quality project delivery. We offer a
                      competitive package and a culture that supports
                      professional growth and innovation.
                    </p>

                    <p>
                      <strong>Ready to Build Something Great?</strong>
                      <br />
                      If you’re a meticulous manager with a passion for
                      efficient site operations, send your resume and a brief
                      note about your most impactful experience managing a
                      construction site store to
                      <strong> info@nestmakers.in</strong>. Please mention
                      <strong>“Store Manager – Civil (BIW – NM)”</strong> in the
                      subject line.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="w-full md:w-[30%] flex md:justify-center items-start">
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.4, ease: "easeIn" }}
                viewport={{ once: true }}
                className="bg-[#35674E] mt-[10px] hover:bg-white hover:text-[#7A7A7A] transition-all duration-300 ease-in text-center leading-[16px] py-2 pb-3 px-6 text-white border-[2px] border-[#95b67b]"
                onClick={() => {
                  const form = document.getElementById("form");
                  if (!form) return;
                  window.scrollTo({ top: form.offsetTop, behavior: "smooth" });
                }}
              >
                Apply Now
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;
