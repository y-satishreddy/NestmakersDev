import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [selectedCountry, setSelectedCountry] = useState("in");
  const [countryCode, setCountryCode] = useState("+91");
  const [errors, setErrors] = useState({});

  const nameRegex = /^[A-Za-z.\s]+$/;
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const urlRegex = /(https?:\/\/[^\s]+)/gi;

  // ✅ Phone validation
  const validatePhone = (mobileValue) => {
    const mobile = mobileValue || "";

    if (selectedCountry === "in") {
      const indianRegex = /^[6-9]\d{9}$/;
      return indianRegex.test(mobile);
    }

    return mobile.length > 0;
  };

  // ✅ Country change
  const handleCountryChange = (countryCodeValue, countryData) => {
    setSelectedCountry(countryData.countryCode);
    setCountryCode(`+${countryData.dialCode}`);

    setFormData((prev) => ({
      ...prev,
      mobile: "",
    }));

    setErrors((prev) => ({
      ...prev,
      mobile: "",
    }));
  };

  // ✅ Live validation for Name / Email / Message
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => {
      let newErrors = { ...prev };

      // FULL NAME
      if (name === "name") {
        if (!value.trim()) {
          newErrors.name = "Please enter your full name.";
        } else if (!nameRegex.test(value)) {
          newErrors.name = "Only letters, spaces and '.' are allowed.";
        } else {
          newErrors.name = "";
        }
      }

      // EMAIL
      if (name === "email") {
        if (!value.trim()) {
          newErrors.email = "Please enter a valid email.";
        } else if (!emailRegex.test(value)) {
          newErrors.email = "Please enter a valid email.";
        } else {
          newErrors.email = "";
        }
      }

      // MESSAGE
      if (name === "message") {
        if (!value.trim()) {
          newErrors.message = "Message is required.";
        } else if (value.length > 150) {
          newErrors.message = "Message must be max 150 characters.";
        } else if (urlRegex.test(value)) {
          newErrors.message = "Invalid message (no URLs allowed).";
        } else {
          newErrors.message = "";
        }
      }

      return newErrors;
    });
  };

  // ✅ Final validation on submit (important)
  const validate = () => {
    let newErrors = {};

    // NAME
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name.";
    } else if (!nameRegex.test(formData.name.trim())) {
      newErrors.name = "Only letters, spaces and '.' are allowed.";
    }

    // EMAIL
    if (!formData.email.trim()) {
      newErrors.email = "Please enter a valid email.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email.";
    }

    // MOBILE
    if (!formData.mobile.trim()) {
      newErrors.mobile =
        selectedCountry === "in"
          ? "Enter valid Indian number (starts with 6/7/8/9 and 10 digits)."
          : "Enter a valid phone number.";
    } else if (!validatePhone(formData.mobile.trim())) {
      newErrors.mobile =
        selectedCountry === "in"
          ? "Enter valid Indian number (starts with 6/7/8/9 and 10 digits)."
          : "Enter a valid phone number.";
    }

    // MESSAGE
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.length > 150) {
      newErrors.message = "Message must be max 150 characters.";
    } else if (urlRegex.test(formData.message)) {
      newErrors.message = "Invalid message (no URLs, max 150 chars).";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // ✅ Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      mobile: formData.mobile.trim(),
      message: formData.message.trim(),
      fullPhoneNumber: `${countryCode}${formData.mobile.trim()}`,
    };

    // ✅ Print object in console
    console.log("✅ Form Submitted Payload:", payload);

    // ✅ If you don’t want API now, just return here
    // return;

    try {
      const response = await fetch("https://your-api-endpoint.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      console.log("API Response:", data);

      setFormData({ name: "", email: "", mobile: "", message: "" });
      setSelectedCountry("in");
      setCountryCode("+91");
      setErrors({});
    } catch (error) {
      console.error("Submission failed:", error);
      alert("Failed to submit the form. Please try again.");
    }
  };

  return (
    <div className=" h-full w-full flex flex-col items-start justify-center">
      <motion.h2
        className="text-[#35674E] mb-[20px]"
        initial={{ y: "200%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeIn" }}
      >
        Find the best investment <br className="md:block hidden" />
        opportunity with us!
      </motion.h2>

      <div className="w-full max-w-[500px]">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start w-full gap-1"
        >
          <style>
            {`
              .form-input {
                width: 100%;
                border: none;
                border-bottom: 1px solid #ccc;
                padding: 4px 2px;
                outline: none;
                text-align: left;
                background-color: transparent;
                transition: border-color 0.3s ease;
                font-size: 16px;
                color:#35674E;
              }
              .form-input:focus {
                border-color: #35674E;
                outline: none;
                box-shadow: none;
              }
              .error-container {
                height: 18px;
                display: flex;
                justify-content: flex-start;
                align-items: center;
              }
              .error-text {
                background: -webkit-linear-gradient(#d11b23, #820a10);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                font-size: 10px !important;
                text-align: left;
                visibility: visible;
              }
              .error-hidden {
                visibility: hidden;
              }
            `}
          </style>

          {/* ✅ NAME (block numbers/special chars while typing) */}
          <motion.input
            initial={{ y: "200%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeIn" }}
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => {
              const { value } = e.target;

              // ✅ Allow only letters, spaces, and dots
              const cleanedValue = value.replace(/[^A-Za-z.\s]/g, "");

              setFormData((prev) => ({
                ...prev,
                name: cleanedValue,
              }));

              setErrors((prev) => ({
                ...prev,
                name:
                  cleanedValue.trim() === ""
                    ? "Please enter your full name."
                    : cleanedValue !== value
                    ? "Only letters, spaces and '.' are allowed."
                    : "",
              }));
            }}
            className="form-input text-left"
            placeholder="Full Name*"
          />
          <div className="error-container">
            <p
              className={errors.name ? "error-text" : "error-text error-hidden"}
            >
              {errors.name || "placeholder"}
            </p>
          </div>

          {/* ✅ EMAIL */}
          <motion.input
            initial={{ y: "200%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeIn" }}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            placeholder="Email Address*"
          />
          <div className="error-container">
            <p
              className={
                errors.email ? "error-text" : "error-text error-hidden"
              }
            >
              {errors.email || "placeholder"}
            </p>
          </div>

          {/* ✅ PHONE */}
          <motion.div
            initial={{ y: "200%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeIn" }}
            className="w-full border-b border-gray-300 flex items-center gap-3 relative"
          >
            <PhoneInput
              country={selectedCountry}
              value=""
              onChange={(value, country) =>
                handleCountryChange(country.countryCode, country)
              }
              inputStyle={{ display: "none" }}
              buttonStyle={{
                border: "none",
                backgroundColor: "transparent",
                paddingRight: "10px",
              }}
              containerStyle={{ width: "auto" }}
              dropdownStyle={{ zIndex: 1000 }}
            />

            <span className="text-[#35674E] font-semibold text-base ml-6 ">
              {countryCode}
            </span>

            <div className="h-6 w-px bg-gray-300"></div>

            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              maxLength={selectedCountry === "in" ? 10 : 15}
              onChange={(e) => {
                let onlyNumbers = e.target.value.replace(/\D/g, "");

                // ✅ India: force 10 digits max
                if (selectedCountry === "in") {
                  onlyNumbers = onlyNumbers.slice(0, 10);
                }

                setFormData((prev) => ({
                  ...prev,
                  mobile: onlyNumbers,
                }));

                // ✅ live mobile validation
                setErrors((prev) => {
                  let newErrors = { ...prev };

                  if (!onlyNumbers.trim()) {
                    newErrors.mobile =
                      selectedCountry === "in"
                        ? "Enter valid Indian number (starts with 6/7/8/9 and 10 digits)."
                        : "Enter a valid phone number.";
                  } else if (!validatePhone(onlyNumbers)) {
                    newErrors.mobile =
                      selectedCountry === "in"
                        ? "Enter valid Indian number (starts with 6/7/8/9 and 10 digits)."
                        : "Enter a valid phone number.";
                  } else {
                    newErrors.mobile = "";
                  }

                  return newErrors;
                });
              }}
              placeholder="Phone Number*"
              className="flex-1 border-none outline-none bg-transparent text-left transition-colors text-[#35674E]"
            />

            <div className="absolute left-0 bottom-[-23px] w-full  ">
              <p
                className={
                  errors.mobile ? "error-text" : "error-text error-hidden"
                }
              >
                {errors.mobile || "placeholder"}
              </p>
            </div>
          </motion.div>

          {/* ✅ MESSAGE */}
          <motion.textarea
            initial={{ y: "200%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeIn" }}
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-input mt-4"
            placeholder="Message / Query*"
            rows="2"
          ></motion.textarea>

          <div className="error-container">
            <p
              className={
                errors.message ? "error-text" : "error-text error-hidden"
              }
            >
              {errors.message || "placeholder"}
            </p>
          </div>

          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.6, delay: 0.8, ease: "easeInOut" }}
            className=" px-8 py-1 bg-white border border-[#35674E] hover-gradient hover:text-white hover:bg-[#35674E] transition-all duration-300"
            type="submit"
          >
            Submit
          </motion.button>
        </form>

        <motion.p
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.2, delay: 1.4, ease: "easeIn" }}
          className="font-size-10 pt-[15px] text-light-green"
        >
          Note: We keep your information strictly confidential and we don’t spam
          your email.
        </motion.p>
      </div>
    </div>
  );
};

export default ContactForm;
