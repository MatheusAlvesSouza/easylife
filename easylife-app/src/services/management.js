import { post, get, deleted } from '~/utils/ajax';

export const SignInUser = async (email, password) => {
    const response = await post('/login', { email, senha: password});
    return response.json();
}

export const SendFeedBack = async (feedback) => {
    const response = await post('/avaliacao', feedback);
    return response.json();
}

export const FindFeedBacksByEstablishment= async (id) => {
    const response = await get('/avaliacao/' + id);
    return response.json();
}

export const AddFavorite = async (proprietarioId) => {
    const response = await post('/cliente/favorito', { proprietarioId: proprietarioId});
    return response.json();
}

export const RemoveFavorite = async (proprietarioId) => {
    const response = await deleted('/cliente/favorito/' + proprietarioId);
    return response.json();
}

export const FindAllEstablishments = async () => {
    const response = await get('/proprietario');
    return response.json();
}

export const FindEstablishmentsByWord = async (word) => {
    const response = await get('/proprietario?words=' + word + '&deficiencias=1&deficiencias=2&deficiencias=3');
    return response.json();
}

export const FindEstablishmentById = async (id) => {
    const response = await get('/proprietario/' + id);
    return response.json();
}