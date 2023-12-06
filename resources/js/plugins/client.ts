import { $api } from "@/utils/api";
import { ApiServiceContainer } from "@/services/ApiServiceContainer";
import ApplicationService from "@/services/ApplicationService";
import AuthenticationService from "@/services/AuthenticationService";
import EventsService from "@/services/EventsService";
import TicketsService from "@/services/TicketsService";
import CartsService from "@/services/CartsService";

export const container = () => {
    const client: any = $api;

    const api: ApiServiceContainer = {
        application: new ApplicationService(client),
        authentication: new AuthenticationService(client),
        events: new EventsService(client),
        tickets: new TicketsService(client),
        carts: new CartsService(client),
    };

    return api as ApiServiceContainer;
};
