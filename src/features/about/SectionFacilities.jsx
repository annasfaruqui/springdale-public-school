import Container from "../../ui/Container";
import HeadingGroup from "../../ui/HeadingGroup";

import FacilitiesCard from "./FacilitiesCard";

import { aboutPageData } from "../../../data/data-aboutPage";

function SectionFacilities() {
  return (
    <section id="facilities">
      <Container extraStyles="flex flex-col gap-6">
        <HeadingGroup
          heading="Infrastructure & facilities"
          subHeading="Explore our state of the art amenities and learning environment"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {aboutPageData.facilities.map((facility) => (
            <FacilitiesCard key={facility.id} facility={facility} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default SectionFacilities;
