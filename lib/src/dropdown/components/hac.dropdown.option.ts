export interface IHacDropdownOption {
  key: string | number;
  value: any;
  label: string;
}

export interface IHacDropdownGroup {
  options: IHacDropdownOption[];
  label: string;
}