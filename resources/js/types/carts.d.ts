export interface CartPayload {
    id: string;
    model: string;
    entry?: string;
    product_id?: string;
    quantity?: number;
    reset?: boolean;
}
