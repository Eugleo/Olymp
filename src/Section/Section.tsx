import React from 'react';
import c from 'classnames';

export enum Skew {
  right,
  left,
  none,
}

export function Spacer() {
  return <div className="mx-12 my-5" />;
}

export default function Section({
  bgColor,
  bgSrc,
  bgPosition: { x, y },
  children,
  hFull = true,
  skew = Skew.right,
  reverse = false,
}: React.PropsWithChildren<{
  bgColor: string;
  bgPosition: { x: string; y: string };
  bgSrc: string;
  hFull?: boolean;
  skew?: Skew;
  reverse?: boolean;
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
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: x,
        backgroundPositionY: y,
        backgroundSize: '200px 200px',
      }}
      data-bg={bgSrc}
      className={c(
        'lazyload',
        bgSrc !== '' ? 'pt-16 pb-40' : 'pt-16 pb-16',
        'px-8 md:px-16 xl:px-32',
        hFull ? 'lg:py-16' : 'lg:py-32',
        hFull ? 'min-h-screen-3/4' : 'h-auto',
        'w-full',
        bgColor,
        'flex flex-col justify-center',
      )}
    >
      <div
        style={{ transform: unTrans }}
        className={c(
          'flex lg:flex-row justify-around items-center max-w-6xl mx-auto',
          reverse ? 'reverse' : 'flex-col',
        )}
      >
        {children}
      </div>
    </div>
  );
}
