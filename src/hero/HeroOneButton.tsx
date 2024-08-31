import type { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="flex flex-col items-center 2xl:items-start">
    <h1 className="whitespace-pre-line text-5xl font-bold leading-hero text-gray-900">
      {props.title}
    </h1>
    <div className="mb-12 mt-4 text-2xl">{props.description}</div>

    {props.button}
    <div className="h-10"></div>
    <div className="text-2xl text-blue-600">
      <div>{'✓'} Find your community</div>
      <div>{'✓'} Build Lasting Friendships</div>
      <div>{'✓'} Create Unforgettable Memories</div>
    </div>
  </header>
);

export { HeroOneButton };
