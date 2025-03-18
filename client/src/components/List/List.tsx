import classes from './List.module.scss';
import { useNavigate } from 'react-router';

const List = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.container}>
      <div className={classes.addEmployeePanel}>
        <p>Please click on 'Edit' to find more details of each employee.</p>
        <button className={classes.button} onClick={() => navigate('/form')}>
          Add Employee
        </button>
      </div>
    </div>
  );
};
export default List;
