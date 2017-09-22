import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Image,
  VrButton,
  Model,
  AmbientLight,
  PointLight,
  SpotLight
} from 'react-vr';

export default class testVr extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      currentPhoto: {
        name: 'Nature',
        image: 'nature.jpg'
      },
      photos: [
        {
          name: 'Nature',
          image: 'nature.jpg'
        },
        {
          name: 'Room',
          image: 'panorama_esferico.jpg'
        },
        {
          name: 'Bidge',
          image: 'bridge.jpg'
        },
        {
          name: 'Cart',
          image: 'car.jpg'
        },
        {
          name: 'Water',
          image: 'water.jpg'
        }
      ]
    }
  }



  onViewClicked = (photo) => {
    console.log(photo);    
    this.setState({currentPhoto: photo});
  }


  moveAhead = (e) => {
    console.log(e.nativeEvent);
  }

  render() {

    var cards = new Array();

    for( var x = 0; x < this.state.photos.length; x++ ) {
      cards.push(
        (
        <View key={"card-"+x} style={{flex: 1, padding: 0.1, backgroundColor: 'white', margin: 0.1}} >
          <VrButton
          
          style={{width: 1, height: 1.2}}
          onEnter={this.onViewClicked.bind(this, this.state.photos[x])}>
            
              <Image style={{width:1, height:1}}
                source={asset(this.state.photos[x].image)}>
              </Image>
              <Text style={{color: 'blue', textAlign: 'center'}}>{this.state.photos[x].name}</Text>
            
          </VrButton>
        </View>
        )
      )
    }

    old = (<View style={{flexDirection: 'row', transform: [{translate: [-3, 2, -5]}]}}>
    {cards}
  </View>)
  

    model = (
      <View>
        <SpotLight
          intensity={1}
          style={{ transform: [{ translate: [-5, 5, 0] }] }}
        />
        <Model
            source={{
              obj: asset('house/luxury_house_interior.obj'),
            }}
            style={{
              transform: [{translate: [10, -60, 150]}, 
              {rotateY: 0}],
            }}
            lit={true}
            onInput={this.moveAhead}
          ></Model>
      </View>
    )
    
    return (
      <View>
        {model}
      </View>
    );
  }
};

AppRegistry.registerComponent('testVr', () => testVr);
