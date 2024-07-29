function Image({ imgSrc, altText, styles }) {
  return (
    <figure className={`overflow-hidden ${styles}`}>
      <img
        src={imgSrc}
        alt={altText}
        className="block h-full w-full object-cover"
      />
    </figure>
  );
}

export default Image;
