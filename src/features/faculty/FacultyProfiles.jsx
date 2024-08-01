import Container from "../../ui/Container";
import HeadingGroup from "../../ui/HeadingGroup";
import FacultyCard from "./FacultyCard";

import { facultyPageData } from "../../../data/data-facultyPage";

function FacultyProfiles() {
  return (
    <section id="faculty-profiles">
      <Container extraStyles="flex flex-col gap-8">
        <HeadingGroup
          heading="Faculty and staff"
          subHeading="Passionate educators inspiring future leaders"
        />
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {facultyPageData.profiles.map((faculty) => (
            <FacultyCard key={faculty.id} faculty={faculty} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FacultyProfiles;
