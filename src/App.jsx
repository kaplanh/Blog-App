import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CssBaseline from "@mui/material/CssBaseline";
import AppRouter from "./router/AppRouter";

function App() {
    return (
        <>
            {/* <CssBaseline/> */}
            <Navbar />
            <AppRouter/>
            <Footer/>
        </>
    );
}

export default App;
