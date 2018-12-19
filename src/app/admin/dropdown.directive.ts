import { Directive, HostBinding, HostListener } from '@angular/core';
@Directive({
    selector: "[dropdownToggle]"
})
export class DropdownToggleDirective{

    constructor(){}
    @HostBinding("class.open") toggel ="open";
    @HostListener("click") onclick(){
        this.toggel =""
    }
}