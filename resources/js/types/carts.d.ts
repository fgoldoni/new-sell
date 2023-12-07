export interface CartPayload {
    id?: string;
    model?: string;
    entry?: string;
    product_id?: string;
    quantity?: number;
    reset?: boolean;
}

export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    price_sum: number;
    price_with_conditions: any;
    price_sum_with_conditions: any;
    attributes: any;
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
