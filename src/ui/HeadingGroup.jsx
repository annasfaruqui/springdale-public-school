function HeadingGroup({ heading, subHeading }) {
  return (
    <hgroup className="mb-4 flex flex-col gap-1">
      <h2 className="flex items-center gap-2 text-lg font-black text-stone-500 sm:text-xl">
        <div className="mr-0.5 hidden h-1.5 w-8 -skew-x-[45deg] bg-stone-500 sm:block">
          &nbsp;
        </div>
        <span>{heading.toUpperCase()}</span>
        <div className="ml-1 hidden h-1.5 w-48 -skew-x-[45deg] bg-stone-500 sm:block lg:w-1/3">
          &nbsp;
        </div>
      </h2>
      <h3 className="text-[2rem] font-bold leading-8 text-stone-700 sm:text-4xl">
        {subHeading}
      </h3>
    </hgroup>
  );
}

export default HeadingGroup;
