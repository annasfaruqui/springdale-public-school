import Icon from "../../ui/Icon";

function GoalsCard({ heading, children, icon }) {
  return (
    <div className="flex basis-1/3 flex-col items-center gap-8 rounded-xl p-4 pb-8 shadow-sm duration-200 hover:-translate-y-5 hover:shadow-xl sm:shadow-md">
      <div className="flex items-center gap-6">
        <Icon icon={icon} extraStyles="p-2 bg-stone-200" />
        <h5 className="text-2xl font-black">{heading}</h5>
      </div>
      <p className="text-center">{children}</p>
    </div>
  );
}

export default GoalsCard;
