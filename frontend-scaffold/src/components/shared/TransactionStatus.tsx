import React from 'react';
import Loader from '../ui/Loader';

interface TransactionStatusProps {
  status: 'idle' | 'signing' | 'submitting' | 'confirming' | 'success' | 'error';
  txHash?: string;
  errorMessage?: string;
}

const statusMessages: Record<string, string> = {
  idle: '',
  signing: 'Waiting for wallet signature...',
  submitting: 'Submitting transaction...',
  confirming: 'Confirming on network...',
  success: 'Transaction confirmed!',
  error: 'Transaction failed',
};

const TransactionStatus: React.FC<TransactionStatusProps> = ({
  status,
  txHash,
  errorMessage,
}) => {
  if (status === 'idle') return null;

  const isLoading = ['signing', 'submitting', 'confirming'].includes(status);

  return (
    <div className="border-2 border-black p-4 text-center">
      {isLoading && <Loader text={statusMessages[status]} />}

      {status === 'success' && (
        <div>
          <p className="text-lg font-black text-green-800 mb-2">
            {statusMessages.success}
          </p>
          {txHash && (
            <a
              href={`https://stellar.expert/explorer/testnet/tx/${txHash}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline font-bold"
            >
              View on Stellar Expert →
            </a>
          )}
        </div>
      )}

      {status === 'error' && (
        <p className="text-lg font-black text-red-800">
          {errorMessage || statusMessages.error}
        </p>
      )}
    </div>
  );
};

export default TransactionStatus;
