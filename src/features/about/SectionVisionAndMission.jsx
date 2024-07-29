import { FaBullseye, FaEye, FaRocketchat } from "react-icons/fa6";

import HeadingGroup from "../../ui/HeadingGroup";
import Container from "../../ui/Container";
import GoalsCard from "./GoalsCard";

import { aboutPageData } from "../../../data/data-aboutPage";

function SectionVisionAndMission() {
  return (
    <section id="vision-and-mission">
      <Container extraStyles="flex flex-col gap-8">
        <HeadingGroup
          heading="Vision & Mission"
          subHeading="Our core values, guiding principles, and strategic framework"
        />
        <div className="grid w-full grid-cols-1 justify-between gap-8 sm:grid-cols-2 sm:gap-6 md:grid-cols-3">
          <GoalsCard icon={<FaEye className="h-6 w-6" />} heading="Our Vision">
            {aboutPageData.vision}
          </GoalsCard>
          <GoalsCard
            icon={<FaBullseye className="h-6 w-6" />}
            heading="Our Mission"
          >
            {aboutPageData.mission}
          </GoalsCard>
          <GoalsCard
            icon={<FaRocketchat className="h-6 w-6" />}
            heading="Principal's Message"
          >
            {aboutPageData.pricipalMessage}
          </GoalsCard>
        </div>
      </Container>
    </section>
  );
}

export default SectionVisionAndMission;
