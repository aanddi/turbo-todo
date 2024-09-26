export enum BuildModeName {
   dev = "development",
   prod = "production",
}

export type BuildMode = BuildModeName.dev | BuildModeName.prod;

export interface BuildPaths {
   entry: string;
   html: string;
   output: string;
}

export interface BuildOptions {
   port: number;
   paths: BuildPaths;
   mode: BuildMode;
}
