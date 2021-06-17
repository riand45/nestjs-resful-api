export interface DbMedeaAttributes {
  username?: string;
  password?: string;
  database?: string;
  host?: string;
  port?: number | string;
  dialect?: string;
  urlDatabase?: string;
  replication?: DbMedeaReplicationAttributes;
  pool?: { min?:number, max?: number, idle?: number, acquire?:number }
}

export interface DbMedeaReplicationAttributes {
  read: [
    { port:string, host: string, username: string, password: string, database: string }
  ];
  write: { port:string, host: string, username: string, password: string, database: string }
}

export interface DbMedeaConfig {
  masterSlave: DbMedeaAttributes;
  single: DbMedeaAttributes;
}