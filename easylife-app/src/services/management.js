import { post } from '~/utils/ajax';

export const SignInUser = async (email, password) => {
    // if(email === 'mat@hotmail.com' && password === '123') {
    //     // Mock success True
    //     const response = await get('/b279c8ab-5238-4f3f-89ad-6f8b9cb598e9');
    //     return response.json();
    // }

    const response = await post('/login', { email, senha: password});

    // Mock success False !
    // const responseFake = await get('/aa81f942-43e2-4c6b-ab90-799dc074063e');
    return response.json();
}