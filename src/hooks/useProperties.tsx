'use client'

import { useQuery, QueryFunctionContext } from 'react-query';

// Define QueryParams as a Record where each key-value pair is a string
type QueryParams = Record<string, string>;

// Define a function to fetch properties
const fetchProperties = async ({ queryKey }: QueryFunctionContext<[string, { queryParams?: QueryParams }]>) => {
  const [_key, { queryParams }] = queryKey;

  // Construct the query string from queryParams if it exists
  const queryString = queryParams ? new URLSearchParams(queryParams).toString() : '';

  // Make the API request using Fetch API
  const response = await fetch(`/api/properties?${queryString}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

// Define the custom hook
export const useProperties = (queryParams?: QueryParams) => {
  return useQuery(['properties', { queryParams }], fetchProperties, {
    // You can add options like refetch intervals, caching strategies here
  });
};