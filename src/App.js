import Header from "./compnents/Header";
import MainSlider from "./compnents/MainSlider";
import Footer from "./compnents/Footer";
import TabMenu from "./compnents/TabMenu";
import SaleBlock from "./compnents/SaleBlock";


function App() {
  return (
    <div className="App">
        <Header></Header>
        <MainSlider/>
        <TabMenu/>
        <SaleBlock/>
        <Footer></Footer>
    </div>
  );
}

export default App;
