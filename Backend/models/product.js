import {  DataTypes } from "sequelize";
import {database} from '../connexion.js'





export const Produit=database.define('produit',{
    nom:{type:DataTypes.STRING},
    chemin_image:{type:DataTypes.STRING},
    prix:{type:DataTypes.DECIMAL},
    
})
