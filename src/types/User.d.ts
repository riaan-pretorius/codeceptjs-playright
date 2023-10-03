import Address from "./Address";

interface User extends BaseListData {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  address: Address;
}

export default User;
