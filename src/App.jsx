import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./Components/MyNav";
import MyFooter from "./Components/MyFooter";
import MyMain from "./Components/MyMain";
import MainCard from "./Components/MainCard";

function App() {
  return (
    <>
      <body className=" bg-dark">
        <MyNav />
        <MyMain />
        <MainCard />
        <MyFooter />
      </body>
    </>
  );
}

export default App;
