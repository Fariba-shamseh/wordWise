import styles from './Sidebar.module.css'
import Logo from "./Logo.jsx";
import AppNav from "./AppNav.jsx";
import {Outlet} from "react-router-dom";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
        <Outlet />


        <footer className={styles.footer}>
            <p className={styles.copyright}>
                &copy; copyright {new Date().getFullYear()} by Wordwise Inc.
            </p>
        </footer>
    </div>
  );
}


