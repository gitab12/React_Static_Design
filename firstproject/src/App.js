import Info from "./Components/Information";
import Footer from "./Components/Footer";
import MainComponent from "./Components/MainContain";
import "./style.css"
function App()
{

    return(
        <main className="Apppage">
        <Info />
        <MainComponent />
        <Footer / >
        </main>
    )
}

export default App