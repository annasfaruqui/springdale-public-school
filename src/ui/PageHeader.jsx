import bgImage from "../../images/school-img-2.jpg";

function PageHeader({ page }) {
  return (
    <>
      <header
        className="relative h-[32rem] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url(${bgImage})`,
        }}
      >
        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-stone-100 sm:left-20">
          <h2 className="text-4xl font-bold">{page} Page</h2>
          <p className="text-2xl">Home / {page}</p>
        </div>
      </header>
    </>
  );
}

export default PageHeader;
