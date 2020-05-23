import React from 'react';
import c from 'classnames';

export enum Skew {
  right,
  left,
  none,
}

export default function Section({
  bg,
  children,
  hFull = true,
  skew = Skew.right,
}: React.PropsWithChildren<{ bg: string; hFull?: boolean; skew?: Skew }>) {
  const [trans, unTrans] =
    skew === Skew.none
      ? ['', '']
      : skew === Skew.left
      ? ['skewY(-2deg)', 'skewY(2deg)']
      : ['skewY(2deg)', 'skewY(-2deg)'];

  return (
    <div
      style={{ transform: trans }}
      className={c(
        'px-32',
        hFull ? 'py-16' : 'py-32',
        hFull ? 'min-h-screen-3/4' : 'h-auto',
        'w-full',
        bg,
        'flex flex-col justify-center',
      )}
    >
      <div style={{ transform: unTrans }} className="flex flex-row justify-around items-center">
        {children}
      </div>
    </div>
  );
}
