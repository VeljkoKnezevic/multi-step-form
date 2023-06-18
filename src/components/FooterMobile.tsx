import { StepperStateProps } from "../types";

type FooterMobileProps = {
  stepCount: StepperStateProps;
  updateStepCount: (count: number) => void;
};

const FooterMobile = ({ stepCount, updateStepCount }: FooterMobileProps) => {
  const handleUpdateStepCount = () => {
    if (stepCount < 5) {
      updateStepCount(stepCount + 1);
    }
  };

  const handleGoBackButton = () => {
    updateStepCount(stepCount - 1);
  };

  return (
    <footer className="fixed bottom-0 left-0 flex w-full  justify-between bg-white p-4">
      {stepCount > 1 && (
        <button
          className="text-sm font-medium text-grey "
          onClick={handleGoBackButton}
          type="button"
        >
          Go back
        </button>
      )}
      <button
        className={`${
          stepCount === 1 && "ml-auto"
        } rounded bg-denim px-4 py-3 text-sm font-medium text-white`}
        type="button"
        onClick={handleUpdateStepCount}
      >
        Next step
      </button>
    </footer>
  );
};

export default FooterMobile;
