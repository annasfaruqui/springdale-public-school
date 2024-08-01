import Image from "../../ui/Image";

function FacilitiesCard({ facility }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl shadow-sm duration-200 hover:scale-105 hover:shadow-xl sm:gap-2 sm:shadow-md lg:flex-row">
      <Image
        imgSrc={facility.image}
        altText={facility.summary}
        styles="sm:basis-2/5"
      />
      <div className="p-3 pb-6 sm:basis-3/5">
        <p className="mb-4">{facility.summary}</p>
        <ul className="flex list-outside list-disc flex-col gap-1 pl-5">
          {facility.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FacilitiesCard;
