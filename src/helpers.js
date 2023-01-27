import { ROOT_PATH } from "./constants";

export const isEmptyObject = obj  => JSON.stringify(obj) === '{}';
export const appendRootPath = path => (`${ROOT_PATH}${path}`);