import React from "react";

const Prices = () => {
  return (
    <div className="flex container my-5">
      <div className="w-full md:w-1/3">
        <div className="m-3 p-2 border-2 border-gray-300 rounded-lg flex flex-col justify-center align-center">
          <img
            src="images/Screenshot-2023-05-23-at-11.51.45-AM.png"
            loading="lazy"
            alt=""
            className="mx-auto h-42 w-auto"
          />
          <div className="text-center">
            <h2 className="mx-auto text-2xl font-bold">Monthly</h2>
            <div className="mx-auto text-xl font-bold">Starting at</div>
            <div className="mx-auto text-xl font-bold">$70/mo</div>
            <div className="mb-3">Lorem ipsum dolor</div>
            <a
              href="#top"
              className="bg-black text-white py-2 px-3 no-underline"
            >
              Talk to an Expert
            </a>
          </div>

          <div className="pricing-divider"></div>
          <ul className="text-center space-y-2 w-list-unstyled my-3">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
          </ul>
        </div>
      </div>
      <div className="w-full md:w-1/3">
        <div className="m-3 p-2 border-2 border-gray-300 rounded-lg flex flex-col justify-center align-center">
          <img
            src="images/Screenshot-2023-05-23-at-11.51.39-AM.png"
            loading="lazy"
            alt=""
            className="mx-auto h-42 w-auto"
          />
          <div className="text-center">
            <h2 className="mx-auto text-2xl font-bold">6Months</h2>
            <div className="mx-auto text-xl font-bold">Starting at</div>
            <div className="mx-auto text-xl font-bold">$49/mo</div>
            <div className="mb-3">294$ Charged in advance</div>
            <a
              href="#top"
              className="bg-black text-white py-2 px-3 no-underline"
            >
              Talk to an Expert
            </a>
          </div>
          <div className="pricing-divider"></div>
          <ul className="text-center space-y-2 w-list-unstyled my-3">
            <li>Etiam sodales ac felis id interdum</li>
            <li>Etiam sodales ac felis id interdum</li>
            <li>Etiam sodales ac felis id interdum</li>
            <li>Etiam sodales ac felis id interdum</li>
            <li>Etiam sodales ac felis id interdum</li>
            <li>Etiam sodales ac felis id interdum</li>
            <li>Etiam sodales ac felis id interdum</li>
            <li>Etiam sodales ac felis id interdum</li>
          </ul>
          <div className="text-purple-500 text-2xl text-center mb-4 uppercase font-bold">
            Recommended
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/3">
        <div className="m-3 p-2 border-2 border-gray-300 rounded-lg flex flex-col justify-center align-center">
          <img
            src="images/Screenshot-2023-05-23-at-11.51.35-AM.png"
            loading="lazy"
            alt=""
            className="mx-auto h-42 w-auto"
          />
          <div className="text-center">
            <h2 className="mx-auto text-2xl font-bold">Yearly</h2>
            <div className="mx-auto text-xl font-bold">Starting at</div>
            <div className="mx-auto text-xl font-bold">$55/mo</div>
            <div className="mb-3">660$ Charged in advance</div>
            <a
              href="#top"
              className="bg-black text-white py-2 px-3 no-underline"
            >
              Talk to an Expert
            </a>
          </div>
          <div className="pricing-divider"></div>
          <ul className="text-center space-y-2 w-list-unstyled my-3">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Prices;
