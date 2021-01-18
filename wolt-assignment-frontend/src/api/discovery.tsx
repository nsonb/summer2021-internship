import {dataWrapper} from '../types/type';
import data from './discovery-page.json';

export const resData= JSON.parse(JSON.stringify(data.sections)) as dataWrapper[]
