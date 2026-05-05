const { createClient } = require('@insforge/sdk');
require('dotenv').config({ path: '.env.local' });

const baseUrl = process.env.NEXT_PUBLIC_INSFORGE_URL;
const anonKey = process.env.NEXT_PUBLIC_INSFORGE_ANON_KEY;

const insforge = createClient({
  baseUrl,
  anonKey
});

async function createAdmin() {
  const email = 'joelbijoy0924@gmail.com';
  const password = 'PrimeazeAdmin123';

  console.log(`Attempting to create admin user: ${email}`);

  const { data, error } = await insforge.auth.signUp({
    email,
    password,
    name: 'Admin'
  });

  if (error) {
    if (error.message.includes('already registered')) {
      console.log('Admin user already exists.');
    } else {
      console.error('Error creating admin:', error);
    }
  } else {
    console.log('Admin user created successfully!');
    if (data.requireEmailVerification) {
      console.log('Please check your email to verify the account.');
    }
  }
}

createAdmin();
