import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

 
 
@Component({
  templateUrl: './reactive.component.html',
})
export class ReactiveComponent implements OnInit {
  title = 'Reactive Forms';
  hasChange = false;
 
  reactiveForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl(),
    address: new FormGroup({
      city: new FormControl(),
      street: new FormControl(),
      pincode: new FormControl()
    })
  })
 
  onSubmit() {
    console.log(this.reactiveForm.value);
    console.log(this.reactiveForm.status);
    this.reactiveForm?.valueChanges.subscribe(selectedValue => {
      console.log('form value changedsdfsdfsdfds')
      console.log(selectedValue)
    })
  }
 
  ngOnInit() {
 
    this.reactiveForm?.get("firstname")?.valueChanges.subscribe(selectedValue => {
      console.log('firstname value changed')
      console.log(selectedValue)
      console.log(this.reactiveForm?.get("firstname")?.value)
      console.log(this.reactiveForm.value)
      
      setTimeout(() => {
        console.log(this.reactiveForm.value)
      })
      
    })
 
    this.reactiveForm?.get("address")?.valueChanges.subscribe(selectedValue => {
      console.log('address changed')
      console.log(selectedValue)
    })
 
    const initialValue = this.reactiveForm.value;
    this.reactiveForm?.valueChanges.subscribe(selectedValue => {
      console.log('form value changed')
      console.log(selectedValue)
debugger;
      this.hasChange = Object.keys(initialValue).some(key => {
        this.reactiveForm.value[key] != initialValue[key];
      })
    })
debugger
  }
 
 
 
  setValue() {
 
    let contact = {
      firstname: "Rahul",
      lastname: "Dravid",
      address: {
        city: "Bangalore",
        street: "Brigade Road",
        pincode: "600070"
      }
    };
 
    this.reactiveForm.setValue(contact);
  }
 
  setAddress() {
 
    this.reactiveForm?.get("address")?.setValue(
      {
        city: "Bangalore",
        street: "Brigade Road",
        pincode: "600070"
      }
    );
  }
 
  setFirstname() {
    this.reactiveForm?.get("firstname")?.setValue("Saurav")
  }
 
  withoutOnlySelf() {
    this.reactiveForm?.get("firstname")?.setValue("");
  }
  withOnlySelf() {
    this.reactiveForm?.get("firstname")?.setValue("", { onlySelf: true });
  }
 
  withEmitEvent() {
    this.reactiveForm?.get("firstname")?.setValue("Sachin");
  }
  withoutEmitEvent() {
    this.reactiveForm?.get("firstname")?.setValue("", { emitEvent: false });
  }
 
  reset() {
    this.reactiveForm.reset();
  }
 
}