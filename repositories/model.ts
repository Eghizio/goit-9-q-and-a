export type User = {
  id: string;
  name: string;
};

export interface UserRepository {
  getUsers: () => User[];
  getUser: (id: string) => User;
}