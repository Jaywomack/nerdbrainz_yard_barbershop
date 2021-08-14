import cliff_profile from "../images/cliff_profile.jpeg";
import cliff_1 from "../images/cliff_1.jpg";
import cliff_2 from "../images/cliff_2.jpg";
import cliff_3 from "../images/cliff_3.png";
import cliff_4 from "../images/cliff_4.jpg";
import cliff_6 from "../images/cliff_6.jpg";
import cliff_7 from "../images/cliff_7.jpeg";
import cliff_8 from "../images/cliff_8.jpeg";
import nate_profile from "../images/nate_profile.jpeg";
import nate_1 from "../images/nate_1.jpeg";
import nate_2 from "../images/nate_2.jpeg";
import nate_3 from "../images/nate_3.jpeg";
import nate_4 from "../images/nate_4.jpeg";
import nate_5 from "../images/nate_5.jpeg";
import nate_6 from "../images/nate_6.jpeg";
import nate_7 from "../images/nate_7.jpeg";

const Gallery = () => {
  return (
    <div id="gallery">
      {/* Gallery with haircut explanations */}
      <section className="text-black body-font">
        <div className="container px-5  mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl md:text-4xl font-medium title-font mb-4 text-white">
              A Gallery Of Current Styles That We Provide
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="Gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={cliff_1}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-white bg-white opacity-0 hover:opacity-0">
                  <h2 className="tracking-widest text-sm title-font font-medium text-black mb-1">
                    Haircut Style
                  </h2>
                  <h1 className="title-font text-lg font-medium text-black mb-3">
                    Fade
                  </h1>
                  <p className="leading-relaxed text-black">
                    Description of the Haircut. An idea of what the style
                    entails and what style it matches up to
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="Gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={cliff_2}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-white bg-white opacity-0 hover:opacity-0">
                  <h2 className="tracking-widest text-sm title-font font-medium text-black mb-1">
                    Haircut Style
                  </h2>
                  <h1 className="title-font text-lg font-medium text-black mb-3">
                    Fade
                  </h1>
                  <p className="leading-relaxed text-black">
                    Description of the Haircut. An idea of what the style
                    entails and what style it matches up to
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="Gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={cliff_3}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-white bg-white opacity-0 hover:opacity-0">
                  <h2 className="tracking-widest text-sm title-font font-medium text-black mb-1">
                    Haircut Style
                  </h2>
                  <h1 className="title-font text-lg font-medium text-black mb-3">
                    Fade{" "}
                  </h1>
                  <p className="leading-relaxed text-black">
                    Description of the Haircut. An idea of what the style
                    entails and what style it matches up to
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="Gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={cliff_4}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-white bg-white opacity-0 hover:opacity-0">
                  <h2 className="tracking-widest text-sm title-font font-medium text-black mb-1">
                    Haircut Style
                  </h2>
                  <h1 className="title-font text-lg font-medium text-black mb-3">
                    Fade{" "}
                  </h1>
                  <p className="leading-relaxed text-black">
                    Description of the Haircut. An idea of what the style
                    entails and what style it matches up to
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="Gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center object-contain"
                  src={nate_7}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-white bg-white opacity-0 hover:opacity-0">
                  <h2 className="tracking-widest text-sm title-font font-medium text-black mb-1">
                    Haircut Style
                  </h2>
                  <h1 className="title-font text-lg font-medium text-black mb-3">
                    Fade{" "}
                  </h1>
                  <p className="leading-relaxed text-black">
                    Description of the Haircut. An idea of what the style
                    entails and what style it matches up to
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="Gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={cliff_6}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-white bg-white opacity-0 hover:opacity-0">
                  <h2 className="tracking-widest text-sm title-font font-medium text-black mb-1">
                    Haircut Style
                  </h2>
                  <h1 className="title-font text-lg font-medium text-black mb-3">
                    Fade{" "}
                  </h1>
                  <p className="leading-relaxed text-black">
                    Description of the Haircut. An idea of what the style
                    entails and what style it matches up to
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="Gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={cliff_7}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-white bg-white opacity-0 hover:opacity-0">
                  <h2 className="tracking-widest text-sm title-font font-medium text-black mb-1">
                    Haircut Style
                  </h2>
                  <h1 className="title-font text-lg font-medium text-black mb-3">
                    Fade
                  </h1>
                  <p className="leading-relaxed text-black">
                    Description of the Haircut. An idea of what the style
                    entails and what style it matches up to
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="Gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={cliff_8}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-white bg-white opacity-0 hover:opacity-0">
                  <h2 className="tracking-widest text-sm title-font font-medium text-black mb-1">
                    Haircut Style
                  </h2>
                  <h1 className="title-font text-lg font-medium text-black mb-3">
                    Fade
                  </h1>
                  <p className="leading-relaxed text-black">
                    Description of the Haircut. An idea of what the style
                    entails and what style it matches up to
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="Gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={nate_1}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-white bg-white opacity-0 hover:opacity-0">
                  <h2 className="tracking-widest text-sm title-font font-medium text-black mb-1">
                    Haircut Style
                  </h2>
                  <h1 className="title-font text-lg font-medium text-black mb-3">
                    Fade
                  </h1>
                  <p className="leading-relaxed text-black">
                    Description of the Haircut. An idea of what the style
                    entails and what style it matches up to
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="Gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={nate_2}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-white bg-white opacity-0 hover:opacity-0">
                  <h2 className="tracking-widest text-sm title-font font-medium text-black mb-1">
                    Haircut Style
                  </h2>
                  <h1 className="title-font text-lg font-medium text-black mb-3">
                    Fade
                  </h1>
                  <p className="leading-relaxed text-black">
                    Description of the Haircut. An idea of what the style
                    entails and what style it matches up to
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="Gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={nate_3}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-white bg-white opacity-0 hover:opacity-0">
                  <h2 className="tracking-widest text-sm title-font font-medium text-black mb-1">
                    Haircut Style
                  </h2>
                  <h1 className="title-font text-lg font-medium text-black mb-3">
                    Fade{" "}
                  </h1>
                  <p className="leading-relaxed text-black">
                    Description of the Haircut. An idea of what the style
                    entails and what style it matches up to
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="Gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={nate_4}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-white bg-white opacity-0 hover:opacity-0">
                  <h2 className="tracking-widest text-sm title-font font-medium text-black mb-1">
                    Haircut Style
                  </h2>
                  <h1 className="title-font text-lg font-medium text-black mb-3">
                    Fade
                  </h1>
                  <p className="leading-relaxed text-black">
                    Description of the Haircut. An idea of what the style
                    entails and what style it matches up to
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Custom Hair Cuts Gallery */}
      <section className="text-black body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-white lg:w-1/3 lg:mb-0 mb-4 mx-auto">
              Custom Styles
            </h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base text-white">
              We can cut just about any style. Most are already covered in our
              pricing, but if you need something truely custom don't be afraid
              to ask. We got you!
            </p>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="Gallery"
                  className="w-full object-cover h-full object-center block"
                  src={nate_5}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="Gallery"
                  className="w-full object-cover h-full object-center block"
                  src={nate_6}
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="Gallery"
                  className="w-full h-full object-cover object-center block"
                  src={cliff_profile}
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="Gallery"
                  className="w-full h-full object-cover object-center block"
                  src={nate_profile}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="Gallery"
                  className="w-full object-cover h-full object-center block"
                  src={cliff_3}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="Gallery"
                  className="w-full object-cover h-full object-center block"
                  src={cliff_1}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
