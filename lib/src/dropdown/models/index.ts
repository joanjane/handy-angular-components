export interface HacDropdownOption {
  key: string | number;
  label: string;
}

export interface HacDropdownOptionGroup {
  options: HacDropdownOption[];
  label?: string;
}