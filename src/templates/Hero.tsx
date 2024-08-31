import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6 w-full">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            GitHub
          </Link>
        </li>
        <li>
          <Link href="/">Sign in</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section
      yPadding="pt-20 px-6 pb-24"
      className="md:gap flex max-h-[700px] min-w-full flex-col items-center 2xl:flex-row 2xl:items-start 2xl:justify-around"
    >
      <HeroOneButton
        title={
          <>
            {'Connecting Students\n'}
            <span className="text-primary-500">One Event at a Time</span>
          </>
        }
        description="Join a community where meaningful connections begin with shared experiences."
        button={
          <Link href="/">
            <Button xl>Join Your University Community Now</Button>
          </Link>
        }
      />
      <div className="h-full max-w-[40%] flex-1 overflow-hidden rounded">
        <img
          src="/assets/images/hero-image.jpg"
          alt="Sentry"
          className="box-border size-full rounded object-cover max-2xl:hidden"
        />
      </div>
    </Section>
  </Background>
);

export { Hero };
