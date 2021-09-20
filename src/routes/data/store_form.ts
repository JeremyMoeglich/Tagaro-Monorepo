import redis from 'redis';
import sizeof from 'object-sizeof';
import { DB_HOST, DB_PASSWORD, DB_PORT } from '$lib/Env'


const client = redis.createClient({
    host: DB_HOST,
    password: DB_PASSWORD,
    port: DB_PORT
});


/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function post({ params }) {
    if (sizeof(params) > 30000) {
        return {
            body: "Too large"
        };
    }
    console.log(params)

    //client.lpush("forms", "form_data")


    return {
        body: params
    };

}