export class AuthService{
  status = false;
  isAccessible(): any {
    const promise = new Promise((resolve, reject) => {
      setTimeout( () => resolve(this.status) , 1000 );
    } );
    return promise;
  }
  login(): void{
    this.status = true;
  }
  logout(): void{
    this.status = false;
  }
}
