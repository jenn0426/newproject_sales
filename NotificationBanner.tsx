
import React from 'react';
import { CalendarEvent } from '../types';

const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

interface NotificationBannerProps {
    events: CalendarEvent[];
    onDismiss: () => void;
}

const NotificationBanner: React.FC<NotificationBannerProps> = ({ events, onDismiss }) => {
    return (
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg shadow-md mb-6" role="alert">
            <div className="flex">
                <div className="py-1">
                    <CalendarIcon />
                </div>
                <div className="ml-3 flex-grow">
                    <p className="font-bold text-blue-800">오늘의 일정 ({events.length}건)</p>
                    <ul className="mt-2 list-disc list-inside text-sm text-blue-700 space-y-1">
                        {events.map(event => (
                            <li key={event.id}>{event.title}</li>
                        ))}
                    </ul>
                </div>
                <div className="ml-auto pl-3">
                    <div className="-mx-1.5 -my-1.5">
                        <button
                            type="button"
                            onClick={onDismiss}
                            className="inline-flex bg-blue-50 rounded-md p-1.5 text-blue-500 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-50 focus:ring-blue-600"
                            aria-label="Dismiss"
                        >
                            <span className="sr-only">Dismiss</span>
                            <CloseIcon />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotificationBanner;