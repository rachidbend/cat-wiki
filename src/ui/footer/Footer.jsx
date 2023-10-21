import { Link } from 'react-router-dom';
import logo from '../../assets/CatwikiLogoFooter.svg';
import styles from './Footer.module.css';
export default function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <Link to={'/'}>
        <img className={styles.logo} src={logo} alt="Cat Wiki Logo" />
      </Link>
      <p>
        created by <span>usernae</span> - devChallenge.io 2021
      </p>
    </footer>
  );
}
