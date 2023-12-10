import { ApiServiceBase } from "@/services/ApiServiceBase";
import Application from "@/models/Application";
import { User } from "@/types";

export default class AuthenticationService extends ApiServiceBase {
    async info(): Promise<Application> {
        return await this.call<Application>("/");
    }

    async register(
        name: string,
        email: string,
        email_confirmation: string,
        phone: string,
        country_id: number,
        locale: string,
        is_logged: boolean,
        to: string,
        terms: boolean,
    ): Promise<any> {
        debugger;
        return await this.call<any>("/users", {
            method: "post",
            body: {
                name,
                email,
                email_confirmation,
                phone,
                country_id,
                locale,
                is_logged,
                to,
                terms,
            },
        });
    }

    async user(): Promise<User> {
        return await this.call("/user");
    }
}
