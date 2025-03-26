import classes from './ListItem.module.scss';
import { useNavigate } from 'react-router';
import { Employee } from '../../../types/Employee';
import calculateWorkingTime from '../../../services/calculateTimeWorking';
import { useDeleteEmployee } from '../../../hooks/useDeleteEmployee';

interface ListItemProps {
  item: Employee;
}

const ListItem = ({ item }: ListItemProps) => {
  const navigate = useNavigate();
  const { mutate: deleteEmployee } = useDeleteEmployee();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      deleteEmployee(item.id);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.details}>
        <p className={classes.name}>
          {item.firstName} {item.lastName}
        </p>
        <p>
          {item.contractType} - {calculateWorkingTime(item)}
        </p>
        <p className={classes.email}>{item.email}</p>
      </div>

      <div className={classes.buttons}>
        <button
          className={classes.button}
          onClick={() => navigate(`/form/${item.id}`)}
        >
          Edit
        </button>

        <button className={classes.button} onClick={handleDelete}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default ListItem;
