import React from "react";

function Footer() {
  var currYr = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright @ {currYr}</p>
    </footer>
  );
}

export default Footer;
