import styles from "../styles/pages/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <section>
        <div className={styles.headerContainer}>
          <div className={styles.btnAsideMenu}>
            <img src="icon/btn-aside-menu.svg" alt="Menu" />
          </div>
          <div className={styles.logo}>
            <img src="logo.png" alt="Logo" />
          </div>
          <div className={styles.wallpaper}>
            <img src="wallpaper.png" alt="Wallpaper" />
          </div>
          <div className={styles.menuContainer}>
            <div className={styles.menu}>
                

              <div className={styles.currentMenu}>
                <span>PRIMEBURGUERS</span>
              </div>
             
            
            </div>
          </div>
        </div>

        <div className={styles.cardContainer}>

        </div>
        <footer className={styles.containerFooter}>
          {/* colocar o footer aqui */}

        </footer>
      </section>
    </div>
  );
}
