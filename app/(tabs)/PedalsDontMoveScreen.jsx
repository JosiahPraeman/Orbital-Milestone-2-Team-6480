import React from 'react';
import { ScrollView, Text, Image, View, StyleSheet, TouchableOpacity, Button, Linking } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import { useNavigation } from '@react-navigation/native';

const PedalsDontMoveScreen = () => {
  const openLink = (url) => {
    Linking.openURL(url);
  };
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.header}>Pedals Don't Make Bike Move</Text>
        <Text style={styles.text}>When pedaling, the bike doesn't move.</Text>

        <Text style={styles.subHeader}>Check Your Chain</Text>
        <Text style={styles.text}>The chain may have come off. The chain also may be broken. Follow these steps to fix it:</Text>
        
        <Text style={styles.step}>Step 1: Inspect the chain to see if it has come off the chainrings or cassette.</Text>
        <TouchableOpacity onPress={() => openLink('https://example.com/chain-connecting-guide')}>
          <Text style={styles.link}>(URL: Chain Connecting Guide)</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink('https://www.bing.com/images/search?view=detailV2&ccid=QI2jzg3C&id=CF4BAE55D0A21C1C2912E7B7E71D17F60CEB0D04&thid=OIP.QI2jzg3CEKhHe0BKXxDvAAHaD7&mediaurl=https%3a%2f%2febikebuster.com%2fwp-content%2fuploads%2f2022%2f02%2fHow-to-Fix-a-Bike-Chain-that-Keeps-Falling-Off-768x407.png&exph=407&expw=768&q=inspect+chain+that+has+come+off+chain+ring+on+bicycle&simid=608038516634559244&FORM=IRPRST&ck=FFFC8A23B0211098A6302C6455A90344&selectedIndex=1&itb=0&ajaxhist=0&ajaxserp=0')}>
          <Image 
            source={{ uri: 'https://ebikebuster.com/wp-content/uploads/2022/02/How-to-Fix-a-Bike-Chain-that-Keeps-Falling-Off-768x407.png' }} 
            style={styles.image} 
          />
        </TouchableOpacity>
        <Text style={styles.step}>Step 2: If the chain is off, carefully lift it and place it back onto the chainrings and cassette.</Text>
        <TouchableOpacity onPress={() => openLink('https://www.bing.com/images/search?view=detailV2&ccid=8uyQKsD0&id=27B0F71F7361239B617ECBA39F0F7F394864ED37&thid=OIP.8uyQKsD0aa74c_9xj4pnNgHaFW&mediaurl=https%3a%2f%2fthumbs.dreamstime.com%2fz%2ffemale-replacing-wheels-bicycle-another-one-workshop-young-happy-cheerful-224772596.jpg&exph=1157&expw=1600&q=picture+of+someone+removing+the+wheel+of+the+bicycle&simid=608036034091882762&FORM=IRPRST&ck=DED87AB883964A1475A289779D0E0EEB&selectedIndex=19&itb=0&ajaxhist=0&ajaxserp=0')}>
          <Image 
            source={{ uri: 'https://rideemtb.com/wp-content/uploads/2023/03/Install-chain-onto-chainring-1024x576.jpg'}} 
            style={styles.image} 
          />
        </TouchableOpacity>
        <Text style={styles.step}>Step 3: If the chain is broken, use a chain tool to remove the broken link and reconnect the chain using a master link or chain pin.</Text>
                <TouchableOpacity onPress={() => openLink('https://www.bing.com/images/search?view=detailV2&ccid=%2FcMTh%2BjA&id=78484F28B1E4D6D93BF96DADC4D0D9E91367169C&thid=OIP._cMTh-jADhF-9s23nfULFQHaFj&mediaurl=https%3A%2F%2Fcontent.instructables.com%2FORIG%2FFV8%2FRRRZ%2FGNNUW156%2FFV8RRRZGNNUW156.jpg%3Fauto%3Dwebp%26fit%3Dbounds%26frame%3D1%26height%3D1024%26width%3D1024auto%3Dwebp%26frame%3D1%26height%3D300&exph=1024&expw=1365&q=image+of+using+chain+tool+to+remove+broken+link+and+reconnecting+chain+on+bicycle&simid=608052775898997611&form=IRPRST&ck=7BCCABEF48859F1325992B5CFF9DAD1B&selectedindex=13&itb=0&ajaxhist=0&ajaxserp=0&vt=0&sim=11')}>
          <Image 
            source={{ uri: 'https://content.instructables.com/ORIG/FV8/RRRZ/GNNUW156/FV8RRRZGNNUW156.jpg?auto=webp&fit=bounds&frame=1&height=1024&width=1024auto=webp&frame=1&height=300' }} 
            style={styles.image} 
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink('https://example.com/chain-connecting-guide')}>
          <Text style={styles.link}>(URL: Detailed steps for reconnecting the chain)</Text>
        </TouchableOpacity>
        <Text style={styles.videoHeader}>
          Video Guide for fixing chain issues:
        </Text>
        <YoutubePlayer
          height={250}
          play={false}
          videoId={'HpUCCrgugQE'} // Replace with the actual YouTube video ID
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

export default PedalsDontMoveScreen;
