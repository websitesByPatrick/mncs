const About = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-2 bg-yellow-50 pt-4 px-12">
      <div className="flex flex-col items-center justify-center gap-2 mb-8 w-3/4">
        <h2 className="text-4xl text-center px-20 py-5 rounded shadow-2xl w-full  border-2">
          About Me
        </h2>
        <div className="bg-yellow-50 p-5 rounded shadow-lg w-full">
          <h1 className="text-3xl pt-5 text-center">Marica Nicholas</h1>
          <p className="text-xl text-center pb-10">
            LPC Associate Supervised by : Ana Valenzuela MS, LPC-S, NCC, LCDC,
            CTRP-C
          </p>

          <p className="text-lg text-justify">
            Hi everyone. My name is Marica Nicholas. Thank you for allowing me
            to walk alongside you in your mental health journey. I am a Licensed
            Professional Counselor Associate for Clearhope Counseling and
            Wellness in Tomball, TX.
          </p>
        </div>

        <div>
          <h3 className="text-2xl">Education</h3>
          <p>
            I earned a BAAS from Texas A&M, a Master’s Degree in Education from
            Texas A&M, a Master’s Degree in School Counseling from the
            University of Texas, and a certificate in Mental Health Counseling
            from Lamar University.
          </p>
          <p>
            My theoretical orientation is primarily eclectic but grounded in
            Person Centered Therapy and Solution Focused Brief Therapy. I
            believe treatment should be holistic and based on what is best for
            the needs of the client. I believe everyone has their own solutions
            inside of them. Some just need help to bring those to the surface.
          </p>
          <h3 className="text-2xl">Affiliations</h3>
          <p>
            I am a member of the American Counseling Association, active member
            in my church, and enjoy spending time with my family. I am a caring,
            compassionate person that wants to provide my clients with a
            comfortable, safe, and non-judgemental space to begin their healing
            journey. I wholeheartedly believe that God has placed me in this
            role to help others grow and heal. Let me help you get started
            today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
