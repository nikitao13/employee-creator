import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Employee } from '../types/Employee';

const addEmployee = async (
  newEmployee: Omit<Employee, 'id'>
): Promise<Employee> => {
  const response = await fetch('http://localhost:8080/api/employees', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newEmployee),
  });

  if (!response.ok) {
    throw new Error('Failed to create employee');
  }

  return response.json();
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
