import styles from '../styles/components/Header.module.css'
import styles from '../styles/components/Header.module.css' 



export function Header() {
    return (
        <>
            <div className={styles.btnAsideMenu}>
                <img src="icons/btn-aside-menu.svg" alt="Menu" />
            </div>
            <div className={styles.logo}>
                <img src="logo.png" alt="Logo" />
            </div>
            <div className={styles.wallpaper}>
                <img src="wallpaper.png" alt="Wallpaper" />
            </div>
            <div className={styles.menu}>
                {/*Menu*/}
            </div>
        </>
    )
}