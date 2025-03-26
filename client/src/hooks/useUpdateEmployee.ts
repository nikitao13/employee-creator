import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Employee } from '../types/Employee';

type UpdatePayload = {
  id: number;
  data: Employee;
};

async function updateEmployee({ id, data }: UpdatePayload): Promise<Employee> {
  const response = await fetch(`http://localhost:8080/api/employees/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to update employee');
  }
  return response.json();
}

export function useUpdateEmployee() {
  const queryClient = useQueryClient();

  return useMutation<Employee, Error, UpdatePayload>({
    mutationFn: updateEmployee,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['employees'] });
    },
  });
}
