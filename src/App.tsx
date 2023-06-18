import { useState } from "react";
import "./App.css";
import Stepper from "./components/Stepper";
import { StepperStateProps, UserDataProps } from "./types";
import Content from "./components/Content";

const App = () => {
  const [stepCount, setStepCount] = useState<StepperStateProps>(3);
  const [userData, setUserData] = useState<UserDataProps | undefined>();

  const updateUserData = (data: UserDataProps) => {
    setUserData(data);
  };

  const updateStepCount = (count: number) => {
    setStepCount(count as StepperStateProps);
  };

  return (
    <>
      <aside className="h-[172px] w-full bg-[url('/images/bg-sidebar-mobile.svg')]">
        <Stepper stepCount={stepCount} />
      </aside>
      <main>
        <Content
          stepCount={stepCount}
          updateStepCount={updateStepCount}
          updateUserData={updateUserData}
        />
      </main>
    </>
  );
};

export default App;
