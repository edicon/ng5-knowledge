import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'appFromNow'
})
export class FromNowPipe implements PipeTransform {

  transform(value: any, args?: any): string {
    return moment(value).fromNow();
  }

}
