import { User, UserRepository } from "./model";

export class DatabaseUserRepository implements UserRepository {
  db: User[] = [{ id: "2", name: "Andrzej" }];

  public getUsers(): User[] {
    return this.db;
  }
  
  public getUser(id: string): User {
    const user = this.db.find(u => u.id === id);
    
    if(!user) throw new Error(`No user found for id: ${id}`);
    
    return user;
  };

  private serializeUser({ id, name }: User): string {
    return id + name;
  }
}