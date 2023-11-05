import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
// import AllTheBooks from "./components/AllTheBooks";
import fantasy from "./books/fantasy.json";
import history from "./books/history.json";
import horror from "./books/horror.json";
import romance from "./books/romance.json";
import scifi from "./books/scifi.json";

import BookList from "./components/BookList";
import { useState } from "react";

function App() {
  const [genre, setGenre] = useState("fantasy");

  const genres = {
    fantasy: fantasy,
    history: history,
    horror: horror,
    romance: romance,
    scifi: scifi,
  };

  return (
    <>
      <div className="position-fixed top-0 w-100 top">
        <MyNav className />
        <Welcome />
      </div>
      {/* <AllTheBooks genre={books} /> */}
      <BookList genre={genres[genre]} setGenre={setGenre} />
      <MyFooter />
    </>
  );
}

export default App;
