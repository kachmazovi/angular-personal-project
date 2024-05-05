import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'msgBody',
})
export class MsgBodyPipe implements PipeTransform {
  transform(msgBody: string): string | null {
    if (msgBody && msgBody.length > 100) {
      return msgBody.slice(0, 100) + '...';
    }
    return null;
  }
}
