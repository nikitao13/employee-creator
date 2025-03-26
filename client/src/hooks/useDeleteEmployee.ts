import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const deleteEmployee = async (id: number): Promise<void> => {
  await axios.delete(`http://localhost:8080/api/employees/${id}`);
};

export const useDeleteEmployee = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteEmployee(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['employees'] });
    },
  });
};
