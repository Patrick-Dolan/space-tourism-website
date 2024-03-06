import PageHeader from "../shared/PageHeader";
import data from "../../data.json";
import { useState } from "react";


function CrewPage() {
  const { crew } = data;
  const [selectedCrewMember, setSelectedCrewMember] = useState(crew[0]);
  return (
    <>
      <PageHeader number="02" title="Meet your crew" />
      <div className="md:max-w-143 md:mx-auto">
        <div className="md:flex md:flex-col-reverse">
          <div className="md:flex md:flex-col-reverse">
            <div className=" border-b-2 border-primary mt-8 mb-8">
              <img className="mx-auto h-crew md:w-md-crew md:h-md-crew" src={"./src" + selectedCrewMember.images.png.substring(1)} />
            </div>
            <div className="flex flex-row justify-center gap-7 mb-5">
              {crew.map((crewMember) => (
                <div key={crewMember.name}>
                  <button onClick={() => setSelectedCrewMember(crewMember)} className={`h-nav-dot w-nav-dot rounded ${crewMember.name === selectedCrewMember.name ? "bg-white" : "bg-inactive opacity-17"}`}></button>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-center uppercase font-secondary text-base opacity-50 md:text-md-h4 md:mt-15">{selectedCrewMember.role}</p>
            <h3 className="uppercase text-center mb-4 md:text-md-h3">{selectedCrewMember.name}</h3>
            <p className="text-center text-secondary mb-10 md:text-base">{selectedCrewMember.bio}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CrewPage;