import { useDispatch } from 'react-redux';
import { signIn } from '../redux/auth/auth-operations';
import { useState } from 'react';
import styles from 'views/Views.module.css';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(signIn({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Страницы регистрации</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Имя
          <input type="name" name="name" value={name} onChange={handleChange} />
        </label>
        <label className={styles.label}>
          Почта
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>
          Пароль
          <input
            className={styles.input}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button className={styles.button} type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
