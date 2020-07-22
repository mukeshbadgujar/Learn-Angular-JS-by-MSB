import {FormGroup} from "@angular/forms"

export function PasswordChecker(
    controlName:string,
    compareControlName:string)
{
    return (formGroup:FormGroup)=>{
        const password = formGroup.controls[controlName];
        const confPassword = formGroup.controls[compareControlName];

        if(password.value !== confPassword.value){
            confPassword.setErrors({mustmatch:true});
        }
        else{
            confPassword.setErrors(null);
        }
    };

}