import Image from 'next/image';
import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <></>
        {/* <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            GitHub
          </Link>
        </li>
        <li>
          <Link href="/">Sign in</Link>
        </li> */}
      </NavbarTwoColumns>
    </Section>

    <Section
      yPadding="pt-20 pb-32 px-6"
      className="flex min-w-full flex-col items-center justify-around gap-2 md:flex-row"
    >
      <HeroOneButton
        title={
          <>
            {'Connecting Students,\n'}
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
      <Image
        src="/assets/images/hero-image.jpg"
        alt="Sentry"
        width={800}
        height={800}
        className="rounded max-md:hidden"
      />
    </Section>
  </Background>
);

export { Hero };
