import React from 'react';
import { ScrollView, Text, Image, View, StyleSheet, TouchableOpacity, Button, Linking } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import { useNavigation } from '@react-navigation/native';

const GeneralTroubleshootingScreen = () => {
  const openLink = (url) => {
    Linking.openURL(url);
  };
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.header}>General Troubleshooting</Text>
        <Text style={styles.text}>
          Step 1: Check if the bike's chain is properly engaged. If not, adjust it accordingly.
        </Text>
        <TouchableOpacity onPress={() => openLink('https://www.bikeberry.com/blogs/learning-center/how-to-keep-your-chain-path-straight-a-comprehensive-guide#:~:text=Step-by-Step%20Guide%20to%20Checking%20Chain%20Path%20Alignment%201,8%20Step%208%3A%20Perform%20a%20Test%20Ride%20')}>
          <Text style={styles.link}>(URL: Steps on checking proper engagement of bike chain)</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink('https://www.bing.com/images/search?view=detailV2&ccid=%2BsiR7l6p&id=6B8F318380BEAEB4747DBD5923E7FDCB8CFFBE9D&thid=OIP.-siR7l6pvuDg5DFLHLbc6AHaFX&mediaurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fz%2Fchecking-bicycle-chain-close-up-image-woman-fixing-108430978.jpg&exph=1158&expw=1600&q=picture+of+someone+checking+the+bicycle+chain&simid=608043034889909066&form=IRPRST&ck=B73E73DA56B635BE933FE0A14AF4EBFC&selectedindex=9&itb=0&ajaxhist=0&ajaxserp=0&vt=0&sim=11')}>
          <Image 
            source={{ uri: 'https://thumbs.dreamstime.com/z/checking-bicycle-chain-close-up-image-woman-fixing-108430978.jpg' }} 
            style={styles.image} 
          />
        </TouchableOpacity>
        <Text style={styles.videoHeader}>
            Video Guide for Step 1:
        </Text>
        <YoutubePlayer
          height={250}
          play={false}
          videoId={'YFa6I06I2KE'} // Replace with the actual YouTube video ID
        />
        <Text style={styles.text}>
          Step 2: Ensure the brakes are functioning well before starting your ride. Check both front and rear brakes.
        </Text>
        <TouchableOpacity onPress={() => openLink('https://biketips.com/how-to-adjust-bike-brakes/#:~:text=Check%20Components%201%20Cables%3A%20Check%20for%20any%20leaks,no%20oil%20on%20the%20disc%20brakes%20or%20pads.')}>
          <Text style={styles.link}>(URL: Steps on checking functionality of bicycle brakes)</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink('https://www.bing.com/images/search?view=detailV2&ccid=qTciaxze&id=14FF31A3754ED875E0D361A4C14914796B521BD4&thid=OIP.qTciaxzeJFk8-lC6LOmCOgHaHa&mediaurl=https%3a%2f%2fi5.walmartimages.com%2fasr%2f9cdf7e19-bf6e-40fe-96b8-18d6e8c67027.be6ce3f19426a8d71038b641d015468d.jpeg&exph=1001&expw=1001&q=pictures+of+front+and+rear+brakes+of+a+bicycle+image+download&simid=608003168984106876&FORM=IRPRST&ck=9BFA44B1F0AD528ACCD7E4E4FEA95B7B&selectedIndex=1&itb=0&ajaxhist=0&ajaxserp=0')}>
          <Image 
            source={{ uri: 'https://i5.walmartimages.com/asr/9cdf7e19-bf6e-40fe-96b8-18d6e8c67027.be6ce3f19426a8d71038b641d015468d.jpeg'}} 
            style={styles.image} 
          />
        </TouchableOpacity>
        <Text style={styles.videoHeader}>
            Video Guide for Step 2:
        </Text>
        <YoutubePlayer
          height={300}
          play={false}
          videoId={'qKtI11YXyJc'} // Replace with the actual YouTube video ID
        />
      </View>
      <View style={styles.homeButtonContainer}>
        <Button title="Return to Manual" onPress={() => navigation.navigate('ManualScreen')} color="#007bff" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  section: {
    marginBottom: 20,
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginVertical: 10,
  },
  video: {
    width: '100%',
    height: 200,
    marginVertical: 10,
  },
  videoHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    textDecorationLine: 'underline',
  },
  homeButtonContainer: {
    padding: 20,
    marginBottom: 40,
  },
});

export default GeneralTroubleshootingScreen;
