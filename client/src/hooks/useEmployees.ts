import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Employee } from '../types/Employee';

const fetchEmployees = async (): Promise<Employee[]> => {
  const { data } = await axios.get<Employee[]>(
    'http://localhost:8080/api/employees'
  );
  return data;
};

export const useEmployees = () => {
  return useQuery<Employee[]>({
    queryKey: ['employees'],
    queryFn: fetchEmployees,
  });
};
