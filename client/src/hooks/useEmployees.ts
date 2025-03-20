import { useQuery } from '@tanstack/react-query';
import { Employee } from '../types/Employee';

const fetchEmployees = async (): Promise<Employee[]> => {
  const response = await fetch('http://localhost:8080/api/employees');

  if (!response.ok) {
    throw new Error('Failed to fetch employees');
  }
  return response.json();
};

export const useEmployees = () => {
  return useQuery<Employee[]>({
    queryKey: ['employees'],
    queryFn: fetchEmployees,
  });
};
