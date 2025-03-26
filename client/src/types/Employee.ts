export interface Employee {
  id: number;
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  contractType: string;
  startDate: string;
  finishDate: string;
  ongoing: boolean;
  timeBasis: string;
  hours: number;
}
