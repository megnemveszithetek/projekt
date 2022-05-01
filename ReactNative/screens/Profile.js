import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button } from 'react-native-elements';
import StatPic from '../images/pic.png'
const users = [
  {
    name: 'brynn',
    avatar: 'https://uifaces.co/our-content/donated/1H_7AxP0.jpg',
  },
  {
    name: 'thot leader',
    avatar:
      'https://images.pexels.com/photos/598745/pexels-photo-598745.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb',
  },
  {
    name: 'jsa',
    avatar: 'https://uifaces.co/our-content/donated/bUkmHPKs.jpg',
  },
  {
    name: 'talhaconcepts',
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
    name: 'andy vitale',
    avatar: 'https://uifaces.co/our-content/donated/NY9hnAbp.jpg',
  },
  {
    name: 'katy friedson',
    avatar:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMTc1MTYzM15BMl5BanBnXkFtZTgwNzI5NjMwOTE@._V1_UY256_CR16,0,172,256_AL_.jpg',
  },
];

type CardsComponentsProps = {};

const Profile: React.FunctionComponent<CardsComponentsProps> = ({ navigation }) => {
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginTop: 5,
            }}>
            Profile
          </Text>


          <Card style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Card.Title>Username</Card.Title>
            <Card.Divider />
            <Card.Image
              style={{
                width: 150,
                height: 150,
                borderColor: 'red',
                borderWidth: 2,
                borderRadius: 20,
              }}
              source={{
                uri: 'https://www.nestle-cereals.com/hu/sites/g/files/fawtmp416/files/styles/scale_992/public/d7/cp-prod-fitness-chocolate_1.png?itok=bEQjxxCA',
              }}
            /> 
            <Text style={{ marginBottom: 10 }}>
              <Text> {"\n"} </Text>
              <Text style={{ fontWeight: 'bold' }}>Height: </Text>
              <Text>185cm</Text>
              <Text> {"\n"} </Text>
              <Text style={{ fontWeight: 'bold' }}>Weight: </Text>
              <Text>150 kg</Text>
              <Text> {"\n"} </Text>
              <Text style={{ fontWeight: 'bold' }}>Plan: </Text>
              <Text>Get thinner</Text>
              <Text> {"\n"} </Text>
              <Text style={{ fontWeight: 'bold' }}>Coach: </Text>
              <Text>Morpheusz</Text>
              
              
              
            </Text>
          </Card>

          <Card style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 30}}>
            <Card.Title>Statistics</Card.Title>
            <Card.Divider />
            <Card.Image
              style={{ padding: 0}}
              source={{
                uri: 'https://www.pngall.com/wp-content/uploads/9/Statistics-Vector-PNG-Cutout.png',
              }}
            />
            <Text style={{ marginBottom: 10 }}>
              <Text> {"\n"} </Text>
              <Text style={{ fontWeight: 'bold' }}>Burnt calories in this month: </Text>
              <Text>3 million</Text>
              <Text> {"\n"} </Text>
              <Text style={{ fontWeight: 'bold' }} >Calories eaten: </Text>
              <Text>4 trillion </Text>
              <Text> {"\n"} </Text>
              <Text style={{ fontWeight: 'bold' }}>Current diet: </Text>
              <Text> Éhen akarok halni</Text>
              <Text> {"\n"} </Text>
              <Text style={{ fontWeight: 'bold' }}>Current excersise plan: </Text>
              <Text> Fogyni akarok</Text>
              <Text> {"\n"} </Text>
              <Text style={{ fontWeight: 'bold' }}>Favorite food: </Text>
              <Text> Töltött kápszta</Text>
              <Text> {"\n"} </Text>
            </Text>
            <Button
              buttonStyle={{
                backgroundColor: 'red',
                borderRadius: 30,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
              }}
              title="Recalculate"
            />
          </Card>
          <Text> {"\n"} </Text>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default Profile;
