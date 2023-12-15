import { defineStore } from "pinia";
import { ref } from "vue";
import { loadStripeTerminal } from "@stripe/terminal-js";

export const useStripeTerminalStore = defineStore("stripeTerminalStore", () => {
    const processing = ref(false);
    const secret = ref(null);
    const terminal = ref(null);
    const connection = async () => {
        processing.value = true;

        await axios
            .post(
                route("stripe.terminal.connection"),
                {},
                {
                    withCredentials: true,
                    headers: {
                        Accept: "application/json",
                    },
                },
            )
            .then((response) => {
                secret.value = response.data.data.secret;
            })
            .catch((err) => {
                throw err;
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
