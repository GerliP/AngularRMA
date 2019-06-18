import { CanDeactivate } from "@angular/router";
import { SignUpComponent } from "./user/sign-up/sign-up.component";
import { Injectable } from '@angular/core';

export class CreateUserCanDeactivate implements 
CanDeactivate<SignUpComponent> {
canDeactivate(component: SignUpComponent): boolean{
    if(component.registerForm.dirty){
        return confirm('Are you sure you want to discard your changes?');
    }
    return true;
}
}
