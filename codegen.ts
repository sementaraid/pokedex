import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://graphqlpokemon.favware.tech/v7',
  documents: ['src/**/*.tsx'],
  generates: {
    './src/lib/graphql/': {
      preset: 'client'
    }
  },
  ignoreNoDocuments: true,
};

export default config;