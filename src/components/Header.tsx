import React, { useState } from 'react';
import HelpModal from './HelpModal';
import HelpButton from './buttons/HelpButton';

const Header: React.FC = () => {
  const [showHelp, setShowHelp] = useState(false);
  
  return (
    <div className="header">
      <h2>Custom Instructions Swap</h2>
      <HelpButton onClick={() => setShowHelp(true)} />
      {showHelp && <HelpModal onClose={() => setShowHelp(false)} />}
    </div>
  );
};

export default Header;