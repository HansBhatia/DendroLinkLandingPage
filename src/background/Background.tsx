import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type IBackgroundProps = {
  children: ReactNode;
  color: string;
};

const Background = (props: IBackgroundProps) => (
  <div className={twMerge(props.color)}>{props.children}</div>
);

export { Background };
