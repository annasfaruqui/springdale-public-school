function ErrorPage() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex flex-col items-center gap-4 rounded-xl bg-cyan-100 px-12 py-4 text-cyan-950 shadow-lg">
        <h2 className="text-5xl font-bold">Error Page</h2>
        <p className="text-2xl font-medium">
          An error occured! Please try again later.
        </p>
      </div>
    </div>
  );
}

export default ErrorPage;
