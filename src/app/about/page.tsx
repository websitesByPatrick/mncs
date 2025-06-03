import ListCard from "@/components/ListCard";
import PageTitle from "@/components/PageTitle";

const About = () => {
  return (
    <div className="flex flex-col w-[1200px] mx-auto app-gap">
      <PageTitle text="About Me" />

      <div className="bg-yellow-50 p-5 rounded shadow-lg w-full">
        <h1 className="text-5xl pt-5 text-center font-semibold">Marica Nicholas</h1>
        <p className="text-xl text-center pt-2 pb-10 px-20 font-semibold">
          LPC Associate Supervised by : Ana Valenzuela MS, LPC-S, NCC, LCDC,
          CTRP-C
        </p>

        <p className="text-xl text-justify px-24">
          Hi everyone. My name is Marica Nicholas. Thank you for allowing me to
          walk alongside you in your mental health journey. I am a Licensed
          Professional Counselor Associate for Clearhope Counseling and Wellness
          in Tomball, TX.
        </p>
      </div>

      <div className="flex w-full app-gap">
        <ListCard
          title="My Specialties"
          items={[
            "Anxiety",
            "Depression",
            "Trauma",
            "Relationship Issues",
            "Life Transitions",
            "Stress Management",
            "Self-Esteem",
          ]}
        />
        <ListCard
          title="My Experience"
          items={[
            "Individual Counseling",
            "Couples Counseling",
            "Family Therapy",
            "Group Therapy",
            "Crisis Intervention",
            "Teletherapy",
          ]}
        />
      </div>
      <div className="flex app-gap w-full">
        <ListCard
          title="My Techniques"
          items={[
            "Cognitive Behavioral Therapy (CBT)",
            "Mindfulness-Based Therapy",
            "Solution-Focused Brief Therapy",
            "Person-Centered Therapy",
            "Trauma-Informed Care",
            "Play Therapy for Children",
          ]}
        />
        <ListCard
          title="My Approach"
          items={[
            "Holistic and Client-Centered",
            "Empathetic and Non-Judgmental",
            "Collaborative Goal Setting",
            "Strengths-Based Perspective",
            "Culturally Sensitive",
            "Confidential and Safe Environment",
          ]}
        />
      </div>
      <div className="flex app-gap w-full">
        <ListCard
          title="My Services"
          items={[
            "Individual Counseling",
            "Couples Counseling",
            "Family Therapy",
            "Group Therapy",
            "Crisis Intervention",
            "Teletherapy",
          ]}
        />
        <ListCard
          title="My Education and Training"
          items={[
            "BAAS from Texas A&M",
            "Master’s Degree in Education from Texas A&M",
            "Master’s Degree in School Counseling from the University of Texas",
            "Certificate in Mental Health Counseling from Lamar University",
          ]}
        />
      </div>
      <div className="flex gap-4 w-full">
        <ListCard
          title="My Affiliations"
          items={[
            "Member of the American Counseling Association",
            "Active member in my church",
            "Enjoy spending time with my family",
          ]}
        />
      </div>
    </div>
  );
};

export default About;
