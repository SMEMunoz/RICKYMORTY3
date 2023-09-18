let myFavorites = [];

const postFav = (req, res) => {
    const personaje = req.body;
        myFavorites.push(personaje); 
        res.status(200).json(myFavorites);
        
   
};


const deleteFav = (req, res) => {
        const {id} = req.params;
        const filtered = myFavorites.filter(fav => fav.id !== Number(id));
        myFavorites = filtered;
        res.status(200).json(myFavorites);
    
}

module.exports = {postFav, deleteFav}