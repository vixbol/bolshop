import React from "react";
import "./christmas.css";

export default function ChristmasBackground({ children }) {
  return (
    <div className="christmas-wrap min-md:h-[calc(100vh-80px)]">
      <div className="gradient-overlay" />
      <div className="bokeh">
        <span/><span/><span/><span/><span/><span/><span/><span/>
      </div>

      {/* Dây đèn */}
      <div className="light-string">
        {Array.from({ length: 18 }).map((_, i) => (
          <span key={i} className="bulb" />
        ))}
      </div>

      {/* Cây thông đơn giản (CSS) */}
      <div className="tree">
        <div className="tree-top" />
        <div className="tree-mid" />
        <div className="tree-base" />
        <div className="tree-trunk" />
      </div>

      {/* Nội dung người dùng */}
      <div className="content">
        {children}
      </div>
    </div>
  );
}
