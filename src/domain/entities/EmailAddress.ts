export class EmailAddress {
  static readonly regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

  constructor(readonly value: string){
    this.validateEmail()
  }

  private validateEmail(){
    if(!EmailAddress.regex.test(this.value)) {
      throw new Error('INVALID_EMAIL')
    }
  }
}