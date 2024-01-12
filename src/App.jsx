import React, { useEffect, useState } from "react";
import "./App.css";
import SchoolProjectCard from "./components/cards/SchoolProjectCard/SchoolProjectCard";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/data.json");
      const data = await response.json();
      setData(data);
      data.sort((b, a) => parseInt(a.id) - parseInt(b.id));
    }
    fetchData();
  }, []);

  return <main></main>;
};

export default App;
