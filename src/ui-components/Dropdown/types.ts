export interface IDropdown {
    options: unknown[];
    onSelect: (value: unknown) => {};
    selected?: unknown;
}