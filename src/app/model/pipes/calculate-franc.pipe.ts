import { Pipe, PipeTransform } from '@angular/core';
import { CalculateFrancService } from '../services/calculate-franc.service';

@Pipe({
  name: 'calculateFranc'
})
export class CalculateFrancPipe implements PipeTransform {

  constructor(private readonly calculateFrancService: CalculateFrancService) {}

  transform(value: any, currency: string): any {
    return this.calculateFrancService.calculateInFranc(value, currency);
  }

}