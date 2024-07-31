import { Pilot } from './pilot.resource'

class PilotService {
    baseUrl: string = process.env.NEXT_PUBLIC_API_URL + '/pilots';

    async search(): Promise<Pilot[]> {
        const response = await fetch(this.baseUrl);
        return await response.json();
    }
}

export const usePilotService= () => new PilotService();