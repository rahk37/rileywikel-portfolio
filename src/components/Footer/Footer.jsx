import React from "react";
import "./Footer.css";

export default function Footer() {
  const copyrightYear = new Date().getFullYear();
  return (
    <>
      <div className="container footer">
        Copyright &copy; {copyrightYear} by Riley Wikel. All rights reserved.
      </div>
    </>
  );
}
