import GlobalStyle from "./GlobalStyle";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Customers from "./Components/Customers";
import Information from "./Components/Info";
import Accesible from "./Components/Accesible";
import Botonera from "./Components/Cards";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Banner />
      <Customers/>
      <Information/>
      <Accesible/>
      <Botonera/>
      <Footer/>
    </div>
  );
}

export default App;
