"use client";
import { TypeAnimation } from "react-type-animation";
export default function Mainframe() {
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
            src="https://vod-progressive.akamaized.net/exp=1709732346~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2573%2F21%2F537868903%2F2547815848.mp4~hmac=564956a87b0a01c63ba3478236f8031d539329a758adbc03921c35bc96a523a5/vimeo-prod-skyfire-std-us/01/2573/21/537868903/2547815848.mp4"
          />
        </div>
      </div>
    </section>
  );
}
