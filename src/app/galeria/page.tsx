'use client'
import { Header, Footer, ImageCard } from '@/components'
import { useState, useEffect } from 'react'
import { useStarshipService } from '@/resources/starship/starship.service'
import { Starship } from '@/resources/starship/starship.resource';

export default function GaleriaPage() {
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
    <div className="container mx-auto mt-8 px-4">
      <Header />
      <section className="flex flex-col items-center justify-center my-20">
        <div className="flex space-x-4">
          <h1 className='bg-white text-black'>Starships</h1>
          {/* <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-blue-300">Add new</button> */}
        </div>
      </section>
      <section className="grid grid-cols-4 gap-8">
        { renderStarshipCards() }
      </section>
    </div>
    <Footer />
    </>
  );
}
