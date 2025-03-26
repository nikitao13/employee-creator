import { useEffect } from 'react';
import { useEmployees } from '../../hooks/useEmployees';
import { useAddEmployee } from '../../hooks/useAddEmployee';
import { useUpdateEmployee } from '../../hooks/useUpdateEmployee';
import Buttons from './Buttons';
import classes from './Form.module.scss';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router';
import { Employee } from '../../types/Employee';

type Inputs = {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  contractType: string;
  startDate: string;
  finishDate: string;
  ongoing: boolean;
  timeBasis: string;
  hours: number;
};

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const { mutate: addEmployee } = useAddEmployee();
  const { mutate: updateEmployee } = useUpdateEmployee();

  const navigate = useNavigate();
  const { id } = useParams();
  const { data: employees } = useEmployees();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (!id) {
      addEmployee(data, {
        onSuccess: () => navigate('/'),
        onError: (error) => {
          alert('Error creating employee: ' + error);
        },
      });
    } else {
      updateEmployee(
        { id: Number(id), data: { ...data, id: Number(id) } },
        {
          onSuccess: () => navigate('/'),
          onError: (error) => {
            alert('Error updating employee: ' + error);
          },
        }
      );
    }
  };

  const cancel = () => {
    reset();
    navigate('/');
  };

  const startVal = watch('startDate');
  const ongoing = watch('ongoing');

  useEffect(() => {
    if (id && employees) {
      const existingEmployee = employees.find(
        (emp: Employee) => emp.id === Number(id)
      );
      if (existingEmployee) {
        reset(existingEmployee);
      }
    }
  }, [id, employees, reset]);

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
          <input placeholder="-" {...register('middleName')} />

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

          <label htmlFor="phone">Mobile number</label>
          <p className={classes.disclaimer}>Must be an Australian number</p>
          <input
            className={classes.phone}
            placeholder="0412 345 678"
            type="tel"
            {...register('phone', { required: true })}
          />
          {errors.phone && <span>Phone number is required</span>}

          <label htmlFor="address">Residential Address</label>
          <input
            className={classes.address}
            placeholder="123 Example St, Sydney NSW 2000"
            type="address"
            {...register('address', { required: true })}
          />
          {errors.address && <span>Address is required</span>}
        </div>

        <div className={classes.employeeStatus}>
          <h2>Employee status</h2>
          <p className={classes.contractP}>What is contract type?</p>
          <label className={classes.contractLabel}>
            <input
              type="radio"
              value="Permanent"
              {...register('contractType', { required: true })}
            />
            Permanent
          </label>

          <label className={classes.contractLabel}>
            <input
              type="radio"
              value="Contract"
              {...register('contractType', { required: true })}
            />
            Contract
          </label>
          {errors.contractType && <span>Please select your contract type</span>}

          <h3>Start date</h3>
          <input
            className={classes.dateField}
            type="date"
            {...register('startDate', { required: 'Start date is required' })}
          />
          {errors.startDate && <span>{errors.startDate.message}</span>}

          <h3>Finish date</h3>
          <input
            className={`${classes.dateField} ${classes.finishDateField}`}
            type="date"
            {...register('finishDate', {
              validate: (finishVal) => {
                if (finishVal && ongoing) {
                  return 'Cannot have a finish date if ongoing';
                }
                if (!ongoing && !finishVal) {
                  return 'Finish date is required if not ongoing';
                }
                if (!startVal || !finishVal) {
                  return true;
                }
                const startDate = new Date(startVal);
                const finishDate = new Date(finishVal);
                if (finishDate < startDate) {
                  return 'Finish date cannot be before the start date';
                }
                return true;
              },
            })}
          />
          {errors.finishDate && <span>{errors.finishDate.message}</span>}

          <label className={classes.checkboxLabel}>
            <input type="checkbox" {...register('ongoing')} />
            No end date
          </label>

          <h3 className={classes.contractP}>
            Is this on a full-time or part-time basis?
          </h3>
          <label className={classes.contractLabel}>
            <input
              type="radio"
              value="fullTime"
              {...register('timeBasis', { required: true })}
            />
            Full-time
          </label>

          <label className={classes.contractLabel}>
            <input
              type="radio"
              value="partTime"
              {...register('timeBasis', { required: true })}
            />
            Part-time
          </label>
          {errors.timeBasis && (
            <span>Please select full-time or part-time</span>
          )}

          <div className={classes.hours}>
            <h3>Hours per week</h3>
            <input
              className={classes.hoursField}
              type="number"
              min="1"
              {...register('hours', { required: true })}
            />
          </div>
          {errors.hours && <span>Hours per week is required</span>}
        </div>

        <Buttons onCancel={cancel} />
      </form>
    </div>
  );
}
