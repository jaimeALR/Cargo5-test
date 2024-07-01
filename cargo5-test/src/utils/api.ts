import { getAxiosInstance } from "./axios";
import { authenticate } from "./auth";;

const BASE_URL = 'https://coreapp.cargofive.com/api/v1/front';

/* Methods to get data to the APIs */

export async function getOwners() {
    const token = await authenticate();
    const axiosInstance = await getAxiosInstance();

    return axiosInstance.get(`${BASE_URL}/v1/front/owners`, {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });
}

export async function getCompanies(clientId: string) {
    const token = await authenticate();
    const axiosInstance = await getAxiosInstance();

    return axiosInstance.get(`${BASE_URL}/clients`, {
        headers: {
            'Authorization': `Bearer ${token}`
        },
        params: {
            client_id: clientId
        }
    });
}

export async function getContacts() {
    const token = await authenticate();
    const axiosInstance = await getAxiosInstance();

    return axiosInstance.get(`${BASE_URL}/contacts`, {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });
}

export async function getKindOfCargo() {
    const token = await authenticate();
    const axiosInstance = await getAxiosInstance();

    return axiosInstance.get(`${BASE_URL}/kind_of_cargo`, {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });
}

export async function getIncoterms() {
    const token = await authenticate();
    const axiosInstance = await getAxiosInstance();

    return axiosInstance.get(`${BASE_URL}/incoterms`, {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });
}

export async function getLanguages() {
    const token = await authenticate();
    const axiosInstance = await getAxiosInstance();

    return axiosInstance.get(`${BASE_URL}/languages`, {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });
}

/* Organize the data in constants */

export async function fetchAllData() {

    const [languages, incoterms, owners, clients, kind_of_cargo, /* contacts */] = await Promise.all([
        getOwners(),
        getContacts(),
        getKindOfCargo(),
        getIncoterms(),
        getLanguages(),
       /*  getCompanies(client) */
    ]);

    return {
        languages: languages.data,
        incoterms: incoterms.data,
        owners: owners.data,
        clients: clients.data,
        kind_of_cargo: kind_of_cargo.data,
        /* contacts: contacts.data */
    };
}