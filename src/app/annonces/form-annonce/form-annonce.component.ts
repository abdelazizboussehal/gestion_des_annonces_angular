import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Annonce} from '../annonce.model';
import {AnnonceDataSevice} from '../../services/annonceData.sevice';
import {HttpAnnonceService} from '../../services/http-annonce.service';

@Component({
  selector: 'app-form-annonce',
  templateUrl: './form-annonce.component.html',
  styleUrls: ['./form-annonce.component.css']
})
export class FormAnnonceComponent implements OnInit {
  defaultType: any = 'of';
  isModify = false;
  @ViewChild('f')
  from!: NgForm;
  constructor(private annonceDataService: AnnonceDataSevice, private annoncehttp: HttpAnnonceService) { }

  ngOnInit(): void {
    this.annonceDataService.annonceDetailsIndexSubject.subscribe((data: number) => {
      this.isModify = true;
      const annonce: Annonce = this.annonceDataService.getAnnonces()[data];
      this.from.form.patchValue({
          name : annonce.productName,
        type : annonce.typeAnnonce
      });
    });
  }
  addAnnonce(annonceJson: NgForm): void {
    if (annonceJson.valid){
      if (!this.isModify) {
        /*const annonce: Annonce[] = [];
        annonce.push(new Annonce(1, 1500, annonceJson.value.type,  annonceJson.value.name,
          'jdod gasba', '***', 1, 1, '2020-12-1'))
        this.annoncehttp.storeAnnonce(annonce);*/
        this.annonceDataService.addAnnonce(
          new Annonce(1, 1500, annonceJson.value.type,  annonceJson.value.name,
            'jdod gasba', '***', 1, 1, '2020-12-1')
        );
      } else {
        const modifyannonce = new Annonce(1, 1500, annonceJson.value.type,  annonceJson.value.name,
          'tbadala', '***', 1, 1, '2020-12-1');
        this.isModify = false;
        this.annonceDataService.modify(modifyannonce, this.annonceDataService.index);
      }
      annonceJson.reset();
    }else{
      alert('champ not valid');
    }
  }

}
