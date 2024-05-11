import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'msgSubj',
})
export class MsgSubjPipe implements PipeTransform {
  transform(msgSubj: string): string | null {
    if (msgSubj && msgSubj.length > 20) {
      return msgSubj.slice(0, 20) + '...';
    } else if (msgSubj) {
      return msgSubj;
    }
    return null;
  }
}
