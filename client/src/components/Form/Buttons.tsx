import classes from './Form.module.scss';

const Buttons = () => {
  return (
    <div className={classes.buttonsContainer}>
      <button className={classes.save} type="submit">
        Save
      </button>
      <button className={classes.cancel} type="button">
        Cancel
      </button>
    </div>
  );
};
export default Buttons;
