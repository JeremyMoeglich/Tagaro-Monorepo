import sizeof from 'object-sizeof';

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function post({ params }) {
    if (sizeof(params) > 30000) {
        return {
            status: 413,
            body: "Too large"
        };
    }
    console.log(params)

    //client.lpush("forms", "form_data")


    return {
        body: params
    };

}