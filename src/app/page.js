import Image from "next/image";
import dynamic from "next/dynamic";
import bg from "../../public/background/home-background.webp";
import { Analytics } from "@vercel/analytics/react";

const About = dynamic(() => import("@/components/about"), { ssr: false });
const Form = dynamic(() => import("@/components/contact/Form"), { ssr: false });
const RenderModel = dynamic(() => import("@/components/models/RenderModel"), {
  ssr: false,
});
const Wizard = dynamic(() => import("@/components/models/Wizard"), {
  ssr: true,
});

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Coding Wizards School page background image"
        className="-z-50 fixed w-full h-full object-cover object-center opacity-60"
        loading="eager"
      />

      <div className="relative w-full h-screen flex items-center justify-center">
        <div className="hero-title-wrapper">
          <h1 className="title">Coding Wizards School</h1>
        </div>
      </div>

      <div className="absolute bottom-0 w-full h-[90%]">
        <RenderModel>
          <Wizard />
        </RenderModel>
      </div>
      <div class="animated-arrow absolute bottom-0  w-full flex items-center mb-10">
        <span class="arrow"></span>
      </div>

      <div className="section-wrapper">
        <div className="section-content">
          <About />
          <div className="content-wrapper">
            <div className="content-container">
              <h2 className="contact-form-title">צרו קשר</h2>
              <div className="w-full flex justify-center">
                <Form />
              </div>
              <h4 className="contact-phone-title mt-8">יכולים גם להתקשר</h4>
              <h4 className="contact-phone-title">054-819-2255</h4>
            </div>
          </div>
        </div>
      </div>
      <Analytics />
    </>
  );
}
