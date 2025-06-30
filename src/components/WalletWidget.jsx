import React from 'react';

function WalletWidget() {
  return (
    <div className="wallet-widget">
      <div className="wallet-header">
        <div className="wallet-left">
          <div className="wallet-title">Connect Wallet</div>
          <div className="wallet-subtitle">Securely connect to your wallet</div>
        </div>
        <i className="fas fa-times wallet-close"></i>
      </div>
      <div className="wallet-body">
        <div className="connect-indicator">
          <i className="fas fa-wallet flow-icon"></i>
          <span>Trust Wallet</span>
        </div>
        <button className="wallet-button">
          <span className="button-text">Connect Now</span>
        </button>
      </div>
    </div>
  );
}

export default WalletWidget;