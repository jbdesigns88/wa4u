import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const cleanupData = async (table: string) => {

};

const sanitizeAgainstSQLInjection = (input: string) => {
    return input.replace(/'/g, "''");
}

const sanitizeAgainstXSS = (input: string) => {
    return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}


const insertData = async (table: string, data: object) => {
    const { data , error } = await supabaseClient.from(table).insert([data]);
    



    if (error) {
        console.error('Error inserting data:', error);
    } else {
        console.log('Data inserted successfully');
    }

    return !error;
}


export default supabaseClient;