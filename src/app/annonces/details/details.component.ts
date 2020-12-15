import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Annonce} from '../annonce.model';
import {TestService} from '../../test.service';
import {AnnonceDataSevice} from '../../services/annonceData.sevice';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [
    TestService
  ]
})
export class DetailsComponent implements OnInit {
  @Input()
  element!: Annonce;
  @Output() eventChild = new EventEmitter <Annonce>();
  constructor(private service: TestService, private annonceDataService: AnnonceDataSevice) { }

  ngOnInit(): void {
    console.log('dtails');
    this.service.onCreate();
  }
  onChangeAnnonce(): void{
    this.element.ficheTechnique = 'hello from child';
    this.eventChild.emit(this.element);
  }

}
