import { Component, OnInit } from '@angular/core';
import { UrbanizationsService } from './services/urbanizations.service';
import { Urbanizations } from 'src/app/core/models/Urbanizations';

@Component({
  selector: 'app-urbanizations',
  templateUrl: './urbanizations.component.html',
  styleUrls: ['./urbanizations.component.scss']
})
export class UrbanizationsComponent implements OnInit {
  public listUrbanizations: Urbanizations[] = [];
  constructor(private service: UrbanizationsService) { }

  ngOnInit(): void {
    this.service.getAll<Urbanizations>().subscribe((res) => {
      this.listUrbanizations = res.result;
      console.log(this.listUrbanizations);
    })
  }

}
