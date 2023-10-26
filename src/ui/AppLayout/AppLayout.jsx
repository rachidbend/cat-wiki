import { Outlet } from 'react-router';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import styles from './AppLayout.module.css';
export default function AppLayout() {
  // This component is presentational, to nor rerender the header and footer for no reason, because they are present in all pages

  return (
    <div className={`${styles.appLayout}`}>
      <Header />
      <main>
        {/* The components rendered here depend on the current route */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
