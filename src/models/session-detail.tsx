export default class SESSIONDETAIL {
    SESSIONID: string;
    SESSION_YEAR: number;
    SESSION_MONTH: number;
    SESSION_DAY: string;
    USERID: string;
    SEX: string;
    BIRTHDAY: string;
    HEIGHT: number;
    WEIGHT: number;
    VO2MAX: number;
    AEROBICTHRESHOLD: number;
    ANAEROBICTHRESHOLD: number;
    SPORT: string;
    STARTTIME: string;
    STARTTIMEEXO: string;
    STOPTIME: string;
    STOPTIMEEXO: string;
    DURATION_CALCULATED: number;
    DURATION2: number;
    LATITUDE: number;
    LONGITUDE: number;
    DISTANCE: number;
    ASCENT: number;
    DESCENT: number;
    MAXIMUMHEARTRATE: number;
    AVERAGEHEARTRATE: number;
    KILOCALORIES: number;
    AVGSPEED: number;
    MAXSPEED: number;
    AVGCADENCE: number;
    MAXCADENCE: number;
    TIMEINZONE1: number;
    TIMEINZONE2: number;
    TIMEINZONE3: number;
    TIMEINZONE4: number;
    TIMEINZONE5: number;
    CARDIOLOAD: number;
    MUSCLELOAD: number;
    CARDIOLOADINTERPRETATION: string;
    MUSCLELOADINTERPRETATION: string;
    PERCEIVEDLOAD: number;
    PERCEIVEDLOADINTERPRETATION: string;
    RUNNINGVERIFIED: boolean;
    CATEGORYSESSION: number;

    constructor(
        SESSIONID: string,
        SESSION_YEAR: number,
        SESSION_MONTH: number,
        SESSION_DAY: string,
        USERID: string,
        SEX: string,
        BIRTHDAY: string,
        HEIGHT: number,
        WEIGHT: number,
        VO2MAX: number,
        AEROBICTHRESHOLD: number,
        ANAEROBICTHRESHOLD: number,
        SPORT: string,
        STARTTIME: string,
        STARTTIMEEXO: string,
        STOPTIME: string,
        STOPTIMEEXO: string,
        DURATION_CALCULATED: number,
        DURATION2: number,
        LATITUDE: number,
        LONGITUDE: number,
        DISTANCE: number,
        ASCENT: number,
        DESCENT: number,
        MAXIMUMHEARTRATE: number,
        AVERAGEHEARTRATE: number,
        KILOCALORIES: number,
        AVGSPEED: number,
        MAXSPEED: number,
        AVGCADENCE: number,
        MAXCADENCE: number,
        TIMEINZONE1: number,
        TIMEINZONE2: number,
        TIMEINZONE3: number,
        TIMEINZONE4: number,
        TIMEINZONE5: number,
        CARDIOLOAD: number,
        MUSCLELOAD: number,
        CARDIOLOADINTERPRETATION: string,
        MUSCLELOADINTERPRETATION: string,
        PERCEIVEDLOAD: number,
        PERCEIVEDLOADINTERPRETATION: string,
        RUNNINGVERIFIED: boolean,
        CATEGORYSESSION: number,
        ) {
            this.SESSIONID = SESSIONID;
            this.SESSION_YEAR = SESSION_YEAR;
            this.SESSION_MONTH = SESSION_MONTH;
            this.SESSION_DAY = SESSION_DAY;
            this.USERID = USERID;
            this.SEX = SEX;
            this.BIRTHDAY = BIRTHDAY;
            this.HEIGHT = HEIGHT;
            this.WEIGHT = WEIGHT;
            this.VO2MAX = VO2MAX;
            this.AEROBICTHRESHOLD = AEROBICTHRESHOLD;
            this.ANAEROBICTHRESHOLD = ANAEROBICTHRESHOLD;
            this.SPORT = SPORT;
            this.STARTTIME = STARTTIME;
            this.STARTTIMEEXO = STARTTIMEEXO;
            this.STOPTIME = STOPTIME;
            this.STOPTIMEEXO = STOPTIMEEXO;
            this.DURATION_CALCULATED = DURATION_CALCULATED;
            this.DURATION2 = DURATION2;
            this.LATITUDE = LATITUDE;
            this.LONGITUDE = LONGITUDE;
            this.DISTANCE = DISTANCE;
            this.ASCENT = ASCENT;
            this.DESCENT = DESCENT;
            this.MAXIMUMHEARTRATE = MAXIMUMHEARTRATE;
            this.AVERAGEHEARTRATE = AVERAGEHEARTRATE;
            this.KILOCALORIES = KILOCALORIES;
            this.AVGSPEED = AVGSPEED;
            this.MAXSPEED = MAXSPEED;
            this.AVGCADENCE = AVGCADENCE;
            this.MAXCADENCE = MAXCADENCE;
            this.TIMEINZONE1 = TIMEINZONE1;
            this.TIMEINZONE2 = TIMEINZONE2;
            this.TIMEINZONE3 = TIMEINZONE3;
            this.TIMEINZONE4 = TIMEINZONE4;
            this.TIMEINZONE5 = TIMEINZONE5;
            this.CARDIOLOAD = CARDIOLOAD;
            this.MUSCLELOAD = MUSCLELOAD;
            this.CARDIOLOADINTERPRETATION = CARDIOLOADINTERPRETATION;
            this.MUSCLELOADINTERPRETATION = MUSCLELOADINTERPRETATION;
            this.PERCEIVEDLOAD = PERCEIVEDLOAD;
            this.PERCEIVEDLOADINTERPRETATION = PERCEIVEDLOADINTERPRETATION;
            this.RUNNINGVERIFIED = RUNNINGVERIFIED;
            this.CATEGORYSESSION = CATEGORYSESSION;
        }
}


