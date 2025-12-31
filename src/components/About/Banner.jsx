const Banner = () => {
  return (
    <section className="h-[100vh] w-full bg-about-img pt-[120px]">
      <div className="flex flex-col items-center justify-center md:px-[50px] px-[20px]">
        <h1 className="text-white text-center w-full font-weight-500 mb-[10px]">
          We thrive where <br/> nature thrives
        </h1>
        <p className="text-white w-full md:w-[400px] text-center font-weight-400">
          With a passion for nature-centric living spaces, we bring you closer
          to the beauty and serenity of the natural world.
        </p>
      </div>
    </section>
  );
};
export default Banner;
