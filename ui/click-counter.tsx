'use client';

import React from 'react';
import { MouseEvent } from 'react';

export function ClickCounter() {
  const [count, setCount] = React.useState(0);
  const handleClick = (event: MouseEvent) => {
    setCount(count + 1);
    console.log('clicked', event);
  };
  return (
    <button
      onClick={handleClick}
      className="whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100 hover:bg-gray-500 hover:text-white"
    >
      {count} Clicks
    </button>
  );
}
