export interface Ticket {
    id: string;
    quantity: number;
    model: string;
    name: string;
    price: string;
    description?: string;
    tags?: string[];
}
