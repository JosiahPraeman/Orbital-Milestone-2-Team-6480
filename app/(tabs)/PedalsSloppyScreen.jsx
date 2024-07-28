import React from 'react';
import { ScrollView, Text, Image, View, StyleSheet, TouchableOpacity, Button, Linking } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import { useNavigation } from '@react-navigation/native';

const PedalsSloppyScreen = () => {
  const openLink = (url) => {
    Linking.openURL(url);
  };
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.header}>Pedals or Crank Arms are Sloppy</Text>
        <Text style={styles.text}>When pedaling you feel too much play in the crank arm.</Text>

        <Text style={styles.subHeader}>Bottom Bracket Adjustment</Text>
        <Text style={styles.text}>The cones in your bottom bracket are not adjusted right. Follow these steps to fix it:</Text>
        
        <Text style={styles.step}>Step 1: Remove the crank arms using the appropriate Allen wrench.</Text>
        <TouchableOpacity onPress={() => openLink('https://example.com/crank-arm-guide')}>
          <Text style={styles.link}>(URL: Crank Arm Guide)</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink('https://www.bing.com/images/search?view=detailV2&ccid=qh4ls6bx&id=7CB761470D1E888998AF0384FC0C7955DD99A05F&thid=OIP.qh4ls6bxVwyp0F99T8UddAAAAA&mediaurl=https%3a%2f%2fwww.parktool.com%2fassets%2fimg%2frepairhelp%2fFigure_7-12.jpg&exph=318&expw=474&q=uninstall+cranks+arm+using+allen+wrench&simid=607990421585079130&FORM=IRPRST&ck=19413460911999CA51303F7C06AF2573&selectedIndex=3&itb=0&ajaxhist=0&ajaxserp=0')}>
          <Image 
            source={{ uri: 'https://www.parktool.com/assets/img/repairhelp/Figure_7-12.jpg' }} 
            style={styles.image} 
          />
        </TouchableOpacity>
        
        <Text style={styles.step}>Step 2: Use the bottom bracket tool to tighten or adjust the bottom bracket cones.</Text>
        <TouchableOpacity onPress={() => openLink('https://www.bing.com/images/search?view=detailV2&ccid=YAs1bhh6&id=7E2A0481A526ECD652275F77DE27FAA6A66FA83F&thid=OIP.YAs1bhh6BmBdOYketvz38QHaGa&mediaurl=https%3a%2f%2fwww.parktool.com%2fassets%2fimg%2fproduct%2f_productEnlarged%2fBBT-47_003.jpg&exph=780&expw=900&q=using+bottomg+brack+tool+to+adjust+bottom+bracket+bones&simid=608036540931324163&FORM=IRPRST&ck=3AE03602EC45A339325919B9D8BECDB5&selectedIndex=5&itb=0&ajaxhist=0&ajaxserp=0')}>
          <Image 
            source={{ uri: 'https://www.parktool.com/assets/img/product/_productEnlarged/BBT-47_003.jpg' }} 
            style={styles.image} 
          />
        </TouchableOpacity>
        <Text style={styles.step}>Step 3: Ensure the bottom bracket is snug but allows smooth rotation.</Text>
        <TouchableOpacity onPress={() => openLink('https://www.bing.com/images/search?view=detailV2&ccid=9%2fo9lggN&id=61536D6BE0990BF98A38CCD4146AECB1365A9CAF&thid=OIP.9_o9lggN5OBXgh09-6vOqgHaGa&mediaurl=https%3a%2f%2fwww.parktool.com%2fassets%2fimg%2frepairhelp%2fCrank-preLoadRing-LR-play.jpg&exph=953&expw=1100&q=checking+that+bottom+bracket+is+snug+but+has+smooth+rotation&simid=608055477406937303&FORM=IRPRST&ck=C1F37F86A011C41427A39C88836BAEE5&selectedIndex=2&itb=0&ajaxhist=0&ajaxserp=0')}>
          <Image 
            source={{ uri: 'https://www.parktool.com/assets/img/repairhelp/Crank-preLoadRing-LR-play.jpg' }} 
            style={styles.image} 
          />
        </TouchableOpacity>
        <Text style={styles.step}>Step 4: Reinstall the crank arms and tighten the bolts to the recommended torque specification.</Text>
        <TouchableOpacity onPress={() => openLink('https://www.bing.com/images/search?view=detailV2&ccid=qh4ls6bx&id=7CB761470D1E888998AF0384FC0C7955DD99A05F&thid=OIP.qh4ls6bxVwyp0F99T8UddAAAAA&mediaurl=https%3a%2f%2fwww.parktool.com%2fassets%2fimg%2frepairhelp%2fFigure_7-12.jpg&exph=318&expw=474&q=reinstall+crank+arms+and+tighten+bolts&simid=607990421585079130&FORM=IRPRST&ck=19413460911999CA51303F7C06AF2573&selectedIndex=3&itb=0&ajaxhist=0&ajaxserp=0')}>
          <Image 
            source={{ uri: 'https://www.parktool.com/assets/img/repairhelp/Figure_7-12.jpg' }} 
            style={styles.image} 
          />
        </TouchableOpacity>
        <Text style={styles.videoHeader}>
          Video Guide for fixing chain issues:
        </Text>
        <YoutubePlayer
          height={250}
          play={false}
          videoId={'f0Oz6kJ2isg'} // Replace with the actual YouTube video ID
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
  subHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    textAlign: 'center',
  },
  step: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 5,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
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
  homeButtonContainer: {
    marginTop: 20,
    padding: 20,
    marginBottom: 40,
  },
});

export default PedalsSloppyScreen;

