import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">ABOUT</h1>

      <div className="about-content">
        <div className="about-banner">
          <img
            src="https://clan.fastly.steamstatic.com/images//43894685/de28be40097be8e4a6719f8e3fd6d6e57be60be7.png"
            alt="Banner"
            className="banner-image"
            width={123}
          />
        </div>

        <div className="about-description">
          <h2>
            The Coffin of Andy and Leyley
            เป็นเกมผจญภัยสยองขวัญแนวจิตวิทยาที่พัฒนาโดย Nemlei และจัดจำหน่ายโดย
            Kit9 Studio สำหรับ Microsoft Windows
            ตัวเกมมีต้นกำเนิดมาจากเดโมที่เผยแพร่บน Itch.io
            และต่อมาได้รับการขยายและเปิดตัวบน Steam ในช่วง Early Access เวอร์ชัน
            Steam Early Access วางจำหน่ายเมื่อวันที่ 13 ตุลาคม 2023
            ปัจจุบันเวอร์ชันเดือนเมษายน 2025 มีทั้งหมดสามในสี่ตอนที่วางแผนไว้
            เนื้อเรื่องดำเนินเรื่องโดยพี่น้อง Andrew และ Ashley Graves
            ที่พบว่าตัวเองอยู่ในความสัมพันธ์ที่ต้องพึ่งพาอาศัยกัน
            ขณะที่พวกเขาก่ออาชญากรรมต่างๆ ขณะพยายามเอาชีวิตรอดในโลกดิสโทเปีย
          </h2>
        </div>
      </div>
    </div>
  );
}

export default About;
