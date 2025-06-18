import LogoSection from "./components/LogoSection"
import NavBar from "./components/NavBar"
import Hero from "./sections/Hero"
import ShowCaseSection from "./sections/ShowCaseSection"

const App = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <ShowCaseSection />
            <LogoSection />
        </>
    )
}

export default App