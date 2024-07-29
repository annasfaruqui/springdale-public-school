// Facilities
import computerLabImg from "../images/facilities/computer-lab.jpg";
import classroomImg from "../images/facilities/classroom.jpg";
import libraryImg from "../images/facilities/library.jpg";
import playgroundImg from "../images/facilities/playground.jpg";

// Testimonials
import sarahImg from "../images/testimonials/sarah-thompson.jpg";
import rachelImg from "../images/testimonials/rachel-martinez.jpg";
import danielImg from "../images/testimonials/daniel-roberts.jpg";
import emilyImg from "../images/testimonials/emily-wilson.jpg";
import alexImg from "../images/testimonials/alex-johnson.jpg";
import lindaImg from "../images/testimonials/linda-carter.jpg";

export const aboutPageData = {
  history:
    "Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.",
  vision:
    "To create a learning environment that fosters academic excellence, critical thinking, and ethical values.",
  mission:
    "To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.",
  pricipalMessage:
    "At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.",
  facilities: [
    {
      id: 1,
      image: computerLabImg,
      summary: "State of the art science and computer labs",
      features: [
        "Cutting-edge technology available",
        "Hands-on learning opportunities",
        "Safety protocols in place",
      ],
    },
    {
      id: 2,
      image: classroomImg,
      summary: "Spacious and well-equipped classrooms",
      features: [
        "Flexible seating arrangements",
        "Interactive smart boards installed",
        "Ample natural lighting",
      ],
    },
    {
      id: 3,
      image: libraryImg,
      summary: "Library with a vast collection of books and digital resources",
      features: [
        "Extensive book collection",
        "Access to digital resources",
        "Quiet study areas available",
      ],
    },
    {
      id: 4,
      image: playgroundImg,
      summary:
        "Sports facilities including a playground, gymnasium, and swimming pool",
      features: [
        "Modern gymnasium facilities",
        "Olympic-sized swimming pool",
        "Outdoor playground area",
      ],
    },
  ],
  testimonials: [
    {
      id: 1,
      author: "Mrs. Sarah Thompson",
      position: "Parent of a 5th-grade student",
      authorImage: sarahImg,
      testimonial:
        "Choosing Springdale Public School for my daughter was one of the best decisions we made as a family. The school's focus on both academics and character development has been instrumental in her growth. She comes home excited about what she's learning and eager to participate in extracurricular activities. The teachers truly care about each student's success.",
    },
    {
      id: 2,
      author: "Rachel Martinez",
      position: "9th Grade Student",
      authorImage: rachelImg,
      testimonial:
        "Springdale has given me the opportunity to explore my interests and passions. The variety of clubs and activities allows me to try new things and meet people who share my interests. The supportive environment makes me feel confident in pursuing my goals, both in and out of the classroom. I love being a part of this vibrant community!",
    },
    {
      id: 3,
      author: "Mr. Daniel Roberts",
      position: "History Teacher",
      authorImage: danielImg,
      testimonial:
        "I have been teaching at Springdale Public School for over ten years, and the sense of community and collaboration is unparalleled. The administration continually supports professional development, ensuring that teachers are equipped with the latest tools and methodologies to foster student success. It's fulfilling to work in an environment that values innovation and lifelong learning.",
    },
    {
      id: 4,
      author: "Emily Wilson",
      position: "Parent of an 8th-grade student",
      authorImage: emilyImg,
      testimonial:
        "Springdale Public School is truly a place where each child's individuality is celebrated and nurtured. The school's emphasis on both academic excellence and personal development has helped my son become a more confident and well-rounded individual. I appreciate how the faculty works closely with parents to support each child's unique learning journey.",
    },
    {
      id: 5,
      author: "Alex Johnson",
      position: "11th Grade Student",
      authorImage: alexImg,
      testimonial:
        "Being a student at Springdale has been an amazing experience. The teachers are always approachable and willing to help with any questions or challenges. I love the science lab, where we get to do hands-on experiments that make learning fun and engaging. It's a great place to grow and prepare for the future.",
    },
    {
      id: 6,
      author: "Mrs. Linda Carter",
      position: "School Counselor",
      authorImage: lindaImg,
      testimonial:
        "At Springdale Public School, the emphasis on inclusivity and community involvement makes it a standout institution. The partnerships with local organizations and the emphasis on social responsibility teach students the importance of giving back to the community. I am proud to be part of a school that values education beyond the classroom.",
    },
  ],
};
