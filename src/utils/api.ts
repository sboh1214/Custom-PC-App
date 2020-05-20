import {PART} from './parts';

const HOST = 'http://localhost:8000';

export function getPartList(part: PART): Promise<any> {
  return new Promise((resolve, reject) => {
    fetch(HOST + '/quotemaker/' + part)
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
