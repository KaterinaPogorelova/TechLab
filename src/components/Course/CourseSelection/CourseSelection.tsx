import {
  StyledContainer,
  StyledFrameHeader,
  StyledFrameText,
} from "../../../styledConstants";
import { useState } from "react";
import { SelectGroup } from "../CourseWorks/SelectGroup";
import {
  StyledCourseSelectionContainer,
  StyledCourseSelectionArea,
} from "./StyledCourseSelection";
import CourseSelectionList from "./CourseSelectionList";

const CourseSelect = ["Group", "Self-paced", "Customize the course"];

const SelectList = [
  {
    title: "Weekly Feedback Webinars",
    text: "Weekly feedback webinars provide students with a valuable opportunity to receive regular reviews of their progress, address any questions, and discuss topics that may be challenging. This format facilitates effective interaction between instructors and students, fostering a deeper understanding of the course material.",
    selectCourse: "Available only with a group",
    lessons: ["Regular Assessment", "Real-time Q&A"],
    isChecked: false,
  },
  {
    title: "Community",
    text: "The community is an integral part of the educational experience, offering students a platform to exchange ideas, collaborate on projects, and build a network of peers. Engaging with a diverse community enhances the overall learning journey and provides additional support through shared experiences.",
    selectCourse: "Available only with a group",
    lessons: ["Knowledge Exchange", "Project Collaboration"],
    isChecked: false,
  },
  {
    title: "Tutor Support",
    text: "Tutor support ensures that students have access to guidance and assistance when navigating complex topics or facing challenges in their coursework. Skilled tutors provide personalized help, reinforcing learning objectives and contributing to a supportive and enriching educational environment.",
    selectCourse: "Available only with a group",
    lessons: ["Personalized Guidance", "Clarification of Concepts"],
    isChecked: false,
  },
  {
    title: "Checking of Assignments",
    text: "Thorough checking of assignments is a crucial aspect of the learning process, providing students with constructive feedback on their work. This practice encourages continuous improvement, helps students identify strengths and weaknesses, and ensures a high standard of academic rigor.",
    selectCourse: "Available only with a group",
    lessons: ["Constructive Feedback", "Quality Assurance"],
    isChecked: false,
  },
  {
    title: "Professional Diploma",
    text: "Attaining a professional diploma signifies the successful completion of a specialized and comprehensive program of study. It serves as a recognized credential, validating the knowledge and skills acquired during the course, and enhances career prospects by demonstrating a commitment to professional development and expertise.",
    selectCourse: "Available only with a group",
    lessons: ["Specialized Curriculum", "Industry Relevance"],
    isChecked: false,
  },
  {
    title: "Introduction to UX Design",
    text: "This module provides a comprehensive introduction to the world of User Experience (UX) design, covering its principles, history, and practical applications. Explore the foundations that underpin successful UX design and gain insights into its evolving role in shaping digital experiences.",
    selectCourse: "Unit 1",
    lessons: [
      "Fundamentals of User Experience",
      "Key Concepts in UX Design",
      "The Evolution of UX Design",
      "UX Design in Practice",
    ],
    isChecked: false,
  },
  {
    title: "User Research Techniques",
    text: "Delve into the essential skill of conducting user research, discovering the methods and techniques used to gather valuable insights into user behaviors and preferences. Learn how to plan and execute effective user interviews, surveys, and other research methods to inform your design decisions.",
    selectCourse: "Unit 2",
    lessons: [
      "Planning and Conducting User Interviews",
      "Surveys and Questionnaires",
      "Data Analysis in UX Research",
      "Importance of User Research",
    ],
    isChecked: false,
  },
  {
    title: "Analysis and Interpretation",
    text: "Uncover the art of interpreting data and translating it into actionable design decisions. This module guides you through the process of analyzing user research findings, creating user personas, and implementing iterative design based on feedback.",
    selectCourse: "Unit 3",
    lessons: [
      "Gathering and Analyzing Data",
      "User Persona Development",
      "Usability Testing",
      "Iterative Design and Feedback",
    ],
    isChecked: false,
  },
  {
    title: "Information Architecture and Navigation",
    text: "Learn the fundamentals of organizing and structuring information to create seamless user experiences. Explore techniques such as card sorting and navigation design to develop effective information architectures and user-friendly sitemaps.",
    selectCourse: "Unit 4",
    lessons: [
      "Principles of Information Architecture",
      "Card Sorting Techniques",
      "Navigation Design",
      "Creating Effective Sitemaps",
    ],
    isChecked: false,
  },
  {
    title: "Interaction Design",
    text: "Dive into the world of Interaction Design, focusing on creating intuitive and engaging user interactions. Understand usability heuristics, microinteractions, and design principles that contribute to a positive user experience.",
    selectCourse: "Unit 5",
    lessons: [
      "Introduction to Interaction Design",
      "Usability Heuristics",
      "Microinteractions",
      "Feedback and Response Design",
    ],
    isChecked: false,
  },
  {
    title: "Design Principles and Guidelines",
    text: "Explore core design principles and guidelines that form the basis of effective UX/UI design. Gain insights into maintaining consistency, adhering to standards, and ensuring accessibility in your designs across different devices.",
    selectCourse: "Unit 6",
    lessons: [
      "Core Design Principles",
      "Consistency and Standards",
      "Accessibility in UX Design",
      "Designing for Different Devices",
    ],
    isChecked: false,
  },
  {
    title: "Design Patterns in UX/UI",
    text: "Investigate common design patterns and their implementation in UX/UI design. Learn how to adapt and innovate these patterns to address specific design challenges, fostering creativity while maintaining user familiarity.",
    selectCourse: "Unit 7",
    lessons: [
      "Understanding Design Patterns",
      "Common UX/UI Design Patterns",
      "Implementing Design Patterns",
      "Adapting Patterns for Innovation",
    ],
    isChecked: false,
  },
  {
    title: "Mobile UX Design",
    text: "Understand the unique challenges and opportunities presented by mobile user experiences. This module covers responsive design principles, mobile interaction patterns, and strategies for optimizing mobile applications.",
    selectCourse: "Unit 8",
    lessons: [
      "Challenges and Opportunities in Mobile UX",
      "Responsive Design Principles",
      "Mobile Interaction Patterns",
      "Mobile App Testing and Optimization",
    ],
    isChecked: false,
  },
  {
    title: "Workflows in UX Design",
    text: "Gain an overview of the UX design process and collaborative workflows. Explore tools and techniques that facilitate effective collaboration among design teams and learn about incorporating the agile methodology into the UX design process.",
    selectCourse: "Unit 9",
    lessons: [
      "UX Design Process Overview",
      "Collaborative Design Workflows",
      "Tools and Techniques for Collaboration",
      "Agile Methodology in UX Design",
    ],
    isChecked: false,
  },
  {
    title: "Prototyping and Wireframing Techniques",
    text: "Delve into the practical aspects of UX design by mastering prototyping and wireframing. Learn the importance of prototyping in validating design ideas, explore various prototyping tools, and understand best practices for creating and refining prototypes.",
    selectCourse: "Unit 10",
    lessons: [
      "Introduction to Prototyping",
      "Tools for Prototyping and Wireframing",
      "Prototyping Best Practices",
      "Testing and Refining Prototypes",
    ],
    isChecked: false,
  },
];

export const CourseSelection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };
  return (
    <StyledCourseSelectionContainer>
      <StyledContainer>
        <StyledFrameHeader>
          <span>Choose or create</span> your course
        </StyledFrameHeader>
        <StyledFrameText $black>
          You can choose the most suitable learning format with us.
          <br />
          Also to see if online learning works for you, try out our free
          lessons.
        </StyledFrameText>
        <StyledCourseSelectionArea>
          <SelectGroup
            words={CourseSelect}
            goToIndex={goToIndex}
            activeIndex={currentIndex}
          />
          <CourseSelectionList items={SelectList} />
        </StyledCourseSelectionArea>
      </StyledContainer>
    </StyledCourseSelectionContainer>
  );
};
