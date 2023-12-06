import { defineStore } from "pinia";
import { ref } from "vue";
import Step1 from "@/Components/Tickets/Wizard/Step1/Main.vue";

export const useWizardStore = defineStore(
    "wizard",
    () => {
        const component = ref(null);
        const previousComponent = ref(null);
        const nextComponent = ref(null);
        const reset = () => {
            previousComponent.value = null;
            component.value = null;
            nextComponent.value = null;
        };

        const setPreviousComponent = (value) => {
            previousComponent.value = value;
        };

        const setNextComponent = (value) => {
            nextComponent.value = value;
        };

        const setComponent = (current, previous = null, next = null) => {
            if (component.value !== current) {
                component.value = current;
            }

            if (previousComponent.value !== previous) {
                previousComponent.value = previous;
            }

            if (nextComponent.value !== next) {
                nextComponent.value = next;
            }
        };
        const mapComponent = () => {
            let value;

            switch (component.value) {
                case "Step1":
                    value = Step1;
                    break;
                case "Step2":
                    value = Step1;
                    break;
                default:
                    value = null;
            }

            return value;
        };

        return {
            reset,
            nextComponent,
            previousComponent,
            component,
            setComponent,
            mapComponent,
            setPreviousComponent,
            setNextComponent,
        };
    },
    {
        persist: true,
    },
);