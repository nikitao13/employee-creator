import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import FormPage from './pages/FormPage/FormPage';
import ListPage from './pages/ListPage/ListPage';

const router = createBrowserRouter([
  { path: '/', element: <ListPage /> },
  { path: '/form', element: <FormPage /> },
  { path: '/form/:id', element: <FormPage /> },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
