export type StepperStateProps = 1 | 2 | 3 | 4;

export type UserDataProps = {
  name: string;
  email: string;
  phone: string;
  plan: "Arcade" | "Advanced" | "Pro";
  bilingOption: "Monthly" | "Yearly";
  addons: string[];
};

export type Title =
  | "Personal Info"
  | "Select your plan"
  | "Pick add-ons"
  | "Finishing up";

export type Para =
  | "Please provide your name, email address, and phone number."
  | "You have the option of monthly or yearly billing."
  | "Add-ons help enhance your gaming experience."
  | "Double-check everything looks OK before confirming.";
