import { useEffect } from 'react';
import Form from '../../components/Form/Form';
import Header from '../../components/Header/Header';
import classes from './FormPage.module.scss';

const FormPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.container}>
      <Header page="form" />
      <Form />
    </div>
  );
};

export default FormPage;
