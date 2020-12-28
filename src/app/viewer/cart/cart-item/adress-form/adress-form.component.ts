import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Address } from 'src/app/model/interfaces/adress';

@Component({
  selector: 'app-adress-form',
  templateUrl: './adress-form.component.html',
  styleUrls: ['./adress-form.component.scss']
})
export class AdressFormComponent implements OnInit {

  @Output() saveAddress: EventEmitter<Address> = new EventEmitter();
  public address!: Address;
  public authForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    // use FormBuilder to create a form group
    this.authForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      street: ["", Validators.required],
      postCode: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("[0-9]{5}")
        ])
      ],
      town: ["", Validators.required],
      country: ["Schweiz", Validators.required]
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public saveButtonClick(): void {
    this.saveAddress.emit(this.authForm.getRawValue());
  }
}
