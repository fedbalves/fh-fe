import {
  GUEST_PICKER_ADD_ROOM,
  GUEST_PICKER_ADD_OCCUPANT,
  GUEST_PICKER_REMOVE_OCCUPANT,
  GUEST_PICKER_REMOVE_ROOM,
  GUEST_PICKER_SET_OCCUPANT_AGE,
  GUEST_PICKER_SUBMIT,
  GUEST_PICKER_RECOVER,
  GUEST_PICKER_CLEAR,
} from './types';

export const GuestPickerAddRoom = () => ({ type: GUEST_PICKER_ADD_ROOM });
export const GuestPickerAddOccupant = (payload: { id: string }) => ({ type: GUEST_PICKER_ADD_OCCUPANT, payload });
export const GuestPickerRemoveOccupant = (payload: { id: string, oid?: string, type?: string }) => ({ type: GUEST_PICKER_REMOVE_OCCUPANT, payload });
export const GuestPickerRemoveRoom = (payload: { id: string }) => ({ type: GUEST_PICKER_REMOVE_ROOM, payload });
export const GuestPickerSetOccupantAge = (payload: { id: string, oid: string, value: number }) => ({ type: GUEST_PICKER_SET_OCCUPANT_AGE, payload });
export const GuestPickerSubmit = (payload: string) => ({ type: GUEST_PICKER_SUBMIT, payload });
export const GuestPickerRecover = (payload: string) => ({ type: GUEST_PICKER_RECOVER, payload });
export const GuestPickerClear = () => ({ type: GUEST_PICKER_CLEAR });
