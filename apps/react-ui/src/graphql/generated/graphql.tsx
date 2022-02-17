import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type CreateRequestInputs = {
  body: Scalars['String'];
  requestor: Scalars['String'];
  title: Scalars['String'];
};

export type EditRequestInputs = {
  body: Scalars['String'];
  id: Scalars['String'];
  requestor: Scalars['String'];
  title: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createRequest: Request;
  deleteRequest: Scalars['Boolean'];
  editRequest: Request;
};


export type MutationCreateRequestArgs = {
  data: CreateRequestInputs;
};


export type MutationDeleteRequestArgs = {
  requestID: Scalars['String'];
};


export type MutationEditRequestArgs = {
  data: EditRequestInputs;
};

export type Query = {
  __typename?: 'Query';
  getRequests: Array<Request>;
};

export type Request = {
  __typename?: 'Request';
  body: Scalars['String'];
  dateCreated: Scalars['DateTime'];
  id: Scalars['String'];
  requestor: Scalars['String'];
  title: Scalars['String'];
};

export type GetRequestsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRequestsQuery = { __typename?: 'Query', getRequests: Array<{ __typename?: 'Request', id: string, requestor: string, title: string, body: string, dateCreated: any }> };

export type DeleteByIdMutationVariables = Exact<{
  requestId: Scalars['String'];
}>;


export type DeleteByIdMutation = { __typename?: 'Mutation', deleteRequest: boolean };

export type CreateRequestMutationVariables = Exact<{
  inputs: CreateRequestInputs;
}>;


export type CreateRequestMutation = { __typename?: 'Mutation', createRequest: { __typename?: 'Request', id: string } };

export type EditRequestMutationVariables = Exact<{
  inputs: EditRequestInputs;
}>;


export type EditRequestMutation = { __typename?: 'Mutation', editRequest: { __typename?: 'Request', id: string } };


export const GetRequestsDocument = gql`
    query GetRequests {
  getRequests {
    id
    requestor
    title
    body
    dateCreated
  }
}
    `;

/**
 * __useGetRequestsQuery__
 *
 * To run a query within a React component, call `useGetRequestsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRequestsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRequestsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRequestsQuery(baseOptions?: Apollo.QueryHookOptions<GetRequestsQuery, GetRequestsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRequestsQuery, GetRequestsQueryVariables>(GetRequestsDocument, options);
      }
export function useGetRequestsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRequestsQuery, GetRequestsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRequestsQuery, GetRequestsQueryVariables>(GetRequestsDocument, options);
        }
export type GetRequestsQueryHookResult = ReturnType<typeof useGetRequestsQuery>;
export type GetRequestsLazyQueryHookResult = ReturnType<typeof useGetRequestsLazyQuery>;
export type GetRequestsQueryResult = Apollo.QueryResult<GetRequestsQuery, GetRequestsQueryVariables>;
export const DeleteByIdDocument = gql`
    mutation DeleteByID($requestId: String!) {
  deleteRequest(requestID: $requestId)
}
    `;
export type DeleteByIdMutationFn = Apollo.MutationFunction<DeleteByIdMutation, DeleteByIdMutationVariables>;

/**
 * __useDeleteByIdMutation__
 *
 * To run a mutation, you first call `useDeleteByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteByIdMutation, { data, loading, error }] = useDeleteByIdMutation({
 *   variables: {
 *      requestId: // value for 'requestId'
 *   },
 * });
 */
export function useDeleteByIdMutation(baseOptions?: Apollo.MutationHookOptions<DeleteByIdMutation, DeleteByIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteByIdMutation, DeleteByIdMutationVariables>(DeleteByIdDocument, options);
      }
export type DeleteByIdMutationHookResult = ReturnType<typeof useDeleteByIdMutation>;
export type DeleteByIdMutationResult = Apollo.MutationResult<DeleteByIdMutation>;
export type DeleteByIdMutationOptions = Apollo.BaseMutationOptions<DeleteByIdMutation, DeleteByIdMutationVariables>;
export const CreateRequestDocument = gql`
    mutation CreateRequest($inputs: CreateRequestInputs!) {
  createRequest(data: $inputs) {
    id
  }
}
    `;
export type CreateRequestMutationFn = Apollo.MutationFunction<CreateRequestMutation, CreateRequestMutationVariables>;

/**
 * __useCreateRequestMutation__
 *
 * To run a mutation, you first call `useCreateRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRequestMutation, { data, loading, error }] = useCreateRequestMutation({
 *   variables: {
 *      inputs: // value for 'inputs'
 *   },
 * });
 */
export function useCreateRequestMutation(baseOptions?: Apollo.MutationHookOptions<CreateRequestMutation, CreateRequestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateRequestMutation, CreateRequestMutationVariables>(CreateRequestDocument, options);
      }
export type CreateRequestMutationHookResult = ReturnType<typeof useCreateRequestMutation>;
export type CreateRequestMutationResult = Apollo.MutationResult<CreateRequestMutation>;
export type CreateRequestMutationOptions = Apollo.BaseMutationOptions<CreateRequestMutation, CreateRequestMutationVariables>;
export const EditRequestDocument = gql`
    mutation EditRequest($inputs: EditRequestInputs!) {
  editRequest(data: $inputs) {
    id
  }
}
    `;
export type EditRequestMutationFn = Apollo.MutationFunction<EditRequestMutation, EditRequestMutationVariables>;

/**
 * __useEditRequestMutation__
 *
 * To run a mutation, you first call `useEditRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editRequestMutation, { data, loading, error }] = useEditRequestMutation({
 *   variables: {
 *      inputs: // value for 'inputs'
 *   },
 * });
 */
export function useEditRequestMutation(baseOptions?: Apollo.MutationHookOptions<EditRequestMutation, EditRequestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditRequestMutation, EditRequestMutationVariables>(EditRequestDocument, options);
      }
export type EditRequestMutationHookResult = ReturnType<typeof useEditRequestMutation>;
export type EditRequestMutationResult = Apollo.MutationResult<EditRequestMutation>;
export type EditRequestMutationOptions = Apollo.BaseMutationOptions<EditRequestMutation, EditRequestMutationVariables>;