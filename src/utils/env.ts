import { z } from 'zod';
import { createEnv } from '@t3-oss/env-nextjs';

export const env = createEnv({
  server: {
    SITE_URL: z.string().min(1)
  },
  client: {},
  runtimeEnv: {
    SITE_URL: process.env.SITE_URL
  },
});
