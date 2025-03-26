import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { Employee } from '../types/Employee';

type UpdatePayload = {
  id: number;
  data: Employee;
};

const updateEmployee = async ({
  id,
  data,
}: UpdatePayload): Promise<Employee> => {
  const { data: updatedEmployee } = await axios.put<Employee>(
    `http://localhost:8080/api/employees/${id}`,
    data,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  return updatedEmployee;
};

export function useUpdateEmployee() {
  const queryClient = useQueryClient();

  return useMutation<Employee, Error, UpdatePayload>({
    mutationFn: updateEmployee,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['employees'] });
    },
  });
}
