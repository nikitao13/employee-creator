import classes from './Header.module.scss';
import { useNavigate } from 'react-router';

interface HeaderProps {
  page: 'list' | 'form';
}

const Header = ({ page }: HeaderProps) => {
  const navigate = useNavigate();
  return (
    <header className={classes.header}>
      <div className={classes.content}>
        {page === 'list' && <h1>Employees' list</h1>}
        {page === 'form' && <a onClick={() => navigate('/')}>Back</a>}
        {page === 'form' && <h1>Employee details</h1>}
      </div>
    </header>
  );
};
export default Header;
