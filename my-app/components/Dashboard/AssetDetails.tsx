'use client';

import { CryptoAsset } from '../../types/market';

interface AssetDetailsProps {
  asset: CryptoAsset | undefined;
}

export function AssetDetails({ asset }: AssetDetailsProps) {
  if (!asset) {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 h-full flex flex-col items-center justify-center text-center text-slate-400">
        <div className="text-4xl mb-3">📊</div>
        <p className="text-sm">Select an asset from the watchlist to view real-time market data metrics.</p>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 mb-6">
          <img src={asset.image} alt={asset.name} className="w-10 h-10" />
          <div>
            <h2 className="text-xl font-bold text-white">{asset.name}</h2>
            <span className="text-xs uppercase text-slate-400">{asset.symbol}</span>
          </div>
        </div>

        <div className="mb-6">
          <div className="text-xs text-slate-400 mb-1">Current Price</div>
          <div className="text-3xl font-mono font-bold text-white">${asset.current_price.toLocaleString()}</div>
        </div>

        <div className="space-y-4 border-t border-slate-800 pt-4 text-sm">
          <div className="flex justify-between">
            <span className="text-slate-400">24h High</span>
            <span className="font-mono text-white">${asset.high_24h.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">24h Low</span>
            <span className="font-mono text-white">${asset.low_24h.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">24h Volume</span>
            <span className="font-mono text-white">${asset.total_volume.toLocaleString()}</span>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 pt-4 text-xs text-slate-400 text-right">
        Last Updated: {new Date(asset.last_updated).toLocaleTimeString()}
      </div>
    </div>
  );
}