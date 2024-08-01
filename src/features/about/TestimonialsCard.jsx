import Image from "../../ui/Image";

function TestimonialsCard({ testimonial }) {
  return (
    <div className="flex flex-col gap-8 rounded-2xl bg-stone-200 px-6 py-4 text-stone-900">
      <p className="italic">
        &ldquo;&nbsp;{testimonial.testimonial}&nbsp;&rdquo;
      </p>
      <div className="mt-auto flex flex-col items-end justify-end gap-2 justify-self-end sm:flex-row sm:items-center sm:gap-6">
        <p className="order-2 flex flex-col gap-1 text-right leading-3 sm:order-1">
          <span className="font-semibold">{testimonial.author}</span>
          <span className="text-base italic">{testimonial.position}</span>
        </p>
        <Image
          imgSrc={testimonial.authorImage}
          altText={testimonial.author}
          styles="h-12 w-12 rounded-full order-1 sm:order-2"
        />
      </div>
    </div>
  );
}

export default TestimonialsCard;
