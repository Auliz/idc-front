import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { Card } from './card';
import { connect } from 'react-redux';
import Loading from './loading';
import Rightmodal from './rightModal';

class SwipeScreen extends React.Component {
  state = {
    rightSwipe: false,
    index: 0,
  };

  onRightSwipe = () => {
    this.setState({ rightSwipe: true });
    // const API = 'http://192.168.86.27:3000/api/v1/';
    // const restaurant = this.props.places[this.state.index]
    // const reqObj = {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Accept: 'application/json',
    //   },
    //   body: JSON.stringify({ restaurant }),
    //   }
    
    // fetch(API + 'restaurants', reqObj)
    // .then(resp => resp.json())
    // .then(data => { console.log(data) })
  };

  onLeftSwipe = () => {
    this.setState({ index: this.state.index + 1 });
  };

  swipeReset = () => {
    this.setState({ rightSwipe: false, index: this.state.index + 1 });
  };

  toRender = () => {
    let title;
    return this.props.places.map((place) => {
      if (place.name && place.price) {
        title = `${place.name}, ${place.price}`;
      } else {
        title = `${place.name}`;
      }
      return {
        pic: place.image_url,
        title: `${title}`,
        caption: `Rating: ${place.rating}/5 from ${place.review_count} YELP reviews`,
      };
    });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.props.places.length ? (
          <Swiper
            cards={this.toRender()}
            renderCard={Card}
            //infinite // keep looping cards infinitely
            showSecondCard={true}
            backgroundColor='black'
            cardHorizontalMargin={0}
            verticalSwipe={false}
            stackSize={2} // number of cards shown in background
            cardIndex={this.state.index}
            onSwipedRight={this.onRightSwipe}
            onSwipedLeft={this.onLeftSwipe}
            overlayLabels={{
              left: {
                element: <Text style={styles.nopeText}>NOPE</Text>,
                title: 'NOPE',
                style: {
                  wrapper: {
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-start',
                    marginTop: 30,
                    marginLeft: -30,
                  },
                },
              },
              right: {
                element: <Text style={styles.likeText}>LIKE</Text>,
                title: 'LIKE',
                style: {
                  wrapper: {
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    marginTop: 30,
                    marginLeft: 30,
                  },
                },
              },
            }}
            overlayLabelStyle={{
              fontSize: 800,
              fontWeight: 'bold',
              borderRadius: 100,
              padding: 100,
              overflow: 'hidden',
            }}
          />
        ) : (
          <Loading />
        )}
        {this.state.rightSwipe ? (
          <Rightmodal
            rightSwipe={this.state.rightSwipe}
            swipeReset={this.swipeReset}
            restCard={this.props.places[this.state.index]}
          />
        ) : null}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  likeText: {
    color: 'green',
    fontSize: 80,
    fontWeight: 'bold',
  },
  nopeText: {
    color: 'red',
    fontSize: 80,
    fontWeight: 'bold',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 200,
  },
});

const mapStateToProps = (state) => {
  return {
    places: state.places,
    user: state.user,
    rightSwipe: state.rightSwipe,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     postSwipe: (rest) => dispatch(postSwipe(rest)),
//   };
// };

export default connect(mapStateToProps, null)(SwipeScreen);
