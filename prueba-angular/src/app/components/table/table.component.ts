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

}
