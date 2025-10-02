
import React from 'react';

// FIX: Replaced JSX with React.createElement to be compatible with .ts file extension.
export const DragHandleIcon = () => (
    React.createElement('svg', {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: "h-5 w-5 text-gray-400"
    },
    React.createElement('circle', { cx: "9", cy: "4", r: "1.5" }),
    React.createElement('circle', { cx: "15", cy: "4", r: "1.5" }),
    React.createElement('circle', { cx: "9", cy: "12", r: "1.5" }),
    React.createElement('circle', { cx: "15", cy: "12", r: "1.5" }),
    React.createElement('circle', { cx: "9", cy: "20", r: "1.5" }),
    React.createElement('circle', { cx: "15", cy: "20", r: "1.5" })
    )
);