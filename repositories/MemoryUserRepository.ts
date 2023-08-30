import { User, UserRepository } from "./model";

export class MemoryUserRepository implements UserRepository {
  users: User[];

  constructor() {
    this.users = [{ id: "1", name: "Stefan" }];
  }

  public getUsers(): User[] {
    return this.users;
  }
  
  public getUser(id: string): User {
    const user = this.users.find(u => u.id === id);
    
    if(!user) throw new Error(`No user found for id: ${id}`);
    
    return user;
  };
}