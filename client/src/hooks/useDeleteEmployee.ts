import { useMutation, useQueryClient } from '@tanstack/react-query';

const deleteEmployee = async (id: number): Promise<void> => {
  const response = await fetch(`http://localhost:8080/api/employees/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Failed to delete employee');
  }
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
