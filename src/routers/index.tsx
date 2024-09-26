import { useRoutes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "@/common/Layout";

const HomePage = lazy(() => import("@/pages/Home"));
const TestPage = lazy(() => import("@/pages/Test"));

const Router = () => {
   const routes = useRoutes([
      {
         path: "/",
         element: <HomePage />,
      },
      {
         path: "/test",
         element: <TestPage />,
      },
   ]);

   return (
      <Layout>
         <Suspense fallback={<div>Загрузка...</div>}>{routes}</Suspense>
      </Layout>
   );
};

export default Router;
