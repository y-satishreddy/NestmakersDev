import bannerVideo from "../../assets/banner_video.mp4";
const Banner = () => {
  return (
    <section className="h-[100vh] w-full border-box relative">
      <video
        src={bannerVideo}
        className="w-full h-full absolute top-0 left-0 right-0 bottom-0 object-cover"
        autoPlay
        muted
        loop
      ></video>
      <div className="absolute bottom-6 flex flex-col items-center w-full justify-center px-[20px] md:px-[50px]">
        <h2 className="w-full text-[#95B67B] text-center leading-10">Creating nature’s <br/> very own addresses</h2>
        <p className="w-full text-white text-center pt-[10px]">
          Experience the perfect blend of urban sophistication <br className="hidden md:block"/> and natural
          beauty with Nestmakers.
        </p>
      </div>
    </section>
  );
};

export default Banner;
