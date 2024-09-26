import type { Configuration, ServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/types";

export function buildDevServer(options: BuildOptions) {
   return {
      port: options.port ?? 5000,
      open: true,
      historyApiFallback: true,
   };
}
