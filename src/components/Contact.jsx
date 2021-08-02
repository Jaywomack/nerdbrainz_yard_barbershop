const Contact = () => {
  return (
    <section id="contact" className="text-gray-600 body-font relative">
      <div className="absolute inset-0 bg-gray-300">
        <iframe
          width="100%"
          height="100%"
          frameborder="0"
          marginHeight="0"
          marginWidth="0"
          title="map"
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10739.521675983595!2d-117.3649824!3d47.7061591!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc8272f365e5655e0!2sThe%20Yard%20Barber!5e0!3m2!1sen!2sus!4v1627917070255!5m2!1sen!2sus"
          style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4);" }}
        ></iframe>
      </div>
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md hidden md:block">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Contact
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">The Yard Barber</p>
          <div className="relative mb-4">
            <p>
              Phone: <a href="tel:509-720-0672">509-720-0672</a>
            </p>
          </div>
          <div className="relative mb-4">
            <p>Address: 5303 N Market St, Spokane, WA 99217</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
