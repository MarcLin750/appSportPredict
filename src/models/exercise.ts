export default class Exercise {
    id: string;
    upload_time: string;
    polar_user: string;
    device: string;
    device_id: string;
    start_time: string;
    start_time_utc_offset: number;
    duration: string;
    distance?: number;
    heart_rate: { average: number; maximum: number };
    sport: string;
    has_route: boolean;
    detailed_sport_info: string;
    calories: number;
    fat_percentage: number;
    carbohydrate_percentage: number;
    protein_percentage: number;
    training_load_pro: {
        "cardio-load": number;
        "cardio-load-interpretation": string;
        "muscle-load": number;
        "muscle-load-interpretation": string;
        "perceived-load": number;
        "perceived-load-interpretation": string;
        "user-rpe": string;
    };

    constructor(
        id: string,
        upload_time: string,
        polar_user: string,
        device: string,
        device_id: string,
        start_time: string,
        start_time_utc_offset: number,
        duration: string,
        distance: number,
        heart_rate: { average: number; maximum: number },
        sport: string,
        has_route: boolean,
        detailed_sport_info: string,
        calories: number,
        fat_percentage: number,
        carbohydrate_percentage: number,
        protein_percentage: number,
        training_load_pro: {
            "cardio-load": number;
            "cardio-load-interpretation": string;
            "muscle-load": number;
            "muscle-load-interpretation": string;
            "perceived-load": number;
            "perceived-load-interpretation": string;
            "user-rpe": string;
        }
    ) {
        this.id = id;
        this.upload_time = upload_time;
        this.polar_user = polar_user;
        this.device = device;
        this.device_id = device_id;
        this.start_time = start_time;
        this.start_time_utc_offset = start_time_utc_offset;
        this.duration = duration;
        this.distance = distance;
        this.heart_rate = heart_rate;
        this.sport = sport;
        this.has_route = has_route;
        this.detailed_sport_info = detailed_sport_info;
        this.calories = calories;
        this.fat_percentage = fat_percentage;
        this.carbohydrate_percentage = carbohydrate_percentage;
        this.protein_percentage = protein_percentage;
        this.training_load_pro = training_load_pro;
    }
}
