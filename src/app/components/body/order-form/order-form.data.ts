import { ValidationErrors, Validator } from "@angular/forms"

export interface FormField {
    type: string,
    validations: Validator
    errors: ValidationErrors,
    placeholder: string | undefined
}

const ORDER_TIMES = [
    { name: 'Egal (8:00-11:00)', code: 'ANY' },
    { name: '8:00-9:30', code: 'EARLY' },
    { name: '9:30-11:00', code: 'LATER' }
]
const ORGANISATIONS = [
    { name: 'Pfadi Kuonolf', code: 'KUONOLF' },
    { name: 'Pfadi Chutze', code: 'CHUTZE' },
    { name: 'Pfadi Worb', code: 'WORB' },
    { name: 'Pfadi Hochwacht', code: 'HOCHWACHT' }
]


const ADDRESS_DATA = {
    firstName: { type: 'matInput ', validations: { required: true }, errors: {}, placeholder: 'Vorname' },
    lastName: { type: 'matInput ', validations: { required: true }, errors: {}, placeholder: 'Nachname' },
    street: { type: 'matInput ', validations: { required: true }, errors: {}, placeholder: 'Strasse' },
    streetNr: { type: 'matInput ', validations: { required: true }, errors: {}, placeholder: 'Hausnummer' },
    zip: {
        type: 'number', validations: {
            required: true,
            minLength: 4,
            maxLength: 4
        }, errors: {}, placeholder: 'Postleitzahl'
    },
    city: { type: 'text', validations: { required: true }, errors: {}, placeholder: 'Ort' }
}

const ORDER_DATA = {
    nrOf400gr: { type: 'number', validations: { required: true }, errors: {}, placeholder: '' },
    nrOf800gr: { type: 'number', validations: { required: true }, errors: {}, placeholder: '' },
    orderTime: {
        type: 'select', options: ORDER_TIMES, validations: {},
        errors: {},
        placeholder: 'Lieferzeit'
    },
    organisation: {
        type: 'select', options: ORGANISATIONS, validations: {},
        errors: {},
        placeholder: 'Abteilung'
    },
}

const CONTACT_DATA = {
    phone: {
        type: 'phone',
        validations: {
            pattern: /^\+(?:[0-9] ?){6,14}[0-9]$/
        },
        errors: {
            pattern: 'Bitte valide Telefonnummer eingeben +41'
        },
        placeholder: 'Telefon'
    },
    email: { type: 'email', validations: { required: false }, errors: {}, placeholder: '' },
    comment: { type: 'textarea', validations: { required: false }, errors: {}, placeholder: 'Wünsche und Anmerkungen' },
}

const FORM_STEPS = [
    { label: 'Adresse', data: ADDRESS_DATA },
    { label: 'Bestellung', data: ORDER_DATA },
    { label: 'Kontakt', data: CONTACT_DATA }
]

export { FORM_STEPS }