import { useReducer } from 'react';

export default function useFetchJobs(params, page) {
  const [state, dispatch] = useReducer({ jobs: [], loading: true });

  return {
    jobs: [],
    loading: false,
    error: false,
  };
}
