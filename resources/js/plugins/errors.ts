export class Errors {
    constructor() {
        this.errors = {};
    }

    get(field) {
        if (this.errors[field]) {
            return this.errors[field][0];
        }
    }

    getWithMutator(field, mutator) {
        if (this.errors[field]) {
            return this.errors[field][0].replace(field, mutator);
        }
    }

    clear(field) {
        if (this.errors !== undefined && this.errors[field.target.name])
            delete this.errors[field.target.name];
    }

    drop() {
        this.errors = {};
    }

    has(field) {
        return this.errors.hasOwnProperty(field);
    }

    first(field) {
        if (this.errors[field]) {
            return this.errors[field];
        }
    }

    any() {
        return Object.keys(this.errors).length > 0;
    }

    record(errors) {
        this.errors = errors;
    }

    getErrors() {
        let msg = "";
        for (let field in this.errors) {
            msg += this.errors[field][0] + "<br/>";
        }
        return msg;
    }

    onFailed(error) {
        if (error !== undefined && error.hasOwnProperty("errors")) {
            this.record(error.errors);
            if (error.hasOwnProperty("message")) {
                // ElNotification({
                //     title: "Erreur",
                //     message: error.message,
                //     type: "error",
                // });
            } else {
                // ElNotification({
                //     title: "Erreur",
                //     dangerouslyUseHTMLString: true,
                //     message: this.getErrors(this.errors.errors),
                //     type: "error",
                // });
            }
        } else if (
            error !== undefined &&
            error.hasOwnProperty("data") &&
            error.hasOwnProperty("message")
        ) {
            // ElNotification({
            //     title: "Erreur",
            //     message: error.message,
            //     type: "error",
            // });
        } else if (error.hasOwnProperty("message")) {
            // ElNotification({
            //     title: "Erreur",
            //     message: error.message,
            //     type: "error",
            // });
        } else {
            // ElNotification({
            //     title: "Erreur",
            //     message: "Service not answer, Please contact your Support",
            //     type: "error",
            // });
            console.log(error);
        }
    }
}
