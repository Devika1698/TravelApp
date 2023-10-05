import React, { useState } from 'react';
import { View, Text, FlatList, Button, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CityList: React.FC<{ favorites: string[]; setFavorites: (favorites: string[]) => void }> = ({
    favorites,
    setFavorites,
}) => {

    const [places, setPlaces] = useState<string[]>([
        'New York',
        'Paris',
        'Tokyo',
        'London',
        'San Francisco',
    ]);
    const navigation = useNavigation();

    const handleItemPress = (item: string) => {
        console.log(`Pressed on ${item}`);
        navigation.navigate('PlaceDetails', { place: item });
    };

    const toggleFavorite = (item: string) => {
        if (favorites.includes(item)) {
            setFavorites(favorites.filter((place) => place !== item));
        } else {
            setFavorites([...favorites, item]);
        }
    };

    const renderItem = ({ item }: { item: string }) => (
        <Pressable onPress={() => handleItemPress(item)}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 16, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
                <Text style={{ color: 'black', fontSize: 25 }}>{item}</Text>
                <Pressable onPress={() => toggleFavorite(item)}>
                    {favorites.includes(item) ? (
                        <Icon name="heart" size={20} color="red" />
                    ) : (
                        <Icon name="heart-o" size={20} color="gray" />
                    )}
                </Pressable>
            </View>
        </Pressable>
    );

    return (
        <View>
            <FlatList
                data={places}
                renderItem={renderItem}
                keyExtractor={(item) => item}
            />
            <Button
                title="View Favorites"
                onPress={() => navigation.navigate('Favorites')}
                color="grey"
            />
        </View>
    );
};

export default CityList;
