import { $Fetch } from "ofetch";

export class ApiServiceBase {
    private readonly client: $Fetch;

    constructor(client: $Fetch) {
        this.client = client;
    }

    protected get call(): $Fetch {
        return this.client;
    }
}
