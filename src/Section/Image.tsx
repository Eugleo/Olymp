import React from 'react';

export default function Image({
  source,
  alt,
}: React.PropsWithChildren<{ source: string; alt: string }>) {
  return (
    <div className="shadow-lg max-w-4xl rounded-md mb-12 lg:mb-0">
      <img src={source} alt={alt} />
    </div>
  );
}
