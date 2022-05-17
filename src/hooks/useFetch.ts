import axios from 'axios';
import { useEffect, useState } from 'react';

type Props = {
  path: string;
  method: 'GET' | 'POST';
  payload: any;
};

/// Method represents the http method
/// Add more if a need arises
/// Make sure to extend getResponse function

export default function useFetch({ path, method, payload }: Props) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const route = `https://localhost:5000${path}`;

  async function getResponse() {
    let response;
    if (method === 'GET') {
      response = await axios.get(route);
    }
    if (method === 'POST') {
      response = await axios.post(route, payload);
    }
    return response;
  }

  useEffect(() => {
    // eslint-disable-next-line wrap-iife
    (async function () {
      try {
        setLoading(true);
        const response = await getResponse();
        // const response = await axios.get(path);
        setData(response!.data);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [path]);

  return { data, error, loading };
}
