import aboutImage from "../images/about_image.jpeg";

const About = () => {
  return (
    <section id="about" className="text-white mt-12 md:my-24 ">
      <h2 className="text-4xl text-center mb-24">Est. 2018 Hillyard</h2>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
            delectus molestiae? Numquam suscipit maxime reiciendis, quo
            consequuntur distinctio voluptatibus. Provident neque nostrum autem
            iusto modi, consectetur incidunt earum iure debitis commodi expedita
            maiores quae consequuntur porro ea voluptas aliquam reiciendis
            beatae qui. Iusto placeat, inventore aspernatur porro ab quidem
            dolorum recusandae voluptate fugit iure dignissimos, amet eius at
            iste laboriosam.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
