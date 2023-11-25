import {ApiServiceBase} from "@/services/ApiServiceBase";
import Application from "@/models/Application";


export default class ApplicationService extends ApiServiceBase {
    async info(): Promise<Application> {
        return await this.call<Application>("/");
    }
}
