import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 500,
  duration: '30s',
};

export default function () {

  const url = 'http://localhost:3000/api/users';

  const payload = JSON.stringify({
  user: {
    username: 'testuser',
    email: `test${Date.now()}@gmail.com`,
    password: '123456'
  }
});

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = http.post(url, payload, params);

  check(res, {
    'status is not 500': (r) => r.status < 500,
  });

  sleep(1);
}