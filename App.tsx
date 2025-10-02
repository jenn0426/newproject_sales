import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import DataInput from './pages/DataInput';
import CustomerDB from './pages/CustomerDB';
import AIAssistant from './pages/AIAssistant';
import Dashboard from './pages/Dashboard';
import { DASHBOARD, DATA_INPUT, CUSTOMER_DB, NAV_TABS, AI_ASSISTANT } from './constants';
import { DashboardWidget, Lead } from './types';
import { getLeads } from './services/firestoreService';
import Spinner from './components/Spinner';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(DASHBOARD);
  const [pinnedWidgets, setPinnedWidgets] = useState<{ [key in 'my' | 'team']: DashboardWidget[] }>({ my: [], team: [] });
  const [allLeads, setAllLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const loadLeads = async () => {
    setIsLoading(true);
    const leadsData = await getLeads();
    setAllLeads(leadsData);
    setIsLoading(false);
  };

  useEffect(() => {
    loadLeads();
  }, []);

  const navigateHome = () => setActiveTab(DASHBOARD);

  const renderContent = () => {
    // Only show full-screen spinner on initial load when there's no data yet.
    // Subsequent refreshes are handled within child components.
    if (isLoading && allLeads.length === 0) {
      return <div className="flex justify-center items-center h-96"><Spinner size="lg" /></div>;
    }

    switch (activeTab) {
      case DASHBOARD:
        return <Dashboard allLeads={allLeads} />;
      case AI_ASSISTANT:
        return <AIAssistant allLeads={allLeads} setPinnedWidgets={setPinnedWidgets} pinnedWidgets={pinnedWidgets} />;
      case CUSTOMER_DB:
        return <CustomerDB />;
      case DATA_INPUT:
        return <DataInput allLeads={allLeads} onDataUpdate={loadLeads} />;
      default:
        return <Dashboard allLeads={allLeads} />;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        navTabs={NAV_TABS} 
        onLogoClick={navigateHome} 
      />
      <main className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;