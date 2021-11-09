import "./App.css";
import { ThemeProvider } from "styled-components";
import THEMES from "./styles/theme.js";
import { GlobalStyles } from "./styles/global.style";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <>
      <ThemeProvider theme={THEMES}>
        <GlobalStyles />
        <Navbar />
        <Home />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
