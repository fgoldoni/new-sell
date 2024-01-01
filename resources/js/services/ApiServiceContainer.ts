import ApplicationService from "@/services/ApplicationService";
import AuthenticationService from "@/services/AuthenticationService";
import EventsService from "@/services/EventsService";
import TicketsService from "@/services/TicketsService";
import CartsService from "@/services/CartsService";
import CountriesService from "@/services/CountriesService";
import OrdersService from "@/services/OrdersService";
import NotchPayService from "@/services/NotchPayService";
import TerminalService from "@/services/TerminalService";
import BrandsService from "@/services/BrandsService";
import FaqsService from "@/services/FaqsService";

export interface ApiServiceContainer {
    application: ApplicationService;
    authentication: AuthenticationService;
    events: EventsService;
    tickets: TicketsService;
    carts: CartsService;
    countries: CountriesService;
    orders: OrdersService;
    notchPay: NotchPayService;
    terminal: TerminalService;
    brands: BrandsService;
    faqs: FaqsService;
}
