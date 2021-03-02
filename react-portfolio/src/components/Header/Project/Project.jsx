import React from "react";

const Project = ({ title, image, desc, repoName, repo, site }) => {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="cart-subtitle">
            <a href={site}>Deployed Site</a>
          </h6>
          <p className="card-text">{desc}</p>
          <a href={repo} className="card-link">
            {repoName} repository @ GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
