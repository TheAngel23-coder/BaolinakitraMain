import React, { useState } from 'react';
import Slider from '@react-native-community/slider';
import FootballStatsCard from './components/Cardgeneral';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
const App = () => {
  const [activeTab, setActiveTab] = useState(0); // État pour suivre l'onglet actif
  const [sliderValue, setSliderValue] = useState(50); // État pour stocker la valeur du slider

  const renderTabContent = (tabIndex: number) => {
    switch (tabIndex) {
      case 0:
        return (
          <View style={{ alignItems: 'center' }}>
            <ScrollView>
              <FootballStatsCard
                teamName={'toky'}
                competition={'ddd'}
                goals={0}
                shotsPerMatch={0}
                discipline={'vfv'}
                possession={''}
                successfulPasses={''}
                aerialsWon={0}
                rating={0}
                flagImage={0}
              />
              <FootballStatsCard
                teamName={'toky'}
                competition={'ddd'}
                goals={0}
                shotsPerMatch={0}
                discipline={'vfv'}
                possession={''}
                successfulPasses={''}
                aerialsWon={0}
                rating={0}
                flagImage={0}
              />
              <FootballStatsCard
                teamName={'toky'}
                competition={'ddd'}
                goals={0}
                shotsPerMatch={0}
                discipline={'vfv'}
                possession={''}
                successfulPasses={''}
                aerialsWon={0}
                rating={0}
                flagImage={0}
              />
            </ScrollView>
            <Text>Contenu de l'onglet 1</Text>
            <Text>Valeur du slider: {sliderValue}</Text>
          </View>
        );
      case 1:
        return (
          <View style={{ alignItems: 'center' }}>
            {/* Votre contenu pour l'onglet 2 */}
            <Text>Contenu de l'onglet 2</Text>
            <Text>Valeur du slider: {sliderValue}</Text>
          </View>
        );
      case 2:
        return (
          <View style={{ alignItems: 'center' }}>
            {/* Votre contenu pour l'onglet 3 */}
            <Text>Contenu de l'onglet 3</Text>
            <Text>Valeur du slider: {sliderValue}</Text>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Menu hamburger */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          padding: 20,
          backgroundColor: '#08cc0a'
        }}
      >
        <TouchableOpacity onPress={() => setActiveTab(0)}>
          <Text
            style={{
              fontWeight: activeTab === 0 ? 'bold' : 'normal',
              padding: 0,
              color: 'white'
            }}
          >
            General
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab(1)}>
          <Text
            style={{
              fontWeight: activeTab === 1 ? 'bold' : 'normal',
              color: 'white'
            }}
          >
            Domicile
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab(2)}>
          <Text
            style={{
              fontWeight: activeTab === 2 ? 'bold' : 'normal',
              color: 'white'
            }}
          >
            Exterieur
          </Text>
        </TouchableOpacity>
      </View>

      {/* Contenu des onglets */}
      <ScrollView>
        {renderTabContent(activeTab)}
        {/* Ajoutez ici autant de contenu que nécessaire */}
      </ScrollView>

      {/* Slider */}
      <View style={{ alignItems: 'center', marginBottom: 20 }}>
        <Text style={{ marginTop: 20 }}>Slider</Text>
        <Slider
          style={{ width: '80%', marginTop: 10 }}
          minimumValue={0}
          maximumValue={100}
          step={1}
          value={sliderValue}
          onValueChange={(value) => setSliderValue(value)}
        />
      </View>
    </View>
  );
};

export default App;
