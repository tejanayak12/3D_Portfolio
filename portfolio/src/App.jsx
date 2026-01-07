import LogoSection from "./sections/LogoSection"
import NavBar from "./components/NavBar"
import FeaturedCards from "./sections/FeaturedCards"
import Hero from "./sections/Hero"
import ShowCaseSection from "./sections/ShowCaseSection"
import ExperienceSection from "./sections/ExperienceSection"
import Testimonials from "./sections/Testimonials"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"

const App = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <ShowCaseSection />
            <LogoSection />
            <FeaturedCards />
            <ExperienceSection />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    )
}

export default App