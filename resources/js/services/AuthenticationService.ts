import { ApiServiceBase } from "@/services/ApiServiceBase";
import { User } from "@/types";
import Application from "@/models/Application";

export default class AuthenticationService extends ApiServiceBase {
    async post(
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

    async logout(): Promise<any> {
        // return await this.call("/users/logout", { method: "post" });
        return await this.call<Application>("/");
    }
}
