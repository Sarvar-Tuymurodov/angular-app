export interface UsersMod{
  id: number,
  name:string,
  username:string,
  email:string,
  address: {
    street: string
  }
  phone:string,
  company:object
}
