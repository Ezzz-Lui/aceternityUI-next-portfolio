import { FlipWords } from "@/components/ui/flip-words";
import { Spotlight } from "@/components/ui/spotlight-new";
import { NavbarDemo } from "@/components/Portfolio/HeaderApp";
import { AnimatedTooltipPreview } from "@/components/Portfolio/TooltipDock";

const words = ["projects", "opportunities", "work", "collaborations", "solutions", "ideas","connections"];
const FlippingWords = `I’m passionate about building digital solutions from start to finish. With a strong foundation in both frontend and backend development.`;
export default function Home() {
  return (
    <>
      <NavbarDemo />
      <div className="h-dvh w-full rounded-md justify-center items-center flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <div className="flex justify-center mb-4">
        <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-stone-500/10 text-stone-400 border border-stone-500/20 hover:border-stone-500/30 transition-all duration-1000 shadow-lg shadow-stone-500/20 hover:shadow-stone-500/30 hover:shadow-xl">
          Available for new <FlipWords words={words} className="text-stone-700" />
        </span>
        </div>
        <h1 className="text-4xl md:text-8xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-stone-50 to-stone-400 bg-opacity-50">
        Luis Ramos <br /> Software Developer
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
        {FlippingWords}
        </p>
        <h2 className="text-xl sm:text-2xl font-bold text-center text-stone-200 mt-8 mb-4">Building apps with</h2>
        <AnimatedTooltipPreview />
      </div>
      <Spotlight />
      </div>
      {/* <h1 className="text-5xl font-bold text-stone-200 text-center bg-black">My Projects</h1>
      <div className="flex flex-row items-center justify-center bg-black space-x-4 p-4">
        <CardSpotlightDemo />
        <CardSpotlightDemo />
        <CardSpotlightDemo />
      </div> */}
    </>
  );
}
