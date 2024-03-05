import PageHeader from "../shared/PageHeader";
import data from "../../data.json";
import { useState } from "react";


function CrewPage() {
  const { crew } = data;
  const [selectedCrewMember, setSelectedCrewMember] = useState(crew[0]);
  return (
    <>
      <PageHeader number="02" title="Meet your crew" />
      <div className=" border-b-2 border-primary mt-8 mb-8">
        <img className="mx-auto h-crew" src={"./src" + selectedCrewMember.images.png.substring(1)} />
      </div>
      <div className="flex flex-row justify-center gap-7 mb-5">
        {crew.map((crewMember) => (
          <div key={crewMember.name}>
            <button onClick={() => setSelectedCrewMember(crewMember)} className={`h-nav-dot w-nav-dot rounded ${crewMember.name === selectedCrewMember.name ? "bg-white" : "bg-inactive opacity-17"}`}></button>
          </div>
        ))}
      </div>
      <p className="text-center uppercase font-secondary text-base opacity-50">{selectedCrewMember.role}</p>
      <h3 className="uppercase text-center mb-4">{selectedCrewMember.name}</h3>
      <p className="text-center text-secondary mb-20">{selectedCrewMember.bio}</p>
    </>
  );
}

export default CrewPage;