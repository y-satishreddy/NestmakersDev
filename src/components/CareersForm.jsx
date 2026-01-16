import { motion } from "framer-motion";
import { useState } from "react";

const CareersForm = () => {
  const [role, setRole] = useState("");
  const [cv, setCv] = useState(null);
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({
    role: "",
    cv: "",
    message: "",
  });

  const urlRegex = /(https?:\/\/|www\.)[^\s]+/gi;

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {
      role: "",
      cv: "",
      message: "",
    };

    if (!role) {
      newErrors.role = "Please select an open position.";
    }

    if (!cv) {
      newErrors.cv = "Please upload your CV.";
    } else {
      const allowedTypes = [
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document", 
      ];

      const maxSize = 2 * 1024 * 1024;
      if (!allowedTypes.includes(cv.type)) {
        newErrors.cv = "Only PDF or DOCX files are allowed.";
      } else if (cv.size > maxSize) {
        newErrors.cv = "File size must be below 2MB.";
      }
    }

    if (!message.trim()) {
      newErrors.message = "Message is required.";
    } else if (urlRegex.test(message)) {
      newErrors.message = "URLs are not allowed in the message.";
    }

    setErrors(newErrors);

    if (!newErrors.role && !newErrors.cv && !newErrors.message) {
      const formDataObject = {
        role: role,
        cv: cv,
        message: message,
      };

      console.log("Form Data Object:", formDataObject);

      alert("Form submitted successfully");

      setRole("");
      setCv(null);
      setMessage("");
      setErrors({ role: "", cv: "", message: "" });
    }
  };

  return (
    <motion.div
      className="border border-[#35674e] mt-[10px] p-4 w-full md:max-w-[400px]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      <form onSubmit={handleSubmit}>
        <motion.div
          className="mb-[15px]"
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <label htmlFor="roles">
            <p className="text-white ">
              Open Positions <span className="text-red-600">*</span>
            </p>
          </label>

          <div className="mt-[5px]">
            <select
              name="roles"
              id="roles"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full  p-2 text-[#35674e] text-[16px] font-medium focus:outline-none border-[1px] border-white"
            >
              <option value="" disabled hidden>
                Open Positions
              </option>

              <option
                value="Project Manager - Civil"
                className="bg-white text-[#35674e]"
              >
                Project Manager - Civil
              </option>

              <option
                value="Deputy Project Manager - Civil"
                className="bg-white text-[#35674e]"
              >
                Deputy Project Manager - Civil
              </option>

              <option
                value="Planning Engineer"
                className="bg-white text-[#35674e]"
              >
                Planning Engineer
              </option>
              <option
                value="Quantity Surveyor"
                className="bg-white text-[#35674e]"
              >
                Quantity Surveyor
              </option>
              <option
                value="Engineer - Quality Control"
                className="bg-white text-[#35674e]"
              >
                Engineer - Quality Control
              </option>
              <option
                value="Store Manager - Civil"
                className="bg-white text-[#35674e]"
              >
                Store Manager - Civil
              </option>
              <option
                value="Store Executive - Civil"
                className="bg-white text-[#35674e]"
              >
                Store Executive - Civil
              </option>
            </select>
          </div>

          <p className=" font-size-10  h-[14px] block text-dark-green">
            {errors.role}
          </p>
        </motion.div>

        <motion.div
          className="mb-[15px]"
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <label htmlFor="cv">
            <p className="text-white">
              Upload CV ( pdf, docx max file size 2MB){" "}
              <span className="text-red-600">*</span>
            </p>
          </label>

          <div className="mt-[5px]">
            <input
              id="cv"
              type="file"
              accept=".pdf,.docx"
              onChange={(e) => setCv(e.target.files[0])}
              className="
                w-full
                 text-[#35674e]
                border border-white
                p-2
                file:bg-white
                file:text-[#35674e]
                file:border file:border-gray-300
                file:px-2
                file:mr-4
                file:cursor-pointer
                focus:outline-none
              "
            />
          </div>

          <p className=" font-size-10 text-dark-green h-[14px] block">
            {errors.cv}
          </p>
        </motion.div>

        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          transition={{ duration: 1.6, delay: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <label htmlFor="message">
            <p className="text-white mb-[5px] ">
              Message <span className="text-red-600">*</span>
            </p>
          </label>

          <textarea
            name="Message"
            id="message"
            rows="2"
            placeholder="Message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full text-dark-green focus:outline-none p-2 border-white border-[1px]"
          ></textarea>

          <p className=" font-size-10  h-[14px] block text-dark-green">
            {errors.message}
          </p>
        </motion.div>

        <motion.button
          type="submit"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.8, delay: 1.2, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="px-8 py-2 border-white border-[1px] mt-[15px] text-white hover:bg-[#35674e] transition-hover duration-300 ease-in"
        >
          Submit Now
        </motion.button>
      </form>
    </motion.div>
  );
};

export default CareersForm;
