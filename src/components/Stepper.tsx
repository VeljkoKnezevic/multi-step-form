import { StepperStateProps } from "../types";

type StepperProps = {
  stepCount: StepperStateProps;
};

type StepperItemProps = {
  children: string;
  stepCount: StepperStateProps;
};

const StepperItem = ({ children, stepCount }: StepperItemProps) => {
  return (
    <div
      className={`${
        stepCount === Number(children) && "bg-sky-blue"
      } rounded-full border-[1px] px-[11px] py-[5px] text-center`}
    >
      <div
        className={`${
          stepCount === Number(children) && "text-denim"
        } text-sm font-bold tracking-[1px] text-white`}
      >
        {children}
      </div>
    </div>
  );
};

const Stepper = ({ stepCount }: StepperProps) => {
  return (
    <div className="flex justify-center gap-4 pt-8">
      <StepperItem stepCount={stepCount}>1</StepperItem>
      <StepperItem stepCount={stepCount}>2</StepperItem>
      <StepperItem stepCount={stepCount}>3</StepperItem>
      <StepperItem stepCount={stepCount}>4</StepperItem>
    </div>
  );
};

export default Stepper;
