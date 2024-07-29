import Container from "../../ui/Container";
import HeadingGroup from "../../ui/HeadingGroup";

import TestimonialsCard from "./TestimonialsCard";

import { aboutPageData } from "../../../data/data-aboutPage";

function SectionTestimonials() {
  return (
    <section id="testimonials">
      <Container extraStyles="flex flex-col gap-6">
        <HeadingGroup
          heading="Testimonials"
          subHeading="Heartfelt experiences from those who know us best"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {aboutPageData.testimonials.map((testimonial) => (
            <TestimonialsCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default SectionTestimonials;
