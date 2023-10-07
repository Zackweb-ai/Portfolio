import Header from "./partials/Header";
import './assets/css/header.css'
import Body from "./partials/Body";
import 'animate.css';
import './assets/css/Body.css'
import '../node_modules/swiper/swiper.css'




function App() {
  document.cookie = "myCookie=myValue; SameSite=None; Secure";
  return (
    <>
      <div className="container-fluid body px-0">
      <Header></Header>
      <Body></Body>
      </div>
      
    </>
  );
}

export default App;
