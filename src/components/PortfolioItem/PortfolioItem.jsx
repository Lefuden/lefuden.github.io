import React, { useState } from 'react'
import './PortfolioItem.css'
export default function PortfolioItem({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const openLink = (url) => {
    const newTab = window.open(url, '_blank', 'noopener,noreferrer');
    if (newTab) {
      newTab.opener = null;
    }
  }

  return (
    <div className="portfolio-item">
      <div className="portfolio-preview-item">
        <button className="portfolio-button" onClick={() => setIsOpen(!isOpen)}>{data.name}</button>
      </div>
      <div className={`portfolio-popup ${isOpen ? 'open' : ''}`}>
        <div className="portfolio-popup-inner">
          <h3>{data.name}</h3>
          <p>{data.description}</p>
          <button className="portfolio-button" onClick={() => openLink(data.svn_url)}>github</button>
          <button className="portfolio-button" onClick={() => setIsOpen(!isOpen)}>close</button>
        </div>
      </div>
    </div>
  )
}