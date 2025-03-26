import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { Employee } from '../types/Employee';

const addEmployee = async (
  newEmployee: Omit<Employee, 'id'>
): Promise<Employee> => {
  const { data } = await axios.post<Employee>(
    'http://localhost:8080/api/employees',
    newEmployee,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  return data;
};

export function useAddEmployee() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newEmployee: Omit<Employee, 'id'>) => addEmployee(newEmployee),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['employees'] });
    },
  });
}
