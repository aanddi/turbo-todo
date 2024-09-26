declare module "*.module.scss" {
   interface IClassNames {
      [key: string]: string;
   }
   const classNames: IClassNames;
   export = classNames;
}