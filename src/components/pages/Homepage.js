import Heading from '../sections/homePages/Heading';
import Specials from  '../sections/homePages/Specials';
import Testimonials from '../sections/homePages/Testimonials';
import About from '../sections/homePages/About';
export default function Homepage() {
    return (
        <>
        <Heading />
        <main>
            <Specials />
            <Testimonials />
            <About />
        </main>
      </>
    );
}