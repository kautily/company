import { Pipe } from '@angular/core';
import { PipeTransform } from '@angular/core';

@Pipe({
    name:  "filter"
})
export class FilterPipe implements PipeTransform{
    transform(value:any, searchString: string, basedOn:string){
        if (!value) return [];
    if (!searchString) return  value;
    if (searchString == '' || searchString == null) return [];
    return value.filter(obj => obj[basedOn].toLowerCase().indexOf(searchString) > -1 );

    }

}