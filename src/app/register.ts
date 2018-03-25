export class register {
  mobile: number;
  firstName: string;
  lastName: string;
  password: {
    pwd: string;
    confirmPwd: string;
  };;
  email: string;

  constructor(values: Object = {}) {
    //Constructor initialization
    Object.assign(this, values);
  }
}