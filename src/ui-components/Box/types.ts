import { ReactElement } from 'react';

export type TBoxVariant = 'default' | 'flex';

export interface IBox extends Partial<Omit<HTMLDivElement, "children">> {
    width?: string;
    height?: string;
    minHeight?: string;
    padding?: string;
    margin?: string;
    gap?: number;
    variant?: TBoxVariant;
    children?: ReactElement | ReactElement[];
    flexDirection?: 'column' | 'row';
    alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch';
    justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-around' | 'space-between' | 'space-evenly';
    flexGrow?: number;
    borderBottom?: boolean;
    borderLeft?: boolean;
    borderTop?: boolean;
}

export interface IAbsBox {
    attachTo: 'bottom' | 'top';
    children?: ReactElement | ReactElement[];
}