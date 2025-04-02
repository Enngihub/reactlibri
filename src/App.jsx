import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./Components/MyNav";
import MyFooter from "./Components/MyFooter";
import MyMain from "./Components/MyMain";
import MainCard from "./Components/MainCard";
import Allert from "./Components/Allert";
import SingleBook from "./Components/SingleBook";
import horrorBooks from "../src/Components/horror.json";
import BookList from "./BookList";

function App() {
  return (
    <>
      <body className=" bg-dark">
        {/* <BookList arrayOfBook={horrorBooks} /> */}
        {/* <SingleBook Book={horrorBooks[12]} /> */}
        <MyNav />
        <Allert />
        <MyMain />
        <h3 className="text-danger text-center mt-1 mb-1 p-1">
          "Here is our best selection of scary books."
        </h3>
        <MainCard />
        <MyFooter />
      </body>
    </>
  );
}

export default App;
