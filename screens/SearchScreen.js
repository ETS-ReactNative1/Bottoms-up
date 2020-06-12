import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { MonoText } from '../components/StyledText';
import Popular from '../components/Popular';
import SearchInput from '../components/SearchInput';
import SearchResults from '../components/SearchResults';

import API from '../utils/API';

class SearchScreen extends React.Component {

  state = {
    searchTerm: '',
    results: []
  }

  //========================================================================================
  // Handle form input change.
  //========================================================================================

  handleInputChange = (event) => {
    // Assign the search change in input to a variable.
    console.log(event);
    let formInput = event;
    // Set the this.state.searchTerm to value of formInput.
    this.setState({ searchTerm: formInput });
    console.log(formInput);
  };

  //===========================================================================================
  // Handle form submit button.
  //===========================================================================================

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.searchTerm);
    // Call function "searchForRecipe" with argument of "searchTerm" after validation .
    if (this.state.searchTerm === '') {
      Alert.alert('Invalid Entry', 'Please enter something to search.');
    } else {
      this.searchByIngredient(this.state.searchTerm);
    }
  };


  //============================================================================================
  // Search By Ingredient
  //============================================================================================

  // ??? search by ingredient or by cocktail name? names could be mispelled.... ingriedients is a broad search... leave as ingriedient for now, can change later

  searchByIngredient = (searchTerm) => {
    API.searchByIngredient(searchTerm)
    .then((res) => {
      console.log(res.drinks)
      if(!res.drinks) {
        console.log(`No drinks found with the search term: ${searchTerm}`)
      } else {
        this.setState({ results: res.drinks })
      }
    })
    .catch((err) => console.log(err))
  }

  searchByLetter = (letter) => {
    API.searchByFirstLetter(letter)
    .then((res) => {
      // Use conditional statement to check and see if the response is null or not
      if (!res.drinks) {
        console.log(`No results found for: ${letter}`)
      } else {
        this.setState({ results: res.drinks })
        // Purpose of this map function is simply to console log and parse the data down to the drink name
        res.drinks.map((drink) => {
          console.log(drink.strDrink)

        })
      }
    })
  }








  render() {
    return (
      <ScrollView>
        <SearchInput
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <Text onClick={() => {this.searchByLetter("A")}}>A</Text>
        <Text onPress={() => {this.searchByLetter("B")}}>B</Text>
        <Text onPress={() => {this.searchByLetter("C")}}>C</Text>
        <Text onPress={() => {this.searchByLetter("D")}}>D</Text>
        <Text onPress={() => {this.searchByLetter("E")}}>E</Text>
        <Text onPress={() => {this.searchByLetter("F")}}>F</Text>
        <Text onPress={() => {this.searchByLetter("G")}}>G</Text>
        <Text onPress={() => {this.searchByLetter("H")}}>H</Text>
        <Text onPress={() => {this.searchByLetter("I")}}>I</Text>
        <Text onPress={() => {this.searchByLetter("J")}}>J</Text>
        <Text onPress={() => {this.searchByLetter("K")}}>K</Text>
        <Text onPress={() => {this.searchByLetter("L")}}>L</Text>
        <Text onPress={() => {this.searchByLetter("M")}}>M</Text>
        <Text onPress={() => {this.searchByLetter("N")}}>N</Text>
        <Text onPress={() => {this.searchByLetter("O")}}>O</Text>
        <Text onPress={() => {this.searchByLetter("P")}}>P</Text>
        <Text onPress={() => {this.searchByLetter("Q")}}>Q</Text>
        <Text onPress={() => {this.searchByLetter("R")}}>R</Text>
        <Text onPress={() => {this.searchByLetter("S")}}>S</Text>
        <Text onPress={() => {this.searchByLetter("T")}}>T</Text>
        <Text onPress={() => {this.searchByLetter("U")}}>U</Text>
        <Text onPress={() => {this.searchByLetter("V")}}>V</Text>
        <Text onPress={() => {this.searchByLetter("W")}}>W</Text>
        <Text onPress={() => {this.searchByLetter("X")}}>X</Text>
        <Text onPress={() => {this.searchByLetter("Y")}}>Y</Text>
        <Text onPress={() => {this.searchByLetter("Z")}}>Z</Text>
        <SearchResults style={{ height: '80%', width: '80%' }} />
      </ScrollView>
    );
  }
}

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
