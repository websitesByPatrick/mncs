import ImageCard from "@/components/ImageCard";

export default function Home() {
  return (
    <div className="flex flex-col w-full gap-2">
      <ImageCard
        imageName="what-is-mental-health.jpg"
        imageAlt="Mental Health"
        title="Welcome to My Counseling Services"
        text="I am Marica Nicholas, a licensed counselor dedicated to helping you navigate life's challenges. Whether you're dealing with anxiety, depression, or relationship issues, I'm here to support you on your journey to mental wellness."
        imageRight
      />
      <ImageCard
        imageName="whatismentalhealth.jpg"
        imageAlt="Counseling Session"
        title="Why Mental Health Matters"
        text="Mental health is crucial for overall well-being. It influences how we think, feel, and act. Seeking help is a sign of strength, and I'm here to provide the support you need."
        imageRight={false}
      />

      
    </div>
  );
}
