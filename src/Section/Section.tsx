import React from 'react';
import c from 'classnames';

export enum Skew {
  right,
  left,
  none,
}

export default function Section({
  bgColor,
  bgSrc,
  bgPosition: { x, y },
  children,
  hFull = true,
  skew = Skew.right,
}: React.PropsWithChildren<{
  bgColor: string;
  bgPosition: { x: string; y: string };
  bgSrc: string;
  hFull?: boolean;
  skew?: Skew;
}>) {
  const [trans, unTrans] =
    skew === Skew.none
      ? ['', '']
      : skew === Skew.left
      ? ['skewY(-2deg)', 'skewY(2deg)']
      : ['skewY(2deg)', 'skewY(-2deg)'];

  return (
    <div
      style={{
        transform: trans,
        backgroundImage: `url('${bgSrc}')`,
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: x,
        backgroundPositionY: y,
        backgroundSize: '200px 200px',
      }}
      className={c(
        'px-32',
        hFull ? 'py-16' : 'py-32',
        hFull ? 'min-h-screen-3/4' : 'h-auto',
        'w-full',
        bgColor,
        'flex flex-col justify-center',
      )}
    >
      <div style={{ transform: unTrans }} className="flex flex-row justify-around items-center">
        {children}
      </div>
    </div>
  );
}
