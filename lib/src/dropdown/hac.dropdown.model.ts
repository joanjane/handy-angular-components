export interface IHacDropdownOption {
  key: string | number;
  label: string;
}

export interface IHacDropdownOptionGroup {
  options: IHacDropdownOption[];
  label?: string;
}