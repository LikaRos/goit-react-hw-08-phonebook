import { Link } from 'react-router-dom';
import styles from 'views/Views.module.css';

export default function NotFound() {
  return (
    <div className={styles.menu}>
      <p className={styles.text}>
        Page not found, you should <span> </span>
        <Link to="/login"> LOGIN</Link>
      </p>
    </div>
  );
}
