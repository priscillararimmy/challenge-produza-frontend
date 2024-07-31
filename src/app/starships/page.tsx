'use client'
import { Header, Footer, ImageCard } from '@/components'
import { useState, useEffect } from 'react'
import { useStarshipService } from '@/resources/starship/starship.service'
import { Starship } from '@/resources/starship/starship.resource';

export default function StarshipPage() {
  const useService = useStarshipService();
  const [starships, setStarships] = useState<Starship[]>([]);

  useEffect(() => {
    async function fetchStarships() {
      const result = await useService.search();
      setStarships(result);
      console.log(result);
      console.table(result);
    }
    fetchStarships();
  }, []); 

  function renderStarshipCard(starship: Starship) {
    return (
      <ImageCard 
        name={starship.name} 
        imageUrl={starship.imageUrl} 
        description={starship.description} 
      />
    );
  }

  function renderStarshipCards() {
    return starships.map(renderStarshipCard);
  }

  return (
    <>
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <Header />
      <section className="flex flex-col items-center justify-center flex-grow">
          <h1 className="text-center text-2xl font-bold my-20">Starships</h1>
      </section>
      <section className="grid grid-cols-4 gap-8">
        { renderStarshipCards() }
      </section>
    </div>
      <Footer />
    </>
  );
}
