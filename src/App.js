
import './App.css';
//components
import MyNavbar from "./components/my-navbar/mynavbar.component";
import MyCarousel from "./components/my-carousel/my-carousel.js";
import TitleMessage from "./components/title-message/title";

const App = () => {
  return (
    <div>
      <MyNavbar/>
      <MyCarousel />
      <TitleMessage/>
   
    </div>
  );
}

export default App;
