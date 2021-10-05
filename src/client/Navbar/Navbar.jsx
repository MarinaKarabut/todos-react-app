import NavbarList from './components/NavbarList'


import styles from './Navbar.module.scss'

const Navbar = () => {
    return (
        <div className={styles.navbarWrapper}>
            <NavbarList />
        </div>
    )
};

export default Navbar;