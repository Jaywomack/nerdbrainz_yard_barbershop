import cliff_profile from "../images/cliff_profile_three.png";
import nate_profile from "../images/nate_profile_two.png";
import louie_profile from "../images/louie_profile_two.png";
import nicks_profile from "../images/nicks_profile_two.png";
import insta from "../images/insta.png";
const Barbers = () => {
  return (
    <section className="text-white bg-black body-font ">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20 text-base">
          <h1
            id="pricing"
            className="text-4xl font-medium title-font mb-4 text-white"
          >
            MEET THE TEAM
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-2xl">
            At The Yard Barber's our team offer a full range of classic and
            modern mens haircuts for all hair types.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {/* start barber 1 pricing */}
          <div className="p-4 lg:w-1/3 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center ">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4 border-2 border-red-600 "
                src={cliff_profile}
              />
              <div className="w-full">
                <a
                  className="title-font font-medium text-lg text-white"
                  href="tel:509-720-0672"
                >
                  <h2 className="title-font font-medium text-lg text-white">
                    Cliff Nickell
                  </h2>
                  <p>509-720-0672</p>
                  <h3 className="text-white mb-3 text-red-600">
                    Owner / Barber
                  </h3>
                </a>
                <a
                  href="https://www.instagram.com/theyardbarber509/"
                  className="text-center mx-auto"
                >
                  <img
                    src={insta}
                    className="h-24 w-24 mx-auto mb-3 filter invert"
                    alt=""
                  />
                </a>
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
                    <br />
                  </p>
                  <p className="text-xs text-white mt-3">
                    **VIP includes fade, line-up, beard, lavender hot towel,
                    black mask.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* End Barber 1 pricing */}
          {/* start barber 2 pricing */}
          <div className="p-4 lg:w-1/3 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                src={nate_profile}
              />
              <div className="w-full">
                <a
                  className="title-font font-medium text-lg text-white"
                  href="tel:208-704-6952"
                >
                  <h2 className="title-font font-medium text-lg text-white">
                    Nate Webster{" "}
                  </h2>
                  <p>208-704-6952</p>
                  <h3 className="text-white mb-3 text-red-600">Barber</h3>
                </a>
                <a
                  href="https://www.instagram.com/certafide_king/"
                  className="text-center mx-auto"
                >
                  <img
                    src={insta}
                    className="h-24 w-24 mx-auto mb-3 filter invert"
                    alt=""
                  />
                </a>
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
                    $35.00-$125.00
                  </h1>
                  <div className="inline-flex">
                    <div className="w-full inline-flex justify-between items-center align-middle">
                      <p className="ml-3">CHILD / TEEN</p>
                      <p className="p-1 text-red-600 text-xl rounded ml-3">
                        <span className="p-1 text-base bg-red-600 text-white rounded mr-2">
                          1 hr
                        </span>
                        $35.00
                      </p>
                    </div>
                  </div>
                  <div className="inline-flex">
                    <div className="w-full inline-flex justify-between items-center align-middle">
                      <p className="ml-3">ADULT CUT</p>
                      <p className="p-1 text-red-600 text-xl rounded ml-3">
                        <span className="p-1 text-base bg-red-600 text-white rounded mr-2">
                          1 hr
                        </span>
                        $40.00
                      </p>
                    </div>
                  </div>
                  <div className="inline-flex">
                    <div className="w-full inline-flex justify-between items-center align-middle">
                      <p className="ml-3">FULL KING</p>
                      <p className="p-1 text-red-600 text-xl rounded ml-3">
                        <span className="p-1 text-base bg-red-600 text-white rounded mr-2">
                          1.5 hr
                        </span>
                        $60.00
                      </p>
                    </div>
                  </div>

                  <div className="inline-flex">
                    <div className="w-full inline-flex justify-between items-center align-middle">
                      <p className="ml-3">HOUSE CALL</p>
                      <p className="p-1 text-red-600 text-xl rounded ml-3">
                        <span className="p-1 text-base bg-red-600 text-white rounded mr-2">
                          1.5hr
                        </span>
                        $125 +
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-white mt-3">
                    **Adult Cut includes fade, skin fade, or taper fade with
                    razor lining.
                  </p>
                  <p className="text-xs text-white mt-3">
                    **Full King includes fade, skin fade, or taper fade with
                    razor lining, enhancements, eyebrows, nose hairs, hot towel
                    shave, black mask.
                  </p>
                  <p className="text-xs text-white mt-3">
                    **Child / Teen include fade, skin fade, taper fade with
                    razor lining, hair designed add $5 + depending on how
                    intricate the design
                  </p>
                  <p className="text-xs text-white mt-3">
                    **Enhancements on request
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* End barber 2 pricing */}
          {/* start barber 3 pricing */}
          <div className="p-4 lg:w-1/3 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                src={nicks_profile}
              />
              <div className="w-full">
                <a
                  className="title-font font-medium text-lg text-white"
                  href="tel:509-842-7402"
                >
                  <h2 className="title-font font-medium text-lg text-white">
                    Nicholas Dugas
                  </h2>
                  <p>509-842-7402</p>
                  <h3 className="text-white mb-3 text-red-600">Barber</h3>
                </a>
                <a
                  href="https://www.instagram.com/hillyardbarber/"
                  className="text-center mx-auto"
                >
                  <img
                    src={insta}
                    className="h-24 w-24 mx-auto mb-3 filter invert"
                    alt=""
                  />
                </a>
              </div>
              <div className="">
                <div className="h-full p-6 rounded-lg border-2 border-white flex flex-col relative overflow-hidden border-2 border-red-600">
                  <span className="bg-red-600 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                    Nicholas Dugas
                  </span>
                  <h2 className="text-base tracking-widest title-font mb-1 font-medium">
                    Nick's Services
                  </h2>
                  <h1 className="text-4xl text-white pb-4 mb-4 border-b border-red-600 leading-none">
                    $15.00-$30.00
                  </h1>
                  <div className="inline-flex">
                    <div className="w-full inline-flex justify-between items-center align-middle">
                      <p className="ml-3">BUZZ CUT</p>
                      <p className="p-1 text-red-600 text-xl rounded ml-3">
                        <span className="p-1 text-base bg-red-600 text-white rounded mr-2">
                          30mins
                        </span>
                        $17.00
                      </p>
                    </div>
                  </div>
                  <div className="inline-flex">
                    <div className="w-full inline-flex justify-between items-center align-middle">
                      <p className="ml-3">KIDS CUT</p>
                      <p className="p-1 text-red-600 text-xl rounded ml-3">
                        <span className="p-1 text-base bg-red-600 text-white rounded mr-2">
                          30 mins
                        </span>
                        $20.00
                      </p>
                    </div>
                  </div>
                  <div className="inline-flex">
                    <div className="w-full inline-flex justify-between items-center align-middle">
                      <p className="ml-3">ADULT CUT</p>
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
                      <p className="ml-3">HAIR CUT / BEARD</p>
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
                      <p className="ml-3">BEARD</p>
                      <p className="p-1 text-red-600 text-xl rounded ml-3">
                        <span className="p-1 text-base bg-red-600 text-white rounded mr-2">
                          30 mins
                        </span>
                        $15.00
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-white mt-3">
                    **Really great with kids.**
                  </p>
                  <p className="text-xs text-white mt-3">**Great cuts.**</p>

                  {/* start of filler */}
                  <p className="text-xs text-black mt-3">
                    **Basic cut includes buzz cut, head shave, senior citizen,
                    line-up w/beard.
                  </p>
                  <p className="text-xs text-black mt-3">
                    **Full Service includes fade, beard and eyebrows.
                    <br />
                  </p>
                  <p className="text-xs text-black mt-3">
                    **VIP includes fade, line-up, beard,
                  </p>
                  {/* end of filler */}
                </div>
              </div>
            </div>
          </div>
          {/* End Barber 3 pricing */}
          
        </div>
      </div>
    </section>
  );
};

export default Barbers;
