import { Link } from 'react-router-dom';
import logo from '../../assets/CatwikiLogo.svg';
import styles from './Header.module.css';
export default function Header() {
  return (
    <header className={`${styles.header}`}>
      <Link className={styles.headerLink} to={'/'}>
        <img className={styles.headerImg} src={logo} alt="Cat Wiki Logo" />
      </Link>
    </header>
  );
}
