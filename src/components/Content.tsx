import { useEffect, useState } from "react";
import Form from "./Form";
import { Para, StepperStateProps, Title, UserDataProps } from "../types";

type ContentProps = {
  stepCount: StepperStateProps;
  updateStepCount: (count: number) => void;
  updateUserData: (data: UserDataProps) => void;
};

const Content = ({
  updateUserData,
  stepCount,
  updateStepCount,
}: ContentProps) => {
  const [title, setTitle] = useState<Title>("Personal Info");
  const [para, setPara] = useState<Para>(
    "Please provide your name, email address, and phone number."
  );

  useEffect(() => {
    if (stepCount === 1) {
      setTitle("Personal Info");
      setPara("Please provide your name, email address, and phone number.");
    } else if (stepCount === 2) {
      setTitle("Select your plan");
      setPara("You have the option of monthly or yearly billing.");
    } else if (stepCount === 3) {
      setTitle("Pick add-ons");
      setPara("Add-ons help enhance your gaming experience.");
    } else if (stepCount === 4) {
      setTitle("Finishing up");
      setPara("Double-check everything looks OK before confirming.");
    }
  }, [stepCount]);

  return (
    <div className="mx-4 -mt-[70px] rounded-[10px] bg-white px-6 py-8 shadow-custom">
      <h1 className="text-2xl font-bold text-denim">{title}</h1>
      <p className="mt-2 text-base font-normal text-grey">{para}</p>
      <Form
        stepCount={stepCount}
        updateUserData={updateUserData}
        updateStepCount={updateStepCount}
      />
    </div>
  );
};

export default Content;
