import React from 'react';
import c from 'classnames';

export default function Section({ bg, children }: React.PropsWithChildren<{ bg: string }>) {
  return (
    <div
      className={c(
        'px-32 py-16',
        'min-h-screen',
        bg,
        'flex flex-row justify-around content-center items-center w-full',
      )}
    >
      {children}
    </div>
  );
}
