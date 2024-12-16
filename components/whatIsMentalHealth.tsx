import Card from "./Card Component/card";

const WhatIsMentalHealth = () => {
  const image = "/whatIsMentalHealth.jpg";
  const alt = "What is mental health";
  const imgTitle = "Mental Health";
  const imgText =
    "Mental refers to the emotional, psychological, and social well-being of an individual. It affects how people think, feel, and act, as well as how they handle stress, relate to others, and make choices.";
  const textTitle = "Key Aspects Of Mental Health";

  const textTxt = [
    "Emotional well-being: The ability to cope with life’s challenges and manage emotions effectively.",
    "Psychological resilience: The capacity to recover from difficulties and adapt to change.",
    "Social well-being: The quality of relationships and social networks that provide support and connection.",
    "Good mental health contributes to overall well-being and is influenced by various factors, including genetics, environment, life experiences, and family history.",
    "Promoting mental health can involve self-care practices, professional therapy, support from friends and family, and, when necessary, medical intervention.",
  ];

  return (
    <Card
      image={image}
      imgTitle={imgTitle}
      imgText={imgText}
      alt={alt}
      textTitle={textTitle}
      textTxt={textTxt}
    />
  );
};

export default WhatIsMentalHealth;
