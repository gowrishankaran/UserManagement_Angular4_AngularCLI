import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderFilter'
})
export class GenderFilterPipe implements PipeTransform {

  transform(value: any, gender: any, searchData: any): any {
    console.log('Filter = ');
    console.log(value);
    console.log(gender);
    console.log(searchData);

    if (!gender || gender === 'all') {
      return value;
    } else {
      return searchData.filter(function(user){
        console.log(user);
        return user.sex.includes(gender);
      });
    }
  }

}
