export const UMA_ID_1 = "umaId1";
export const UMA_ID_2 = "umaId2";
export const UMA_ID_3 = "umaId3";
export const UMA_ID_4 = "umaId4";

const INITIAL_UMA_ID_1 = 10; //ウオッカ
const INITIAL_UMA_ID_2 = 11; //ダイワスカーレット
const INITIAL_UMA_ID_3 = 14; //エルコンドルパサー
const INITIAL_UMA_ID_4 = 12; //グラスワンダー

export function initializeLocalStorage() {
  updateForNotFouncLocalStorage(UMA_ID_1, INITIAL_UMA_ID_1);
  updateForNotFouncLocalStorage(UMA_ID_2, INITIAL_UMA_ID_2);
  updateForNotFouncLocalStorage(UMA_ID_3, INITIAL_UMA_ID_3);
  updateForNotFouncLocalStorage(UMA_ID_4, INITIAL_UMA_ID_4);
}

function updateForNotFouncLocalStorage(key, value) {
  const find = getSavedUmaId(key);
  console.log("findKey", find);
  if (!find) updateUmaId(key, value);
}

export function getSavedUmaId(key) {
  const value = localStorage.getItem(key);
  console.log("getSavedUmaId: ", key);
  return value;
}

export function updateUmaId(key, value) {
  console.log("updateUmaId: ", key, value);
  localStorage.setItem(key, value);
}
