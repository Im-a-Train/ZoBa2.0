import { ValidationErrors, Validator } from "@angular/forms"

export interface FormField {
    type: string,
    validations: Validator
    errors: ValidationErrors,
    label: string | undefined
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
    firstName: { type: 'matInput ', validations: { required: true, maxLength: 30 }, errors: { required: 'Bitte Vornamen eingeben', maxLength: 'Maximal 30 Zeichen' }, label: 'Vorname' },
    lastName: { type: 'matInput ', validations: { required: true, maxLength: 30 }, errors: { required: 'Bitte Nachname eingeben', maxLength: 'Maximal 30 Zeichen' }, label: 'Nachname' },
    street: { type: 'matInput ', validations: { required: true, maxLength: 30 }, errors: { required: 'Bitte Strasse eingeben', maxLength: 'Maximal 30 Zeichen' }, label: 'Strasse' },
    streetNr: { type: 'matInput ', validations: { required: true, maxLength: 30 }, errors: { required: 'Bitte Hausnummer eingeben', maxLength: 'Maximal 30 Zeichen' }, label: 'Hausnummer' },
    zip: {
        type: 'number', validations: {
            required: true,
            minLength: 4,
            maxLength: 4,

        }, errors: { required: 'Bitte Postleitzahl eingeben' }, label: 'Postleitzahl'
    },
    city: { type: 'text', validations: { required: true }, errors: { required: 'Bitte Ort eingeben' }, label: 'Ort' }
}

const ORDER_DATA = {
    nrOf400gr: { type: 'number', validations: { min: 0, max: 10 }, errors: { min: "Weniger als 0 Zöpfe können wir nicht liefern", max: 'Melde dich bei zoba@kuonolf.ch wenn du mehr als 10 Zöpfe möchtest' }, label: '' },
    nrOf800gr: { type: 'number', validations: { min: 0, max: 10 }, errors: { min: "Weniger als 0 Zöpfe können wir nicht liefern", max: 'Melde dich bei zoba@kuonolf.ch wenn du mehr als 10 Zöpfe möchtest' }, label: '' },
    orderTime: {
        type: 'select', options: ORDER_TIMES, validations: { required: true },
        errors: { required: 'Bitte gewünschte Lieferzeit angeben' },
        label: 'Lieferzeit'
    },
    organisation: {
        type: 'select', options: ORGANISATIONS, validations: { required: true },
        errors: { required: 'Bitte eine Pfadiabteilung auswählen' },
        label: 'Abteilung'
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
        label: 'Telefon',
        placeholder: '+41 79 000 00 00'
    },
    email: { type: 'email', validations: { email: true }, errors: { email: 'Bitte eine E-Mail eingben' }, label: 'Email' },
    comment: { type: 'textarea', validations: { maxLength: 250 }, errors: { maxLength: "Maximal 250 Zeichen" }, label: 'Wünsche und Anmerkungen' },
}

const FORM_STEPS = [
    { label: 'Adresse', introduction: '', data: ADDRESS_DATA },
    { label: 'Bestellung', introduction: '', data: ORDER_DATA },
    { label: 'Kontakt', introduction: '', data: CONTACT_DATA },
    { label: 'Zusammenfassung', introduction: '', data: {} }
]

export { FORM_STEPS }