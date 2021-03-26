import { Footer } from "../components/Footer";
import { Menu } from "../components/Menu";
import styles from "../styles/pages/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <section>
        <div className={styles.headerContainer}>
          {/* colocar o header da pagina aqui */}

        </div>

        <div>
          <Menu />
        </div>

        <div className={styles.cardContainer}>

        </div>

        <footer>
          <Footer />
        </footer>
      </section>
    </div>
  );
}
