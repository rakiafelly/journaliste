import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[],searchText: string): any {
    if(!searchText)
    {return value;}
    else{
      return value.filter(element=>element.Title.toLowerCase().includes(searchText.toLowerCase()))
    }
  }

}
