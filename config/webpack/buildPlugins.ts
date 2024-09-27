import { Configuration, DefinePlugin } from "webpack";
import webpack from "webpack";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildModeName, BuildOptions } from "./types/types";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

export function buildPlugins({
   mode,
   paths,
   analyzer,
}: BuildOptions): Configuration["plugins"] {
   const isDev = mode === BuildModeName.dev;
   const isProd = mode === BuildModeName.prod;

   const plugins: Configuration["plugins"] = [
      // генерация html как шаблона
      new HtmlWebpackPlugin({
         template: path.resolve(paths.html),
         favicon: path.resolve(paths.public, "favicon.ico"),
      }),
      new DefinePlugin({}), // env переменные
   ];

   if (isDev) {
      plugins.push(new webpack.ProgressPlugin()); // когда собирается бандл показывает процент сборки
      plugins.push(new ForkTsCheckerWebpackPlugin()); // проверка на ts
      plugins.push(new ReactRefreshWebpackPlugin()); // исключение перезагрузок на странице
   }

   if (isProd) {
      plugins.push(
         new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css",
         }) // создание папки css, главного файла и чанки
      );
   }

   if (analyzer) {
      plugins.push(new BundleAnalyzerPlugin()); // анализатор
   }

   return plugins;
}
