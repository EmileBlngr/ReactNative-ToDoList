import {GetUserListsBouchon} from './bouchons/UserLists';
const Bouchon = true;

export const GetUserLists = async () => {
  if (Bouchon) {
    const lists = GetUserListsBouchon();
    return lists;
  }
}