# Summary

This example demonstrates not really correct behavior of graphql-codegen/flow generation (https://github.com/dotansimha/graphql-code-generator/releases/tag/%40graphql-codegen%2Fflow%401.18.5). There is a query (`./query.js` -> `GET_ENTITY`) with nullable return type. It uses graphql fragment based on two various types. In result of graphql code generation to flow types first branch is marked as maybe type (https://flow.org/en/docs/types/maybe/), but second one is not. See `./graphql.types.js` -> `GetEntityQuery` to review the type.

* This project uses yarn (https://yarnpkg.com/)

# Commands

- yarn install
- yarn run graphql-codegen
