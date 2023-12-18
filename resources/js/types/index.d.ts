import { CartItem } from "@/types/carts";

export interface User {
    id: number;
    name: string;
    email: string;
    country_id?: number;
    phone: string;
}

export interface Order {
    id: string;
    items: CartItem[];
    total_quantity: number;
    sub_total: number;
    price_sum: number;
    total: number;
    cart_sub_total_conditions: any;
    cart_total_conditions: any;
    event: any;
    team: any;
    user: User;
    qr_code: string;
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
