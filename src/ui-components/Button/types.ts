import { ISVGProps } from '../Svg/types';

export type TButtonVariant = "default" | "action" | "CTA";

export interface IButton {
    children?: string;
    text?: string;
    variant?: TButtonVariant;
    color?: string;
    icon?: ISVGProps;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: 'disabled';
}