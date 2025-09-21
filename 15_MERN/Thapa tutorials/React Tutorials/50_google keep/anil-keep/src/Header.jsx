import logo from './logo.svg';


function Header() {


  const headerCss = {
    backgroundColor : "yellow",
    display : "flex",
    alignItems : "center",
    height : "4rem"
  }


  return (
      <>
        <div className="header" style={headerCss}>
          <img src={logo} alt="logo" width="70px" height="70px"/>
          <h1 style={{color : 'skyBlue'}}>Keep</h1>
        </div>
      </>
  );
}

export default Header;
