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
            <li className="provider">
              <Link to={"/projects"} class="prov">Projects</Link>
            </li>
            <li className="provider">
              <Link to={"/contactme"} class="prov">Contact Me</Link>
            </li>
          </ul>
        </div>
      );
}
 
export default NavBar;