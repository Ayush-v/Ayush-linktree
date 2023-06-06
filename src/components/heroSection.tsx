import Image from "next/image";
import AnimatedStroke from "./animatedStroke";
// import { Tilt } from "./Projects";
// import TextReveal from "components/TextReveal";

export default function HeroSection() {
  //   const options = {
  //     scale: 1.05,
  //     speed: 1000,
  //     max: 8,
  //     glare: true,
  //     "max-glare": 0.4,
  //   };

  return (
    <section className="mx-auto my-12 min-h-full w-full max-w-7xl scroll-m-20 px-6">
      <div className="flex max-w-7xl flex-col items-center gap-8 px-4 lg:h-[70vh] lg:flex-row lg:justify-between lg:gap-16 lg:py-0">
        <div>
          <span className="text-sm uppercase opacity-80">
            {/* <TextReveal text="designer / developer" /> */}
            designer / developer
          </span>
          <h1 className="mx-auto mb-6 max-w-4xl text-5xl font-semibold lg:text-7xl">
            Hi, Im{" "}
            <span className="relative whitespace-nowrap">
              <AnimatedStroke />
              {/* <span className="relative">
                <TextReveal text={"Ayush"} />
              </span> */}
              Ayush
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl pr-4 text-lg tracking-tight text-white/50">
            I love making the world a better place with my design and coding
            skills. You&#39;re at the right place if you want to see how I can
            bring your designs to life.
          </p>
        </div>
        {/* <Tilt options={options}> */}
        <Image
          src={"/images/heroImage.png"}
          alt=""
          priority
          width={400}
          height={540}
          className="h-auto max-h-[635px] w-auto rounded-2xl bg-cover bg-bottom bg-no-repeat"
        />
        {/* </Tilt> */}
      </div>
    </section>
  );
}