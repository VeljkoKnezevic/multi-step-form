import { useState } from "react";
import { TimeProps, UserDataProps } from "../types";

type Page2Props = {
  time: TimeProps;
  updateTime: (time: TimeProps) => void;
};
const Page2 = ({ time, updateTime }: Page2Props) => {
  const [selected, setSelected] = useState<UserDataProps["plan"]>("Arcade");

  return (
    <div className="mt-[22px] flex flex-col gap-3">
      <label
        className={`${
          selected === "Arcade" && "border-purple bg-bg"
        } relative flex w-full gap-[14px] rounded-lg border-[1px] border-light-grey px-4 pb-[18px] pt-[14px] `}
        htmlFor="arcade"
      >
        <img src="/images/icon-arcade.svg" alt="Arcade" />
        <div className="w-full">
          <h2 className="text-base font-medium text-denim">Arcade</h2>
          <span className="text-sm font-normal text-grey">
            ${time === "Monthly" ? "9/mo" : "90/yr"}
          </span>
          {time === "Yearly" && (
            <p className=" mt-[3px] text-xs font-normal text-denim">
              2 months free
            </p>
          )}
        </div>
        <input
          type="radio"
          id="arcade"
          checked={selected === "Arcade"}
          onChange={() => setSelected("Arcade")}
          className="aboslute z-10 h-full w-full appearance-none"
        />
      </label>
      <label
        className={`${
          selected === "Advanced" && "border-purple bg-bg"
        } relative flex w-full gap-[14px] rounded-lg border-[1px] border-light-grey px-4 pb-[18px] pt-[14px]`}
        htmlFor="advanced"
      >
        <img src="/images/icon-advanced.svg" alt="Advanced" />
        <div className="w-full">
          <h2 className="text-base font-medium text-denim">Advanced</h2>
          <span className="text-sm font-normal text-grey">
            ${time === "Monthly" ? "12/mo" : "120/yr"}
          </span>
          {time === "Yearly" && (
            <p className="mt-[3px] text-xs font-normal text-denim">
              2 months free
            </p>
          )}
        </div>
        <input
          type="radio"
          id="advanced"
          checked={selected === "Advanced"}
          onChange={() => setSelected("Advanced")}
          className="aboslute z-10 h-full w-full appearance-none"
        />
      </label>
      <label
        className={`${
          selected === "Pro" && "border-purple bg-bg"
        } relative flex w-full gap-[14px] rounded-lg border-[1px] border-light-grey px-4 pb-[18px] pt-[14px]`}
        htmlFor="pro"
      >
        <img src="/images/icon-pro.svg" alt="Pro" />
        <div className="w-full">
          <h2 className="text-base font-medium text-denim">Pro</h2>
          <span className="text-sm font-normal text-grey">
            ${time === "Monthly" ? "15/mo" : "150/yr"}
          </span>
          {time === "Yearly" && (
            <p className="mt-[3px] text-xs font-normal text-denim">
              2 months free
            </p>
          )}
        </div>
        <input
          type="radio"
          id="pro"
          checked={selected === "Pro"}
          onChange={() => setSelected("Pro")}
          className="aboslute z-10 h-full w-full appearance-none"
        />
      </label>
      <div className="mt-6 flex items-center justify-center gap-6 bg-bg pb-[14px] pt-[13px]">
        <span
          className={`${
            time === "Monthly" ? "text-denim" : "text-grey"
          } text-sm font-medium`}
        >
          Monthly
        </span>
        <label
          htmlFor="toggle"
          className="relative inline-flex cursor-pointer items-center"
        >
          <input
            type="checkbox"
            id="toggle"
            className="peer sr-only"
            onChange={() =>
              updateTime(time === "Monthly" ? "Yearly" : "Monthly")
            }
            readOnly
          />
          <div className="peer h-5 w-[38px] rounded-full bg-denim  after:absolute after:left-1 after:top-1 after:h-3 after:w-3 after:rounded-full after:border after:bg-white after:transition-all after:content-[''] peer-checked:after:left-2 peer-checked:after:translate-x-full  peer-checked:after:border-white peer-focus:ring-denim"></div>
        </label>
        <span
          className={`${
            time === "Yearly" ? "text-denim" : "text-grey"
          } text-sm font-medium`}
        >
          Yearly
        </span>
      </div>
    </div>
  );
};

export default Page2;
