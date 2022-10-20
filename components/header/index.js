import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';
import {
  AiOutlineSearch,
  AiOutlineGlobal,
  AiOutlineMenu,
  AiOutlineUser,
} from 'react-icons/ai';
import { HiUsers } from 'react-icons/hi';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

const Header = ({ placeholder }) => {
  const [searchInput, setSearchInput] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numOfGuests, setNumOfGuests] = useState(1);

  const router = useRouter();

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numOfGuests,
      },
    });
  };

  const resetInput = () => {
    setSearchInput('');
  };

  const selectionRange = {
    startDate,
    endDate,
    key: 'selection',
  };
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div
        className="relative flex items-center h-10 cursor-pointer my-auto"
        onClick={() => router.push('/')}
      >
        <Image
          src="/logo.webp"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt="logo"
        />
      </div>
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          value={searchInput}
          type="text"
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder:text-gray-400"
          placeholder={placeholder || 'Start your search'}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <AiOutlineSearch className="hidden md:inline-flex text-3xl bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <AiOutlineGlobal className="text-xl cursor-pointer" />
        <div className="flex items-center space-x-4 border-2 py-2 px-4 rounded-full">
          <AiOutlineMenu className="text-xl cursor-pointer" title="menu" />
          <AiOutlineUser className="text-xl cursor-pointer" title="profile" />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#FD5561']}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <HiUsers className="text-xl" />
            <input
              type="number"
              value={numOfGuests}
              onChange={(e) => setNumOfGuests(e.target.value)}
              min={1}
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>
          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-500">
              Cancel
            </button>
            <button onClick={search} className="flex-grow text-red-400">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
