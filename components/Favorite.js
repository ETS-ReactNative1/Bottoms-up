import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  ImageBackground,
  Button,
} from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel'; // Version can be specified in package.json

import { scrollInterpolator, animatedStyles } from '../utils/animations';
import { MaterialIcons } from '@expo/vector-icons';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 6) / 4);

const DATA = [];
for (let i = 0; i < 10; i++) {
  DATA.push(i);
}

export default class App extends Component {
  state = {
    index: 0,
  };

  constructor(props) {
    super(props);
    this._renderItem = this._renderItem.bind(this);
  }

  _renderItem({ item }) {
    return (
      <View style={styles.itemContainer}>
        <ImageBackground
          source={require('../assets/images/new.jpg')}
          style={{ height: '100%', width: '100%' }}
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
            <Button title='Mojito' />
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
          Your Favorites
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
    marginTop: 20,
    marginBottom: 10,
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  itemLabel: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 370,
  },
  counter: {
    marginTop: 25,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
