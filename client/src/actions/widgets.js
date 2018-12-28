export const ADD_WIDGET = 'ADD_WIDGET'
export const FETCH_WIDGETS = 'FETCH_WIDGETS'

export function fetchWidgets(payload) {
  return {
    type: FETCH_WIDGETS,
    payload: ['widget 1', 'widget 2', 'widget 3']
  }
}

export function addWidget(payload) {
  return { type: ADD_WIDGET, payload }
};
