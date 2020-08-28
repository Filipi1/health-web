export class InputConfig {
    id: string = ""
    title: string = ""
    icon: string = "account_circle"
    useIcon: boolean = true
    mask: string = ""
    type: string = "text"
    value: string = ""
};

export class InputToForm {
    id: string
    inputConfig: InputConfig
};

export class FormConfig {
    form: InputConfig[]
};