import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useApi } from "@/composable/useApi";
import ApiError from "@/models/ApiError";
import { filter, orderBy } from "lodash";
import { Ticket } from "@/models/Ticket";

export const useTicketsStore = defineStore(
    "tickets",
    () => {
        const api = useApi();

        const tickets = ref<Ticket[] | null>(null);
        const ticket = ref<Ticket | null>(null);

        const entries = computed(() =>
            orderBy(
                filter(tickets.value, (t: any) => t.type === "entry"),
                ["position"],
                ["asc"],
            ),
        );

        const packages = computed(() =>
            filter(
                tickets.value,
                (t: any) => t.type === "package" || t.type === "credit",
            ),
        );

        const isLoading = computed(() => !!tickets.value);

        const get = async () => {
            try {
                await api.tickets
                    .get()
                    .then((response: any) => {
                        tickets.value = response.data;
                    })
                    .catch((error: any) => {
                        throw new ApiError(error);
                    });
            } catch (error) {
                console.error(error);
            }
        };

        const find = async (id: string) => {
            try {
                await api.tickets
                    .find(id)
                    .then((response: any) => {
                        ticket.value = response.data;
                    })
                    .catch((error: any) => {
                        throw new ApiError(error);
                    });
            } catch (error) {
                console.error(error);
            }
        };

        return { get, find, tickets, ticket, isLoading, entries, packages };
    },
    {
        persist: true,
    },
);
