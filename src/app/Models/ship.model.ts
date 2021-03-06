export interface Position {
    latitude?: number;
    longitude?: number;
}

export interface Mission {
    name: string;
    flight: number;
}

export interface Ship {
    ship_id: string;
    ship_name: string;
    ship_model: string;
    ship_type: string;
    roles: string[];
    active: boolean;
    imo?: number;
    mmsi?: number;
    abs?: number;
    class?: number;
    weight_lbs?: number;
    weight_kg?: number;
    year_built?: number;
    home_port: string;
    status: string;
    speed_kn?: number;
    course_deg?: number;
    position: Position;
    successful_landings?: number;
    attempted_landings?: number;
    missions: Mission[];
    url: string;
    image: string;
    attempted_catches?: number;
    successful_catches?: number;
}



