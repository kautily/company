import { Pipe } from '@angular/core';
import { PipeTransform } from '@angular/core';

@Pipe({
        name: "shortstring",
})

export class ShortPipe implements PipeTransform{
    transform(value){
        if(!value){
            return value;
        }
        const index = value.indexOf('@');
        return value.substr(0, index);
    }
}