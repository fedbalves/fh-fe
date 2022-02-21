import { ISVGProps } from '../Svg/types';

export type TIconButtonVariant = "default" | "clean";

export interface IIconButton {
    icon: ISVGProps;
    variant?: TIconButtonVariant;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: 'disabled';
}