import { Collection } from "@/types";

export interface Ticket {
    id: string;
    quantity: number;
    model: string;
    name: string;
    price: string;
    description: string | null;
    tags: string[] | [];
    entries: string[] | [];
    collections: Collection[] | [];
}
