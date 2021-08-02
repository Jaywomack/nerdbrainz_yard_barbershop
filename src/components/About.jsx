import aboutImage from "../images/about_image.jpeg";

const About = () => {
  return (
    <section id="about" className="text-white body-font">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white text-center">
        About Us
      </h1>
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="  mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded filter grayscale"
            alt="hero"
            src={aboutImage}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center text-2xl">
          <p className="mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            excepturi ullam quaerat harum mollitia, numquam delectus expedita
            laudantium natus cum aspernatur velit amet autem quam sapiente
            reiciendis praesentium commodi recusandae libero dolorum consectetur
            dicta ducimus quas. Reiciendis quia doloribus molestias architecto
            voluptates ea? Culpa modi at dolorem mollitia amet maiores inventore
            ab, velit laborum placeat facilis alias veritatis, ex odio ea
            laudantium voluptas in omnis, itaque quasi et minima. Omnis quisquam
            vitae possimus cumque error maxime corrupti explicabo? Dignissimos
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
