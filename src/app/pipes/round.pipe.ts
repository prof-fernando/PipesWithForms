import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formata'
})
export class RoundPipe implements PipeTransform {
  transform(value: number, ...args: any[]): any {
    const casasDecimais = args[0];
    return value.toFixed(casasDecimais);
  }
}
