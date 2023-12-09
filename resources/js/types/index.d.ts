export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
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
    quantity: string;
    price: string;
    avatar: string;
    description: string;
}
