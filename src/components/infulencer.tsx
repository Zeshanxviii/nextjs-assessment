// components/Influencers.js
import Card from './card/card'
import { cardData } from '../utils/data'
import Image from 'next/image';

const Influencers = () => {
  return (
    <div className="">
      <h2 className="text-center text-green-400 md:text-3xl font-semibold mb-6 pb-6">Our Influencers</h2>
      <div className="flex flex-wrap justify-center gap-12">
        {/* Influencer 1 */}
        <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden bg-gray-800">
          <Image
            src="/influencer1.png" 
            alt="Influencer 1"
            width={200}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
        {/* Influencer 2 */}
        <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden bg-gray-800">
          <Image
            src="/influencer2.png" // Replace with actual image path
            alt="Influencer 2"
            width={200}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
        {/* Influencer 3 */}
        <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden bg-gray-800">
          <Image
            src="/influencer3.png" // Replace with actual image path
            alt="Influencer 3"
            width={200}
            height={200}
            className="object-cover w-full h-full"
          />
          <div>

          </div>
        </div>
        {/* Influencer 4 */}
        <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden bg-gray-800">
          <Image
            src="/influencer1.png" // Replace with actual image path
            alt="Influencer 4"
            width={200}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className='inset-0'>
      <Card projects={cardData}/>
      </div>
    </div>
  );
};

export default Influencers;
