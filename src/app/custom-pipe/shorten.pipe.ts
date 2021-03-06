import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform{
  transform(value: any, limit: number = 5): any {
    if (value || value.length > 5){
      return value.substr( 0 , limit ) + '...';
    }
    return value;
  }
}
