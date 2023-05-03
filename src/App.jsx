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
      console.log(data);
    }
    fetchData();
  }, []);

  return (
    <div className="card-container">
      {data.map((card) => (
        <div className="card-wrapper" key={card.id}>
          <SchoolProjectCard
            id={card.id}
            image={card.image}
            project_name={card.project_name}
            date={card.date}
            description={card.description}
            group_project={card.group_project}
            git={card.git}
            gif={card.gif}
            alt={card.alt}
            href={card.href}
            live={card.live}
          />
        </div>
      ))}
    </div>
  );
};

export default App;
