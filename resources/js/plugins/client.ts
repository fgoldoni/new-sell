import {$api} from "@/utils/api";
import {ApiServiceContainer} from "@/services/ApiServiceContainer";
import ApplicationService from "@/services/ApplicationService";
import AuthenticationService from "@/services/AuthenticationService";
import EventsService from "@/services/EventsService";

export const container = ()  => {
    const client: any = $api;

    const api: ApiServiceContainer = {
        application: new ApplicationService(client),
        authentication: new AuthenticationService(client),
        events: new EventsService(client),
    };

    return api as ApiServiceContainer;
};
