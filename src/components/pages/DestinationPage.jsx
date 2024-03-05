import PageHeader from "../shared/PageHeader";
import data from "../../data.json";
import { useState } from "react";

function DestinationPage() {
  const { destinations } = data;
  const [selectedDestination, setSelectedDestination] = useState(destinations[0]);

  return (
    <>
      <PageHeader number="01" title="Pick your destination" />
      <img className="h-planet w-planet mx-auto mt-8 mb-6" src={"./src" + selectedDestination.images.png.substring(1)} />
      <div className="flex flex-row justify-center gap-7 mb-5">
      {destinations.map((destination) => (
          <div key={destination.name}>
            <button
              onClick={() => setSelectedDestination(destination)}
              className={`block uppercase font-primary-condensed text-sub ${destination.name === selectedDestination.name ? "text-primary border-b-3 pb-2" : "text-secondary"}  tracking-nav`}
            >
              {destination.name}
            </button>
          </div>
      ))}
      </div>
      <h2 className="uppercase text-center">{selectedDestination.name}</h2>
      <p className="text-center text-secondary">{selectedDestination.description}</p>
      <hr className="border-primary my-8" />
      <p className="uppercase text-center tracking-subhead font-primary-condensed text-secondary text-sub">Avg. Distance</p>
      <p className="text-center text-lg-h5 font-secondary mt-3 uppercase">{selectedDestination.distance}</p>
      <p className="uppercase text-center tracking-subhead font-primary-condensed text-secondary text-sub mt-8">EST. Travel Time</p>
      <p className="text-center text-lg-h5 font-secondary mt-3 uppercase mb-14">{selectedDestination.travel}</p>
    </>
  );
}

export default DestinationPage;