import ParticlesBg from "./BgStyle";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex py-20 xl:flex-row flex-col items-center mx-auto px-40 container gap-10"
    >
      <ParticlesBg />
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-black dark:text-white font-bold">
            <span className="text-[#ff00d0] md:text-6xl text-4xl right-20 ">
              Hello!
              <br />
            </span>
            My Name is <span>Munisa Musayeva</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-[#cd08a9] right-20">
            Fullstack Developer
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Hero;
