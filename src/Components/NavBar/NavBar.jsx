import "./NavBar.css"

const NavBar = () => {
    return (
        <div className="navBar">
          <ul className="una">
            <li className="brand">
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                <b>back home</b>
              </Link>
            </li>
            <li className="contact">
              <Link to={"/projects"} class="con">Projects</Link>
            </li>
            <li className="contact">
              <Link to={"/contactme"} class="con">Contact Me</Link>
            </li>
          </ul>
        </div>
      );
}
 
export default NavBar;