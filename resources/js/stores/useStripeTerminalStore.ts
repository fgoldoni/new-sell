import { defineStore } from "pinia";
import { ref } from "vue";
import { loadStripeTerminal } from "@stripe/terminal-js";
import { useApi } from "@/composable/useApi";
import ApiError from "@/models/ApiError";
import { FetchError } from "ofetch";

export const useStripeTerminalStore = defineStore("stripeTerminalStore", () => {
    const processing = ref(false);
    const secret = ref(null);
    const terminal = ref(null);
    const api = useApi();
    const connection = async () => {
        processing.value = true;

        await api.terminal
            .connection()
            .then((response: any) => {
                secret.value = response.data.secret;
            })
            .catch((error: FetchError) => {
                console.log(error);
                throw new ApiError(error);
            })
            .finally(() => (processing.value = false));

        return secret.value;
    };

    const stripeTerminal = async () => {
        const StripeTerminal = await loadStripeTerminal();

        terminal.value = await StripeTerminal.create({
            onFetchConnectionToken: connection,
            onUnexpectedReaderDisconnect: unexpectedDisconnect,
        });

        return terminal.value;
    };

    const setSimulatorConfiguration = async (
        testCardNumber = "4242424242424242",
    ) => {
        return terminal.value.setSimulatorConfiguration({
            testCardNumber: testCardNumber,
        });
    };

    const connectReaderHandler = async (simulated = false) => {
        const config = { simulated: simulated };
        const discoverResult = await terminal.value.discoverReaders(config);
        if (discoverResult.error) {
            console.log("Failed to discover: ", discoverResult.error);
        } else if (discoverResult.discoveredReaders.length === 0) {
            console.log("No available readers.");
        } else {
            // Just select the first reader here.
            const selectedReader = discoverResult.discoveredReaders[0];

            const connectResult =
                await terminal.value.connectReader(selectedReader);
            if (connectResult.error) {
                console.log("Failed to connect: ", connectResult.error);
            } else {
                console.log(
                    "Connected to reader: ",
                    connectResult.reader.label,
                );
            }
        }
    };
    const unexpectedDisconnect = async () => {};

    return {
        connectReaderHandler,
        terminal,
        stripeTerminal,
        setSimulatorConfiguration,
    };
});
