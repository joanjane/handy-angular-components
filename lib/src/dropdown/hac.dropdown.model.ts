export interface IHacDropdownOption {
  key: string | number;
  value: any;
  label: string;
}

export interface IHacDropdownOptionGroup {
  options: IHacDropdownOption[];
  label?: string;
}