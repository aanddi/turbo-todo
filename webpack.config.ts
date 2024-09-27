import path from "path";
import webpack from "webpack";

import { buildWebpack } from "./config/webpack/buildWebpack";
import {
   BuildMode,
   BuildModeName,
   BuildPaths,
} from "./config/webpack/types/types";

interface EnvVariables {
   mode: BuildMode;
   port: number;
   analyzer: boolean;
}

export default (env: EnvVariables) => {
   const paths: BuildPaths = {
      output: path.resolve(__dirname, "build"),
      entry: path.resolve(__dirname, "src", "main.tsx"),
      html: path.resolve(__dirname, "public", "index.html"),
      src: path.resolve(__dirname, "src"),
      public: path.resolve(__dirname, "public"),
   };

   const config: webpack.Configuration = buildWebpack({
      port: env.port ?? 3000,
      mode: env.mode ?? ("development" as BuildModeName.dev),
      paths: paths,
      analyzer: env.analyzer,
   });

   return config;
};
