import { useState } from 'react';
import classes from './List.module.scss';
import { useNavigate } from 'react-router';
import { useEmployees } from '../../hooks/useEmployees';
import ListItem from './ListItem/ListItem';
import downloadList from '../../services/downloadList';

const List = () => {
  const { data: employees } = useEmployees();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredEmployees = employees?.filter((employee) => {
    const nameToMatch = `${employee.firstName} ${employee.lastName}`;
    return nameToMatch.toLowerCase().includes(searchTerm.trim().toLowerCase());
  });

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

      <div className={classes.searchBar}>
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <div className={classes.employees}>
        {filteredEmployees && filteredEmployees.length > 0 ? (
          filteredEmployees.map((employee) => (
            <div key={employee.id} className={classes.employeeItem}>
              <ListItem item={employee} />
            </div>
          ))
        ) : (
          <p className={classes.noResults}>
            No results found for '{searchTerm}'
          </p>
        )}
      </div>
    </div>
  );
};

export default List;
