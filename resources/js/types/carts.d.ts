export interface CartPayload {
    id?: string;
    model?: string;
    entry?: string;
    message?: string;
    product_id?: string;
    quantity?: number;
    reset?: boolean;
}

export interface CartAttributes {
    entry?: string;
    message?: string;
    products?: CartProduct[];
    type: string;
    item: Item;
}

export interface CartProduct {
    id: string;
    name: string;
    description: string;
    model: string;
    quantity?: number;
    price: string;
    avatar_url: string;
    description?: string;
}

export interface Item {
    id: string;
    name: string;
    avatar_url: string;
    model: string;
    attendees: number;
}

export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    price_sum: number;
    price_with_conditions: any;
    price_sum_with_conditions: any;
    attributes: CartAttributes;
}

export interface Cart {
    id: string;
    items: CartItem[];
    total_quantity: number;
    sub_total: number;
    price_sum: number;
    total: number;
    cart_sub_total_conditions: any;
    cart_total_conditions: any;
}

export interface Paiement {
    id: string;
    title: string;
    image: string[];
}

export interface Brand {
    id: string;
    name: string;
    title: string;
    url: string;
    action: string;
    avatar_url: string;
    type: string;
    description: string;
    facebook: string;
    twitter: string;
    tiktok: string;
    site: string;
    position: string;
}

export const enum Mode {
    CARD = "card",
    KLARNA = "klarna",
    SOFORT = "sofort",
    PAYPAL = "paypal",
}
