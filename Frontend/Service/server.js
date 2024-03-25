import axioss from './axios';
import axios from 'axios';

// Configurer axios avec l'URL de base de votre API
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL // Assurez-vous de définir cette variable dans votre .env
});

export const addUser = async (userData) => {

    console.log(userData)
    const result = await axios.post(`http://localhost:5005/utilisateur/`, userData);
    return result.data;
};


export const login = async (courriel, mot_de_passe)=>{
    try {
        console.log('*******************************************')
        
        // Creating the payload for the login request
        const loginData = { courriel, mot_de_passe };

        console.log(loginData)

        // Sending a POST request to the backend API endpoint for login
        const response = await axios.post(`http://localhost:5005/login/`, loginData);

        // The response should contain the user data and the token upon successful login
        if (response.status === 200) {
            const { data, token } = response.data;

            // You can now store the token in localStorage/sessionStorage or in a global state (like Vuex)
            // For example: localStorage.setItem('token', token);

            // Return the user data and token
            return { data, token };
        } else {
            // Handle unsuccessful login attempts
            throw new Error('Login failed');
        }
    } catch (error) {
        // Handle any errors during the login process
        console.error('Login error:', error.message);
        throw error;
    }
}


export const getUserById= async ()=>{

  const response = await axioss.get(`http://localhost:5005/utilisateur/by`)

  if (response.status === 200) {
    
    console.log("Réponse complète du serveur:", response);
    // You can now store the token in localStorage/sessionStorage or in a global state (like Vuex)
    // For example: localStorage.setItem('token', token);

    // Return the user data and token
    return response;}




}


export const addCategory= async (nom)=>{
  const requestBody = { nom: nom };
 console.log(nom)
  const response = await axioss.post(`http://localhost:5005/categorie/`, requestBody)

  if (response.status === 200) {
    
    console.log("Réponse complète du serveur:", response);
    // You can now store the token in localStorage/sessionStorage or in a global state (like Vuex)
    // For example: localStorage.setItem('token', token);

    // Return the user data and token
    return response;}




}

export const listeCategorie =  async ()=>{

  const response = await axioss.get(`http://localhost:5005/categorie/`)

  if (response.status === 200) {
    
   // console.log("Réponse complète du serveur:", response);
    // You can now store the token in localStorage/sessionStorage or in a global state (like Vuex)
    // For example: localStorage.setItem('token', token);

    // Return the user data and token
    return response;}

}

// Fichier /Service/server.js


export const getAllProduits = async () => {

  const response =await axios.get(`http://localhost:5005/produit/`);
  console.log(response)
  return response
};

export const addProduit = async (data) => {

  console.log(data.nom)
  return await axioss.post(`http://localhost:5005/produit/`, data);
};

export const addRole = async (data)=>{
  console.log(data)
  return await axioss.post(`http://localhost:5005/typeutilisateur/`, JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  
}

export const listeRole = async()=>{
  return await axioss.get('http://localhost:5005/typeutilisateur/')
}



export const updateRole = async (data) => {
  return await axioss.put(`http://localhost:5005/typeutilisateur/updatebyid/`, JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

export const updateCategory = async (data) => {
  console.log("hello");
  try {
    const response = await axioss.put(`http://localhost:5005/categorie/`, JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log("Réponse après mise à jour :", response);
    return response;
  } catch (error) {
    console.error("Erreur lors de la mise à jour de la catégorie :", error);
    throw error; // Rethrow l'erreur pour un traitement ultérieur
  }
};

export const updateProduit = async (data) => {
  try {
    const response = await axioss.put(`http://localhost:5005/produit/`, data, {
      headers: {
        // Ne définissez pas explicitement le Content-Type ici; laissez Axios et le navigateur le faire.
        // 'Content-Type': 'multipart/form-data' sera automatiquement défini correctement pour un objet FormData
      }
    });
    console.log("Réponse après mise à jour :", response);
    return response;
  } catch (error) {
    console.error("Erreur lors de la mise à jour du produit :", error);
    throw error;
  }
};

export const getPanierByUserId = async () =>{
  return await axioss.get('http://localhost:5005/panier/user')
}

export const addPanier = async () =>{
  return await axioss.post('http://localhost:5005/panier/')
}

export const addPanierProduit = async (panierId, produitId) =>{

  const data ={panierId,produitId}

  
 
  return await axioss.post('http://localhost:5005/panier_produit/',data)
}


export const viderPanier = async (panierId) => {
 
  const donnée = {panierId}
  console.log(donnée)
  return await axioss.delete('http://localhost:5005/panier_produit/', {
    data: donnée,
    headers: {
      // Si vous avez besoin de définir des en-têtes spécifiques
    }
  });
}

export const getPanierProduit = async (panierId) => {
  const params = { panierId }; // Utilisez 'params' pour passer les paramètres de requête
  //console.log(params);

  console.log("helloo")
  return await axioss.get('http://localhost:5005/panier_produit/', { params });
}


export const suprimerProduitDuPanier = async (produitId, panierId) => {
 
  const donnée = {produitId, panierId}
  console.log(donnée)
  return await axioss.delete('http://localhost:5005/panier_produit/all', {
    data: donnée,
    headers: {
      // Si vous avez besoin de définir des en-têtes spécifiques
    }
  });
}


export const supUnProduit = async (produitId, panierId) =>{

  const donnée = {produitId, panierId}

  console.log("*************************************************************************************")
 
  return await axioss.delete('http://localhost:5005/panier_produit/sup',{
    data: donnée,
    headers: {
      // Si vous avez besoin de définir des en-têtes spécifiques
    }
  });
}


export const commande = async ( panierId) =>{

  const donnée = {panierId}

  console.log(donnée)

  console.log("*************************************************************************************")
 
  return await axioss.post('http://localhost:5005/commande/',{
    data: donnée,
    headers: {
      // Si vous avez besoin de définir des en-têtes spécifiques
    }
  });
}


export const getCommandes = async ()=>{

  return await axioss.get('http://localhost:5005/commande/')
}

export const updateCommande = async ( id, etatCommandeId) =>{

  const donnée = {id,etatCommandeId}

  console.log(donnée)

  console.log("*************************************************************************************")
 
  return await axioss.put('http://localhost:5005/commande/',{id, etatCommandeId
   
  });
}

export const commandes = async ()=>{
 
  return await axioss.get('http://localhost:5005/commande/byid')

}

export const utilisateurs = async ()=>{
 
  return await axioss.get('http://localhost:5005/utilisateur/')

}

export const updateUser = async (id, typeUtilisateurId )=>{

  return await axioss.put('http://localhost:5005/utilisateur/put',{id, typeUtilisateurId
   
  });
  
}




  