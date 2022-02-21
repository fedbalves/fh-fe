export type TTextVariant = 'default' | 'p' | 'h1';

export interface IText extends Partial<Omit<HTMLParagraphElement, "children">> {
    children?: string;
    text?: string;
    variant?: TTextVariant;
    color?: string;
    textAlign?: 'start' | 'center' | 'end';
    fontSize?: string;
}