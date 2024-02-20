export default class ListOfSessions {
    SESSIONID: string;
    SPORT: string;
    DURATION2: number;
    DISTANCE: number;

    constructor(
        SESSIONID: string,
        SPORT: string,
        DURATION2: number,
        DISTANCE: number
    ) {
        this.SESSIONID = SESSIONID;
        this.SPORT = SPORT;
        this.DURATION2 = DURATION2;
        this.DISTANCE = DISTANCE;
    }
}