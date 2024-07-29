import HeadingGroup from "../../ui/HeadingGroup";
import Container from "../../ui/Container";
import Image from "../../ui/Image";

import schoolImg from "../../../images/school-img-2.jpg";

function SectionAboutIntro() {
  return (
    <section id="about-intro">
      <Container extraStyles="flex flex-col justify-between gap-6 lg:flex-row lg:items-start lg:mt-10">
        <Image
          imgSrc={schoolImg}
          alt="School building"
          styles="h-64 lg:basis-[35%] xl:basis-[45%] overflow-hidden rounded-2xl order-2 lg:order-1"
        />

        <div className="order-1 lg:order-2 lg:basis-[65%] xl:basis-[55%]">
          <HeadingGroup
            heading="About us"
            subHeading="Everthing you need to know about us"
          />
          <p>
            Founded in 1985, Springdale Public School is committed to nurturing
            academic excellence and personal growth in a vibrant learning
            environment. With state-of-the-art facilities, dedicated faculty,
            and a focus on holistic development, we empower students to become
            critical thinkers and ethical leaders in a dynamic world. Our
            mission is to unlock each student's potential, guiding them towards
            success and instilling values that last a lifetime.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default SectionAboutIntro;
