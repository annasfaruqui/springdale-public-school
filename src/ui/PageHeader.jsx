function PageHeader({ page }) {
  return (
    <>
      <header className="relative h-[32rem] bg-page-header bg-cover bg-center bg-no-repeat">
        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-stone-100 sm:left-20">
          <h2 className="text-4xl font-bold">{page} Page</h2>
          <p className="text-2xl">Home / {page}</p>
        </div>
      </header>
    </>
  );
}

export default PageHeader;
