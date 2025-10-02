import React from 'react';

const LogoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
);

const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);


interface HeaderProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
    navTabs: string[];
    onLogoClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, navTabs, onLogoClick }) => {
    const today = new Date();
    const formattedDate = new Intl.DateTimeFormat('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
    }).format(today);

    return (
        <header className="bg-white shadow-sm sticky top-0 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <button onClick={onLogoClick} className="flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-md p-1 -ml-1">
                        <LogoIcon />
                        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Salelytics</h1>
                    </button>
                    <div className="hidden sm:block">
                        <nav className="flex space-x-4">
                            {navTabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                        activeTab === tab
                                            ? 'bg-indigo-100 text-indigo-700'
                                            : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                                    }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </nav>
                    </div>
                    <div className="flex items-center space-x-4">
                         <div className="text-right hidden md:block">
                            <p className="text-sm font-medium text-gray-800">나대표</p>
                            <p className="text-xs text-gray-500">{formattedDate}</p>
                        </div>
                        <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                           <UserIcon />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;