'use client';

import { useState } from 'react';
import { CryptoAsset } from '../../types/market';
import { Cossette_Texte } from 'next/font/google';

interface MarketWatchProps {
  assets: CryptoAsset[];
  isLoading: boolean;
  isError: boolean;
  isFetching: boolean;
  refetch: () => void;
  selectedAssetId: string | null;
  onSelectAsset: (id: string) => void;
}

export function MarketWatch({
  assets,
  isLoading,
  isError,
  isFetching,
  refetch,
  selectedAssetId,
  onSelectAsset,
}: MarketWatchProps) {
  const [search, setSearch] = useState('');

  const filtered = assets.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 h-full flex flex-col">
      {/* Search & Refresh Controls */}
      <div className="flex justify-between items-center mb-4 gap-4">
        <input
          type="text"
          placeholder="🔍 Search assets... (e.g. BTC, ETH)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-sm text-white w-full max-w-xs focus:outline-none focus:border-slate-700"
        />
        <button
          onClick={() => refetch()}
          disabled={isFetching}
          className="bg-slate-800 hover:bg-slate-700 disabled:opacity-50 text-xs text-slate-200 px-4 py-2 rounded-lg border border-slate-700 cursor-pointer"
        >
          {isFetching ? 'Refreshing...' : '🔄 Refresh'}
        </button>
      </div>

      {/* States */}
      {isLoading && <div className="text-center py-12 text-slate-400">Loading market data...</div>}
      {isError && <div className="text-center py-12 text-rose-400">Error loading asset prices.</div>}

      {/* Data Table */}
      {!isLoading && !isError && (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="text-xs uppercase text-slate-400 border-b border-slate-800">
              <tr>
                <th className="py-3 px-2">Asset</th>
                <th className="py-3 px-2 text-right">Price</th>
                <th className="py-3 px-2 text-right">24h %</th>
                <th className="py-3 px-2 text-right">24h Volume</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {filtered.map((coin) => {
                const isPositive = coin.price_change_percentage_24h >= 0;
                const isSelected = coin.id === selectedAssetId;

                return (
                  <tr
                    key={coin.id}
                    onClick={() => onSelectAsset(coin.id)}
                    className={`cursor-pointer transition-colors ${
                      isSelected ? 'bg-slate-800/80' : 'hover:bg-slate-800/30'
                    }`}
                  >
                    <td className="py-3 px-2 flex items-center gap-3">
                      <img src={coin.image} alt={coin.name} className="w-6 h-6 rounded-full" />
                      <div>
                        <div className="font-semibold text-white">{coin.name}</div>
                        <div className="text-xs text-slate-400 uppercase">{coin.symbol}</div>
                      </div>
                    </td>
                    <td className="py-3 px-2 text-right font-mono text-white">
                      ${coin.current_price.toLocaleString()}
                    </td>
                    <td className={`py-3 px-2 text-right font-mono ${isPositive ? 'text-emerald-400' : 'text-rose-500'}`}>
                      {isPositive ? '+' : ''}{coin.price_change_percentage_24h.toFixed(2)}%
                    </td>
                    <td className="py-3 px-2 text-right font-mono text-slate-300">
                      ${(coin.total_volume / 1e6).toFixed(1)}M
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}