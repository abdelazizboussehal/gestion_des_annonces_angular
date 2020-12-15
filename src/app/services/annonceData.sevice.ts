import {Annonce} from '../annonces/annonce.model';

export class AnnonceDataSevice{
  annonces: Annonce[] = [new Annonce(1, 1, 'telephone',
    'samsung a6', 'jdod gasba', '*** // ***', 1, 1, '2020-12-1'),
    new Annonce(1, 1, 'telephone',
      'samsung a5', 'jdod gasba', '***', 1, 1, '2020-12-1'),
    new Annonce(1, 1, 'caba',
      'samsung ooredoo a5', 'jdod bzf gasba', '***', 1, 1, '2020-12-1')
  ];

}
