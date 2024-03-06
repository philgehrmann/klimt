"use client";
import { useRef, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
export default function Mainframe() {
  const video = useRef<HTMLVideoElement>(null);

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-[100vh] overflow-y-hidden">
        <div className="text-white grid px-12 pt-12 lg:px-12 lg:pt-0 min-h-[430px] bg-yellow self-center justify-self-start lg:min-h-auto relative z-[150]">
          <div className="lg:min-w-[500px]">
            <h3 className="text-white ">Ihre Profis für</h3>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Printmedien.",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "Digitaldruck.",
                2000,
                "Folienbeschriftung.",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "Leuchkästen.",
                2000,
                "Car-Styling.",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "Digitaldruck.",
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="h1"
              repeat={Infinity}
            />
            <p className="mt-6 lg:max-w-[800px]">
              {" "}
              Wir verwandeln Ihre Visionen in beeindruckende Realität. Lassen
              Sie sich von unseren Leistungen inspirieren.
            </p>

            <a className="btn--light lg:mt-12 text-yellow">Lerne uns kennen!</a>
          </div>
        </div>

        <div className="bg-white relative w-full lg:border-l-[1px] lg:border-white z-1 ">
          <video
            autoPlay
            muted
            loop
            className="cover absolute left-0 right-0 w-full -translate-y-[40%] lg:-translate-y-[20%]"
            src="https://player.vimeo.com/external/552791228.sd.mp4?s=2178f9011ab3a8d5b5dc8cecf367b7e8940d1a2f&profile_id=165&oauth2_token_id=57447761"
          />
        </div>
      </div>
    </section>
  );
}
