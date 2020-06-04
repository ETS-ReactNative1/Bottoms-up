//===================================================
// Import requires files
//===================================================

import axios from 'axios';
import { COCKTAIL_API } from 'react-native-dotenv';
import React from 'react';

// Define API functions inside exported module.

export default {

    // SEARCH COCKTAIL BY INGREDIENT

    searchByIngredient: function (searchTerm) {
        const apiKey = COCKTAIL_API;

        return axios({
            method:'GET',
            url: `https://www.thecocktaildb.com/api/json/v2/${apiKey}/search.php?i=${searchTerm}`,
            header: {
                Accept: 'application/json',
                'content-type': 'application/json',
            },
        })
        .then((res) => res.data)
        .catch((err) => console.log(err))
    },

    // SEARCH COCKTAIL BY NAME

    searchCocktailByName: function (searchTerm) {
        const apiKey = COCKTAIL_API;

        return axios({
            method:'GET',
            url: `https://www.thecocktaildb.com/api/json/v2/${apiKey}/search.php?s=${searchTerm}`,
            header: {
                Accept: 'application/json',
                'content-type': 'application/json',
            },
        })
        .then((res) => res.data)
        .catch((err) => console.log(err))
    },

    // SEARCH FOR POPULAR COCKTAILS

    searchForPopular: function () {
        const apiKey = COCKTAIL_API;

        return axios({
            method:'GET',
            url: `https://www.thecocktaildb.com/api/json/v2/${apiKey}/popular.php`,
            header: {
                Accept: 'application/json',
                'content-type': 'application/json',
            },
        })
        .then((res) => res.data)
        .catch((err) => console.log(err))
    },

    // SEARCH FOR 10 RANDOM COCKTAILS

    getTenRandomCocktails: function () {
        const apiKey = COCKTAIL_API;

        return axios({
            method:'GET',
            url: `https://www.thecocktaildb.com/api/json/v2/${apiKey}/randomselection.php`,
            header: {
                Accept: 'application/json',
                'content-type': 'application/json',
            },
        })
        .then((res) => res.data)
        .catch((err) => console.log(err))
    },

    // SEARCH BY MULTI INGREDIENT

    searchByMultiIngredient: function(searchTerms) {
        const apiKey = COCKTAIL_API;

        return axios({
            method:'GET',
            url: `https://www.thecocktaildb.com/api/json/v2/${apiKey}/filter.php?i=${searchTerms}`,
            // this may need work (multiple terms, API ex. = "filter.php?i=Dry_Vermouth,Gin,Anis")
            header: {
                Accept: 'application/json',
                'content-type': 'application/json',
            },
        })
        .then((res) => res.data)
        .catch((err) => console.log(err))
    },

    // GET LATEST COCKTAILS

    getLatestCocktails: function() {
        const apiKey = COCKTAIL_API;

        return axios({
            method:'GET',
            url: `https://www.thecocktaildb.com/api/json/v2/${apiKey}/latest.php`,
            header: {
                Accept: 'application/json',
                'content-type': 'application/json',
            },
        })
        .then((res) => res.data)
        .catch((err) => console.log(err))
    },

    // SEARCH FOR NON-ALCOHOLIC

    searchForNonAlcoholic: function() {
        const apiKey = COCKTAIL_API;

        return axios({
            method:'GET',
            url: `https://www.thecocktaildb.com/api/json/v2/${apiKey}/filter.php?a=Non_Alcoholic`,
            header: {
                Accept: 'application/json',
                'content-type': 'application/json',
            },
        })
        .then((res) => res.data)
        .catch((err) => console.log(err))
    },

    // SEARCH FOR ALCOHOLIC

    searchForAlcoholic: function() {
        const apiKey = COCKTAIL_API;

        return axios({
            method:'GET',
            url: `https://www.thecocktaildb.com/api/json/v2/${apiKey}/filter.php?a=Alcoholic`,
            header: {
                Accept: 'application/json',
                'content-type': 'application/json',
            },
        })
        .then((res) => res.data)
        .catch((err) => console.log(err))
    },

    // LIST ALL COCKTAILS BY FIRST LETTER

    searchByFirstLetter: function(letter) {
        const apiKey = COCKTAIL_API;

        return axios({
            method:'GET',
            url: `https://www.thecocktaildb.com/api/json/v2/${apiKey}/search.php?f=${letter}`,
            header: {
                Accept: 'application/json',
                'content-type': 'application/json',
            },
        })
        .then((res) => res.data)
        .catch((err) => console.log(err))
    },

    // LOOK UP FULL COCKTAIL DETAILS BY ID

    lookUpFullDetailsById: function(id) {
        const apiKey = COCKTAIL_API;

        return axios({
            method:'GET',
            url: `https://www.thecocktaildb.com/api/json/v2/${apiKey}/lookup.php?i=${id}`,
            header: {
                Accept: 'application/json',
                'content-type': 'application/json',
            },
        })
        .then((res) => res.data)
        .catch((err) => console.log(err))
    },

    // LOOK UP INGREDIENT BY ID

    lookUpIngredientById: function(id) {
        const apiKey = COCKTAIL_API;

        return axios({
            method:'GET',
            url: `https://www.thecocktaildb.com/api/json/v2/${apiKey}/lookup.php?iid=${id}`,
            header: {
                Accept: 'application/json',
                'content-type': 'application/json',
            },
        })
        .then((res) => res.data)
        .catch((err) => console.log(err))
    },
    
    // GET DRINK THUMBNAILS (100x100px)

    getDrinkThumbnail: function(drinkId) {
        
        return axios({
            method:'GET',
            url: `https://www.thecocktaildb.com/images/media/drink/${drinkId}.jpg/preview`,
            // This could be wrong API ex. = "https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg/preview"
            header: {
                Accept: 'application/json',
                'content-type': 'application/json',
            },
        })
        .then((res) => res.data)
        .catch((err) => console.log(err))
    },

    // GET INGREDIENT THUMBNAILS *** SET TO SMALL FOR NOW ***, (Sizing options: "<ingredient-name>-Small.png" = 100x100px, "<ingredient-name>-Medium.png" = 350x350px, "<ingredient-name>.png" = 700x700px )

    getIngredientThumbnail: function(ingredientName) {

        return axios({
            method:'GET',
            url: `https://www.thecocktaildb.com/images/ingredients/${ingredientName}-Small.png`,
            header: {
                Accept: 'application/json',
                'content-type': 'application/json',
            },
        })
        .then((res) => res.data)
        .catch((err) => console.log(err))
    }

};