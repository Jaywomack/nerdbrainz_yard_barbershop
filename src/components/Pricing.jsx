const Pricing = () => {
  return (
    <section id="pricing" className="text-white body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font   text-white">
            Services
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-white flex flex-col relative overflow-hidden">
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                Basic Cut
              </h2>
              <h1 className="text-5xl text-white pb-4 mb-4 border-b border-white leading-none">
                $25.00
              </h1>
              <p className="flex items-center text-white mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Fades
              </p>
              <p className="flex items-center text-white mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Head Shave
              </p>
              <p className="flex items-center text-white mb-6">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Line Ups
              </p>

              <p className="text-xs text-white mt-3">
                Our basic cuts start at $25.00 With many add ons available
              </p>
            </div>
          </div>
          <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-red-600 flex flex-col relative overflow-hidden">
              <span className="bg-red-600 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                POPULAR
              </span>
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                Cut and Shave
              </h2>
              <h1 className="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-white">
                <span>$35.00</span>
              </h1>
              <p className="flex items-center text-white mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Any Basic Haircut
              </p>
              <p className="flex items-center text-white mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Shave
              </p>
              <p className="flex items-center text-white mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Line Up
              </p>
              <p className="flex items-center text-white mb-6">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Another Thing
              </p>

              <p className="text-xs text-white mt-3">
                The full experience that will have your hair and beard dialed to
                the max.
              </p>
            </div>
          </div>
          <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-white flex flex-col relative overflow-hidden">
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                Custom Cut
              </h2>
              <h1 className="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-white">
                <span>$50.00+</span>
              </h1>
              <p className="flex items-center text-white mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Custom Styling
              </p>
              <p className="flex items-center text-white mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Names or Designs
              </p>
              <p className="flex items-center text-white mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Whatever you can imagine
              </p>
              <p className="flex items-center text-white mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Whatever you can imagine
              </p>
              <p className="flex items-center text-white mb-6">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Whatever you can imagine
              </p>

              <p className="text-xs text-white mt-3">
                Literally you probably haven't heard of them jean shorts.
              </p>
            </div>
          </div>
          <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-white flex flex-col relative overflow-hidden">
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                Our Shop
              </h2>
              <h1 className="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-white">
                <span>Check Out our products in the shop</span>
              </h1>
              <p className="flex items-center text-white mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Gels
              </p>
              <p className="flex items-center text-white mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                moose{" "}
              </p>
              <p className="flex items-center text-white mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                combs{" "}
              </p>
              <p className="flex items-center text-white mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                brushes{" "}
              </p>
              <p className="flex items-center text-white mb-6">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                picks{" "}
              </p>

              <p className="text-xs text-white mt-3">
                You gotta stay fresh in between cuts. Now with our product line
                up you can.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
