import axios from 'axios';
// @ts-ignore
import httpAdapter from 'axios/lib/adapters/http';
import * as dotenv from 'dotenv';
import * as nock from 'nock';
import 'isomorphic-unfetch';

dotenv.config({ path: '.env.test' });

axios.defaults.adapter = httpAdapter;

afterAll(() => {
  nock.cleanAll();
  nock.restore();
});

window.matchMedia = jest.fn().mockImplementation((query) => {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  };
});

window.scroll = jest.fn();
window.alert = jest.fn();
