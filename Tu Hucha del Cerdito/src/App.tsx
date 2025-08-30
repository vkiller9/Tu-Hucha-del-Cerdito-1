import React, { useState, useCallback } from 'react';
import { Page, Tip } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import Tips from './components/Tips';
import Simulator from './components/Simulator';
import Account from './components/Account';
import Footer from './components/Footer';
import Quiz from './components/Quiz';
import TipDetail from './components/TipDetail';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [viewingTip, setViewingTip] = useState<Tip | null>(null);

  const navigateTo = useCallback((page: Page) => {
    setCurrentPage(page);
    setViewingTip(null); // Close any open tip when navigating
    window.scrollTo(0, 0);
  }, []);

  const handleSelectTip = (tip: Tip) => {
    setViewingTip(tip);
    window.scrollTo(0, 0);
  };
  
  const handleCloseTip = () => {
    setViewingTip(null);
  };

  const renderContent = () => {
    if (viewingTip) {
      return <TipDetail tip={viewingTip} onClose={handleCloseTip} />;
    }

    switch (currentPage) {
      case Page.Home:
        return <Hero onNavigate={navigateTo} />;
      case Page.Tips:
        return <Tips onSelectTip={handleSelectTip} />;
      case Page.Simulator:
        return <Simulator />;
      case Page.Quiz:
        return <Quiz />;
      case Page.Account:
        return <Account />;
      default:
        return <Hero onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F8F6] text-slate-800">
      <Header currentPage={currentPage} onNavigate={navigateTo} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;