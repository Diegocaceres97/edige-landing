/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
    readonly PUBLIC_POKEAPI: string;
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }