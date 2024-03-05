import PageHeader from "../shared/PageHeader";
import data from "../../data.json";
import { useState } from "react";

function TechnologyPage() {
  const { technology } = data;
  const [selectedTechnology, setSelectedTechnology] = useState(technology[0]);

  return (
    <>
      <PageHeader number="03" title="Space launch 101" />
      <img src={"./src" + selectedTechnology.images.landscape.substring(1)} alt={`${selectedTechnology.name}`} className="mt-8 absolute left-0 min-w-screen" />
      <div className="flex justify-center gap-7 mt-48">
        {technology.map((tech, index) => (
          <div key={tech.name} className="mt-8">
            <button
              onClick={() => setSelectedTechnology(tech)}
              className={`block font-secondary text-base text-sub h-10 w-10 rounded-full border border-white leading-10 ${tech.name === selectedTechnology.name ? "text-tertiary bg-white" : " border-opacity-25"}`}
            >
              {index + 1}
            </button>
          </div>
        ))}
      </div>
      <p className="mt-6 text-center uppercase font-secondary text-base opacity-50">the terminology...</p>
      <h3 className="mt-2 uppercase text-center">{selectedTechnology.name}</h3>
      <p className="mt-4 mb-16 text-center text-secondary">{selectedTechnology.description}</p>
    </>
  );
}

export default TechnologyPage;