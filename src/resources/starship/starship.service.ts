import { Starship } from './starship.resource'

class StarshipService {
    baseUrl: string = 'http://localhost:8080/starships';

    async search(): Promise<Starship[]> {
        const response = await fetch(this.baseUrl);
        return await response.json();
    }
}

export const useStarshipService = () => new StarshipService();