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
    reservation_options: any;
    collections: Collection[] | [];
}

export interface Event {
    id: string;
    name: string;
    description: string | null;
    tags: string[] | [];
    collections: Collection[] | [];
}
