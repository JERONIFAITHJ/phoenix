import type { CodegenConfig } from "@graphql-codegen/cli";
import typeDefs from "./typedefs";

const config: CodegenConfig = {
  overwrite: true,
  schema: typeDefs,
  generates: {
    "src/generated/resolvers-types.ts": {
      plugins: [
        {
          add: {
            content: "/* eslint-disable */",
          },
        },
        "typescript",
        "typescript-resolvers",
      ],
      config: {
        skipTypename: true,
      },
    },
    "src/generated/schema.graphql": {
      plugins: ["schema-ast"],
      config: {
        includeDirectives: true,
      },
    },
  },
};

export default config;
