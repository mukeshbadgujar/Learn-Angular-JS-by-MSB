import { Pipe, PipeTransform, NgModule } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class filterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
      if(!searchText) return items;
        searchText = searchText.toLowerCase();
    return items.filter( it => {
      return it.full_name.toLowerCase().includes(searchText) || it.address.toLowerCase().includes(searchText) || it.interests.toLowerCase().includes(searchText);
    });
   }
}
