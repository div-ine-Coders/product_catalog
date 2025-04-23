import React from 'react';
import './IconWithCounter.scss';

type Props = {
  icon: string;
  count: number;
  alt?: string;
};

const IconWithCounter: React.FC<Props> = ({ icon, count, alt }) => {
  return (
    <div className="icon-wrapper">
      <img src={icon} alt={alt} className="icon-image" />

      {count > 0 && <div className="icon-badge">{count}</div>}
    </div>
  );
};

export default IconWithCounter;
