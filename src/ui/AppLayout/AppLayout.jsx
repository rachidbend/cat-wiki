import { Outlet } from 'react-router';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import styles from './AppLayout.module.css';
export default function AppLayout() {
  return (
    <div className={`${styles.appLayout}`}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
