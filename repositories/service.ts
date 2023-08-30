import { DatabaseUserRepository } from "./DatabaseUserRepository";
import { MemoryUserRepository } from "./MemoryUserRepository";
import { User, UserRepository } from "./model";

class Service {
  private repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  public getAllUsers(): User[] {
    return this.repository.getUsers();
  }

  public getUserById(dupa: string): User {
    return this.repository.getUser(dupa);
  }
};

// const usersService = new Service(new MemoryUserRepository());
const usersService = new Service(new DatabaseUserRepository());
const users = usersService.getAllUsers();

console.log({ users });