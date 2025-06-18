import LogoSection from "./sections/LogoSection"
import NavBar from "./components/NavBar"
import FeaturedCards from "./sections/FeaturedCards"
import Hero from "./sections/Hero"
import ShowCaseSection from "./sections/ShowCaseSection"

const App = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <ShowCaseSection />
            <LogoSection />
            <FeaturedCards />
        </>
    )
}

export default App