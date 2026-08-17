import { useState } from 'react';
import { analyzeUser } from '../services/api';

export const useAnalysis = () => {
  const [username, setUsername] = useState('');
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const startAnalysis = async (user) => {
    if (!user) return;
    setLoading(true);
    setError(null);
    try {
      const data = await analyzeUser(user);
      setUsername(user);
      setProfile(data.profile);
      setLoading(false);
      return data.profile;
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.message || err.message || 'Error analizando usuario');
    }
  };

  return { username, profile, loading, error, startAnalysis };
};
