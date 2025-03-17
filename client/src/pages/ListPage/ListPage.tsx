import Header from '../../components/Header/Header';
import List from '../../components/List/List';
import classes from './ListPage.module.scss';

const ListPage = () => {
  return (
    <div className={classes.container}>
      <Header />
      <List />
    </div>
  );
};
export default ListPage;
