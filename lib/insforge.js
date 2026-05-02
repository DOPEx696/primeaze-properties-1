import { createClient } from '@insforge/sdk';

const baseUrl = 'https://a5kqfke3.ap-southeast.insforge.app';
const anonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3OC0xMjM0LTU2NzgtOTBhYi1jZGVmMTIzNDU2NzgiLCJlbWFpbCI6ImFub25AaW5zZm9yZ2UuY29tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc2NjU5NDl9.pcYHBS_PhFGU4yQMcRVrqS_2JsPuitma-_p_h8v0XkM';

export const insforge = createClient({
  baseUrl,
  anonKey
});
