import Card from './card/card';
import { cardData } from '../utils/data';
import Image from 'next/image';

const Influencers = () => {
  return (
    <div className="px-4 md:px-8">
      {/* Title Section */}
      <h2 className="text-center text-green-400 text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 pb-6">
        Our Influencers
      </h2>

      {/* Influencer Images Section */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-12">
        {/* Influencer 1 */}
        <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden bg-gray-800">
          <Image
            src="/influencer1.png"
            alt="Influencer 1"
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
        {/* Influencer 2 */}
        <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden bg-gray-800">
          <Image
            src="/influencer2.png"
            alt="Influencer 2"
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
        {/* Influencer 3 */}
        <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden bg-gray-800">
          <Image
            src="/influencer3.png"
            alt="Influencer 3"
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
        {/* Influencer 4 */}
        <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden bg-gray-800">
          <Image
            src="/influencer1.png"
            alt="Influencer 4"
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Card Section */}
      <div className="mt-12">
        <Card projects={cardData} />
      </div>
    </div>
  );
};

export default Influencers;