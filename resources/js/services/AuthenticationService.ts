import {ApiServiceBase} from "@/services/ApiServiceBase";
import Application from "@/models/Application";


export default class AuthenticationService extends ApiServiceBase {
    async info(): Promise<Application> {
        return await this.call<Application>("/");
    }
}
