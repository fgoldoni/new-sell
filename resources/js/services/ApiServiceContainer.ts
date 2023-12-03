import ApplicationService from "@/services/ApplicationService";
import AuthenticationService from "@/services/AuthenticationService";
import EventsService from "@/services/EventsService";
import TicketsService from "@/services/TicketsService";

export interface ApiServiceContainer {
    application: ApplicationService;
    authentication: AuthenticationService;
    events: EventsService;
    tickets: TicketsService;
}
