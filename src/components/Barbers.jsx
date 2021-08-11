import cliff_profile from "../images/cliff_profile.png";
import nate_profile from "../images/nate_profile.jpeg";
const Barbers = () => {
  return (
    <section className="text-white bg-black body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1
            id="pricing"
            className="text-4xl font-medium title-font mb-4 text-white"
          >
            OUR TEAM
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-xl">
            Our team is strong. We offer all the popular cuts you could want.
            And we guarantee your happiness. You will leave here looking fresh
            no matter the barber you choose. Check out our line up.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                src={cliff_profile}
              />
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-white">
                  Cliff Nickell
                </h2>
                <h3 className="text-white mb-3 text-red-600">Owner / Barber</h3>
              </div>
              <div className="">
                <div className="h-full p-6 rounded-lg border-2 border-white flex flex-col relative overflow-hidden border-2 border-red-600">
                  <span className="bg-red-600 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                    Cliff Nickell
                  </span>
                  <h2 className="text-base tracking-widest title-font mb-1 font-medium">
                    Cliff's Services
                  </h2>
                  <h1 className="text-4xl text-white pb-4 mb-4 border-b border-red-600 leading-none">
                    $25.00-$100.00
                  </h1>
                  <div className="inline-flex">
                    <div className="w-full inline-flex justify-between items-center align-middle">
                      <p className="ml-3">BASIC CUT</p>
                      <p className="p-1 text-red-600 text-xl rounded ml-3">
                        <span className="p-1 text-base bg-red-600 text-white rounded mr-2">
                          30mins
                        </span>
                        $25.00
                      </p>
                    </div>
                  </div>
                  <div className="inline-flex">
                    <div className="w-full inline-flex justify-between items-center align-middle">
                      <p className="ml-3">FADE</p>
                      <p className="p-1 text-red-600 text-xl rounded ml-3">
                        <span className="p-1 text-base bg-red-600 text-white rounded mr-2">
                          1 hr
                        </span>
                        $30.00
                      </p>
                    </div>
                  </div>
                  <div className="inline-flex">
                    <div className="w-full inline-flex justify-between items-center align-middle">
                      <p className="ml-3">BALD FADE</p>
                      <p className="p-1 text-red-600 text-xl rounded ml-3">
                        <span className="p-1 text-base bg-red-600 text-white rounded mr-2">
                          1.25hr
                        </span>
                        $35.00
                      </p>
                    </div>
                  </div>
                  <div className="inline-flex">
                    <div className="w-full inline-flex justify-between items-center align-middle">
                      <p className="ml-3">FULL SERVICE</p>
                      <p className="p-1 text-red-600 text-xl rounded ml-3">
                        <span className="p-1 text-base bg-red-600 text-white rounded mr-2">
                          1.25hr
                        </span>
                        $40.00
                      </p>
                    </div>
                  </div>
                  <div className="inline-flex">
                    <div className="w-full inline-flex justify-between items-center align-middle">
                      <p className="ml-3">VIP</p>
                      <p className="p-1 text-red-600 text-xl rounded ml-3">
                        <span className="p-1 text-base bg-red-600 text-white rounded mr-2">
                          1.5hr
                        </span>
                        $50.00
                      </p>
                    </div>
                  </div>
                  <div className="inline-flex">
                    <div className="w-full inline-flex justify-between items-center align-middle">
                      <p className="ml-3">HOUSE CALLS</p>
                      <p className="p-1 text-red-600 text-xl rounded ml-3">
                        <span className="p-1 text-base bg-red-600 text-white rounded mr-2">
                          1.5hr
                        </span>
                        $100.00
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-white mt-3">
                    **Basic cut includes buzz cut, head shave, senior citizen,
                    line-up w/beard.
                  </p>
                  <p className="text-xs text-white mt-3">
                    **Full Service includes fade, beard and eyebrows.
                  </p>
                  <p className="text-xs text-white mt-3">
                    **VIP includes fade, line-up, beard, lavender hot towel,
                    black mask.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                src={nate_profile}
              />
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-white">
                  Nate Webster
                </h2>
                <h3 className="text-white mb-3 text-red-600">Barber</h3>
              </div>
              <div className="">
                <div className="h-full p-6 rounded-lg border-2 border-white flex flex-col relative overflow-hidden border-2 border-red-600">
                  <span className="bg-red-600 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                    Nate Webster
                  </span>
                  <h2 className="text-base tracking-widest title-font mb-1 font-medium">
                    Nate's Services
                  </h2>
                  <h1 className="text-4xl text-white pb-4 mb-4 border-b border-red-600 leading-none">
                    $25.00-$100.00
                  </h1>
                  <div className="inline-flex">
                    <div className="w-full inline-flex justify-between items-center align-middle">
                      <p className="ml-3">BASIC CUT</p>
                      <p className="p-1 text-red-600 text-xl rounded ml-3">
                        <span className="p-1 text-base bg-red-600 text-white rounded mr-2">
                          30mins
                        </span>
                        $25.00
                      </p>
                    </div>
                  </div>
                  <div className="inline-flex">
                    <div className="w-full inline-flex justify-between items-center align-middle">
                      <p className="ml-3">FADE</p>
                      <p className="p-1 text-red-600 text-xl rounded ml-3">
                        <span className="p-1 text-base bg-red-600 text-white rounded mr-2">
                          1 hr
                        </span>
                        $30.00
                      </p>
                    </div>
                  </div>
                  <div className="inline-flex">
                    <div className="w-full inline-flex justify-between items-center align-middle">
                      <p className="ml-3">BALD FADE</p>
                      <p className="p-1 text-red-600 text-xl rounded ml-3">
                        <span className="p-1 text-base bg-red-600 text-white rounded mr-2">
                          1.25hr
                        </span>
                        $35.00
                      </p>
                    </div>
                  </div>
                  <div className="inline-flex">
                    <div className="w-full inline-flex justify-between items-center align-middle">
                      <p className="ml-3">FULL SERVICE</p>
                      <p className="p-1 text-red-600 text-xl rounded ml-3">
                        <span className="p-1 text-base bg-red-600 text-white rounded mr-2">
                          1.25hr
                        </span>
                        $40.00
                      </p>
                    </div>
                  </div>
                  <div className="inline-flex">
                    <div className="w-full inline-flex justify-between items-center align-middle">
                      <p className="ml-3">VIP</p>
                      <p className="p-1 text-red-600 text-xl rounded ml-3">
                        <span className="p-1 text-base bg-red-600 text-white rounded mr-2">
                          1.5hr
                        </span>
                        $50.00
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-white mt-3">
                    **Basic cut includes buzz cut, head shave, senior citizen,
                    line-up w/beard.
                  </p>
                  <p className="text-xs text-white mt-3">
                    **Full Service includes fade, beard and eyebrows.
                  </p>
                  <p className="text-xs text-white mt-3">
                    **VIP includes fade, line-up, beard, lavender hot towel,
                    black mask.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Barbers;
