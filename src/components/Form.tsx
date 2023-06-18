import { useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import { StepperStateProps, TimeProps, UserDataProps } from "../types";
import FooterMobile from "./FooterMobile";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";

type FormProps = {
  stepCount: StepperStateProps;
  updateStepCount: (count: number) => void;
  updateUserData: (data: UserDataProps) => void;
};

const Form = ({ stepCount, updateStepCount, updateUserData }: FormProps) => {
  const { width } = useWindowSize();
  const [time, setTime] = useState<TimeProps>("Monthly");

  const updateTime = (arg: TimeProps) => {
    setTime(arg);
  };
  return (
    <>
      <form>
        {(() => {
          switch (stepCount) {
            case 1:
              return <Page1 />;
            case 2:
              return <Page2 time={time} updateTime={updateTime} />;
            case 3:
              return <Page3 time={time} />;
            case 4:
              return <Page4 />;
            default:
              return <div>Step not available</div>;
          }
        })()}
      </form>
      {width <= 768 && (
        <FooterMobile updateStepCount={updateStepCount} stepCount={stepCount} />
      )}
    </>
  );
};

export default Form;
