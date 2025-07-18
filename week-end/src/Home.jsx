import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1>HOME</h1>
      <div className="home-banner">
        <img
          src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2378900/0badd5423ec8cb36d543b7b156121ac2d38ef330/header.jpg?t=1752254062"
          alt=""
        />
      </div>
      <div class="game-tags">
        <span class="tag">🩸 Demon</span>
        <span class="tag">👻 Horror</span>
        <span class="tag">📖 Story</span>
        <span class="tag">😂 Satire Jokes</span>
        <span class="tag">🧠 Psychology</span>
      </div>
      <h1>The Coffin of Andy and Leyley</h1>
      <h2>YOU WELCOME EVERYONE~💕</h2>
      <div className="game-play">
        <h2>
          The Coffin of Andy and Leyley เป็นเกมผจญภัยที่นำเสนอจากมุมมองแบบ
          Top-down โดยผู้เล่นจะรับบทเป็นตัวละครเอกพี่น้อง แอนดรูว์และแอชลีย์
          เกรฟส์ สำรวจสภาพแวดล้อมและไขปริศนาเพื่อขับเคลื่อนเรื่องราว
          บางครั้งผู้เล่นจะถูกขอให้เลือกเส้นทางที่อาจเปลี่ยนทิศทางของเนื้อเรื่อง
          และปลดล็อกตอนจบแบบใดแบบหนึ่งจากหลายตอนจบ
        </h2>
      </div>
      <div className="steam-logo">
        <a
          href="https://store.steampowered.com/app/2378900/The_Coffin_of_Andy_and_Leyley/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/020/975/558/small_2x/steam-logo-steam-icon-transparent-free-png.png"
            alt="Steam Logo"
            className="steam-logo-image"
          />
        </a>
      </div>
    </div>
  );
}

export default Home;
