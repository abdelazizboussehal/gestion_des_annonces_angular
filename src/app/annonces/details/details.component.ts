import {Component, OnDestroy, OnInit} from '@angular/core';
import {TestService} from '../../test.service';
import {AnnonceDataSevice} from '../../services/annonceData.sevice';
import {Annonce} from '../annonce.model';
import {ActivatedRoute, Data} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [
    TestService
  ]
})
export class DetailsComponent implements OnInit, OnDestroy {
  AnnonceDetails: any;
  subjectAnnonceDetails!: Subscription;
  index: any;
  constructor(private service: TestService, private annonceDataService: AnnonceDataSevice, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.data.subscribe( (data: Data) => {
      this.AnnonceDetails = data.ad;
    });
    this.subjectAnnonceDetails = this.annonceDataService.annonceDetailsSubject.subscribe((data: Annonce) => {this.AnnonceDetails = data; });
  }
  onChangeAnnonce(): void{
    if (this.AnnonceDetails)
    { this.AnnonceDetails.productName = 'hello from child'; }
  }
  onRemove(): void {
    if (this.AnnonceDetails) {
      this.annonceDataService.removeAnnonce(this.AnnonceDetails);
      // @ts-ignore
      this.annonceDataService.setAnnonceDetails( null );
    }
  }

  ngOnDestroy(): void {
    this.subjectAnnonceDetails.unsubscribe();
  }
}
