import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

const TestimonialsCarouselSection = () => {
  const testimonialsCarouselData = [
    {
      reviewText:
        "I understand, Thukkuguda is going to be very much promising area and I seriously consider this as a gift to my Next Generation with rich Oxygen park and Road connectivity. Bliss in the Woods shall be one of my most special investments in life. ",
      reviewerName: "Subbarao Punnamaraju , Co Founder CEO",
      reviewerRole: "Machine Code Software Technologies",
    },
    {
      reviewText:
        "Great location, affordability and t to own a villa brought me to the B visited the project and fell in love v environment around.",
      reviewerName: "Sreenivas Reddy Anchuri ",
      reviewerRole: "Product Manager",
    },
    {
      reviewText:
        "Liked the Design Aspect in term of layout and attracted with the design philosophy and enthusiasm form the Nestmakes team. This is a community I'd take the joy of living in.",
      reviewerName: "Raja",
      reviewerRole: "Architect",
    },
    {
      reviewText:
        "Bliss in the Woods is a hidden gem in Hyderabad. Living here feels like a constant retreat into nature, yet we're just a short drive away from the city's hustle and bustle. The villas are well-crafted, and the management team ensures the community is always well-maintained.",
      reviewerName: "Sreenivas Kumar",
      reviewerRole: "Financial Analyst",
    },
    {
      reviewText:
        "Have been extremely happy with the community the neighbourhood around. The project pres great in location, design and features, and s shaping up beautifully. Best of luck.",
      reviewerName: "Narasimha Reddy",
      reviewerRole: "Director HR Technology in Dubai",
    },
    {
      reviewText:
        "Bliss in the Woods is more than just a place to live; it's a community where neighbors become friends, and the natural surroundings create a sense of peace and well-being. We've been here for a year, and we couldn't be happier with our decision to call this place home.",
      reviewerName: "Sirisha",
      reviewerRole: "Interior Designer",
    },
  ];

  return (
    <section className="w-full flex items-center justify-center">
      <div className="w-full px-[20px] md:px-[50px] flex flex-col items-center justify-center pb-[50px] md:pb-[100px]">
        {/* Heading */}
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-light-green mb-[50px]"
        >
          Testimonials
        </motion.h2>

        {/* Background Frame */}
        <div className="testmonials-bg-image md:h-[270px] w-full md:w-[600px] p-2">
          <div className="relative w-full h-full bg-transparent">
            <div className="relative bg-transparent w-full h-full flex items-center justify-center">
              <Swiper
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                grabCursor={true}
                className="w-full h-full testimonials-swiper"
              >
                {testimonialsCarouselData.map((reviewItem, reviewIndex) => (
                  <SwiperSlide key={reviewIndex}>
                    <div className="flex flex-col items-center justify-center text-center px-6 min-h-[220px]">
                      {/* Review Text */}
                      <p className="text-[#7A7A7A] max-w-[520px]">
                        {reviewItem.reviewText}
                      </p>

                      {/* Reviewer Name */}
                      <h4 className="mt-4 text-dark-green font-semibold italic text-[16px] md:text-[18px]">
                        {reviewItem.reviewerName}
                      </h4>

                      {/* Reviewer Role */}
                      <p className="text-dark-green italic text-[14px] md:text-[15px] opacity-80">
                        {reviewItem.reviewerRole}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarouselSection;
