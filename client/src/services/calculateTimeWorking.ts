import { Employee } from '../types/Employee';

const calculateWorkingTime = (employee: Employee) => {
  const startDate = new Date(employee.startDate);
  const endDate = employee.ongoing ? new Date() : new Date(employee.finishDate);

  const diff = Math.abs(endDate.getTime() - startDate.getTime());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (days >= 365) {
    const years = Math.floor(days / 365);
    return years === 1 ? `${years} year` : `${years} years`;
  }

  return `${days} days`;
};

export default calculateWorkingTime;
