import React from "react";
import styles from "./SchoolProjectCard.module.css";

const SchoolProjectCard = ({
  id,
  imageSrc,
  project_name,
  date,
  description,
  group_project,
  git,
  gif,
  alt,
  href,
  live,
}) => {
  return (
    <div className={`${styles["school-project-card"]}`}>
      <div className={styles["school-project-card-image"]}>
        <a
          href={live ? `${href}` : `${git}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={imageSrc} alt={alt} />
        </a>
        <div className={styles["school-project-card-live-container"]}>
          {live && (
            <div className={styles["school-project-card-live"]}>
              <a href={href}>In browser</a>
            </div>
          )}
          {group_project && (
            <div className={styles["school-project-card-group"]}>
              Group Project
            </div>
          )}
        </div>
      </div>
      <div className={styles["school-project-card-content"]}>
        <div className={styles["school-project-card-header"]}>
          <h2 className={styles["school-project-card-title"]}>
            {project_name}
          </h2>
          <p className={styles["school-project-card-date"]}>{date}</p>
        </div>
        <div className={styles["school-project-card-description"]}>
          <p>{description}</p>
          {git && (
            <div className={styles["school-project-card-github"]}>
              <a href={`${git}`} target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SchoolProjectCard;
