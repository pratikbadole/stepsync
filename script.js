import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = 'YOUR_PROJECT_URL'
const SUPABASE_KEY = 'YOUR_ANON_KEY'
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

async function testConnection() {
  const { data, error } = await supabase.from('steps').select('*')
  if(error) console.error('Supabase Error:', error)
  else console.log('Supabase Data:', data)
}

testConnection()
