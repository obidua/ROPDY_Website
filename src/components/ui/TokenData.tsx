import React from 'react';
import { ExternalLink, Copy } from 'lucide-react';
import Card from './Card';

interface TokenDataProps {
  contractAddress: string;
  tokenName: string;
  tokenSymbol: string;
  totalSupply: string;
  decimals: number;
}

const TokenData: React.FC<TokenDataProps> = ({
  contractAddress,
  tokenName,
  tokenSymbol,
  totalSupply,
  decimals
}) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const truncateAddress = (address: string) => {
    return `${address.substring(0, 8)}...${address.substring(address.length - 8)}`;
  };

  return (
    <Card className="p-6">
      <h3 className="text-xl font-bold mb-4 text-white">Token Information</h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="text-green-400 text-sm font-medium mb-1">Contract Address</h4>
          <div className="flex items-center space-x-2">
            <code className="bg-slate-900 px-3 py-1 rounded text-gray-300 text-sm flex-grow">
              {truncateAddress(contractAddress)}
            </code>
            <button 
              onClick={() => copyToClipboard(contractAddress)}
              className="p-1.5 rounded-md hover:bg-slate-700 transition-colors"
              title="Copy to clipboard"
            >
              <Copy size={16} className="text-gray-400" />
            </button>
            <a 
              href={`https://www.ramascan.com/address/${contractAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md hover:bg-slate-700 transition-colors"
              title="View on Ramascan"
            >
              <ExternalLink size={16} className="text-gray-400" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-green-400 text-sm font-medium mb-1">Token Name</h4>
            <p className="text-white">{tokenName}</p>
          </div>
          
          <div>
            <h4 className="text-green-400 text-sm font-medium mb-1">Token Symbol</h4>
            <p className="text-white">{tokenSymbol}</p>
          </div>
          
          <div>
            <h4 className="text-green-400 text-sm font-medium mb-1">Total Supply</h4>
            <p className="text-white">{totalSupply}</p>
          </div>
          
          <div>
            <h4 className="text-green-400 text-sm font-medium mb-1">Decimals</h4>
            <p className="text-white">{decimals}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TokenData;