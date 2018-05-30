import axios from 'axios';

const BASE_URL = `http://127.0.0.1:8000/`;

export const ADD_MENU = 'ADD_MENU';
export const GET_MENU_ITEM = 'GET_MENU_ITEM';

export function addMenuItem(name, price, size) {
  const url = `${BASE_URL}menu/`;

  const request = axios.post(url, {
    "item_name": name,
    "item_price": price,
    "item_size": size
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  return {
    type: ADD_MENU,
    payload: request
  }
}

export function retrieveMenuItem(name) {
  const url = `{BASE_URL}/menu/`;

  const request = axios.get(url)
  .then(res => console.log(res))
  .catch(err => console.log(err))

  return {
    type: GET_MENU_ITEM,
    payload: request
  }
}
