import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet, Image } from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel'; // Version can be specified in package.json

import { scrollInterpolator, animatedStyles } from '../utils/animations';
import API from '../utils/API'

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

const DATA = [];
for (let i = 0; i < 10; i++) {
  DATA.push(i);
}

export default class App extends Component {
  state = {
    index: 0,
    drinks: []
  };

  constructor(props) {
    super(props);
    this._renderItem = this._renderItem.bind(this);
  }

  componentDidMount() {
    API.getLatestCocktails()
    .then((res) => {
      res.drinks.map((drink) => {
        console.log(drink.strDrink)
        this.setState({drinks: res.drinks})
      })
    })
  }

  _renderItem({ item }) {
    return (
      <View style={styles.itemContainer}>
        <Image
          source={require('../assets/images/new.jpg')}
          style={{ height: '80%', width: '100%' }}
        />
        <Text style={styles.itemLabel}>Name of Drink:</Text>
      </View>
    );
  }

  render() {
    return (
      <View>
        <Text style={{ textAlign: 'center', fontSize: 20, marginTop: 10 }}>
          Latest
        </Text>
        <Carousel
          ref={(c) => (this.carousel = c)}
          data={DATA}
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
    marginTop: 10,
    marginBottom: 10,
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'dodgerblue',
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
