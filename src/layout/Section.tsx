import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  className?: string;
  children: ReactNode;
};

const Section = (props: ISectionProps) => (
  <div
    className={twMerge(
      `mx-auto max-w-screen-lg px-3 ${props.yPadding ? props.yPadding : 'py-16'}`,
      props.className,
    )}
  >
    {(props.title || props.description) && (
      <div className="mb-12 text-center">
        {props.title && (
          <h2 className="text-4xl font-bold text-gray-900">{props.title}</h2>
        )}
        {props.description && (
          <div className="mt-4 text-xl md:px-20">{props.description}</div>
        )}
      </div>
    )}

    {props.children}
  </div>
);

export { Section };
