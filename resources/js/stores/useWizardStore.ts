import { defineStore } from "pinia";
import { ref } from "vue";
import Step1 from "@/Components/Tickets/Wizard/Step1/Main.vue";
import Step2 from "@/Components/Tickets/Wizard/Step2/Main.vue";
import Step3 from "@/Components/Tickets/Wizard/Step3/Main.vue";
import Step4 from "@/Components/Tickets/Wizard/Step4/Main.vue";
import Step5 from "@/Components/Tickets/Wizard/Step5/Main.vue";

export const useWizardStore = defineStore(
    "wizard",
    () => {
        const component = ref<string | null>(null);
        const previousComponent = ref<string | null>(null);
        const nextComponent = ref<string | null>(null);
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

        const setComponent = async (
            current: string,
            previous = null,
            next = null,
        ) => {
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
                    value = Step2;
                    break;
                case "Step3":
                    value = Step3;
                    break;
                case "Step4":
                    value = Step4;
                    break;
                case "Step5":
                    value = Step5;
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
