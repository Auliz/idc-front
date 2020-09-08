import React from 'react';
import { Image, StyleSheet } from 'react-native';
import small_0 from '../../assets/stars/small_0.png';
import small_1 from '../../assets/stars/small_1.png';
import small_1_half from '../../assets/stars/small_1_half.png';
import small_2 from '../../assets/stars/small_2.png';
import small_2_half from '../../assets/stars/small_2_half.png';
import small_3 from '../../assets/stars/small_3.png';
import small_3_half from '../../assets/stars/small_3_half.png';
import small_4 from '../../assets/stars/small_4.png';
import small_4_half from '../../assets/stars/small_4_half.png';
import small_5 from '../../assets/stars/small_5.png';

const yelpStars = (props) => {

  switch (props.rating) {
    case 0:
      return <Image style={styles.stars} source={small_0} />;
    case 1:
      return <Image style={styles.stars} source={small_1} />;
    case 1.5:
      return <Image style={styles.stars} source={small_1_half} />;
    case 2:
      return <Image style={styles.stars} source={small_2} />;
    case 2.5:
      return <Image style={styles.stars} source={small_2_half} />;
    case 3:
      return <Image style={styles.stars} source={small_3} />;
    case 3.5:
      return <Image style={styles.stars} source={small_3_half} />;
    case 4:
      return <Image style={styles.stars} source={small_4} />;
    case 4.5:
      return <Image style={styles.stars} source={small_4_half} />;
    case 5:
      return <Image style={styles.stars} source={small_5} />;
    default:
      return null;
  }
};

const styles = StyleSheet.create({
  stars: {
    width: '40%',
    height: 15,
    marginLeft: 72,
    marginTop: 20,
  },
});

export default yelpStars;
