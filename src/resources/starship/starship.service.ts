import { Starship } from './starship.resource'

class StarshipService {
    baseUrl: string = process.env.NEXT_PUBLIC_API_URL + '/starships';

    async search(): Promise<Starship[]> {
        const response = await fetch(this.baseUrl);
        return await response.json();
    }
}

export const useStarshipService = () => new StarshipService();