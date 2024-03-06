import PageHeader from "../shared/PageHeader";
import data from "../../data.json";
import { useState } from "react";

function DestinationPage() {
  const { destinations } = data;
  const [selectedDestination, setSelectedDestination] = useState(destinations[0]);

  return (
    <>
      <PageHeader number="01" title="Pick your destination" />
      <div className="md:max-w-143 md:mx-auto">
        <img
          className="h-planet w-planet mx-auto mt-8 mb-6 md:h-planet-tablet md:w-planet-tablet md:mt-15 md:mb-13"
          src={"./src" + selectedDestination.images.png.substring(1)}
        />
        <div className="flex flex-row justify-center gap-7 mb-5">
        {destinations.map((destination) => (
            <div key={destination.name}>
              <button
                onClick={() => setSelectedDestination(destination)}
                className={`block uppercase font-primary-condensed text-sub md:text-base ${destination.name === selectedDestination.name ? "text-primary border-b-3 pb-2" : "text-secondary"}  tracking-nav`}
              >
                {destination.name}
              </button>
            </div>
        ))}
        </div>
        <h2 className="uppercase text-center md:text-md-h2">{selectedDestination.name}</h2>
        <p className="text-center text-secondary md:text-base">{selectedDestination.description}</p>
        <hr className="border-primary my-8 md:mt-12 md:mb-7" />
        <div className="md:flex md:justify-center md:gap-3">
          <div className="md:min-w-56">
            <p className="uppercase text-center tracking-subhead font-primary-condensed text-secondary text-sub">Avg. Distance</p>
            <p className="text-center text-lg-h5 font-secondary mt-3 uppercase">{selectedDestination.distance}</p>
          </div>
          <div className="md:min-w-56">
            <p className="uppercase text-center tracking-subhead font-primary-condensed text-secondary text-sub mt-8 md:mt-0">EST. Travel Time</p>
            <p className="text-center text-lg-h5 font-secondary mt-3 uppercase mb-14 md:mb-0">{selectedDestination.travel}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DestinationPage;