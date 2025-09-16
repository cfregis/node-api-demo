import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  // Key configurations for Stress in this section
  stages: [
    { duration: '2s', target: 800 }, // traffic ramp-up from 1 to a higher 2500 users over 2s.
    { duration: '2s', target: 800 }, // stay at higher 2500 users for 2s
    { duration: '1s', target: 0 }, // ramp-down to 0 users
  ],
};

export default () => {
  const urlRes = http.get('http://localhost:8087');
  sleep(1);
  // MORE STEPS
  // Here you can have more steps or complex script
  // Step1
  // Step2
  // etc.
};