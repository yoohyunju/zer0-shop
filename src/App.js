import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./components/Nav";
import "./App.css";
import ItemListContainer from "./pages/ItemListContainer";
import SimpleSlider from "./components/Carousel";

function App() {
  const [items, setItems] = useState([]);
  const readList = async () => {
    const { data } = await axios.get("http://localhost:3001/items");
    setItems(data);
  };

  useEffect(() => {
    (async () => {
      await readList();
    })();
  }, []);

  return (
    <>
      <Nav />
      <SimpleSlider />
      <ItemListContainer items={items} />
    </>
  );
}

export default App;
