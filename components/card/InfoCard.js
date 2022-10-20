import Image from 'next/image';
import { AiOutlineHeart, AiFillStar } from 'react-icons/ai';
const InfoCard = ({ item }) => {
  const { img, location, title, description, star, price, total, long, lat } =
    item;
  return (
    <div className="flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-in-out first:border-t">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          src={img}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <AiOutlineHeart className="text-2xl " />
          {/* HeartIcon */}
        </div>
        <h4 className="text-xl">{title}</h4>
        <hr className="border-b w-10 pt-2" />
        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <AiFillStar className="text-xl text-red-400" />
            {/* startIcon */}
            {star}
          </p>
          <div>
            <p className="text-lg lg:text-2xl font-semibold pb-2">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
