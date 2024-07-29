import PageHeader from "../ui/PageHeader";
import SectionAboutIntro from "../features/about/SectionAboutIntro";
import SectionVisionAndMission from "../features/about/SectionVisionAndMission";
import SectionFacilities from "../features/about/SectionFacilities";
import SectionTestimonials from "../features/about/SectionTestimonials";

function AboutPage() {
  return (
    <>
      <PageHeader page="About" />
      <SectionAboutIntro />
      <SectionVisionAndMission />
      <SectionFacilities />
      <SectionTestimonials />
    </>
  );
}

export default AboutPage;
