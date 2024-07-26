function PageHeader({ page }) {
  return (
    <header className="bg-page-header relative h-[32rem] bg-cover bg-center">
      <div className="absolute left-20 top-1/2 -translate-y-1/2 text-stone-100">
        <h2 className="text-4xl font-bold">{page} Page</h2>
        <p className="text-2xl">Home / {page}</p>
      </div>
    </header>
  );
}

export default PageHeader;
