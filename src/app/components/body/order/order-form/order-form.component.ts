import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReCaptchaV3Service } from 'ng-recaptcha';

interface IStringIndex {
  [key: string]: any
}

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})


export class OrderFormComponent implements OnInit {
  @Input() formContent: any;

  @Output() readonly formSubmit: EventEmitter<any> = new EventEmitter<any>();

  activeStepIndex: number = 0;
  currentFormContent: Array<any> = [];
  formData: any;
  formFields: Array<Array<string>> = [];
  masterFormFields: Array<any> = [];
  stepItems: Array<any> = [];
  masterForm: Array<FormGroup> = [];

  constructor(
    private readonly _formBuilder: FormBuilder,
    private recaptchaV3Service: ReCaptchaV3Service,
  ) { }

  ngOnInit() {
    this.stepItems = this.formContent;

    // NOTE: this can be cofigured to create a single form when needed
    this.stepItems.forEach((data, i) => {
      // holds name, validators, placeholder of all steps
      this.currentFormContent.push(this.stepItems[i]['data']);
      // holds string values for each field of all steps
      this.formFields.push(Object.keys(this.currentFormContent[i]));
      // holds all form groups
      this.masterForm.push(this.buildForm(this.currentFormContent[i]));
      // Store Field names
      Object.keys(this.currentFormContent[i]).forEach((field) => {

        this.masterFormFields.push({ key: field, value: (this.currentFormContent[i][field].label || field) })
        //this.masterFormFields.set(field, (this.currentFormContent[i][field].label || field))
      })

    });

    console.log(this.masterFormFields)
  }

  // build separate FormGroups for each form
  buildForm(currentFormContent: any): FormGroup {
    const formDetails = Object.keys(currentFormContent).reduce(
      (obj: IStringIndex, key) => {
        obj[key] = ['', this.getValidators(currentFormContent[key])];

        return obj;
      },
      {}
    );

    return this._formBuilder.group(formDetails);
  }

  // get validator(s) for each field, if any
  getValidators(formField: any): Validators {
    const fieldValidators = Object.keys(formField.validations).map((validator) => {
      if (validator === 'required' || validator === 'email') {
        return Validators[validator];
      } else {
        return (Validators as any)[validator](formField.validations[validator]);
      }
    });

    return fieldValidators;
  }

  // get validation error messages per error, per field
  getValidationMessage(formIndex: number, formFieldName: string): string {
    const formErrors = this.masterForm[formIndex].get(formFieldName)?.errors;
    const errorMessages = this.currentFormContent[formIndex][formFieldName]
      .errors;
    const validationError = formErrors ? errorMessages[Object.keys(formErrors)[0]] : null;

    return validationError;
  }

  goToStep(step: string): void {
    this.activeStepIndex =
      step === 'prev' ? this.activeStepIndex - 1 : this.activeStepIndex + 1;

    this.setFormPreview();
  }

  setFormPreview(): void {
    this.formData = this.masterForm.reduce(
      (masterForm, currentForm) => ({ ...masterForm, ...currentForm.value }),
      {}
    );
  }

  onFormSubmit(): void {
    // emit aggregate form data to parent component, where we POST
    this.recaptchaV3Service.execute('ZoBa Order')
      .subscribe((token: string) => {
      });
    this.formSubmit.emit(this.formData);




  }

  trackByFn(index: number): number {
    return index;
  }
}
