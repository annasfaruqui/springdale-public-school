function Icon({ icon, extraStyles }) {
  return (
    <div
      className={`flex items-center justify-center rounded-full ${extraStyles && extraStyles}`}
    >
      {icon}
    </div>
  );
}

export default Icon;
