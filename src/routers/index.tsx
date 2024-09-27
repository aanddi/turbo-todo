import { useRoutes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "@/common/Layout";

const HomePage = lazy(() => import("@/pages/Home"));

const Router = () => {
   const routes = useRoutes([
      {
         path: "/",
         element: <HomePage />,
      },
   ]);

   return (
      <Layout>
         <Suspense fallback={<div>Загрузка...</div>}>{routes}</Suspense>
      </Layout>
   );
};

export default Router;
