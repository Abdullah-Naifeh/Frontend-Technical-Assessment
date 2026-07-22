import { useQuery } from '@tanstack/react-query';
import { CryptoAsset } from '../types/market';

export function useMarketData() {
  return useQuery<CryptoAsset[]>({
    queryKey: ['market-data'],
    queryFn: async () => {
      const res = await fetch('/api/market'); 
      if (!res.ok) throw new Error('Failed to fetch market data');
      return res.json();
    },
    refetchInterval: 60000, 
  });
}