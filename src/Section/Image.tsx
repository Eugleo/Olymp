import React from 'react';

export default function Image({ source }: React.PropsWithChildren<{ source: string }>) {
  return (
    <div className="shadow-lg flex-shrink rounded-md">
      <img src={source} />
    </div>
  );
}
