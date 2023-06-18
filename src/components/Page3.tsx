import { ChangeEvent, useState } from "react";
import { TimeProps } from "../types";
import Checkbox from "react-custom-checkbox";

type Page3Props = {
  time: TimeProps;
};

const Page3 = ({ time }: Page3Props) => {
  const [selected, setSelected] = useState({
    online: false,
    storage: false,
    profile: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setSelected((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };
  return (
    <div className="mt-[22px] flex flex-col gap-3">
      <label
        className={`${
          selected.online && "border-purple bg-bg"
        } flex items-center border-[1px] px-4 pb-3 pt-[11px]`}
        htmlFor="online"
      >
        <input
          onChange={handleChange}
          checked={selected.online}
          className="mr-4 h-5 w-5 appearance-none rounded-[4px] border-[1px] border-light-grey checked:bg-purple "
          name="online"
          type="checkbox"
          id="online"
        />
        <div>
          <h2 className="text-sm font-medium text-denim">Online Service</h2>
          <p className="text-xs font-normal text-grey">
            Access to multiplayer games
          </p>
        </div>
        <p className="text-normal ml-auto text-xs text-purple">+$1/mo</p>
      </label>
      <label
        className={`${
          selected.storage && "border-purple bg-bg"
        } flex items-center border-[1px] px-4 pb-3 pt-[11px]`}
        htmlFor="storage"
      >
        <input
          onChange={handleChange}
          checked={selected.storage}
          className="mr-4 h-5 w-5 appearance-none rounded-[4px] border-[1px] border-light-grey checked:bg-purple "
          type="checkbox"
          name="storage"
          id="storage"
        />
        <div>
          <h2 className="text-sm font-medium text-denim">Larger Storage</h2>
          <p className="text-xs font-normal text-grey">
            Extra 1TB of cloud save
          </p>
        </div>
        <p className="text-normal ml-auto text-xs text-purple">+$2/mo</p>
      </label>
      <label
        className={`${
          selected.profile && "border-purple bg-bg"
        } flex items-center border-[1px] px-4 pb-3 pt-[11px]`}
        htmlFor="profile"
      >
        <input
          onChange={handleChange}
          checked={selected.profile}
          className="mr-4 h-5 w-5 appearance-none rounded-[4px] border-[1px] border-light-grey checked:bg-purple"
          type="checkbox"
          name="profile"
          id="profile"
        />
        <div>
          <h2 className="text-sm font-medium text-denim">
            Customizable profile
          </h2>
          <p className="text-xs font-normal text-grey">
            Custom theme on your profile
          </p>
        </div>
        <p className="text-normal ml-auto text-xs text-purple">+$2/mo</p>
      </label>
    </div>
  );
};

export default Page3;
