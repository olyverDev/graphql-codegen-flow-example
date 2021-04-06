
const SUB_ENTITY_FRAGMENT = gql`
  fragment SubEntityFragment on Entity {
    ... on SubEntityA {
      subEntityFieldA
    }
    ... on SubEntityB {
      subEntityFieldB
    }
  }
`;

const GET_ENTITY = gql`
  ${SUB_ENTITY_FRAGMENT}

  query getEntity {
    data: getEntity {
      ...SubEntityFragment
      field
    }
  }
`;
