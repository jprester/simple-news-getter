import axios from 'axios';

import { API_KEY, CATEGORY, COUNTRY, HOST, VERSION } from '../helpers/apiConfig';

export async function getTopHeadlines(country = COUNTRY.US, category = CATEGORY.BUSINESS, pageSize = 20) {
  const url = `${HOST}/${VERSION}/top-headlines?country=${country}&category=${category}&pageSize=${pageSize}&apiKey=${API_KEY}`;

  return axios.get(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export async function searchAllArticles(query: string, pageSize = 20) {
  if (!query) {
    return;
  }

  const url = `${HOST}/${VERSION}/everything?q=${query}&apiKey=${API_KEY}`;

  return axios.get(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
