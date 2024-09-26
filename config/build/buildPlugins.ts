import { Configuration } from "webpack";
import webpack from "webpack";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildModeName, BuildOptions } from "./types/types";

export function buildPlugins({mode, paths}: BuildOptions): Configuration["plugins"] {
   const isDev = mode === BuildModeName.dev;
   const isProd = mode === BuildModeName.prod;

   const plugins: Configuration["plugins"] = [
      new HtmlWebpackPlugin({
         template: path.resolve(paths.html),
      }),
   ];

   if (isDev) {
      plugins.push(new webpack.ProgressPlugin());
   }

   if (isProd) {
      plugins.push(
         new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css",
         })
      );
   }

   return plugins;
}
