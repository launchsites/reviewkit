interface review {
    id: number;
    author: string;
    text: string;
    rating: number;
    pfp?: string;
}

interface reviewList {
    id: number;
    reviews: review[];
}