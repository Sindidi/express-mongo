let connexion = require("../config/db")
var localStorage = require('localStorage')
let seudoSchema = require("../Models/pseudo")
class pseudo {

    static create (content) {
        let pseudo = new seudoSchema({ libelle: content });

        pseudo.save(function(err){
            if(err) return handleError(error);
            
            localStorage.setItem('author', content);
            return content;
        })
    }
}

module.exports = pseudo;