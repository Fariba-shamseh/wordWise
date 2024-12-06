import {Link, NavLink} from "react-router-dom";
import styles from "./PageNav.module.css"

function PageNav() {
    return (
        <div className={styles.nav}>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/pricing">pricing</NavLink>
                </li>
                <li>
                    <NavLink to="/product">product</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default PageNav;
