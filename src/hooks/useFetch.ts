import axios from 'axios';
import { useEffect, useState } from 'react';

type Props = {
  path: string;
  method: 'GET' | 'POST';
  payload?: any;
};

/// Method represents the http method
/// Add more if a need arises
/// Make sure to extend getResponse function

export default function useFetch({ path, method, payload }: Props) {
  const [data, setData] = useState<any>();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const route = `https://localhost:5001${path}`;

  async function getResponse() {
    let response;
    if (method === 'GET') {
      response = axios.get(route);
    }
    if (method === 'POST') {
      response = axios.post(route, payload);
    }
    return response;
  }

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const response = await getResponse();
        setData(response!.data);
      } catch (err) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { data, error, loading };
}
