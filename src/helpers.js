import { ROOT_PATH } from './constants';

export const isEmptyObject = (obj) => JSON.stringify(obj) === '{}';
export const appendRootPath = (path) => `${ROOT_PATH}${path}`;

export const isParameterInvalid = (param) => typeof param === 'undefined' || !param;

export const createHttpErrorMessage = (httpStatus) => `HTTP error occured, status: ${httpStatus}`;
export const createInvalidParamErrorMessage = (param1, param2 = '') =>
  `Error occured, invalid parameter given: ${param1} ${param2}`;
