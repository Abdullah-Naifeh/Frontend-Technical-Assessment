'use client';

import { useState } from 'react';
import { useMarketData } from '../../hooks/useMarketData';
import { useAuth } from '../../context/AuthContext';
import { MarketWatch } from './MarketWatch';
import { AssetDetails } from './AssetDetails';

export function Dashboard() {
  const { user, logout } = useAuth();
  const { data: assets = [], isLoading, isError, isFetching, refetch } = useMarketData();
  const [selectedAssetId, setSelectedAssetId] = useState<string | null>(null);

  const selectedAsset = assets.find((a) => a.id === selectedAssetId);

  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      {/* Top Navbar */}
      <header className="border-b border-slate-800 bg-slate-900 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <h1 className="text-lg font-bold text-white">⚡ CryptoWatch</h1>
          <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> LIVE
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm text-slate-300">👤 {user?.name}</span>
          <button
            onClick={logout}
            className="text-xs bg-red-500 cursor-pointer hover:bg-slate-700 text-slate-300 border border-slate-700 px-3 py-1.5 rounded-lg"
          >
            LOG OUT
          </button>
        </div>
      </header>

      {/* Split Grid Content */}
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 max-w-7xl w-full mx-auto">
        <div className="lg:col-span-2">
          <MarketWatch
            assets={assets}
            isLoading={isLoading}
            isError={isError}
            isFetching={isFetching}
            refetch={refetch}
            selectedAssetId={selectedAssetId}
            onSelectAsset={setSelectedAssetId}
          />
        </div>
        <div className="lg:col-span-1">
          <AssetDetails asset={selectedAsset} />
        </div>
      </main>
    </div>
  );
}