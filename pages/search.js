import { useRouter } from 'next/router';
import React from 'react';
import { Footer, Header, InfoCard } from '../components';
import { format } from 'date-fns';
const Search = ({ searchResults }) => {
  const { query } = useRouter();
  const { location, startDate, endDate, numOfGuests } = query;
  const formatStartDate = format(new Date(startDate), 'dd MMMM yy');
  const formatEndDate = format(new Date(endDate), 'dd MMMM yy');
  const range = `${formatStartDate} - ${formatEndDate}`;
  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${numOfGuests} guests`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">300+ Stays for {numOfGuests} guests</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>
          <div className="flex flex-col">
            {searchResults.map((item) => (
              <InfoCard key={item.img} item={item} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch('https://www.jsonkeeper.com/b/5NPS').then(
    (response) => response.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
