export class Annonce {
  id: number;
  productName: string;
  price: number;
  type: string;
  categorise: string;
  description: string;
  technicalFrom: string;
  longitude: number;
  latitude: number;
  creationDate: Date;
  constructor(id: number, productname: string, price: number,
              type: string, categorise: string, description: string,
              technicalFrom: string, longitude: number, latitude: number, creationDate: Date) {
    this.id = id;
    this.productName = productname;
    this.price = price;
    this.type = type;
    this.categorise = categorise;
    this.description = description;
    this.technicalFrom = technicalFrom;
    this.longitude = longitude;
    this.latitude = latitude;
    this.creationDate = creationDate;
  }

  jsonObject(): string {
    return JSON.stringify(this);
  }
}
