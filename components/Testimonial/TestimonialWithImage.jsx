import { FaQuoteLeft } from "react-icons/fa6";
import "./TestimonialWithImage.css";

export default function TestimonialWithImage({ children, img, name, title }) {
  return (
    <div className="testimonial">
      <div className="blue-strip">
        <div className="testimonial-inner">
          <div className="text-group">
            <FaQuoteLeft color="rgba(255, 255, 255, 0.25)" size={48} />
            <p className="quote">{children}</p>
            <span className="name">{name}</span>
            <span className="title">{title}</span>
          </div>
        </div>
      </div>

      <div className="testimonial-photo">
        <img src={img.src} alt={img.alt} />
      </div>
    </div>
  );
}
