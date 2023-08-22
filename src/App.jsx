import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CssBaseline from "@mui/material/CssBaseline";
import AppRouter from "./router/AppRouter";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./app/store";
import { Provider } from "react-redux";

function App() {
    return (
        <>
            <CssBaseline />
            <Navbar />
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <AppRouter />
                </PersistGate>
            </Provider>

            <Footer />
        </>
    );
}

export default App;
