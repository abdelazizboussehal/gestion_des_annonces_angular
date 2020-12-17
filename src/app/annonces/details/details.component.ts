import {Component, OnInit } from '@angular/core';
import {TestService} from '../../test.service';
import {AnnonceDataSevice} from '../../services/annonceData.sevice';
import {Annonce} from '../annonce.model';
import {ActivatedRoute, Data} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [
    TestService
  ]
})
export class DetailsComponent implements OnInit {
  element;
  constructor(private service: TestService, private annonceDataService: AnnonceDataSevice, private route: ActivatedRoute) {
    this.element = annonceDataService.getAnnonceDetails();
  }

  ngOnInit(): void {
    this.route.data.subscribe( (data: Data) => {
      this.element = data.ad;
    });
    // this.annonceDataService.annonceDetailsEmitter.subscribe((data: Annonce) => {this.element = data; });
  }
  onChangeAnnonce(): void{
    if (this.element)
    { this.element.productName = 'hello from child'; }
  }
  onRemove(): void {
    if (this.element) {
      this.annonceDataService.removeAnnonce(this.element);
    }
  }
}
