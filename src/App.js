import GlobalStyle from "./GlobalStyle";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Customers from "./Components/Customers";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Banner />
      <Customers/>
    </div>
  );
}

export default App;
