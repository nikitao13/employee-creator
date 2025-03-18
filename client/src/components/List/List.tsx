import classes from './List.module.scss';

const List = () => {
  return (
    <div className={classes.container}>
      <div className={classes.addEmployeePanel}>
        <p>Please click on 'Edit' to find more details of each employee.</p>
        <button className={classes.button}>Add Employee</button>
      </div>
    </div>
  );
};
export default List;
