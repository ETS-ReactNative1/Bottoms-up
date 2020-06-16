import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import {
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
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
    results: [],
  };

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
        console.log(res.drinks);
        if (!res.drinks) {
          console.log(`No drinks found with the search term: ${searchTerm}`);
        } else {
          this.setState({ results: res.drinks });
        }
      })
      .catch((err) => console.log(err));
  };

  searchByLetter = (letter) => {
    API.searchByFirstLetter(letter).then((res) => {
      // Use conditional statement to check and see if the response is null or not
      if (!res.drinks) {
        console.log(`No results found for: ${letter}`);
      } else {
        this.setState({ results: res.drinks });
        // Purpose of this map function is simply to console log and parse the data down to the drink name
        res.drinks.map((drink) => {
          console.log(drink.strDrink);
        });
      }
    });
  };

  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1, height: 180, width: '100%' }}>
          <ImageBackground
            source={require('../assets/images/search1.jpg')}
            style={{ flex: 1, width: '100%' }}
          ></ImageBackground>
        </View>
        <SearchInput
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 10,
          }}
        >
          <Text
            onPress={() => {
              this.searchByLetter('A');
            }}
            style={styles.alpha}
          >
            A
          </Text>
          <Text
            onPress={() => {
              this.searchByLetter('B');
            }}
            style={styles.alpha}
          >
            B
          </Text>
          <Text
            onPress={() => {
              this.searchByLetter('C');
            }}
            style={styles.alpha}
          >
            C
          </Text>
          <Text
            onPress={() => {
              this.searchByLetter('D');
            }}
            style={styles.alpha}
          >
            D
          </Text>
          <Text
            onPress={() => {
              this.searchByLetter('E');
            }}
            style={styles.alpha}
          >
            E
          </Text>
          <Text
            onPress={() => {
              this.searchByLetter('F');
            }}
            style={styles.alpha}
          >
            F
          </Text>
          <Text
            onPress={() => {
              this.searchByLetter('G');
            }}
            style={styles.alpha}
          >
            G
          </Text>
          <Text
            onPress={() => {
              this.searchByLetter('H');
            }}
            style={styles.alpha}
          >
            H
          </Text>
          <Text
            onPress={() => {
              this.searchByLetter('I');
            }}
            style={styles.alpha}
          >
            I
          </Text>
          <Text
            onPress={() => {
              this.searchByLetter('J');
            }}
            style={styles.alpha}
          >
            J
          </Text>
          <Text
            onPress={() => {
              this.searchByLetter('K');
            }}
            style={styles.alpha}
          >
            K
          </Text>
          <Text
            onPress={() => {
              this.searchByLetter('L');
            }}
            style={styles.alpha}
          >
            L
          </Text>
          <Text
            onPress={() => {
              this.searchByLetter('M');
            }}
            style={styles.alpha}
          >
            M
          </Text>
          <Text
            onPress={() => {
              this.searchByLetter('N');
            }}
            style={styles.alpha}
          >
            N
          </Text>
          <Text
            onPress={() => {
              this.searchByLetter('O');
            }}
            style={styles.alpha}
          >
            O
          </Text>
          <Text
            onPress={() => {
              this.searchByLetter('P');
            }}
            style={styles.alpha}
          >
            P
          </Text>
          <Text
            onPress={() => {
              this.searchByLetter('Q');
            }}
            style={styles.alpha}
          >
            Q
          </Text>
          <Text
            onPress={() => {
              this.searchByLetter('R');
            }}
            style={styles.alpha}
          >
            R
          </Text>
          <Text
            onPress={() => {
              this.searchByLetter('S');
            }}
            style={styles.alpha}
          >
            S
          </Text>
          <Text
            onPress={() => {
              this.searchByLetter('T');
            }}
            style={styles.alpha}
          >
            T
          </Text>
          <Text
            onPress={() => {
              this.searchByLetter('U');
            }}
            style={styles.alpha}
          >
            U
          </Text>
          <Text
            onPress={() => {
              this.searchByLetter('V');
            }}
            style={styles.alpha}
          >
            V
          </Text>
          <Text
            onPress={() => {
              this.searchByLetter('W');
            }}
            style={styles.alpha}
          >
            W
          </Text>
          <Text
            onPress={() => {
              this.searchByLetter('X');
            }}
            style={styles.alpha}
          >
            X
          </Text>
          <Text
            onPress={() => {
              this.searchByLetter('Y');
            }}
            style={styles.alpha}
          >
            Y
          </Text>
          <Text
            onPress={() => {
              this.searchByLetter('Z');
            }}
            style={styles.alpha}
          >
            Z
          </Text>
        </View>
        <SearchResults style={{ height: '80%', width: '80%' }} />
      </ScrollView>
    );
  }
}

export default SearchScreen;

const styles = StyleSheet.create({
  alpha: {
    paddingRight: 5,
    fontSize: 15,
    fontWeight: 'bold',
  },
});
