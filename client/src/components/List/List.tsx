import classes from './List.module.scss';
import { useNavigate } from 'react-router';
import { useEmployees } from '../../hooks/useEmployees';
import ListItem from './ListItem/ListItem';
import downloadList from '../../services/downloadList';

const List = () => {
  const { data: employees } = useEmployees();
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <div className={classes.addEmployeePanel}>
        <p>Please click on 'Edit' to find more details of each employee.</p>
        <div className={classes.buttonsField}>
          <button className={classes.button} onClick={() => navigate('/form')}>
            Add Employee
          </button>
          <button className={classes.button} onClick={downloadList}>
            Download List
          </button>
        </div>
      </div>

      <div className={classes.employees}>
        {employees?.map((employee) => (
          <div key={employee.id} className={classes.employeeItem}>
            <ListItem item={employee} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
