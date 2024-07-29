function Container({ children, extraStyles }) {
  return (
    <div
      className={`mx-auto max-w-screen-xl px-8 py-8 sm:px-16 sm:py-12 ${extraStyles && extraStyles}`}
    >
      {children}
    </div>
  );
}

export default Container;
