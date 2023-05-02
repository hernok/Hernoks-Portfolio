import React, { useEffect, useState } from "react";
import "./App.css";
import SchoolProjectCard from "./components/cards/SchoolProjectCard/SchoolProjectCard";

const loadImage = async (imageName) => {
  const allImages = import.meta.glob("/src/assets/images/*");
  const imagePath = `/src/assets/images/${imageName}`;
  if (!allImages.hasOwnProperty(imagePath)) {
    throw new Error(`Image not found: ${imageName}`);
  }
  const imageModule = await allImages[imagePath]();
  return imageModule.default;
};

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "/src/components/cards/SchoolProjectCard/data.json"
      );
      const data = await response.json();

      const loadAllImages = async () => {
        const updatedData = await Promise.all(
          data.map(async (project) => {
            try {
              const imageSrc = await loadImage(project.image);
              return { ...project, imageSrc };
            } catch (error) {
              console.error(error);
              return { ...project, imageSrc: "" };
            }
          })
        );
        setData(updatedData);
      };

      loadAllImages();
    }
    fetchData();
  }, []);

  return (
    <div className="card-container">
      {data.map((card) => (
        <div className="card-wrapper" key={card.id}>
          <SchoolProjectCard
            id={card.id}
            imageSrc={card.imageSrc} // Pass imageSrc instead of image
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
