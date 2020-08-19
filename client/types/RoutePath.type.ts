export interface RoutePath {
  id?: number | null;
  isActive: number | boolean;
  name: string;
  fatherID: number | null | String;
  level: string | number;
  url: string;
  icon: string;
  parent?: parent,
  children?: RoutePath[];
  actions?: any[];
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

interface parent {
  id: any
}
