import React from 'react';
import { ScrollView, Text, Image, View, StyleSheet, TouchableOpacity, Button, Linking } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import { useNavigation } from '@react-navigation/native';

const FixingFlatTyreScreen = () => {
  const openLink = (url) => {
    Linking.openURL(url);
  };
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.header}>Fixing Flat Tyre with Tube</Text>
        <TouchableOpacity onPress={() => openLink('https://www.liv-cycling.com/global/campaigns/how-to-fix-a-flat-with-a-tube/18574')}>
          <Text style={styles.link}>(URL: Detailed steps on repairing a flat tire WITH tube.)</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink('https://www.liv-cycling.com/global/campaigns/how-to-fix-a-flat-tire-tubeless/25294')}>
          <Text style={styles.link}>(URL: Detailed steps on repairing a flat tire WITHOUT tube.) (EXTRA INFO)</Text>
        </TouchableOpacity>
        <Text style={styles.text}>
          Step 1: Remove the wheel. Release the brakes and then the wheel.
        </Text>
        <TouchableOpacity onPress={() => openLink('https://www.bing.com/images/search?view=detailV2&ccid=8uyQKsD0&id=27B0F71F7361239B617ECBA39F0F7F394864ED37&thid=OIP.8uyQKsD0aa74c_9xj4pnNgHaFW&mediaurl=https%3a%2f%2fthumbs.dreamstime.com%2fz%2ffemale-replacing-wheels-bicycle-another-one-workshop-young-happy-cheerful-224772596.jpg&exph=1157&expw=1600&q=picture+of+someone+removing+the+wheel+of+the+bicycle&simid=608036034091882762&FORM=IRPRST&ck=DED87AB883964A1475A289779D0E0EEB&selectedIndex=19&itb=0&ajaxhist=0&ajaxserp=0')}>
          <Image 
            source={{ uri: 'https://thumbs.dreamstime.com/z/female-replacing-wheels-bicycle-another-one-workshop-young-happy-cheerful-224772596.jpg' }} 
            style={styles.image} 
          />
        </TouchableOpacity>
        <Text style={styles.text}>
          Step 2: Replace the tube. Carefully remove the tire, replace the tube, and reseat the tire.
        </Text>
        <TouchableOpacity onPress={() => openLink('https://www.bing.com/images/search?view=detailV2&ccid=L4mTZmfm&id=2595539A11C9F5E0688FADCE3FA43DF3DDE045B8&thid=OIP.L4mTZmfmdzODykmsv3I0rQHaDF&mediaurl=https%3A%2F%2Frideonmagazine.com.au%2Fwp-content%2Fuploads%2F2014%2F07%2Fbasic-mainteance-6.jpg&exph=2280&expw=5472&q=picture+of+someone+replacing+the+tube+of+the+bicycle&simid=608010238510454915&form=IRPRST&ck=7C61ADF03D3C3903A7471AE4FFD106F0&selectedindex=1&itb=0&ajaxhist=0&ajaxserp=0&vt=0&sim=11')}>
          <Image 
            source={{ uri: 'https://rideonmagazine.com.au/wp-content/uploads/2014/07/basic-mainteance-6.jpg' }} 
            style={styles.image} 
          />
        </TouchableOpacity>
        <Text style={styles.text}>
          Step 3: Inflate the new tube to the recommended tire pressure.
        </Text>
        <TouchableOpacity onPress={() => openLink('https://www.bing.com/images/search?view=detailV2&ccid=XbVjUsht&id=BA1AFCDF098C0A2B2241E06A5A3BECF03EBF87DF&thid=OIP.XbVjUsht9XV9D8HgsExYqAHaFW&mediaurl=https%3a%2f%2fthumbs.dreamstime.com%2fz%2finflating-bicycle-inner-tube-person-wuth-help-compressed-air-pressure-gauge-wheel-hand-seen-background-soft-186916708.jpg&exph=1156&expw=1600&q=picture+of+someone+inflating+tube+for+bicycle&simid=608013829104016355&FORM=IRPRST&ck=B09525EE40ED1FD0790D0B09F2F18C56&selectedIndex=0&itb=0&ajaxhist=0&ajaxserp=0')}>
          <Image 
            source={{ uri: 'https://thumbs.dreamstime.com/z/inflating-bicycle-inner-tube-person-wuth-help-compressed-air-pressure-gauge-wheel-hand-seen-background-soft-186916708.jpg' }} 
            style={styles.image} 
          />
        </TouchableOpacity>
        <Text style={styles.text}>
          Step 4: Reattach the wheel and ensure it's securely fastened and aligned.
        </Text>
        <TouchableOpacity onPress={() => openLink('https://www.bing.com/images/search?view=detailV2&ccid=BkszVB1c&id=EBCEACAC987D40068C32F9C152C2410C7C077B06&thid=OIP.BkszVB1cOB8s_LyF6CWs7gHaE7&mediaurl=https%3A%2F%2Fimg.freepik.com%2Fpremium-photo%2Factive-male-cyclist-checking-tire-as-yearly-bike-rubber-maintenance-routine-detailed-image-enthusiastic-sporty-caucasian-man-gripping-examining-damaged-bicycle-wheel-dismantle_482257-72811.jpg&exph=417&expw=626&q=picture+of+someone+reattaching+the+bicycle+wheel&simid=608012158378456258&form=IRPRST&ck=687D6999DF906CC2488244D1C0328555&selectedindex=33&itb=0&ajaxhist=0&ajaxserp=0&vt=0&sim=11')}>
          <Image 
            source={{ uri: 'https://img.freepik.com/premium-photo/active-male-cyclist-checking-tire-as-yearly-bike-rubber-maintenance-routine-detailed-image-enthusiastic-sporty-caucasian-man-gripping-examining-damaged-bicycle-wheel-dismantle_482257-72811.jpg' }} 
            style={styles.image} 
          />
        </TouchableOpacity>
        <Text style={styles.videoHeader}>
            Video Guide for fixing flat tyre with tube lining:
        </Text>
        <YoutubePlayer
          height={250}
          play={false}
          videoId={'fwwfV99VV8I'} // Replace with the actual YouTube video ID
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

export default FixingFlatTyreScreen;
