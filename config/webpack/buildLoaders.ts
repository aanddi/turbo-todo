import { ModuleOptions } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildModeName, BuildOptions } from "./types/types";

export function buildLoaders({ mode }: BuildOptions): ModuleOptions["rules"] {
   const isDev = mode === BuildModeName.dev;

   const assetsLoader = {
      test: /\.(png|jpg|jpeg|gif)$/i,
      type: "asset/resource",
   };

   const svgrLoader = {
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
         {
            loader: "@svgr/webpack",
            options: {
               icon: true,
               svgConfig: {
                  plugins: [
                     {
                        name: "convertColors",
                        params: {
                           currentColor: true,
                        },
                     },
                  ],
               },
            },
         },
      ],
   };

   const scssLoader = {
      test: /\.s[ac]ss$/i,
      use: [
         isDev ? "style-loader" : MiniCssExtractPlugin.loader,
         {
            loader: "css-loader",
            options: {
               modules: {
                  namedExport: false,
                  exportLocalsConvention: "as-is",
                  localIdentName: isDev
                     ? "[path][name]__[local]--[hash:base64:5]"
                     : "[hash:base64:8]",
               },
            },
         },
         "sass-loader",
      ],
   };

   const tsLoader = {
      test: /\.tsx?$/,
      use: "ts-loader",
      exclude: /node_modules/,
   };

   return [assetsLoader, svgrLoader, scssLoader, tsLoader];
}
