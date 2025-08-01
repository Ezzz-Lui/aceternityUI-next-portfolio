import { FlipWords } from "@/components/ui/flip-words";
// import { Spotlight } from "@/components/ui/spotlight";
import { Spotlight } from "@/components/ui/spotlight-new";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { MorphingText } from "@/components/magicui/morphing-text";
import { NavbarDemo } from "@/components/Portfolio/HeaderApp";


const words = ["better", "beautiful", "modern"];
const FlippingWords = `I’m passionate about building digital solutions from start to finish. With a strong foundation in both frontend and backend development.`;
export default function Home() {
  return (
    <>
      <NavbarDemo />
      <div className="h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Luis Ramos <br /> Full Stack Developer
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            {FlippingWords}
          </p>
        </div>
      </div>
    </>
  );
}
