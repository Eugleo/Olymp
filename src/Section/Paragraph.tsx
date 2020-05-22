import React from 'react';
import c from 'classnames';

export default function Paragraph({
  children,
  color = 'text-gray-800',
}: React.PropsWithChildren<{ color?: string }>) {
  return (
    <p className={c('text-xl', 'font-light', 'tracking-wider', color, 'max-w-xl', 'mb-4')}>
      {children}
    </p>
  );
}
