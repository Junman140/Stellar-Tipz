import React from 'react';
import Badge, { getTierFromScore } from '../ui/Badge';

interface CreditBadgeProps {
  score: number;
  showScore?: boolean;
  className?: string;
}

const CreditBadge: React.FC<CreditBadgeProps> = ({
  score,
  showScore = true,
  className,
}) => {
  const tier = getTierFromScore(score);
  return <Badge tier={tier} score={showScore ? score : undefined} className={className} />;
};

export default CreditBadge;
