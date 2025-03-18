import classes from './Form.module.scss';

interface ButtonsProps {
  onCancel: () => void;
}

const Buttons = ({ onCancel }: ButtonsProps) => {
  return (
    <div className={classes.buttonsContainer}>
      <button className={classes.save} type="submit">
        Save
      </button>
      <button className={classes.cancel} type="button" onClick={onCancel}>
        Cancel
      </button>
    </div>
  );
};
export default Buttons;
