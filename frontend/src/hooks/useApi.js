import { useState, useCallback } from 'react';
import * as api from '../services/api';

export const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(async (apiFunc, ...args) => {
    setLoading(true);
    setError(null);
    try {
      const res = await apiFunc(...args);
      setLoading(false);
      return res;
    } catch (err) {
      setLoading(false);
      const msg = err.response?.data?.message || err.message || 'Error en la solicitud';
      setError(msg);
      throw new Error(msg);
    }
  }, []);

  return { loading, error, request };
};
