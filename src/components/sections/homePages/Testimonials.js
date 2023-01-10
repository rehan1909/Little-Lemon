import TestimonialCard from './TestimonialCard';
import Carousel from './TestimonialCarousel'
export default function Testimonials() {
    return (
        <>
            <section className="testimonial-cards">
                <TestimonialCard name="Amolika Mann" description="Ayo lets get this"/>
                <TestimonialCard name="Gaurav Borde" description="I love maggi"/>
                <TestimonialCard name="Navami Baria" description="Extremely Tasty"/>
                <TestimonialCard name="Maya Sabharwal" description="Incredible Taste"/>
            </section>

            <section className="testimonials-carousel">
                <Carousel />
            </section>
        </>
    );
}