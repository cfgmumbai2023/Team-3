import React from 'react';
import Quiz from 'react-quiz-component';
export const quiz = {
  quizTitle: "Football Coach Readiness Assessment",
  quizSynopsis: "Test your readiness to coach football students",
  nrOfQuestions: "6",
  questions: [
    {
      question: "What are the key qualities of a good football coach?",
      questionType: "text",
      answerSelectionType: "multiple",
      answers: [
        "Technical knowledge",
        "Effective communication skills",
        "Having a lot of money",
        "Patience and empathy"
      ],
      correctAnswer: [1, 2, 4],
      messageForCorrectAnswer: "Correct answer! Good football coaches possess technical knowledge, effective communication skills, leadership abilities, and patience and empathy.",
      messageForIncorrectAnswer: "Incorrect answer. Good football coaches possess technical knowledge, effective communication skills, leadership abilities, and patience and empathy.",
      explanation: "Being a good football coach requires a combination of technical knowledge, effective communication skills, leadership abilities, and the ability to demonstrate patience and empathy towards the students.",
      point: "20"
    },
    {
      question: "How do you plan and organize a football training session?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Assess the skill level of the students and plan accordingly",
        "Create a structured training program with clear objectives",
        "Ensure proper warm-up and cool-down routines",
        "All of the above"
      ],
      correctAnswer: "4",
      messageForCorrectAnswer: "Correct answer! When planning a football training session, it's important to assess the skill level of the students, create a structured program with clear objectives, and include proper warm-up and cool-down routines.",
      messageForIncorrectAnswer: "Incorrect answer. When planning a football training session, it's important to assess the skill level of the students, create a structured program with clear objectives, and include proper warm-up and cool-down routines.",
      explanation: "To conduct effective football training sessions, coaches need to assess the skill level of the students, create a structured program with clear objectives, and ensure the inclusion of proper warm-up and cool-down routines.",
      point: "20"
    },
    {
      question: "What coaching style is most effective for developing young football players?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Authoritarian coaching",
        "Democratic coaching",
        "Laissez-faire coaching",
        "Situational coaching"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct answer! Democratic coaching, which involves involving players in decision-making and fostering a positive learning environment, is most effective for developing young football players.",
      messageForIncorrectAnswer: "Incorrect answer. Democratic coaching, which involves involving players in decision-making and fostering a positive learning environment, is most effective for developing young football players.",
      explanation: "When working with young football players, adopting a democratic coaching style that involves involving players in decision-making and fostering a positive learning environment helps in their development.",
      point: "10"
    },
    {
      question: "How do you handle disciplinary issues during football training?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Apply strict punishments to maintain discipline",
        "Have open discussions and set clear expectations",
        "Ignore minor disciplinary issues",
        "Delegate disciplinary matters to assistant coaches"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct answer! When handling disciplinary issues during football training, it's important to have open discussions, set clear expectations, and address the issues appropriately.",
      messageForIncorrectAnswer: "Incorrect answer. When handling disciplinary issues during football training, it's important to have open discussions, set clear expectations, and address the issues appropriately.",
      explanation: "To maintain discipline during football training, coaches should have open discussions with the students, set clear expectations, and address any disciplinary issues appropriately rather than applying strict punishments or ignoring the issues.",
      point: "30"
    },
    {
      question: "What is the importance of building a positive coach-player relationship?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "It improves player motivation and commitment",
        "It fosters trust and communication",
        "It enhances the learning and development process",
        "All of the above"
      ],
      correctAnswer: "4",
      messageForCorrectAnswer: "Correct answer! Building a positive coach-player relationship improves player motivation and commitment, fosters trust and communication, and enhances the learning and development process.",
      messageForIncorrectAnswer: "Incorrect answer. Building a positive coach-player relationship improves player motivation and commitment, fosters trust and communication, and enhances the learning and development process.",
      explanation: "Establishing a positive coach-player relationship is crucial as it improves player motivation and commitment, fosters trust and communication, and enhances the learning and development process in football.",
      point: "20"
    },
    {
      question: "How do you ensure the safety of football players during training sessions?",
      questionType: "text",
      answerSelectionType: "multiple",
      answers: [
        "Provide appropriate protective equipment",
        "Teach proper techniques and fair play",
        "Monitor the playing surface and environment",
        "Implement a thorough warm-up and cool-down routine"
      ],
      correctAnswer: [1, 2, 3, 4],
      messageForCorrectAnswer: "Correct answer! To ensure the safety of football players during training sessions, coaches should provide appropriate protective equipment, teach proper techniques and fair play, monitor the playing surface and environment, and implement a thorough warm-up and cool-down routine.",
      messageForIncorrectAnswer: "Incorrect answer. To ensure the safety of football players during training sessions, coaches should provide appropriate protective equipment, teach proper techniques and fair play, monitor the playing surface and environment, and implement a thorough warm-up and cool-down routine.",
      explanation: "Ensuring the safety of football players involves providing appropriate protective equipment, teaching proper techniques and fair play, monitoring the playing surface and environment, and implementing a thorough warm-up and cool-down routine.",
      point: "20"
    }
  ]
};

const Assessment = () => {
  return (
    <div>
        <Quiz quiz={quiz} shuffle={true}/>
    </div>
  )
}

export default Assessment;