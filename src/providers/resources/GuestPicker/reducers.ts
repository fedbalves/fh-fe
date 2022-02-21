import { generate as createID } from 'shortid';
import defaultProps from './default';

import {
  GUEST_PICKER_ADD_ROOM,
  GUEST_PICKER_ADD_OCCUPANT,
  GUEST_PICKER_REMOVE_ROOM,
  GUEST_PICKER_REMOVE_OCCUPANT,
  GUEST_PICKER_SET_OCCUPANT_AGE,
  GUEST_PICKER_RECOVER,
  GUEST_PICKER_CLEAR,
} from './types';

export const GuestPickerReducer = (state = defaultProps, { type, payload }) => {
  switch (type) {
    case GUEST_PICKER_ADD_ROOM: {
      const newState = state;
      const ID = createID();

      newState.items[ID] = {
        id: ID,
        adults: 1,
        children: [],
      };

      window.scrollTo({
        top: document.body.scrollHeight,
        left: 0,
        behavior: 'smooth'
      });

      return {
        ...newState,
        update: Date.now(),
      };
    }

    case GUEST_PICKER_ADD_OCCUPANT: {
      const newState = state;
      const { id: roomID, type: occupantType } = payload;
      const ID = createID();

      try {
        if (occupantType === 'children') {
          newState.items[roomID].children.push({
            id: ID
          });
        } else {
          newState.items[roomID].adults = newState.items[roomID].adults + 1;
        }
      } catch (e: ReturnType<Error>) {
        console.warn(`Impossible to edit room ${roomID}.`);
      }

      return {
        ...newState,
        update: Date.now(),
      };
    }

    case GUEST_PICKER_REMOVE_ROOM: {
      const newState = state;
      const { id: roomID } = payload;

      delete newState.items[roomID];

      return {
        ...newState,
        update: Date.now(),
      };
    }

    case GUEST_PICKER_REMOVE_OCCUPANT: {
      const newState = state;
      const { id: roomID, oid: occupantID, type } = payload;
      const room = newState.items[roomID];

      try {
        if (type === 'children') {
          if (!occupantID) {
            const undefinedRooms = room.children.filter(({ age }) => !age);
            const definedRooms = room.children.filter(({ age }) => age);

            undefinedRooms.pop();

            room.children = [ ...definedRooms, ...undefinedRooms ];
          } else {
            room.children = room.children.filter(({ id }) => id !== occupantID);
          }
        } else {
          room.adults = room.adults === 1 ? 1 : room.adults - 1;
        }
      } catch (e: ReturnType<Error>) {
        console.warn(`Impossible to edit ${roomID}.`);
      }

      return {
        ...newState,
        update: Date.now(),
      };
    }

    case GUEST_PICKER_SET_OCCUPANT_AGE: {
      const newState = state;
      const { id: roomID, oid: occupantID, value: age } = payload;

      const childrens = newState.items[roomID].children;

      try {
        const occupantIdx = childrens.findIndex(({ id }) => id === occupantID);
        newState.items[roomID].children[occupantIdx].age = age;
      } catch (e: ReturnType<Error>) {
        console.warn(`Impossible set age on ${roomID} for occupant ${occupantID}.`);
      }

      return {
        ...newState,
        update: Date.now(),
      };
    }

    case GUEST_PICKER_RECOVER: {
      const newState = state;

      const rooms = payload.split('|');
      
      rooms.forEach((room) => {
        const ID = createID();
        const [adults, childrens] = room.split(':');

        let children = [];
        if (childrens) {
          const childrenAges = childrens.split(',');

          childrenAges.forEach((child) => {
            const childrenID = createID();
            children.push({
              id: childrenID,
              age: Number(child),
            });
          });
        }

        newState.items[ID] = {
          id: ID,
          adults: Number(adults),
          children,
        }
      });

      return {
        ...newState,
        update: Date.now(),
      };
    }

    case GUEST_PICKER_CLEAR: {
      return {
        items: {},
        update: Date.now(), 
      }
    }

    default: return state;
  }
};
