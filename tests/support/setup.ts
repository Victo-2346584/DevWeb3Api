import { beforeAll, afterEach } from 'vitest';
import supertest, { SuperTest, Test } from 'supertest';
import app from '@src/server';
import TestAgent from 'supertest/lib/agent';

export let agent: TestAgent;

beforeAll(() => {
  agent = supertest(app);
});
