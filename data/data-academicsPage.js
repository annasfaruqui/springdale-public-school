import digitalClassrooms from "../images/educational-resources/digital-classrooms.jpg";
import onlineLearning from "../images/educational-resources/online-learning.jpg";
import interactiveLearning from "../images/educational-resources/interactive-learning.jpg";

export const academicsPageData = {
  keyHighlights: [
    {
      title: "Well-Structured Curriculum",
      description:
        "Our curriculum is designed to meet the needs of students at different stages of their educational journey, ensuring a smooth transition from one level to the next.",
    },
    {
      title: "Diverse Subject Offerings",
      description:
        "We offer a wide range of subjects across various disciplines, allowing students to explore their interests and develop their talents.",
    },
    {
      title: "Innovative Teaching Methods",
      description:
        "Our educators employ modern teaching techniques, including project-based learning, collaborative activities, and digital tools, to make learning engaging and effective.",
    },
  ],
  curriculum: {
    primary: [
      // (Grades 1-5)
      "English",
      "Mathematics",
      "Science",
      "Social Studies",
      "Art",
      "Physical Education",
    ],
    secondary: [
      // (Grades 6-10)
      "English",
      "Mathematics",
      "Science (PCB)",
      "Social Studies",
      "Computer Science",
      "Physical Education",
      "Art",
    ],
    // (Grades 11-12)
    "senior-science": [
      "Physics",
      "Chemistry",
      "Biology",
      "Mathematics",
      "Computer Science",
      "English",
    ],
    "senior-commerce": [
      "Accountancy",
      "Business Studies",
      "Economics",
      "Mathematics",
      "English",
    ],
  },
  teachingMethodologies:
    "We use a blend of traditional and modern teaching techniques to cater to different learning styles.",
  educationalResources:
    "Digital classrooms, interactive learning modules, and access to online educational platforms.",
  images: [
    { name: "Digital classrooms", image: digitalClassrooms },
    { name: "Online learning", image: onlineLearning },
    { name: "Interactive learning", image: interactiveLearning },
  ],
};
