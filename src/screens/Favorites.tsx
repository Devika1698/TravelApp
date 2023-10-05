import React from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Favorites: React.FC<{ favorites: string[] }> = ({ favorites }) => {

    const navigation = useNavigation();

    const handleItemPress = (item: string) => {
        navigation.navigate('PlaceDetails', { place: item });
    };

    return (
        <FlatList
            data={favorites}
            renderItem={({ item }) => (
                <Pressable onPress={() => handleItemPress(item)}>
                    <View style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
                        <Text style={{ color: 'black', fontSize: 25 }}>{item}</Text>
                    </View>
                </Pressable>
            )}
            keyExtractor={(item) => item}
        />
    );
};

export default Favorites;
