export interface User {
    id: number;
    name: string;
    email: string;
    country_id: number;
    phone: string;
}

export interface Country {
    id: number;
    name: string;
    emoji: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
};

export interface Collection {
    id: string;
    name: string;
    avatar: string;
    description: string;
    products: Product[] | [];
}

export interface Product {
    id: string;
    name: string;
    model: string;
    quantity: string;
    price: string;
    avatar: string;
    description: string;
}
