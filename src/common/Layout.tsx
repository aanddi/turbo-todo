import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }: PropsWithChildren) => {
   return (
      <div>
         <Link to={"/"}>Главная</Link>
         <Link to={"/test"}>Тест</Link>
         <main>{children}</main>
      </div>
   );
};

export default Layout;
