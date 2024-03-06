import PageHeader from "../shared/PageHeader";
import data from "../../data.json";
import { useState } from "react";

function TechnologyPage() {
  const { technology } = data;
  const [selectedTechnology, setSelectedTechnology] = useState(technology[0]);

  return (
    <>
      <PageHeader number="03" title="Space launch 101" />
      {/* The following div is an empty div used to make space for the absolutely positioned image below.*/}
      <div className="mt-8 md:mt-14" style={{ paddingTop: '45.3%' }} /> 
      <img src={"./src" + selectedTechnology.images.landscape.substring(1)} alt={`${selectedTechnology.name}`} className="mt-14 md:mt-21 absolute left-0 top-0 w-full" />
      <div className="flex justify-center gap-7 mt-12 md:my-12">
        {technology.map((tech, index) => (
          <div key={tech.name}>
            <button
              onClick={() => setSelectedTechnology(tech)}
              className={`block font-secondary text-sub h-10 w-10 md:h-15 md:w-15 md:text-md-h4 rounded-full border border-white leading-10 ${tech.name === selectedTechnology.name ? "text-tertiary bg-white" : " border-opacity-25"}`}
            >
              {index + 1}
            </button>
          </div>
        ))}
      </div>
      <p className="mt-6 text-center uppercase text-sub font-primary-condensed tracking-subhead md:text-base opacity-50">the terminology...</p>
      <h3 className="mt-2 uppercase text-center md:text-md-h3">{selectedTechnology.name}</h3>
      <p className="mt-4 text-center text-secondary md:text-base md:max-w-114 md:mx-auto">{selectedTechnology.description}</p>
    </>
  );
}

export default TechnologyPage;