export interface IUser {
  email?: string;
  isAuth?: boolean;
}

const userEmpty = {
  email: undefined,
  isAuth: false
};

export enum UserAction {
  ADD_USER = 'ADD_USER',
  REMOVE_USER = 'REMOVE_USER'
}

export default (state: IUser = userEmpty, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case UserAction.ADD_USER:
      return { ...state, ...payload };
    case UserAction.REMOVE_USER:
      return state;
    default:
      return state;
  }
};

export function addUser(payload: IUser) {
  return {
    type: UserAction.ADD_USER,
    payload
  };
}

export function removeUser() {
  return {
    type: UserAction.REMOVE_USER,
    payload: undefined
  };
}