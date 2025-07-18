import React from "react";
import "./Detail.css";

function Detail() {
  return (
    <div className="detail-container">
      <h1 className="detail-title">DETAIL</h1>

      <div className="detail-content">
        <p className="detail-text">
          เพื่อที่คนที่สนใจอยากจะลองเล่น จะได้รู้ว่าเกมนี้วางขายอยู่ในเว็บไซต์
          <a
            href="https://store.steampowered.com/app/2378900/The_Coffin_of_Andy_and_Leyley/"
            target="_blank"
            rel="noopener noreferrer"
            className="steam-link"
          >
            Steam
          </a>
        </p>

        <p className="detail-text">
          ติดต่อผู้สร้างได้ที่เบอร์ <strong>062-154-0545</strong> หรืออีเมล
          <a href="mailto:Rodjanasak3@gmail.com" className="email-link">
            Rodjanasak3@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}

export default Detail;
