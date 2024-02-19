export default class ListOfSessions {
    session_id: string;
    sport: string;
    duration2: number;
    distance: number;

    constructor(
        session_id: string,
        sport: string,
        duration2: number,
        distance: number
    ) {
        this.session_id = session_id;
        this.sport = sport;
        this.duration2 = duration2;
        this.distance = distance;
    }
}