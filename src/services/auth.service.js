import api from "./api";

const userInfo = {"id":14,"email":"adil","firstName":"Name","lastName":"Name","roles":"ADMIN", "password":"pass"}

class AuthService {
login(data) {
    return new Promise(resolve => {
      return resolve({ status: 201, data: userInfo })
    })
    // return api.post('/reports/addOrder', data)
    // console.log(data);
    
  }
}

export default new AuthService();