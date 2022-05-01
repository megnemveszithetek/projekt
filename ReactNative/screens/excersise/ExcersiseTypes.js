import React from 'react';
import { View, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';

const users = [
  {
    name: 
      'Töltött káposzta',
    pic: 
      'https://receptneked.hu/wp-content/uploads/2017/11/56449545_m-480x299.jpg?v=1581698709',
    recipe: 
      "Recipe",
  },
  {
    name: 
      'Bableves',
    pic:
      'https://kep.index.hu/1/0/3735/37350/373505/37350531_a6dd4e74f34018f9d95d183a3262ee0e_wm.jpg',
    recipe: 
      "Recipe",
  },
  {
    name: 
      'Bejgli',
    pic: 
      'https://receptneked.hu/wp-content/uploads/2020/10/217A0286.jpg?v=1602937793',
    recipe: 
      "Recipe",
  },
  {
    name: 
      'Kifli',
    pic: 
      'https://i.ytimg.com/vi/OzNfHMKK0vA/maxresdefault.jpg',
    recipe: 
      "Recipe",
  },
  {
    name: 
      'Csirkepörkölt',
    pic: 
      'https://receptneked.hu/wp-content/uploads/2011/07/IMG_7118-480x299.jpg',
    recipe: 
      "Recipe",
    
  },
  {
    name: 
      'Zacskós leves',
    pic:
      'https://m.blog.hu/ma/maradokapenzemnel/image/bor1_31.jpg',
    recipe: 
      "Recipe",
  },
];

type CardsComponentsProps = {};

const ExcersiseTypes: React.FunctionComponent<CardsComponentsProps> = ({navigation}) => {
  return (
    <>
      <ScrollView  showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {users.map((u, i) => {
            return (
              <Card>
                <Card.Title>{u.name}</Card.Title>
                
                <Card.Divider />
                
                <Card.Image style={{ padding: 0 }} source={{ uri: u.pic}} />
                <Text> {"\n"} </Text>
                <Text style={{ marginBottom: 10 }}>
                 {u.recipe}
                </Text>
                <Button
                  buttonStyle={{
                    backgroundColor: 'red',
                    borderRadius: 30,
                    marginLeft: 0,
                    marginRight: 0,
                    marginBottom: 0,
                  }}
                  title="ADD"
                />
              </Card>
            );
          })}
          <Text>{"\n"} </Text>
        <TouchableOpacity
            style={styles.backbutton}
            onPress={() => navigation.navigate('Excersise')}>
            <Text style={{color:'white'}}>Home</Text>
          </TouchableOpacity>
          <Text>{"\n"} </Text>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  backbutton: {
    width: 100,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'red',
  },
});

export default ExcersiseTypes;
