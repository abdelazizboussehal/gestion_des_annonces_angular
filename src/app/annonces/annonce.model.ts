export class Annonce{
  id: number;
  prix: number;
  typeAnnonce: string;
  productName: string;
  description: string;
  ficheTechnique: string;
  longuitude: number;
  latitude: number;
  createAnnonce: string;

  // tslint:disable-next-line:max-line-length
  constructor(id: number, prix: number, typeAnnonce: string, productName: string, description: string, ficheTechnique: string, longuitude: number, latitude: number, createAnnonce: string) {
    this.id = id;
    this.prix = prix;
    this.typeAnnonce = typeAnnonce;
    this.productName = productName;
    this.description = description;
    this.ficheTechnique = ficheTechnique;
    this.longuitude = longuitude;
    this.latitude = latitude;
    this.createAnnonce = createAnnonce;
  }
  jsonObject(): string{
    return JSON.stringify(this);
  }
}
