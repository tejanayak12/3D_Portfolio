import LogoSection from "./sections/LogoSection"
import NavBar from "./components/NavBar"
import FeaturedCards from "./sections/FeaturedCards"
import Hero from "./sections/Hero"
import ShowCaseSection from "./sections/ShowCaseSection"
import ExperienceSection from "./sections/ExperienceSection"

const App = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <ShowCaseSection />
            <LogoSection />
            <FeaturedCards />
            <ExperienceSection />
        </>
    )
}

export default App