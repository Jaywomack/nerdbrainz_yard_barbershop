import aboutImage from "../images/about_image.jpeg";

const About = () => {
  return (
    <section id="about" className="text-white mt-12 md:my-24 ">
      <h2 className="text-4xl text-center mb-24">Est. 2016 Hillyard</h2>
      <div className="flex flex-wrap overflow-hidden">
        <div className="w-full overflow-hidden lg:w-1/2">
          <img
            className="w-full object-cover object-center rounded-lg filter grayscale px-5 mb-12"
            alt="hero"
            src={aboutImage}
          />
        </div>
        <div className="w-full overflow-hidden lg:w-1/2 text-2xl">
          <h1 className="text-5xl text-center  my-6 md:mt-24 lg:mt-0">
            About Us
          </h1>

          <p className="mb-8  text-center w-full px-5">
            The Yard Barbershop was established in 2016 and is located at 5303
            N. Market. A few blocks North of the Hillyard Historic Business
            District. We are definitely known for putting out fresh cuts, but
            more importantly we are known for giving back to our community. At
            the Yard you are more than a client. Once you walk through our doors
            you become a part of the family. We want your experience to be more
            than just getting a cut. This is a life style. Come see for yourself
            and become a part of the fam!
          </p>
          <p className="mb-8  text-center w-full px-5">
            We stay busy so appointments are highly suggested but walk ins are
            also welcome.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
