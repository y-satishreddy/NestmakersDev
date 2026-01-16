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

          <div className="w-full flex md:flex-row flex-col items-start md:gap-[20px]">
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
                className="line-height-25"
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
                    readMore === "storeManager" ? null : "storeManager"
                  )
                }
                className="mt-[20px] flex items-center gap-2 font-medium text-[#35674E] cursor-pointer "
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeIn" }}
                viewport={{ once: true }}
              >
                <span
                  className={`inline-block transition-transform duration-300 ${
                    readMore === "storeManager" ? "rotate-90" : "rotate-0"
                  }`}
                  style={{ fontSize: "16px", lineHeight: "5px" }}
                >
                  ❯❯
                </span>
                Job Description
              </motion.button>

              <AnimatePresence initial={false}>
                {readMore === "storeManager" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="mt-[20px] mb-[10px] line-height-23">
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

                    <p className="mb-[10px] line-height-23">
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
                      costs, and safety. If you’ve honed your skills managing
                      logistics and inventory for large-scale construction
                      projects, you’ll appreciate our focus on operational
                      excellence and waste reduction. Your efficiency and
                      foresight will directly impact project timelines and
                      profitability.
                    </p>

                    <p className="mb-[10px] line-height-23">
                      <strong>Your Impact Will Include:</strong>
                    </p>
                    <ul className="list-disc list-outside pl-6 lists marker:text-[25px]">
                      <li className="mb-[5px] line-height-23">
                        <strong>Mastering Material Flow:</strong> Overseeing the
                        systematic receipt, proper storage, precise issuance,
                        and secure dispatch of all construction materials,
                        tools, and equipment on site.
                      </li>
                      <li className="mb-[5px] line-height-23">
                        <strong>Precision Inventory Control:</strong>{" "}
                        Implementing robust inventory management systems (both
                        physical and digital) to ensure accuracy, minimize loss,
                        and facilitate timely reordering. This includes regular
                        stock verification and reconciliation.
                      </li>
                      <li className="mb-[5px] line-height-23">
                        <strong>Optimizing Site Logistics:</strong> Coordinating
                        effectively with suppliers, transporters, and internal
                        teams to ensure timely material deliveries and efficient
                        offloading, maintaining an organized site yard.
                      </li>
                      <li className="mb-[5px] line-height-23">
                        <strong>Cost & Waste Reduction:</strong> Proactively
                        identifying opportunities to reduce material wastage,
                        prevent pilferage, and manage obsolete stock, directly
                        enhancing project cost-efficiency.
                      </li>
                      <li className="mb-[5px] line-height-23">
                        <strong>Upholding Safety & Security:</strong> Ensuring
                        the store area is consistently clean, organized, and
                        fully compliant with all safety standards. Safeguarding
                        all materials and equipment from damage, theft, and
                        unauthorized access.
                      </li>
                      <li className="mb-[5px] line-height-23 ">
                        <strong>Accurate Record-Keeping:</strong> Maintaining
                        meticulous and up-to-date records of all incoming and
                        outgoing materials, generating regular inventory
                        reports, and performing comprehensive stock
                        reconciliation.
                      </li>
                      <li className="mb-[5px] line-height-23">
                        <strong>Team Leadership:</strong> Supervising and
                        guiding store assistants/laborers, ensuring proper
                        material handling practices and strict adherence to
                        established procedures.
                      </li>
                      <li className="mb-[10px] line-height-23">
                        <strong>Cross-Functional Collaboration:</strong>{" "}
                        Liaising closely with Project Managers, Site Engineers,
                        and the Purchase team to accurately anticipate material
                        needs and proactively resolve any supply chain issues.
                      </li>
                    </ul>

                    <p className="mb-[10px] line-height-23">
                      <strong>Who You Are:</strong>
                    </p>

                    <ul className="list-disc list-outside pl-6 lists marker:text-[25px]">
                      <li className="mb-[5px] line-height-23">
                        <strong>The Organizer:</strong> 5-7 years of
                        demonstrable success in managing stores, warehouses, or
                        material yards, specifically within the construction
                        industry.
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>The Material Expert:</strong> Solid
                        understanding of various construction materials, their
                        specific storage requirements, and common site
                        equipment.
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>The System Thinker:</strong>Proven experience
                        with inventory management software and strong
                        proficiency in MS Office (Excel is essential).
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>The Detail-Oriented:</strong> Exceptional
                        attention to detail for precise tracking of quantities,
                        quality, and complete documentation.
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>The Problem Solver:</strong> Ability to
                        anticipate material needs, identify potential shortages,
                        and resolve logistical challenges proactively in a
                        dynamic environment.
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>The Leader:</strong> A track record of
                        successfully supervising and motivating a small team of
                        store personnel or laborers.
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>The Communicator:</strong> Clear, concise, and
                        effective communication skills to coordinate seamlessly
                        with various stakeholders on and off-site.
                      </li>

                      <li className="mb-[10px] line-height-23">
                        <strong>The Site-Ready:</strong>Comfortable working
                        effectively in a demanding construction site
                        environment, understanding its unique challenges and
                        stringent safety protocols.
                      </li>
                    </ul>

                    <p className="mb-[10px] line-height-23">
                      <strong>Why Nestmakers?</strong>
                      <br />
                      Join a team where your organizational prowess directly
                      contributes to the operational backbone of our projects.
                      Your expertise in managing site logistics and inventory is
                      absolutely crucial to our success, and your efforts will
                      directly translate into efficiently built, high-quality
                      developments. We offer a competitive package and a culture
                      that supports professional growth and innovation in a
                      thriving industry.
                    </p>

                    <p className="line-height-23">
                      <strong>Ready to Build Something Great?</strong>
                      <br />
                      If you’re a meticulous manager with a passion for
                      efficient site operations and a talent for keeping things
                      running smoothly, we want to hear from you. Send your
                      resume and a brief note about your most impactful
                      experience managing a construction site store to{" "}
                      <a
                        href="mailto:info@nestmakers.in"
                        className="a-tag cursor-pointer text-light-green"
                      >
                        info@nestmakers.in
                      </a>
                      . Please refer{" "}
                      <strong>“Store Manager – Civil (BIW – NM)”</strong> in
                      your subject.
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
                className="bg-[#35674E] mt-[10px] hover:bg-white cursor-pointer font-weight-400 text-black-hover transition-all duration-300 ease-in text-center leading-[16px] py-2 pb-3 px-6 text-white border-[2px] border-[#95b67b]"
                onClick={() => {
                  const form = document.getElementById("form");
                  if (!form) return;
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Apply Now
              </motion.button>
            </div>
          </div>

          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeIn" }}
            viewport={{ once: true }}
            className="w-full bg-[#ccc] h-[1px] my-[25px] md:my-[50px]"
          ></motion.div>

          {/* secondary info */}

          <div className="w-full flex md:flex-row flex-col items-start md:gap-[20px]">
            <div className="w-full md:w-[70%]">
              <motion.h4
                className="font-weight-600 mb-[10px] text-[#35674E]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeIn" }}
                viewport={{ once: true }}
              >
                Project Manager - Civil
              </motion.h4>

              <motion.p
                initial={{ opacity: 0, y: "100%" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeIn" }}
                viewport={{ once: true }}
                className="line-height-25"
              >
                <strong>Role:</strong> Project Manager – Civil
                <br />
                <strong>Company:</strong> Nestmakers Builders and Developers{" "}
                <br />
                <strong>Project:</strong> Bliss in the Woods <br />
                <strong>Location:</strong> Harshaguda, RR District, Telangana{" "}
                <br />
                <strong>Experience:</strong> 15+ Years (with a preference for
                PMC & Villa expertise)
                <br />
                <strong>Compensation:</strong> 12 – 15 LPA
              </motion.p>

              <motion.button
                onClick={() =>
                  setReadMore(
                    readMore === "projectManagerCivil"
                      ? null
                      : "projectManagerCivil"
                  )
                }
                className="mt-[20px] flex items-center gap-2 font-medium text-[#35674E] cursor-pointer"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeIn" }}
                viewport={{ once: true }}
              >
                <span
                  className={`inline-block transition-transform duration-300 ${
                    readMore === "projectManagerCivil"
                      ? "rotate-90"
                      : "rotate-0"
                  }`}
                  style={{ fontSize: "16px", lineHeight: "5px" }}
                >
                  ❯❯
                </span>
                Job Description
              </motion.button>

              <AnimatePresence initial={false}>
                {readMore === "projectManagerCivil" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="mt-[20px] mb-[10px] line-height-23">
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

                    <p className="mb-[10px] line-height-23">
                      <strong>The Challenge You’ll Own:</strong>
                      <br />
                      We’re looking for a seasoned{" "}
                      <strong>Project Manager – Civil</strong> who thrives on
                      bringing complex visions to life. This isn’t just about
                      managing schedules and budgets; it’s about being the
                      orchestrator of our next landmark project in Harshaguda.
                      You will be the linchpin, ensuring every brick, every
                      beam, and every design detail aligns with our promise of
                      excellence. If you’ve honed your skills at a{" "}
                      <strong>Project Management Consultancy (PMC)</strong>,
                      you’ll appreciate our focus on strategic oversight and
                      meticulous execution. And if the intricate details of{" "}
                      <strong>residential villa projects</strong> light you up,
                      you’ll find an immediate fit here.
                    </p>

                    <p className="mb-[10px] line-height-23">
                      <strong>Your Impact Will Include:</strong>
                    </p>
                    <ul className="list-disc list-outside pl-6 lists marker:text-[25px]">
                      <li className="mb-[5px] line-height-23">
                        <strong>Leading the Symphony: </strong> Directing
                        multi-disciplinary teams (PMC, Engineers, Contractors)
                        to ensure seamless project flow from groundbreaking to
                        handover.
                      </li>
                      <li className="mb-[5px] line-height-23">
                        <strong>Mastering the Numbers:</strong> Controlling
                        costs and maximizing value, turning budgets into
                        blueprints for financial success.
                      </li>
                      <li className="mb-[5px] line-height-23">
                        <strong>Foreseeing the Future:</strong> Proactively
                        identifying and mitigating risks before they become
                        roadblocks.
                      </li>
                      <li className="mb-[5px] line-height-23">
                        <strong>Upholding Excellence:</strong> Championing our
                        rigorous quality and safety standards, making sure every
                        structure is built to last and protect.
                      </li>
                      <li className="mb-[5px] line-height-23">
                        <strong>Bridging the Gaps:</strong> Being the trusted
                        voice between Nestmakers, our partners, and the
                        community.
                      </li>
                      <li className="mb-[5px] line-height-23 ">
                        <strong>Shaping the Landscape: </strong> Guiding
                        technical decisions and innovations that define our
                        projects.
                      </li>
                    </ul>

                    <p className="mb-[10px] line-height-23">
                      <strong>Who You Are:</strong>
                    </p>
                    <ul className="list-disc list-outside pl-6 lists marker:text-[25px]">
                      <li className="mb-[5px] line-height-23">
                        <strong>The Veteran:</strong> 15+ years of demonstrable
                        success in civil project management.
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>The PMC Pro (Preferred):</strong> Experience
                        from a Project Management Consultancy firm.
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>The Villa Virtuoso (Bonus):</strong> A proven
                        track record with residential villa developments.
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>The Strategist:</strong> A Bachelor’s / Master
                        degree in Civil Engineering.
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>The Tech-Savvy Leader:</strong> Proficient with
                        industry software (AutoCAD / MS Office).
                      </li>

                      <li className="mb-[10px] line-height-23">
                        <strong>The Communicator:</strong> An exceptional
                        ability to inspire, negotiate, and clarify.
                      </li>
                    </ul>

                    <p className="mb-[10px] line-height-23">
                      <strong>Why Nestmakers?</strong>
                      <br />
                      Join a team where your expertise is valued, your
                      leadership is empowered, and your projects leave a
                      tangible legacy. We offer a competitive package and a
                      culture that supports growth and innovation.
                    </p>

                    <p className="line-height-23">
                      <strong>Ready to Build Something Great?</strong>
                      <br />
                      If you’re a builder at heart and a supportive leader by
                      nature, we want to hear from you. Send your resume and a
                      brief note about your most impactful project to{" "}
                      <a
                        href="mailto:info@nestmakers.in"
                        className="a-tag cursor-pointer text-light-green"
                      >
                        info@nestmakers.in
                      </a>
                      . Please refer{" "}
                      <strong>
                        “Deputy Project Manager – Civil (BIW – NM)”
                      </strong>{" "}
                      in your subject.
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
                className="bg-[#35674E] mt-[10px] hover:bg-white cursor-pointer font-weight-400 text-black-hover transition-all duration-300 ease-in text-center leading-[16px] py-2 pb-3 px-6 text-white border-[2px] border-[#95b67b]"
                onClick={() => {
                  const form = document.getElementById("form");
                  if (!form) return;
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Apply Now
              </motion.button>
            </div>
          </div>

          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeIn" }}
            viewport={{ once: true }}
            className="w-full bg-[#ccc] h-[1px] my-[25px] md:my-[50px]"
          ></motion.div>
          {/* Third Info */}

          <div className="w-full flex md:flex-row flex-col items-start md:gap-[20px]">
            <div className="w-full md:w-[70%]">
              <motion.h4
                className="font-weight-600 mb-[10px] text-[#35674E]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeIn" }}
                viewport={{ once: true }}
              >
                Deputy Project Manager - Civil
              </motion.h4>

              <motion.p
                initial={{ opacity: 0, y: "100%" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeIn" }}
                viewport={{ once: true }}
                className="line-height-25"
              >
                <strong>Role:</strong> Deputy Project Manager – Civil <br />
                <strong>Company:</strong> Nestmakers Builders and Developers{" "}
                <br />
                <strong>Project:</strong> Bliss in the Woods <br />
                <strong>Location:</strong> Harshaguda, RR District, Telangana{" "}
                <br />
                <strong>Experience:</strong> 12+ Years (with a preference for
                PMC & Villa expertise) <br />
                <strong>Compensation:</strong> Up to 9 LPA <br />
                <strong>Quantity:</strong> 2 Nos.
              </motion.p>

              <motion.button
                onClick={() =>
                  setReadMore(
                    readMore === "deputyProjectManagerCivil"
                      ? null
                      : "deputyProjectManagerCivil"
                  )
                }
                className="mt-[20px] flex items-center gap-2 font-medium text-[#35674E] cursor-pointer"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeIn" }}
                viewport={{ once: true }}
              >
                <span
                  className={`inline-block transition-transform duration-300 ${
                    readMore === "deputyProjectManagerCivil"
                      ? "rotate-90"
                      : "rotate-0"
                  }`}
                  style={{ fontSize: "16px", lineHeight: "5px" }}
                >
                  ❯❯
                </span>
                Job Description
              </motion.button>

              <AnimatePresence initial={false}>
                {readMore === "deputyProjectManagerCivil" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="mt-[20px] mb-[10px] line-height-23">
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

                    <p className="mb-[10px] line-height-23">
                      <strong>The Challenge You’ll Own:</strong>
                      <br />
                      We’re looking for a seasoned{" "}
                      <strong>Deputy Project Manager – Civil</strong> who
                      thrives on supporting the execution of complex visions.
                      This isn’t just about assisting with schedules and
                      budgets; it’s about being a critical pillar in the
                      orchestration of our next landmark project in Harshaguda.
                      You will be instrumental in ensuring every brick, every
                      beam, and every design detail aligns with our promise of
                      excellence.
                      <br />
                      If you’ve honed your skills at a{" "}
                      <strong>Project Management Consultancy (PMC)</strong>,
                      you’ll appreciate our focus on strategic oversight and
                      meticulous execution. And if the intricate details of{" "}
                      <strong>residential villa projects</strong> light you up,
                      you’ll find an immediate fit here.
                    </p>

                    <p className="mb-[10px] line-height-23">
                      <strong>Your Impact Will Include:</strong>
                    </p>
                    <ul className="list-disc list-outside pl-6 lists marker:text-[25px]">
                      <li className="mb-[5px] line-height-23">
                        <strong>Supporting the Symphony:</strong> Assisting in
                        directing multi-disciplinary teams (PMC, Engineers,
                        Contractors) to ensure seamless project flow from
                        groundbreaking to handover.
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>Mastering the Numbers:</strong> Supporting cost
                        control and value maximization, helping turn budgets
                        into blueprints for financial success.
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>Foreseeing the Future:</strong> Proactively
                        identifying potential risks and contributing to
                        mitigation strategies before they become roadblocks.
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>Upholding Excellence:</strong> Championing our
                        rigorous quality and safety standards on-site, making
                        sure every structure is built to last and protect.
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>Bridging the Gaps:</strong> Assisting in
                        effective communication between Nestmakers, our
                        partners, and the community.
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>Shaping the Landscape:</strong> Providing
                        technical support and insights to guide project
                        decisions and innovations.
                      </li>

                      <li className="mb-[10px] line-height-23">
                        <strong>Driving Progress:</strong> Ensuring daily and
                        weekly project milestones are met and reported
                        accurately.
                      </li>
                    </ul>

                    <p className="mb-[10px] line-height-23">
                      <strong>Who You Are:</strong>
                    </p>

                    <ul className="list-disc list-outside pl-6 lists marker:text-[25px]">
                      <li className="mb-[5px] line-height-23">
                        <strong>The Veteran:</strong> 12+ years of demonstrable
                        success in civil project management.
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>The PMC Pro (Preferred):</strong> Experience
                        from a Project Management Consultancy firm.
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>The Villa Virtuoso (Bonus):</strong> A proven
                        track record with residential villa developments.
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>The Strategist:</strong> A Bachelor’s / Master’s
                        degree in Civil Engineering.
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>The Tech-Savvy Leader:</strong> Proficient with
                        industry software (AutoCAD / MS Office).
                      </li>

                      <li className="mb-[10px] line-height-23">
                        <strong>The Communicator:</strong> An exceptional
                        ability to coordinate, report, and clarify.
                      </li>
                    </ul>

                    <p className="mb-[10px] line-height-23">
                      <strong>Why Nestmakers?</strong>
                      <br />
                      Join a team where your expertise is valued, your
                      contributions are empowered, and your projects leave a
                      tangible legacy. We offer a competitive package and a
                      culture that supports growth and innovation.
                    </p>

                    <p className="line-height-23">
                      <strong>Ready to Build Something Great?</strong>
                      <br />
                      If you’re a builder at heart and a supportive leader by
                      nature, we want to hear from you. Send your resume and a
                      brief note about your most impactful project to{" "}
                      <a
                        href="mailto:info@nestmakers.in"
                        className="a-tag cursor-pointer text-light-green"
                      >
                        info@nestmakers.in
                      </a>
                      . Please refer{" "}
                      <strong>
                        “Deputy Project Manager – Civil (BIW – NM)”
                      </strong>{" "}
                      in your subject.
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
                className="bg-[#35674E] mt-[10px] hover:bg-white cursor-pointer font-weight-400 text-black-hover transition-all duration-300 ease-in text-center leading-[16px] py-2 pb-3 px-6 text-white border-[2px] border-[#95b67b]"
                onClick={() => {
                  const form = document.getElementById("form");
                  if (!form) return;
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Apply Now
              </motion.button>
            </div>
          </div>

          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeIn" }}
            viewport={{ once: true }}
            className="w-full bg-[#ccc] h-[1px] my-[25px] md:my-[50px]"
          ></motion.div>
          {/* Fourth Info */}

          <div className="w-full flex md:flex-row flex-col items-start md:gap-[20px]">
            <div className="w-full md:w-[70%]">
              <motion.h4
                className="font-weight-600 mb-[10px] text-[#35674E]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeIn" }}
                viewport={{ once: true }}
              >
                Planning Engineer
              </motion.h4>

              <motion.p
                initial={{ opacity: 0, y: "100%" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeIn" }}
                viewport={{ once: true }}
                className="line-height-25"
              >
                <strong>Role:</strong> Planning Engineer <br />
                <strong>Company:</strong> Nestmakers Builders and Developers{" "}
                <br />
                <strong>Project:</strong> Bliss in the Woods <br />
                <strong>Location:</strong> Harshaguda, RR District, Telangana{" "}
                <br />
                <strong>Experience:</strong> 5-6 Years <br />
                <strong>Compensation:</strong> Up to 6 LPA <br />
                <strong>Quantity:</strong> 2 Nos.
              </motion.p>

              <motion.button
                onClick={() =>
                  setReadMore(
                    readMore === "planningEngineer" ? null : "planningEngineer"
                  )
                }
                className="mt-[20px] flex items-center gap-2 font-medium text-[#35674E] cursor-pointer"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeIn" }}
                viewport={{ once: true }}
              >
                <span
                  className={`inline-block transition-transform duration-300 ${
                    readMore === "planningEngineer" ? "rotate-90" : "rotate-0"
                  }`}
                  style={{ fontSize: "16px", lineHeight: "5px" }}
                >
                  ❯❯
                </span>
                Job Description
              </motion.button>

              <AnimatePresence initial={false}>
                {readMore === "planningEngineer" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="mt-[20px] mb-[10px] line-height-23">
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

                    <p className="mb-[10px] line-height-23">
                      <strong>The Challenge You’ll Own:</strong>
                      <br />
                      We’re looking for a sharp{" "}
                      <strong>Planning Engineer</strong> who thrives on
                      meticulously mapping out the path to project success. This
                      isn’t just about creating schedules; it’s about being the
                      strategic mind that ensures our{" "}
                      <strong>Bliss in the Woods</strong> project in{" "}
                      <strong>Harshaguda</strong> moves forward efficiently,
                      economically, and on time. You will be instrumental in
                      translating complex designs into actionable timelines,
                      optimizing resources, and foreseeing every critical step.
                      If you have a knack for detailed planning and a passion
                      for ensuring projects stay on track, especially in{" "}
                      <strong>residential villa projects</strong>, you’ll find
                      an immediate fit here.
                    </p>

                    <p className="mb-[10px] line-height-23">
                      <strong>Your Impact Will Include:</strong>
                    </p>
                    <ul className="list-disc list-outside pl-6 lists marker:text-[25px]">
                      <li className="mb-[5px] line-height-23">
                        <strong>Charting the Course:</strong> Developing,
                        monitoring, and updating detailed project schedules
                        (e.g., Gantt charts, PERT diagrams) for all phases of
                        construction.
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>Resource Optimization:</strong> Preparing
                        comprehensive resource allocation plans (manpower,
                        machinery, materials) to ensure efficient project
                        execution.
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>Progress Tracking:</strong> Regularly tracking
                        project progress against baselines, identifying
                        variances, and providing accurate status reports to the
                        project team.
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>Performance Analysis:</strong> Analyzing project
                        performance metrics, identifying potential delays or
                        bottlenecks, and recommending corrective actions.
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>Foreseeing the Future:</strong> Contributing to
                        risk assessments and developing mitigation strategies
                        related to project timelines and resources.
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>Documentation & Reporting:</strong> Maintaining
                        all planning-related documentation and preparing clear,
                        concise progress reports and presentations for
                        management.
                      </li>

                      <li className="mb-[10px] line-height-23">
                        <strong>Collaborating for Efficiency:</strong> Working
                        closely with project managers, site engineers, and
                        procurement teams to integrate all project activities
                        seamlessly.
                      </li>
                    </ul>

                    <p className="mb-[10px] line-height-23">
                      <strong>Who You Are:</strong>
                    </p>
                    <ul className="list-disc list-outside pl-6 lists marker:text-[25px]">
                      <li className="mb-[5px] line-height-23">
                        <strong>The Meticulous Planner:</strong> 5-6 years of
                        dedicated experience as a Planning Engineer in civil
                        construction projects.
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>The Residential Expert (Bonus):</strong> A
                        proven track record with planning specifically for
                        residential villa developments is a significant
                        advantage.
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>The Academic Foundation:</strong> A Bachelor’s
                        degree in Civil Engineering.
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>The Software Savvy Professional:</strong>{" "}
                        Proficient with industry-standard planning software
                        (e.g., Primavera P6, MS Project) and analytical tools
                        (e.g., MS Excel).
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>The Detail-Oriented Technician:</strong> Highly
                        capable of interpreting construction drawings,
                        specifications, and project documents.
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>The Effective Communicator:</strong> An ability
                        to clearly present plans, communicate updates, and
                        collaborate effectively with diverse teams.
                      </li>

                      <li className="mb-[10px] line-height-23">
                        <strong>The Problem Solver:</strong> Strong analytical
                        skills to identify issues and propose practical
                        solutions.
                      </li>
                    </ul>

                    <p className="mb-[10px] line-height-23">
                      <strong>Why Nestmakers?</strong>
                      <br />
                      Join a team where your strategic foresight ensures our
                      timely delivery, your precision optimizes our resources,
                      and your contributions are directly visible in the
                      seamless execution of our projects. We offer a competitive
                      package and a culture that supports professional growth
                      and innovation.
                    </p>

                    <p className="line-height-23">
                      <strong>Ready to Build Something Great?</strong>
                      <br />
                      If you’re a strategic planner at heart and a
                      detail-oriented professional by nature, we want to hear
                      from you. Send your resume and a brief note about your
                      most impactful planning experience to{" "}
                      <a
                        href="mailto:info@nestmakers.in"
                        className="a-tag cursor-pointer text-light-green"
                      >
                        info@nestmakers.in
                      </a>
                      . Please refer{" "}
                      <strong>“Planning Engineer (BIW – NM)”</strong> in your
                      subject.
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
                className="bg-[#35674E] mt-[10px] hover:bg-white cursor-pointer font-weight-400 text-black-hover transition-all duration-300 ease-in text-center leading-[16px] py-2 pb-3 px-6 text-white border-[2px] border-[#95b67b]"
                onClick={() => {
                  const form = document.getElementById("form");
                  if (!form) return;
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Apply Now
              </motion.button>
            </div>
          </div>

          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeIn" }}
            viewport={{ once: true }}
            className="w-full bg-[#ccc] h-[1px] my-[25px] md:my-[50px] "
          ></motion.div>
          {/* Fifth Info */}

          <div className="w-full flex md:flex-row flex-col items-start md:gap-[20px]">
            <div className="w-full md:w-[70%]">
              <motion.h4
                className="font-weight-600 mb-[10px] text-[#35674E]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeIn" }}
                viewport={{ once: true }}
              >
                Quantity Surveyor
              </motion.h4>

              <motion.p
                initial={{ opacity: 0, y: "100%" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeIn" }}
                viewport={{ once: true }}
                className="line-height-25"
              >
                <strong>Role:</strong> Quantity Surveyor <br />
                <strong>Company:</strong> Nestmakers Builders and Developers{" "}
                <br />
                <strong>Project:</strong> Bliss in the Woods <br />
                <strong>Location:</strong> Harshaguda, RR District, Telangana{" "}
                <br />
                <strong>Experience:</strong> 3-4 Years <br />
                <strong>Compensation:</strong> 3.6 – 4.8 LPA <br />
                <strong>Quantity:</strong> 2 Nos.
              </motion.p>

              <motion.button
                onClick={() =>
                  setReadMore(
                    readMore === "quantitySurveyor" ? null : "quantitySurveyor"
                  )
                }
                className="mt-[20px] flex items-center gap-2 font-medium text-[#35674E] cursor-pointer"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeIn" }}
                viewport={{ once: true }}
              >
                <span
                  className={`inline-block transition-transform duration-300 ${
                    readMore === "quantitySurveyor" ? "rotate-90" : "rotate-0"
                  }`}
                  style={{ fontSize: "16px", lineHeight: "5px" }}
                >
                  ❯❯
                </span>
                Job Description
              </motion.button>

              <AnimatePresence initial={false}>
                {readMore === "quantitySurveyor" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="mt-[20px] mb-[10px] line-height-23">
                      <strong>
                        About Nestmakers: Where Vision Meets Concrete
                      </strong>
                      <br />
                      At Nestmakers, we don’t just develop properties; we craft
                      the future of living spaces in Telangana.Our commitment to
                      thoughtful design, robust quality, and timely delivery
                      transforms landscapes and enriches lives. If you believe
                      in building with integrity and innovation, you belong with
                      us.
                    </p>
                    <p className="mb-[10px] line-height-23">
                      <strong>The Challenge You’ll Own:</strong>
                      <br />
                      We’re looking for a meticulous{" "}
                      <strong>Quantity Surveyor</strong> who thrives on
                      precision in cost management and contractual details. This
                      isn’t just about counting materials; it’s about being the
                      financial backbone that ensures our{" "}
                      <strong>Bliss in the Woods</strong> project in{" "}
                      <strong>Harshaguda</strong> is not only built to the
                      highest quality but also delivered with optimal cost
                      efficiency. You will be instrumental in turning every
                      design into a financially viable reality.
                      <br />
                      If you have a sharp eye for numbers and a passion for
                      value engineering, especially in{" "}
                      <strong>residential villa projects</strong>, you’ll find
                      an immediate fit here.
                    </p>

                    <p className="mb-[10px] line-height-23">
                      <strong>Your Impact Will Include:</strong>
                    </p>
                    <ul className="list-disc list-outside pl-6 lists marker:text-[25px]">
                      <li className="mb-[5px] line-height-23">
                        <strong>Cost Control & Estimation:</strong> Preparing
                        detailed cost estimates for various construction
                        activities, materials, and labor, ensuring competitive
                        and accurate project pricing.
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>Budget Management:</strong> Monitoring and
                        controlling project costs against budgets, identifying
                        variances, and implementing cost-saving measures without
                        compromising quality.
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>Tender & Contract Management:</strong> Assisting
                        in the preparation of tender documents, evaluating bids
                        from contractors and suppliers, and drafting contractual
                        agreements.
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>Valuation & Payments:</strong> Preparing interim
                        valuations, final accounts, and processing payments to
                        contractors and suppliers accurately and on time.
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>Material Reconciliation:</strong> Conducting
                        regular reconciliation of materials on-site, minimizing
                        wastage, and ensuring efficient inventory management.
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>Risk Analysis:</strong> Contributing to the
                        identification and assessment of financial risks related
                        to the project, proposing mitigation strategies.
                      </li>

                      <li className="mb-[10px] line-height-23">
                        <strong>Documentation & Reporting:</strong> Maintaining
                        comprehensive records of all financial transactions,
                        variations, and contractual communications, and
                        preparing detailed cost reports for management.
                      </li>
                    </ul>

                    <p className="mb-[10px] line-height-23">
                      <strong>Who You Are:</strong>
                    </p>
                    <ul className="list-disc list-outside pl-6 lists marker:text-[25px]">
                      <li className="mb-[5px] line-height-23">
                        <strong>The Numbers Ninja:</strong> 3-4 years of
                        dedicated experience as a Quantity Surveyor in civil
                        construction projects.
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>The Residential Expert (Bonus):</strong> A
                        proven track record with quantity surveying specifically
                        for residential villa developments is a significant
                        advantage.
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>The Academic Foundation:</strong> A Bachelor’s
                        degree in Civil Engineering or Quantity Surveying.
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>The Detail-Oriented Professional:</strong>{" "}
                        Highly proficient in cost estimation, budgeting, and
                        contract administration.
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>The Software Savvy Analyst:</strong> Competent
                        with relevant software (e.g., MS Excel, AutoCAD for
                        measurement take-offs, and specialized QS software if
                        applicable).
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>The Effective Communicator:</strong> An ability
                        to clearly present financial data, negotiate
                        effectively, and collaborate with diverse teams.
                      </li>

                      <li className="mb-[10px] line-height-23">
                        <strong>The Problem Solver:</strong> Strong analytical
                        skills to identify cost inefficiencies and propose
                        practical, value-driven solutions.
                      </li>
                    </ul>

                    <p className="mb-[10px] line-height-23">
                      <strong>Why Nestmakers?</strong>
                      <br />
                      Join a team where your financial acumen ensures our
                      profitability, your precision drives our efficiency, and
                      your contributions are directly visible in the successful
                      delivery of our projects. We offer a competitive package
                      and a culture that supports professional growth and
                      innovation.
                    </p>

                    <p className="line-height-23">
                      <strong>Ready to Build Something Great?</strong>
                      <br />
                      If you’re a financial strategist at heart and a
                      detail-oriented professional by nature, we want to hear
                      from you. Send your resume and a brief note about your
                      most impactful quantity surveying experience to{" "}
                      <a
                        href="mailto:info@nestmakers.in"
                        className="a-tag cursor-pointer text-light-green"
                      >
                        info@nestmakers.in
                      </a>
                      . Please refer{" "}
                      <strong>“Quantity Surveyor (BIW – NM)”</strong> in your
                      subject.
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
                className="bg-[#35674E] mt-[10px] hover:bg-white cursor-pointer font-weight-400 text-black-hover transition-all duration-300 ease-in text-center leading-[16px] py-2 pb-3 px-6 text-white border-[2px] border-[#95b67b]"
                onClick={() => {
                  const form = document.getElementById("form");
                  if (!form) return;
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Apply Now
              </motion.button>
            </div>
          </div>

          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeIn" }}
            viewport={{ once: true }}
            className="w-full bg-[#ccc] h-[1px] my-[25px] md:my-[50px]"
          ></motion.div>
          {/* Sixth Info */}

          <div className="w-full flex md:flex-row flex-col items-start md:gap-[20px]">
            <div className="w-full md:w-[70%]">
              <motion.h4
                className="font-weight-600 mb-[10px] text-[#35674E]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeIn" }}
                viewport={{ once: true }}
              >
                Engineer - Quality Control
              </motion.h4>

              <motion.p
                initial={{ opacity: 0, y: "100%" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeIn" }}
                viewport={{ once: true }}
                className="line-height-25"
              >
                <strong>Role:</strong> Engineer – Quality Control <br />
                <strong>Company:</strong> Nestmakers Builders and Developers{" "}
                <br />
                <strong>Project:</strong> Bliss in the Woods <br />
                <strong>Location:</strong> Harshaguda, RR District, Telangana{" "}
                <br />
                <strong>Experience:</strong> 5-8 Years <br />
                <strong>Compensation:</strong> 4.8 – 6 LPA <br />
                <strong>Quantity:</strong> 2 Nos.
              </motion.p>

              <motion.button
                onClick={() =>
                  setReadMore(
                    readMore === "engineerQualityControl"
                      ? null
                      : "engineerQualityControl"
                  )
                }
                className="mt-[20px] flex items-center gap-2 font-medium text-[#35674E] cursor-pointer"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeIn" }}
                viewport={{ once: true }}
              >
                <span
                  className={`inline-block transition-transform duration-300 ${
                    readMore === "engineerQualityControl"
                      ? "rotate-90"
                      : "rotate-0"
                  }`}
                  style={{ fontSize: "16px", lineHeight: "5px" }}
                >
                  ❯❯
                </span>
                Job Description
              </motion.button>

              <AnimatePresence initial={false}>
                {readMore === "engineerQualityControl" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="mt-[20px] mb-[10px] line-height-23">
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

                    <p className="mb-[10px] line-height-23">
                      <strong>The Challenge You’ll Own:</strong>
                      <br />
                      We’re looking for a meticulous{" "}
                      <strong>Engineer – Quality Control</strong> who thrives on
                      ensuring perfection in every detail of our construction
                      projects. This isn’t just about inspections; it’s about
                      being the guardian of our reputation, ensuring that every
                      material, every process, and every finished product at our{" "}
                      <strong>Bliss in the Woods</strong> project in{" "}
                      <strong>Harshaguda</strong> meets the highest standards.
                      You will be the crucial link, verifying that quality is
                      built-in, not just checked for.
                      <br />
                      If you have a keen eye for detail and a passion for
                      upholding superior construction standards, especially in{" "}
                      <strong>residential villa projects</strong>, you’ll find
                      an immediate fit here.
                    </p>

                    <p className="mb-[10px] line-height-23">
                      <strong>Your Impact Will Include:</strong>
                    </p>
                    <ul className="list-disc list-outside pl-6 lists marker:text-[25px]">
                      <li className="mb-[5px] line-height-23">
                        <strong>Championing Standards:</strong> Implementing and
                        enforcing stringent quality control plans and procedures
                        throughout the construction lifecycle.
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>Inspecting with Precision:</strong> Conducting
                        regular, thorough inspections of materials, workmanship,
                        and construction processes to ensure compliance with
                        specifications, drawings, and codes.
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>Identifying & Rectifying:</strong> Documenting
                        non-conformances, investigating root causes, and
                        coordinating with site teams to ensure timely and
                        effective corrective actions.
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>Testing & Verifying:</strong> Overseeing and
                        performing various quality tests (e.g., concrete
                        strength, material density, compaction) and maintaining
                        detailed records.
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>Maintaining Documentation:</strong> Preparing
                        and managing comprehensive quality assurance/control
                        reports, inspection logs, and test results.
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>Collaborating for Excellence:</strong> Working
                        closely with project managers, site engineers, and
                        contractors to proactively address potential quality
                        issues.
                      </li>

                      <li className="mb-[10px] line-height-23">
                        <strong>Promoting Best Practices:</strong> Contributing
                        to a culture of continuous improvement in quality and
                        safety across the site.
                      </li>
                    </ul>

                    <p className="mb-[10px] line-height-23">
                      <strong>Who You Are:</strong>
                    </p>

                    <ul className="list-disc list-outside pl-6 lists marker:text-[25px]">
                      <li className="mb-[5px] line-height-23">
                        <strong>The Meticulous Professional:</strong> 5-8 years
                        of dedicated experience in Quality Control within civil
                        construction projects.
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>The Residential Expert (Bonus):</strong> A
                        proven track record with quality control specifically on
                        residential villa developments is a significant
                        advantage.
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>The Academic Foundation:</strong> A Bachelor’s
                        degree in Civil Engineering.
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>The Hands-on Validator:</strong> Proficient in
                        quality testing methodologies and relevant construction
                        codes.
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>The Detail-Oriented Technician:</strong>{" "}
                        Competent with technical drawings, specifications, and
                        quality documentation.
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>The Effective Communicator:</strong> An ability
                        to clearly report findings, explain quality
                        requirements, and foster cooperation.
                      </li>

                      <li className="mb-[10px] line-height-23">
                        <strong>The Tech-Savvy Inspector:</strong> Familiarity
                        with relevant software (e.g., MS Office for reporting,
                        basic CAD for drawing review).
                      </li>
                    </ul>

                    <p className="mb-[10px] line-height-23">
                      <strong>Why Nestmakers?</strong>
                      <br />
                      Join a team where your precision ensures our promise, your
                      vigilance safeguards our quality, and your contributions
                      are directly visible in the homes we build. We offer a
                      competitive package and a culture that supports
                      professional growth and innovation.
                    </p>

                    <p className="line-height-23">
                      <strong>Ready to Build Something Great?</strong>
                      <br />
                      If you’re a quality champion at heart and a meticulous
                      professional by nature, we want to hear from you. Send
                      your resume and a brief note about your most impactful
                      quality control experience to{" "}
                      <a
                        href="mailto:info@nestmakers.in"
                        className="a-tag cursor-pointer text-light-green"
                      >
                        info@nestmakers.in
                      </a>
                      . Please refer{" "}
                      <strong>“Engineer – Quality Control (BIW – NM)”</strong>{" "}
                      in your subject.
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
                className="bg-[#35674E] mt-[10px] hover:bg-white cursor-pointer font-weight-400 text-black-hover transition-all duration-300 ease-in text-center leading-[16px] py-2 pb-3 px-6 text-white border-[2px] border-[#95b67b]"
                onClick={() => {
                  const form = document.getElementById("form");
                  if (!form) return;
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Apply Now
              </motion.button>
            </div>
          </div>

          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeIn" }}
            viewport={{ once: true }}
            className="w-full bg-[#ccc] h-[1px] my-[25px] md:my-[50px]"
          ></motion.div>
          {/* Seventh Info */}

          <div className="w-full flex md:flex-row flex-col items-start md:gap-[20px]">
            <div className="w-full md:w-[70%]">
              <motion.h4
                className="font-weight-600 mb-[10px] text-[#35674E]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeIn" }}
                viewport={{ once: true }}
              >
                Store Executive - Civil
              </motion.h4>

              <motion.p
                initial={{ opacity: 0, y: "100%" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeIn" }}
                viewport={{ once: true }}
                className="line-height-25"
              >
                <strong>Role:</strong> Store Executive – Civil <br />
                <strong>Company:</strong> Nestmakers Builders and Developers{" "}
                <br />
                <strong>Project:</strong> Bliss in the Woods <br />
                <strong>Location:</strong> Harshaguda, RR District, Telangana{" "}
                <br />
                <strong>Experience:</strong> 2 – 3 Years (with a preference for
                construction site store/warehouse support) <br />
                <strong>Compensation:</strong> 2.4 – 3.0 LPA
              </motion.p>

              <motion.button
                onClick={() =>
                  setReadMore(
                    readMore === "storeExecutiveCivil"
                      ? null
                      : "storeExecutiveCivil"
                  )
                }
                className="mt-[20px] flex items-center gap-2 font-medium text-[#35674E] cursor-pointer"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeIn" }}
                viewport={{ once: true }}
              >
                <span
                  className={`inline-block transition-transform duration-300 ${
                    readMore === "storeExecutiveCivil"
                      ? "rotate-90"
                      : "rotate-0"
                  }`}
                  style={{ fontSize: "16px", lineHeight: "5px" }}
                >
                  ❯❯
                </span>
                Job Description
              </motion.button>

              <AnimatePresence initial={false}>
                {readMore === "storeExecutiveCivil" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="mt-[20px] mb-[10px] line-height-23">
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

                    <p className="mb-[10px] line-height-23">
                      <strong>The Challenge You’ll Own:</strong>
                      <br />
                      We’re looking for a dedicated and organized{" "}
                      <strong>Store Executive – Civil</strong> who thrives in a
                      hands-on, site-based environment. This role is essential
                      for the smooth operation of our site store, directly
                      supporting the Store Manager in managing all construction
                      materials, tools, and equipment. You’ll be instrumental in
                      ensuring accurate inventory, facilitating material
                      movement, and maintaining a well-organized and safe
                      storage area. If you’re eager to build your career in
                      construction logistics and have a keen eye for detail,
                      you’ll find this role provides invaluable experience and a
                      direct contribution to our project success.
                    </p>

                    <p className="mb-[10px] line-height-23">
                      <strong>Your Impact Will Include:</strong>
                    </p>
                    <ul className="list-disc list-outside pl-6 lists marker:text-[25px]">
                      <li className="mb-[5px] line-height-23">
                        <strong>Assisting Material Flow:</strong> Supporting the
                        receipt, systematic storage, accurate issuance, and
                        secure dispatch of all construction materials, tools,
                        and equipment on site.
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>Maintaining Inventory Accuracy:</strong>{" "}
                        Assisting with physical inventory counts, data entry
                        into inventory systems, and ensuring records match
                        physical stock.
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>Organizing the Store:</strong> Keeping the store
                        area clean, tidy, and well-organized, ensuring materials
                        are stored correctly and safely.
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>Handling Materials:</strong> Safely loading,
                        unloading, and moving materials within the store and to
                        various points on the construction site as required.
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>Supporting Safety & Security:</strong> Adhering
                        strictly to all safety protocols within the store area
                        and contributing to the security of all materials and
                        equipment.
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>Accurate Documentation:</strong> Assisting with
                        maintaining precise records of all incoming and outgoing
                        materials, supporting the generation of daily/weekly
                        reports.
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>Site Coordination:</strong> Working closely with
                        site engineers and laborers to fulfill material requests
                        promptly and efficiently.
                      </li>

                      <li className="mb-[10px] line-height-23">
                        <strong>Tool Management:</strong> Supporting the
                        issuance and return process for site tools and
                        equipment, ensuring their good condition and proper
                        storage.
                      </li>
                    </ul>

                    <p className="mb-[10px] line-height-23">
                      <strong>Who You Are:</strong>
                    </p>
                    <ul className="list-disc list-outside pl-6 lists marker:text-[25px]">
                      <li className="mb-[5px] line-height-23">
                        <strong>The Go-Getter:</strong> 2-3 years of practical
                        experience in a store, warehouse, or material handling
                        role, preferably within the construction industry.
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>The Organizer:</strong> A keen eye for detail
                        and strong organizational skills to maintain order in a
                        busy environment.
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>The Team Player:</strong> A cooperative attitude
                        and willingness to support the Store Manager and other
                        site teams.
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>The Practical Learner:</strong> Eager to learn
                        about various construction materials and best practices
                        in store management.
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>The Tech-Friendly:</strong> Basic proficiency in
                        MS Office (especially Excel) for data entry and
                        record-keeping.
                      </li>

                      <li className="mb-[5px] line-height-23">
                        <strong>The Site-Ready:</strong> Comfortable working
                        effectively in a construction site environment and
                        adhering to safety norms.
                      </li>

                      <li className="mb-[10px] line-height-23">
                        <strong>The Reliable Worker:</strong> Punctual,
                        dependable, and committed to fulfilling responsibilities
                        accurately.
                      </li>
                    </ul>

                    <p className="mb-[10px] line-height-23">
                      <strong>Why Nestmakers?</strong>
                      <br />
                      Join a team where your organizational prowess directly
                      contributes to the operational backbone of our projects.
                      Your expertise in managing site logistics and inventory is
                      absolutely crucial to our success, and your efforts will
                      directly translate into efficiently built, high-quality
                      developments. We offer a competitive package and a culture
                      that supports professional growth and innovation in a
                      thriving industry.
                    </p>

                    <p className="line-height-23">
                      <strong>Ready to Build Something Great?</strong>
                      <br />
                      If you’re a proactive and organized individual ready to
                      make an impact in a dynamic construction environment, we
                      want to hear from you. Send your resume and a brief note
                      about your experience in store or material management to{" "}
                      <a
                        href="mailto:info@nestmakers.in"
                        className="a-tag cursor-pointer text-light-green"
                      >
                        info@nestmakers.in
                      </a>
                      . Please refer{" "}
                      <strong>“Store Executive – Civil (BIW – NM)”</strong> in
                      your subject.
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
                className="bg-[#35674E] mt-[10px] hover:bg-white cursor-pointer font-weight-400 text-black-hover transition-all duration-300 ease-in text-center leading-[16px] py-2 pb-3 px-6 text-white border-[2px] border-[#95b67b]"
                onClick={() => {
                  const form = document.getElementById("form");
                  if (!form) return;
                  window.scrollTo({ top: 0, behavior: "smooth" });
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
