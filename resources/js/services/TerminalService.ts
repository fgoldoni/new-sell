import { ApiServiceBase } from "@/services/ApiServiceBase";

export default class TerminalService extends ApiServiceBase {
    async connection(): Promise<any> {
        return await this.call<any>(route("stripe.terminal.connection"), {
            method: "post",
            headers: {
                Accept: "application/json",
            },
        });
    }
}
