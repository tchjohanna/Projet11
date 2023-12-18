import axios from "axios";


  class ApiCalls {
   async userLogIn(email, password, rememberMe) {
    try {
      const response = await axios.post(
        'http://localhost:3001/api/v1/user/login',
        {
          email: email,
          password: password
        }
      );

      if (response.data.body.token) {
        if (rememberMe) {
          sessionStorage.setItem("JWT", response.data.body.token);
        }
        console.log("Mon token de connexion est: " + response.data.body.token);
        return response;
      }
    } catch (error) {
      return error.response ? error.response.data : error;
    }
  }

  // Fonction pour récupérer les données du profil de l'utilisateur
  async getUserProfileData(JWT) {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/profile",
        {},
        {
          headers: {
            Authorization: "Bearer " + JWT
          }
        }
      );
      return response;
    } catch (error) {
      return error;
    }
  }

  // Fonction pour mettre à jour les données du profil de l'utilisateur
  async updateUserProfileData(firstName, lastName, JWT) {
    try {
      const response = await axios.put(
        "http://localhost:3001/api/v1/user/profile",
        {
          firstName,
          lastName
        },
        {
          headers: {
            Authorization: "Bearer " + JWT
          }
        }
      );
      return response;
    } catch (error) {
      return error;
    }
    
  }
  
  async getEditUserData(JWT) {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/profile",
        {},
        {
          headers: {
            Authorization: "Bearer " + JWT
          }
        }
      );
      return response;
    } catch (error) {
      return error.response ? error.response.data : error;
    }
  }
  
}


export default ApiCalls;
