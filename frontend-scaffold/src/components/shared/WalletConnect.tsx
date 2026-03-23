import React from 'react';
import Button from '../ui/Button';

interface WalletConnectProps {
  onConnect?: (publicKey: string) => void;
  onDisconnect?: () => void;
  publicKey?: string | null;
}

const WalletConnect: React.FC<WalletConnectProps> = ({
  onConnect: _onConnect,
  onDisconnect,
  publicKey,
}) => {
  const truncateKey = (key: string) =>
    `${key.substring(0, 5)}...${key.substring(key.length - 5)}`;

  if (publicKey) {
    return (
      <div className="flex items-center gap-3">
        <span className="text-sm font-mono font-bold border-2 border-black px-3 py-1.5">
          {truncateKey(publicKey)}
        </span>
        <Button variant="outline" size="sm" onClick={onDisconnect}>
          Disconnect
        </Button>
      </div>
    );
  }

  return (
    <Button size="sm" onClick={() => {
      // TODO: Integrate with Stellar Wallets Kit
      // This will be implemented when wallet integration issues are picked up
    }}>
      Connect Wallet
    </Button>
  );
};

export default WalletConnect;
