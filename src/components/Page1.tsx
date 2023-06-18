const Page1 = () => {
  return (
    <div className="mt-[22px] flex flex-col gap-4">
      <label className="text-xs font-normal text-denim" htmlFor="name">
        Name
        <input
          className="mt-1 w-full rounded border-[1px] border-light-grey bg-white px-4 py-3 text-sm font-medium placeholder:text-grey"
          type="text"
          id="name"
          placeholder="e.g. Stephen King"
        />
      </label>
      <label className=" text-xs font-normal text-denim" htmlFor="email">
        Email Address
        <input
          className="mt-1 w-full rounded border-[1px] border-light-grey bg-white px-4 py-3 text-sm font-medium placeholder:text-grey"
          type="email"
          id="email"
          placeholder="e.g. stephenking@lorem.com"
        />
      </label>
      <label className="text-xs font-normal text-denim" htmlFor="phone">
        Phone Number
        <input
          className="mt-1 w-full rounded border-[1px] border-light-grey bg-white px-4 py-3 text-sm font-medium placeholder:text-grey"
          type="text"
          id="phone"
          placeholder="e.g. +1 234 567 890"
        />
      </label>
    </div>
  );
};

export default Page1;
