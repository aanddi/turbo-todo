import { useRoutes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from '@/common/components/Layout';

const HomePage = lazy(() => import('@/pages/Home'));
const TodosListPage = lazy(() => import('@/pages/TodosList'));

const Router = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/todos',
      element: <TodosListPage />,
    },
  ]);

  return (
    <Layout>
      <Suspense fallback={<div>Загрузка...</div>}>{routes}</Suspense>
    </Layout>
  );
};

export default Router;
