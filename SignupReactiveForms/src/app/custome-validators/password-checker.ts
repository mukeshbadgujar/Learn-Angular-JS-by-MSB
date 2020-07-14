import {FormGroup} from "@angular/forms"
export function passwordChecker(controlName: string, compareControlName: string){
    return (formGroup: FormGroup)=> {
        const pass = formGroup.controls[controlName];
        const confPass = formGroup.controls[compareControlName];
        if(pass.value !== confPass.value){
            confPass.setErrors({mustmatch:true});
        }
        else{
            confPass.setErrors(null);
        }
    };
}