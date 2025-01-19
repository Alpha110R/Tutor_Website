import Image from "next/image";
import dynamic from "next/dynamic";
import bg from "../../public/background/home-background.webp";
import { Analytics } from "@vercel/analytics/react";

// Dynamic imports for components to reduce initial JavaScript
const About = dynamic(() => import("@/components/about"), { ssr: true });
const Form = dynamic(() => import("@/components/contact/Form"), { ssr: false });
const RenderModel = dynamic(() => import("@/components/models/RenderModel"), {
  ssr: false,
});
const Wizard = dynamic(() => import("@/components/models/Wizard"), {
  ssr: false,
});
const HatModel = dynamic(() => import("@/components/models/HatModel"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        alt="Coding Wizards School page background image"
        className="-z-50 fixed w-full h-full object-cover object-center opacity-60"
        loading="eager"
      />

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute top-[20%] text-center">
          <h1 className="font-bold text-accent text-3xl xs:text-5xl sm:text-6xl lg:text-7xl">
            Coding Wizards School
          </h1>
        </div>

        <div className="absolute bottom-0 w-full h-3/4 flex justify-center">
          <RenderModel>
            <Wizard />
          </RenderModel>
        </div>
      </div>

      <div className="flex min-h-screen flex-col items-center justify-between relative">
        <div className="w-full h-screen">
          <About />
          <div className="w-full flex justify-center items-center py-20">
            <div className="max-w-5xl w-full px-8 flex flex-col items-center">
              <h2 className="text-4xl font-bold text-center text-yellow-300 mb-10">
                צרו קשר
              </h2>
              <div className="w-full flex justify-center">
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Analytics />
    </>
  );
}
