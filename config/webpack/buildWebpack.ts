import webpack from "webpack";
import type { Configuration, ServerConfiguration } from "webpack-dev-server";

import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";

import { BuildModeName, BuildOptions } from "./types/types";

export function buildWebpack(options: BuildOptions): webpack.Configuration {
   const { mode, paths } = options;

   const isDev = mode === BuildModeName.dev;

   return {
      mode: mode ?? BuildModeName.dev,
      entry: paths.entry,
      output: {
         path: paths.output,
         filename: "[name].[contenthash].js",
         clean: true,
      },

      plugins: buildPlugins(options),

      module: { rules: buildLoaders(options) },

      resolve: buildResolvers(options),

      devtool: isDev && "inline-source-map",

      devServer: isDev && buildDevServer(options),
   };
}
