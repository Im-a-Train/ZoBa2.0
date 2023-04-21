import { ValidationErrors, Validator } from "@angular/forms"

export interface FormField {
    type: string,
    validations: Validator
    errors: ValidationErrors,
    label: string | undefined
}

export interface Organisation {
    name: string,
    code: string
}

const ORDER_TIMES = [
    { name: 'Egal (8:00-11:00)', code: 'ANY' },
    { name: '8:00-9:30', code: 'EARLY' },
    { name: '9:30-11:00', code: 'LATER' }
]
export const ORGANISATIONS: Organisation[] = [
    { name: 'Pfadi Kuonolf', code: 'KUONOLF' },
    { name: 'Pfadi Chutze', code: 'CHUTZE' },
    { name: 'Pfadi Worb', code: 'WORB' },
    { name: 'Pfadi Hochwacht', code: 'HOCHWACHT' }
]


const ADDRESS_DATA = {
    firstName: { type: 'matInput ', validations: { required: true, maxLength: 30 }, errors: { required: 'Bitte Vornamen eingeben', maxLength: 'Maximal 30 Zeichen' }, label: 'Vorname', order: 1 },
    lastName: { type: 'matInput ', validations: { required: true, maxLength: 30 }, errors: { required: 'Bitte Nachname eingeben', maxLength: 'Maximal 30 Zeichen' }, label: 'Nachname', order: 2 },
    street: { type: 'matInput ', validations: { required: true, maxLength: 30 }, errors: { required: 'Bitte Strasse eingeben', maxLength: 'Maximal 30 Zeichen' }, label: 'Strasse', order: 3 },
    streetNr: { type: 'matInput ', validations: { required: true, maxLength: 30 }, errors: { required: 'Bitte Hausnummer eingeben', maxLength: 'Maximal 30 Zeichen' }, label: 'Hausnummer', order: 4 },
    zip: {
        type: 'number', validations: {
            required: true,
            minLength: 4,
            maxLength: 4,

        }, errors: { required: 'Bitte Postleitzahl eingeben' }, label: 'Postleitzahl', order: 5
    },
    city: { type: 'matInput', validations: { required: true, maxLength: 30 }, errors: { required: 'Bitte Ort eingeben', maxLength: 'Maximal 30 Zeichen' }, label: 'Ort', order: 6 }
}

const ORDER_DATA = {
    nrOf400gr: { type: 'number', validations: { min: 0, max: 10 }, errors: { min: "Weniger als 0 Zöpfe können wir nicht liefern", max: 'Melde dich bei zoba@kuonolf.ch wenn du mehr als 10 Zöpfe möchtest' }, label: 'Anzahl 400gr Zöpfe', order: 7 },
    nrOf800gr: { type: 'number', validations: { min: 0, max: 10 }, errors: { min: "Weniger als 0 Zöpfe können wir nicht liefern", max: 'Melde dich bei zoba@kuonolf.ch wenn du mehr als 10 Zöpfe möchtest' }, label: 'Anzahl 800gr Zöpfe', order: 8 },
    orderTime: {
        type: 'select', options: ORDER_TIMES, validations: { required: true },
        errors: { required: 'Bitte gewünschte Lieferzeit angeben' },
        label: 'Lieferzeit', order: 9
    },
    organisation: {
        type: 'select', options: ORGANISATIONS, validations: { required: true },
        errors: { required: 'Bitte eine Pfadiabteilung auswählen' },
        label: 'Abteilung', order: 10
    },
}

const CONTACT_DATA = {
    phone: {
        type: 'phone',
        validations: {
            required: true,
            pattern: /^\+(?:[0-9] ?){6,14}[0-9]$/
        },
        errors: {
            pattern: 'Bitte valide Telefonnummer eingeben +41'
        },
        label: 'Telefon',
        placeholder: '+41 79 000 00 00', order: 11
    },
    email: { type: 'email', validations: { email: true }, errors: { email: 'Bitte eine E-Mail eingben' }, label: 'Email', order: 12 },
    comment: { type: 'textarea', validations: { maxLength: 500 }, errors: { maxLength: "Maximal 500 Zeichen" }, label: 'Wünsche und Anmerkungen', order: 13 },
}

const FORM_STEPS = [
    { label: '', introduction: '', data: ADDRESS_DATA },
    { label: '', introduction: '', data: ORDER_DATA },
    { label: '', introduction: '', data: CONTACT_DATA },
    { label: '', introduction: '', data: {} }
]

export { FORM_STEPS }