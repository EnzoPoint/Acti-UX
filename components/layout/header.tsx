import styles from "@styles/components/layout/header.module.scss"
import NavBar from "./nav-bar"

const Header = () => {


    // render

    return (
        <header id={styles.header}>
             <NavBar />
        </header>
    )
}

export default Header