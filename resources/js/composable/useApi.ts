import {container} from "@/plugins/client";

export const useApi = () => {
    const api  = container();

    return api as ApiServiceContainer;
};
