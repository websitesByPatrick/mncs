import WhatDoesACounselorDo from "@/components/whatDoesACounselorDo";
import WhatIsMentalHealth from "@/components/whatIsMentalHealth";
import About from "./about/page";

export default function Home() {
  return (
    <>
      <WhatIsMentalHealth />
      <WhatDoesACounselorDo />
      <About />
    </>
  );
}
