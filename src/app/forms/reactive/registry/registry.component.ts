import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-registry',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './registry.component.html',
  styleUrl: './registry.component.scss'
})
export class RegistryComponent implements OnInit{

  formGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required])
  });

  passwordPyped!: string;
  ngOnInit() {
    this.formGroup.valueChanges.subscribe((formGroup) => {
      this.passwordPyped = formGroup.password!.toString();
      console.log(this.passwordPyped);
    });
  }

  onSubmit() {
    this.formGroup.markAllAsTouched();
    if(this.formGroup.invalid) {
      return;
    }
    console.log(this.formGroup.value);


  }

  isTouchedOrDirty(formControl: FormControl) {
    return formControl.invalid && (!formControl.touched || formControl.dirty);
  }
}
