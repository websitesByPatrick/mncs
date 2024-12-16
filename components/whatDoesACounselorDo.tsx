import React from "react";
import Card from "./Card Component/card";

const WhatDoesACounselorDo = () => {
  const image = "/counseling.jpg";
  const alt = "What is a counselor";
  const imgTitle = "A Counselor Can Help";
  const imgText =
    "A counselor's role involves providing emotional support, therapeutic guidance, and coping strategies to help individuals improve their mental well-being.";
  const textTitle = "Specific Responsibilities Of A Counselor";
  const textTxt = [
    "Assessment: Evaluating clients’ mental health needs through interviews, questionnaires, or observations to understand their concerns.",

    "Therapeutic Support: Using evidence-based counseling techniques (e.g., cognitive-behavioral therapy, mindfulness, or person-centered approaches) to address issues like anxiety, depression, trauma, or relationship challenges.",

    "Developing Treatment Plans: Collaborating with clients to set achievable goals and tailor interventions to their specific needs.",

    "Providing Education: Teaching clients about mental health, coping skills, emotional regulation, and strategies to handle stress or challenges.",

    "Crisis Intervention: Assisting clients during urgent mental health crises, such as suicidal thoughts, panic attacks, or severe emotional distress.",

    "Referral Services: Connecting clients with additional resources like psychiatrists, support groups, or community programs when necessary.",

    "Ongoing Support: Building a trusting relationship with clients to foster long-term growth and emotional resilience.",
  ];

  return (
    <Card
      image={image}
      imgTitle={imgTitle}
      imgText={imgText}
      alt={alt}
      textTitle={textTitle}
      textTxt={textTxt}
      imgRight
    />
  );
};

export default WhatDoesACounselorDo;
