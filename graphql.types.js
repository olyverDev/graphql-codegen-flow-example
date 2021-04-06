// @flow

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {|
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
|};

export type Entity = {|
  field: $ElementType<Scalars, 'String'>,
|};

export type Query = {|
  __typename?: 'Query',
  getEntity?: ?Entity,
|};

export type SubEntityA = {|
  ...Entity,
  ...{|
    __typename?: 'SubEntityA',
    field: $ElementType<Scalars, 'String'>,
    subEntityFieldA: $ElementType<Scalars, 'String'>,
  |}
|};

export type SubEntityB = {|
  ...Entity,
  ...{|
    __typename?: 'SubEntityB',
    field: $ElementType<Scalars, 'String'>,
    subEntityFieldB: $ElementType<Scalars, 'String'>,
  |}
|};


type SubEntityFragment_SubEntityA_Fragment = { __typename?: 'SubEntityA', subEntityFieldA: string };

type SubEntityFragment_SubEntityB_Fragment = { __typename?: 'SubEntityB', subEntityFieldB: string };

export type SubEntityFragmentFragment = SubEntityFragment_SubEntityA_Fragment | SubEntityFragment_SubEntityB_Fragment;

export type GetEntityQueryVariables = {};


export type GetEntityQuery = { __typename?: 'Query', data?: ?(
    { __typename?: 'SubEntityA', field: string }
    & SubEntityFragment_SubEntityA_Fragment
  ) | (
    { __typename?: 'SubEntityB', field: string }
    & SubEntityFragment_SubEntityB_Fragment
  ) };
