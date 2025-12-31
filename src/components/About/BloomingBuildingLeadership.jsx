import TreeImage from "../../assets/About/building_nests.jpg";
import LeadershipImage from "../../assets/About/bhupal_sir.webp";
const BloomingBuildingLeadership = () => {
  return (
    <>
      <section className="py-[50px] w-full bg-[#35674E] flex items-center justify-center">
        <div className="px-[20px] md:px-[50px] w-full max-w-[1400px] flex flex-wrap gap-y-[25px]">
          <div className="w-[50%] md:w-[25%] flex flex-col items-center justify-center">
            <h2 className="text-light-green mb-[10px]">4</h2>
            <p className="text-white">Projects</p>
          </div>
          <div className="w-[50%] md:w-[25%] flex flex-col items-center justify-center">
            <h2 className="text-light-green mb-[10px]">25,000+ Sft</h2>
            <p className="text-white">Developed</p>
          </div>
          <div className="w-[50%] md:w-[25%] flex flex-col items-center justify-center">
            <h2 className="text-light-green mb-[10px]">6,000+</h2>
            <p className="text-white">Trees Planted</p>
          </div>
          <div className="w-[50%] md:w-[25%] flex flex-col items-center justify-center">
            <h2 className="text-light-green mb-[10px]">1,000+</h2>
            <p className="text-white">Happy Families</p>
          </div>
        </div>
      </section>
      <section className="hidden md:flex h-[60vh] blooming_flowers_bg w-full items-center justify-center">
        <div className="px-[20px] md:px-[50px] w-full max-w-[1400px] flex items-center justify-center">
          <div className="w-[50%]"></div>
          <div className="w-[50%] flex justify-center flex-col">
            <h2 className="text-light-green">
              Where days unfold like <br />
              blooming flowers
            </h2>
            <br />
            <p>
              At Nestmakers, we believe that life unfolds most beautifully when
              lived in harmony with nature’s rhythms. Our communities are
              designed to offer spaces for quiet contemplation. We help you live
              where you can simply be present and observe the subtle shifts in
              nature with amenities that encourage you to slow down and savour
              each moment.
            </p>
            <br />
            <p>
              We invite you to experience a life which is purposeful, meaningful
              and fulfilling.
            </p>
          </div>
        </div>
      </section>
      <section className="block md:hidden w-full flex items-center justify-center">
        <div className="px-[20px] md:px-[50px] w-full max-w-[1400px] flex flex-col py-[50px]">
          <h2 className="text-light-green mb-[10px]">
            Where days unfold like <br />
            blooming flowers
          </h2>

          <p className="mb-[10px]">
            At Nestmakers, we believe that life unfolds most beautifully when
            lived in harmony with nature’s rhythms. Our communities are designed
            to offer spaces for quiet contemplation. We help you live where you
            can simply be present and observe the subtle shifts in nature with
            amenities that encourage you to slow down and savour each moment.
          </p>

          <p className="mb-[10px]">
            We invite you to experience a life which is purposeful, meaningful
            and fulfilling.
          </p>
        </div>
      </section>
      <section className="w-full flex items-center justify-center">
        <div className="px-[20px] md:px-[50px] w-full max-w-[1400px] flex flex-col items-center justify-center">
          <h2 className="text-light-green text-left w-full md:text-center mb-[20px]">
            Building nests that <br />
            nurture communities
          </h2>
          <div className="w-full flex md:flex-row flex-col gap-[20px] mb-[8px]">
            <div className="w-full md:w-[50%]">
              <h4 className="text-light-green font-weight-600 mb-[10px]">
                Vision
              </h4>
              <p>
                Nestmakers envisions creating self-sustaining communities that
                celebrate harmonious living with nature. By designing homes
                nestled in expansive green landscapes, we aim to offer a
                lifestyle that is vibrant, eco-conscious, and deeply connected
                to the natural world.
              </p>
            </div>
            <div className="w-full md:w-[50%] ">
              <h4 className="text-light-green font-weight-600 mb-[8px]">
                Mission
              </h4>
              <p>
                Our mission is to conceptualise and deliver thoughtfully
                designed living spaces that elevate the essence of green living.
                With deep expertise in architectural design, we offer
                transparent and value-driven services to our customers and
                partners, ensuring exceptional satisfaction. As we shape
                investment opportunities and reimagine spaces, we are committed
                to becoming a leading force in Hyderabad’s real estate
                landscape, championing a lifestyle rooted in sustainability and
                nature.
              </p>
            </div>
          </div>
          <div>
            <img
              src={TreeImage}
              alt="Building nests that nurture communities"
            />
          </div>
        </div>
      </section>
      <section className="w-full flex items-center justify-center">
        <div className="w-full max-w-[1400px] px-[20px] md:px-[50px] py-[50px] md:py-[70px]">
          <h2 className="text-light-green w-full text-left md:text-center mb-[20px]">
            Leadership
          </h2>
          <div className="w-full">
            <div className="w-full md:w-[60%] mb-[10px] flex flex-col md:flex-row gap-[15px] md:gap-[30px]">
              <img
                src={LeadershipImage}
                alt="Bhupal"
                className="rounded-xl md:w-[50%]"
              />
              <div className="flex flex-col items-end justify-end">
                <h4 className="text-[#35674E] font-weight-600 mb-[10px] w-full text-left">
                  Mr. Bhupal Reddy
                </h4>
                <p className="w-full text-left mb-[10px] md:mb-[0px] ">Managing Director</p>
              </div>
            </div>
            <div className="md:pt-[30px] md:shadow md:p-[20px]">
              <p className="mb-[20px]">
                At the heart of every structure we create lies a deeper story –
                one story of balance, belonging, and purpose. As an architect by
                education and a seeker by spirit, I have always believed that
                architecture is not merely about building spaces; it is about
                building relationships between people, nature, and the divine.
              </p>
              <p className="mb-[15px]">
                Every project we undertake is guided by the timeless wisdom of
                the five elements: Earth, Water, Fire, Air, and Ether, which not
                only shape our environment but also shape our being. This
                elemental approach helps us design spaces that breathe with
                life, nurturing the body, calming the mind, and uplifting the
                soul. From the rootedness of Earth to the fluid grace of Water,
                the transformative force of Fire, the freedom of Air, and the
                still silence of Ether, each project is a composition that
                reflects harmony and oneness with the universe.
              </p>
              <p className="mb-[15px]">
                As a proud son of this sacred land, Bharat, every brick we lay
                is a prayer, and every design a tribute to our rich heritage,
                our unsung heroes, and our eternal values. In every home, every
                villa, every public space, we seek to bring alive the spirit of
                devotion (bhakti), duty (dharma), and collective upliftment
                (seva).
              </p>
              <p className="mb-[15px]">
                We are not here to just build structures; we are here to create
                sanctuaries of hope, strength, and purpose. Spaces that stand
                resilient through time and inspire those who walk through them
                to live fuller, more meaningful lives.
              </p>
              <p className="font-weight-800 mb-[10px]">
                To all our patrons, partners, and future residents, this is our
                promise:
              </p>
              <ul className="list-disc ml-[20px] marker:text-[#7A7A7A]">
                <li>
                  <p>We build not just for today, but for generations.</p>
                </li>
                <li>
                  <p>
                    We build not just with materials, but with intention,
                    integrity, and inner conviction.
                  </p>
                </li>
                <li>
                  <p>
                    We build for the nation, for nature, and for the divine that
                    lives in all.
                  </p>
                </li>
                <li>
                  <p>
                    With warmth, reverence, and a dream of a better tomorrow
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default BloomingBuildingLeadership;
