import {Component, OnDestroy, OnInit} from '@angular/core';
import {AnnonceDataSevice} from '../../services/annonceData.service';
import {Annonce} from '../annonce.model';
import {ActivatedRoute, Data} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [
  ]
})
export class DetailsComponent implements OnInit, OnDestroy {
  AnnonceDetails: any;
  subjectAnnonceDetails!: Subscription;
  index: any;
  constructor(private annonceDataService: AnnonceDataSevice, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.data.subscribe( (data: Data) => {
      this.AnnonceDetails = data.annonceDetails;
    });
    this.subjectAnnonceDetails = this.annonceDataService.annonceDetailsSubject.subscribe((data: Annonce) => {
      this.AnnonceDetails = data;
    });
    /*this.index = this.annonceDataService.annonceDetailsIndexSubject.subscribe((data: number) => {
      this.index = data;
    });*/
  }
  onChangeAnnonce(): void{
    this.annonceDataService.annonceDetailsIndexSubject.next(this.annonceDataService.index);
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
