import Image from "next/image";
import bg from "../../public/background/home-background.png";
import RenderModel from "@/components/RenderModel";
import About from "@/components/about";
import Form from "@/components/contact/Form";
import { Analytics } from "@vercel/analytics/react";

import dynamic from "next/dynamic";
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
        sizes="100vw"
        alt="Coding Wizards School page background image"
        className="-z-50 fixed w-full h-full object-cover object-center opacity-80"
      />
      <Analytics />
      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0 z-5">
        <RenderModel>
          <HatModel />
        </RenderModel>
      </div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h2 className="font-bold text-3xl xs:text-5xl sm:text-6xl lg:text-7xl text-accent">
            Coding Wizards School
          </h2>
        </div>
      </div>

      <div className="flex min-h-screen flex-col items-center justify-between relative">
        <div className="w-full h-screen">
          <About />
          <div className="w-full flex justify-center items-center py-20">
            <div className="max-w-5xl w-full px-8 flex flex-col items-center">
              <h3 className="text-4xl font-bold text-center text-yellow-300 mb-10">
                צרו קשר
              </h3>
              <div className="w-full flex justify-center">
                <Form />
              </div>
              <h5 className="text-2xl font-bold text-center text-yellow-300 mt-10">
                {/* יכולים גם להתקשר: 0540000000 */}
              </h5>
            </div>
          </div>
          <RenderModel>
            <Wizard />
          </RenderModel>
        </div>
      </div>
    </>
  );
}
