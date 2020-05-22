import React from 'react';
import c from 'classnames';

export default function Title({ text, color = 'text-gray-900' }: { text: string; color?: string }) {
  return <h2 className={c('text-4xl', 'font-bold', 'mb-4', color)}>{text}</h2>;
}
