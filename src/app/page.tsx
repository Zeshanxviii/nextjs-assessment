import './globals.css';
import HeroSection from '@/components/heroSection';
import Header from '@/components/header';
import { Urbanist } from 'next/font/google';
import LenisScroll from '@/utils/smothscroll';
import Component from '@/components/body';
import Testimonial from '@/components/testamonial';
import Frequentlyasked from '@/components/footer';
import Influencers from '@/components/infulencer'
import '@fontsource/urbanist/300.css'; 
import '@fontsource/urbanist/400.css'; 
import '@fontsource/urbanist/600.css'; 

const urbanist = Urbanist({
  weight: '700',
  subsets: ['latin'],
  display: 'swap'
})

export default function Home() {
  return (
    <div className={`${urbanist.className}text-center `}>
      <main  
      className='flex justify-center h-full'>

      <section style={{background:"#181818"}} className="pt-8 sm:w-[324px] md:w-1200 ">
      <LenisScroll/>
      <Header />
        <HeroSection />
        <Component />
        <Testimonial/>
        <Influencers/>
        <Frequentlyasked/>
      </section>
      </main>
    </div>
  );
}