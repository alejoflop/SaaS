import GlobalStyle from "./GlobalStyle";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Customers from "./Components/Customers";
import Information from "./Components/Info";
import Accesible from "./Components/Accesible";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Banner />
      <Customers/>
      <Information/>
      <Accesible/>
    </div>
  );
}

export default App;
