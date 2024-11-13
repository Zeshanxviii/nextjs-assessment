import './globals.css';
import HeroSection from '@/components/heroSection';
import Header from '@/components/header';
import { Urbanist } from 'next/font/google';
import LenisScroll from '@/utils/smothscroll';
import Component from '@/components/body';
import Testimonial from '@/components/testamonial';
import { cardData } from '../utils/data'
import Frequentlyasked from '@/components/footer';
import Influencers from '@/components/infulencer'
import Card from '@/components/card/card';

const urbanist = Urbanist({
  weight: '700',
  subsets: ['latin'],
  display: 'swap'
})

export default function Home() {
  return (
    <div className={`${urbanist.className}text-center xl:px-40`}>
      <main style={{background:"#181818"}} 
      className='flex justify-center h-full'>

      <LenisScroll/>
      <section className="mt-8 w-1200 ">
      <Header />
        <HeroSection />
        {/* <HeroOne />
        <HeroTwo /> */}
        <Component />
        <Testimonial/>
        <Influencers/>
        <Frequentlyasked/>
      </section>
      {/* Add more sections */}
      </main>
    </div>
  );
}