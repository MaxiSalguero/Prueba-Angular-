import { Component } from '@angular/core';
import { ICompetitor } from 'src/app/models/competitors.model';
import { ApiService} from 'src/app/services/api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  competitorList: ICompetitor[] = [];

  constructor(private _apiService: ApiService) {}

  ngOnInit(): void {
    this._apiService.getCompetitors().subscribe((data: ICompetitor[]) => {
      this.competitorList = data;
    });
  }

  isNumber(value: any): boolean {
    return typeof value === 'number';
  }

  convertDistance(distance: number): string {
    if (distance > 1000) {
      return (distance / 1000).toFixed(2) + ' km';
    } else {
      return distance + ' mts';
    }
  }

}
