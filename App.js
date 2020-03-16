/*
  Ramon Nobre Peres
*/

import React, { Component } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  Button, 
  Image, 
  TouchableOpacity 
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoFrase: '',
      img: require('./src/biscoito.png'),
    }

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frase = [
      'O importante não é vencer todos os dias, mas lutar sempre.',
      'Maior que a tristeza de não haver vencido é a vergonha de não ter lutado!',
      'É melhor conquistar a si mesmo do que vencer mil batalhas.',
      'Quem ousou conquistar e saiu pra lutar, chega mais longe!',
      'Enquanto houver vontade de lutar haverá esperança de vencer.',
      'Difícil é ganhar um amigo em uma hora; fácil é ofendê-lo em um minuto.'
    ];
  }

  quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * this.frase.length);

    this.setState({ 
      textoFrase: `"${this.frase[numeroAleatorio]}"`,
      img: require('./src/biscoitoAberto.png')
    })
  }


  render() {
    return(
      <View style={styles.container} >
        <Image 
          source={this.state.img}
          style={styles.img}
        />

        <Text style={styles.texto} >{this.state.textoFrase}</Text>
        
        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito} >
          <View style={styles.btnArea} >
            <Text style={styles.textoBiscoito} >Quebrar biscoito</Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 250,
    height: 250
  },
  texto: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textoBiscoito: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
});

export default App;