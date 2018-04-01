import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(array: Array<string>, args?: any): any {
    
    if(array){
       let sortField = args[0];//Sort fields
       let sortOrder = args[1];//Sort fields
           let modifier = 1;
          if(sortOrder == 'desc'){
             modifier = -1;
          }
       
       alert(sortField);
        array.sort((a:any ,b:any)=>{
       if(a[sortField] < b[sortField]){
            return -1 * modifier;
        }else
         if(a[sortField] > b[sortField]){
              return 1 * modifier;
        }else
        return 0 ;
        });
    }
    return array;
  }
 
}
