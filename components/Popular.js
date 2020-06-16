import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  Image,
  ImageBackground,
  Button,
} from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel'; // Version can be specified in package.json

import { scrollInterpolator, animatedStyles } from '../utils/animations';
import API from '../utils/API';
import { MaterialIcons } from '@expo/vector-icons';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

const DATA = [];
for (let i = 0; i < 10; i++) {
  DATA.push(i);
}

export default class App extends Component {
  state = {
    index: 0,
    results: [],
  };

  constructor(props) {
    super(props);
    this._renderItem = this._renderItem.bind(this);
  }

  componentDidMount() {
    API.searchForPopular()
      .then((res) => {
        this.setState({ results: res.drinks });
        // Purpose of this map function is to log the drink name
        res.drinks.map((drink) => {
          // Change ".strDrink" to any other property of the object or remove to parse all the objects as a whole
          console.log(`drink ${drink.strDrink}`);
        });
      })
      .catch((err) => console.log(err));
  }

  _renderItem({ item }) {
    return (
      <View style={styles.itemContainer}>
        <ImageBackground
          source={{ uri: item.strDrinkThumb }}
          style={{
            height: '100%',
            width: '100%',
            borderRadius: 6,
          }}
          imageStyle={{ borderRadius: 4 }}
        >
          <View style={{ alignItems: 'flex-end', padding: 10 }}>
            <MaterialIcons name='favorite-border' size={24} color='red' />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              alignItems: 'flex-start',
              borderRadius: 4,
              paddingBottom: 10,
              paddingLeft: 10,
              justifyContent: 'flex-end',
            }}
          >
            <Button title={item.strDrink} />
          </View>
        </ImageBackground>
      </View>
    );
  }

  render() {
    return (
      <View>
        <Text
          style={{
            textAlign: 'left',
            fontSize: 24,
            paddingLeft: 10,
            paddingTop: 10,
            fontWeight: 'bold',
          }}
        >
          Most Popular
        </Text>
        <Carousel
          ref={(c) => (this.carousel = c)}
          data={this.state.results}
          renderItem={this._renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          containerCustomStyle={styles.carouselContainer}
          inactiveSlideShift={0}
          onSnapToItem={(index) => this.setState({ index })}
          scrollInterpolator={scrollInterpolator}
          slideInterpolatedStyle={animatedStyles}
          useScrollView={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  carouselContainer: {
    marginBottom: 10,
    marginTop: 10,
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',

    padding: 10,
    borderRadius: 3,
  },
  itemLabel: {
    color: 'white',
    fontSize: 24,
  },
  counter: {
    marginTop: 25,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
