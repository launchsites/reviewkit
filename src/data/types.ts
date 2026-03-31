export interface review {
    id: number;
    author: string;
    text: string;
    rating: number;
    pfp?: string;
}

export interface reviewList {
    id: number;
    reviews: review[];
}