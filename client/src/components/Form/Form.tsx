import Buttons from './Buttons';
import classes from './Form.module.scss';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
};

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <div className={classes.personalInfo}>
          <h2>Personal information</h2>
          <label htmlFor="firstName">First name</label>
          <input
            placeholder="John"
            {...register('firstName', { required: true })}
          />
          {errors.firstName && <span>First name is required</span>}

          <label htmlFor="middleName">Middle name (if applicable)</label>
          <input {...register('middleName')} />

          <label htmlFor="lastName">Last name</label>
          <input
            placeholder="Smith"
            {...register('lastName', { required: true })}
          />
          {errors.lastName && <span>Last name is required</span>}
        </div>

        <div className={classes.contactDetails}>
          <h2>Contact details</h2>
          <label htmlFor="email">Email address</label>
          <input
            className={classes.email}
            placeholder="johnsmith123@gmail.com"
            type="email"
            {...register('email', { required: true })}
          />
          {errors.email && <span>Email is required</span>}
        </div>

        <Buttons />
      </form>
    </div>
  );
}
