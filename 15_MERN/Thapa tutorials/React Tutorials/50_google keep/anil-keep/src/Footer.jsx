import React from "react";


function Footer() {


  const footerCss = {
      backgroundColor : "yellow",
      display : "flex",
      justifyContent : "center",
      marginTop : "80vh"
  }


  let year = new Date().getFullYear();


  return (
      <>
        <footer style={footerCss}>
            <p>Copyright © {year}</p>
        </footer>
      </>
  );
}

export default Footer;
