import React from "react";
import "../Styles/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div class="container2">
      <div className="cards">
        <div className="card-info">
          <h2 className="card-subtitle">About CampusCoder</h2>
          <p className="card-descripition">
            CampusCoder is more than just a version control system; it's a
            dynamic platform that facilitates collaboration among developers
            worldwide. By providing a robust framework for version control,
            CampusCoder allows users to manage, track, and coordinate changes
            made to code efficiently. This ensures seamless collaboration and
            transparency within teams of any size.
          </p>
        </div>
        <div className="card-info">
          <h2 className="card-subtitle">Uses of CampusCoder</h2>
          <p className="card-descripition">
            Version Control: CampusCoder offers a platform for efficient
            tracking, managing, and storing various versions of code, ensuring
            seamless collaboration among developers. Collaboration Hub: It
            facilitates teamwork through pull requests, issues, and project
            boards, enabling transparent and effective communication for project
            enhancements. Open-Source Community: CampusCoder fosters a vibrant
            community of developers, encouraging code sharing, contribution to
            projects, and learning from diverse resources.
          </p>
        </div>
        <div className="card-info">
          <h2 className="card-subtitle">How to use CampusCoder</h2>
          <p className="card-descripition">
            Empower Collaboration: CampusCoder aims to empower collaboration
            among developers worldwide by providing tools and features that
            facilitate seamless teamwork, communication, and contribution to
            projects. Support Open Source: CampusCoder is committed to
            supporting and fostering the open-source community. It encourages
            developers to share code, contribute to open-source projects, and
            learn from a diverse range of resources.
          </p>
        </div>
      </div>
      <Link to="/Login" style={{ textDecoration: "none" }}>
        <button class="btn-more">View Applications</button>
      </Link>
    </div>
  );
}

export default Home;
