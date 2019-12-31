import { albumConstants } from '../constants';

const initialState = {
  loading: false,
  album: {
    period_all: '',
    period_from: '',
    period_to: '',
    title: '',
    pagination_row: '',
    pagination_column: '',
    cover_photo: '',
  }
};

export function album(state = initialState, action) {
  switch (action.type) {
    case albumConstants.ALBUM_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case albumConstants.ALBUM_SHOW:
      return {
        ...state,
        loading: false,
        album: action.payload,
      };
    case albumConstants.ALBUM_TITLE:
      return {
        ...state,
        loading: false,
        title: action.payload,
      };
    case albumConstants.ALBUM_PERIOD:
      return {
        ...state,
        loading: false,
        period_all: action.payload,
      };
    case albumConstants.ALBUM_PERIOD_FROM:
      return {
        ...state,
        loading: false,
        period_from: action.payload,
      };
    case albumConstants.ALBUM_PERIOD_TO:
      return {
        ...state,
        loading: false,
        period_to: action.payload,
      };
    case albumConstants.ALBUM_READ:
      return {
        ...state,
        loading: false,
        album: action.payload,
      };
    case albumConstants.ALBUM_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state
  }
}