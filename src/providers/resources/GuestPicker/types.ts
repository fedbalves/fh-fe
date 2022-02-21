export type TChildren = {
    id: string;
    age?: number;
};

export type TRoom = {
    id: string;
    adults: number;
    children?: TChildren[];
};

export interface IGuestPicker {
  items: Record<string, TRoom>;
};

export const GUEST_PICKER_ADD_ROOM = 'GUEST_PICKER_ADD_ROOM';
export const GUEST_PICKER_REMOVE_ROOM = 'GUEST_PICKER_REMOVE_ROOM';
export const GUEST_PICKER_ADD_OCCUPANT = 'GUEST_PICKER_ADD_OCCUPANT';
export const GUEST_PICKER_REMOVE_OCCUPANT = 'GUEST_PICKER_REMOVE_OCCUPANT';
export const GUEST_PICKER_SET_OCCUPANT_AGE = 'GUEST_PICKER_SET_OCCUPANT_AGE';
export const GUEST_PICKER_SUBMIT = 'GUEST_PICKER_SUBMIT';
export const GUEST_PICKER_RECOVER = 'GUEST_PICKER_RECOVER';
export const GUEST_PICKER_CLEAR = 'GUEST_PICKER_CLEAR';