interface Me {
  username: string;
  email: string;
  password: string;
  id: string;
}

interface User {
  username: string;
  email: string;
  role: string;
}

interface Loaders {
  user: {
    load: (id: string) => Promise<User>;
  };
  customer: {
    load: (id: string) => Promise<any>;
  };
  vehicle: {
    load: (id: string) => Promise<any>;
  };
}

export interface Context {
  me: Me;
  models: any;
  secret: string;
  loaders: Loaders;
}
