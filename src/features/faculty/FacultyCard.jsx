import Image from "../../ui/Image";

function FacultyCard({ faculty }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl shadow-xl">
      <Image
        imgSrc={faculty.image}
        altText={faculty.name}
        styles="basis-3/4 sm:basis-auto"
      />
      <div className="flex basis-1/4 flex-col items-start justify-start p-4 sm:grow sm:basis-auto">
        <div className="mb-4 flex flex-col items-start">
          <p className="mb-3 rounded-full bg-stone-500 px-3 py-1 text-sm text-stone-100">
            {faculty.designation}
          </p>
          <p className="text-2xl font-semibold leading-5">{faculty.name}</p>
          <p className="text-base italic">({faculty.qualification})</p>
        </div>
        <p className="mb-4">{faculty.summary}</p>
        <p className="text-base font-medium sm:mt-auto">
          Contact: &nbsp;
          <a
            href={`mailto:${faculty.email}`}
            className="text-stone-400 underline hover:text-stone-900"
          >
            {faculty.email}
          </a>
        </p>
      </div>
    </div>
  );
}

export default FacultyCard;
