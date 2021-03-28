import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MainCards } from "../components/MainCards";
import { Menu } from "../components/Menu";
import styles from "../styles/pages/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header>
        <Header />
      </header>

      <section>
        <div>
          <Menu />
        </div>

        <main>
          <MainCards />
        </main>

      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
