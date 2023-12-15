import { $api } from "@/utils/api";
import { ApiServiceContainer } from "@/services/ApiServiceContainer";
import ApplicationService from "@/services/ApplicationService";
import AuthenticationService from "@/services/AuthenticationService";
import EventsService from "@/services/EventsService";
import TicketsService from "@/services/TicketsService";
import CartsService from "@/services/CartsService";
import CountriesService from "@/services/CountriesService";
import OrdersService from "@/services/OrdersService";
import NotchPayService from "@/services/NotchPayService";

export const container = () => {
    const client: any = $api;

    const api: ApiServiceContainer = {
        application: new ApplicationService(client),
        authentication: new AuthenticationService(client),
        events: new EventsService(client),
        tickets: new TicketsService(client),
        carts: new CartsService(client),
        countries: new CountriesService(client),
        orders: new OrdersService(client),
        notchPay: new NotchPayService(client),
    };

    return api as ApiServiceContainer;
};
