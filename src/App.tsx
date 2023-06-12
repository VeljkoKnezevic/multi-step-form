import { useState } from "react";
import "./App.css";
import Stepper from "./components/Stepper";
import { StepperStateProps } from "./types";

const App = () => {
  const [stepCount, setStepCount] = useState<StepperStateProps>(1);

  return (
    <>
      <header className="h-[172px] w-full bg-[url('/images/bg-sidebar-mobile.svg')]">
        <Stepper stepCount={stepCount} />
      </header>
      <main></main>
    </>
  );
};

export default App;
