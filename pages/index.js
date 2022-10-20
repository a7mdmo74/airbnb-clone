import Head from 'next/head';
import {
  Header,
  Banner,
  SmallCard,
  MediumCard,
  LargCard,
  Footer,
} from '../components';

export default function Home({ exploreData, cardsData }) {
  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData.map(({ img, location, distance }) => (
              <SmallCard
                key={img}
                img={img}
                location={location}
                distance={distance}
              />
            ))}
          </div>
        </section>
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Live AnyWhere</h2>
          <div className="flex overflow-scroll space-x-3 scrollbar-hide p-3 -ml-3">
            {cardsData.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>
        <LargCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          desc="Wishlists curated by Airbnb"
          buttonText="Get Inspired!"
        />
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G').then(
    (response) => response.json()
  );

  const cardsData = await fetch('https://www.jsonkeeper.com/b/VHHT').then(
    (response) => response.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}