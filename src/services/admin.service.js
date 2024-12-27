import api from './api'

const admindata = [
    {
        id: 23,
        idReference: 34,
        email: 'primer@gmail.com',
        group: 'ПКС 1-22 (3-курс)',
        firstName: 'Такой то ',
        lastName:'Такой то',
        surName: 'Такой то'
    },
    {
        id: 23,
        idReference: 34,
        email: 'primer@gmail.com',
        group: 'ПКС 1-22 (3-курс)',
        firstName: 'Такой то ',
        lastName:'Такой то',
        surName: 'Такой то'
    },
    {
        id: 23,
        idReference: 34,
        email: 'primer@gmail.com',
        group: 'ПКС 1-22 (3-курс)',
        firstName: 'Такой то ',
        lastName:'Такой то',
        surName: 'Такой то'
    },
    {
        id: 23,
        idReference: 34,
        email: 'primer@gmail.com',
        group: 'ПКС 1-22 (3-курс)',
        firstName: 'Такой то ',
        lastName:'Такой то',
        surName: 'Такой то'
    },
    {
        id: 23,
        idReference: 34,
        email: 'primer@gmail.com',
        group: 'ПКС 1-22 (3-курс)',
        firstName: 'Такой то ',
        lastName:'Такой то',
        surName: 'Такой то'
    },
    {
        id: 23,
        idReference: 34,
        email: 'primer@gmail.com',
        group: 'ПКС 1-22 (3-курс)',
        firstName: 'Такой то ',
        lastName:'Такой то',
        surName: 'Такой то'
    },
    {
        id: 23,
        idReference: 34,
        email: 'primer@gmail.com',
        group: 'ПКС 1-22 (3-курс)',
        firstName: 'Такой то ',
        lastName:'Такой то',
        surName: 'Такой то'
    },
    {
        id: 23,
        idReference: 34,
        email: 'primer@gmail.com',
        group: 'ПКС 1-22 (3-курс)',
        firstName: 'Такой то ',
        lastName:'Такой то',
        surName: 'Такой то'
    },
    {
        id: 23,
        idReference: 34,
        email: 'primer@gmail.com',
        group: 'ПКС 1-22 (3-курс)',
        firstName: 'Такой то ',
        lastName:'Такой то',
        surName: 'Такой то'
    },
    {
        id: 23,
        idReference: 34,
        email: 'primer@gmail.com',
        group: 'ПКС 1-22 (3-курс)',
        firstName: 'Такой то ',
        lastName:'Такой то',
        surName: 'Такой то'
    },
    {
        id: 23,
        idReference: 34,
        email: 'primer@gmail.com',
        group: 'ПКС 1-22 (3-курс)',
        firstName: 'Такой то ',
        lastName:'Такой то',
        surName: 'Такой то'
    },
    {
        id: 23,
        idReference: 34,
        email: 'primer@gmail.com',
        group: 'ПКС 1-22 (3-курс)',
        firstName: 'Такой то ',
        lastName:'Такой то',
        surName: 'Такой то'
    },
    {
        id: 23,
        idReference: 34,
        email: 'primer@gmail.com',
        group: 'ПКС 1-22 (3-курс)',
        firstName: 'Такой то ',
        lastName:'Такой то',
        surName: 'Такой то'
    },
    {
        id: 23,
        idReference: 34,
        email: 'primer@gmail.com',
        group: 'ПКС 1-22 (3-курс)',
        firstName: 'Такой то ',
        lastName:'Такой то',
        surName: 'Такой то'
    },
    {
        id: 23,
        idReference: 34,
        email: 'primer@gmail.com',
        group: 'ПКС 1-22 (3-курс)',
        firstName: 'Такой то ',
        lastName:'Такой то',
        surName: 'Такой то'
    },
]


class AdminService {
    AdminPost(data, path) {
        return new Promise(resolve => {
            return resolve({ status: 201, data: admindata })
        })
        // return api.post(`/Admin/${path}`, data);

    }
}

export default new AdminService();