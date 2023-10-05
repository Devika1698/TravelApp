import React from 'react';
import { View, Text, Image } from 'react-native';

const PlaceDetails: React.FC<{ route: any }> = ({ route }) => {

    const { place } = route.params;

    const placeDetails = {
        'New York': {
            imageUrl: 'https://www.travelandleisure.com/thmb/91pb8LbDAUwUN_11wATYjx5oF8Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/new-york-city-evening-NYCTG0221-52492d6ccab44f328a1c89f41ac02aea.jpg',
            description: 'New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers.',
        },
        'Paris': {
            imageUrl: 'https://res.klook.com/image/upload/Mobile/City/swox6wjsl5ndvkv5jvum.jpg',
            description: 'Paris, France capital, is a major European city and a global center for art, fashion, gastronomy and culture.',
        },
        'Tokyo': {
            imageUrl: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/04/10/13/tokyo-main.jpg',
            description: 'Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples.',
        },
        'London': {
            imageUrl: 'https://assets.editorial.aetnd.com/uploads/2019/03/topic-london-gettyimages-760251843-feature.jpg',
            description: 'London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. ',
        },
        'San Francisco': {
            imageUrl: 'https://luxurylondon.co.uk/wp-content/uploads/2023/07/san-francisco-hero.jpg',
            description: 'San Francisco, officially the City and County of San Francisco, is the commercial, financial, and cultural center of Northern California. ',
        },
    };

    const placeDetailsData = placeDetails[place];

    const { imageUrl, description } = placeDetailsData;

    return (
        <View>
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 35, padding: 20 }}>{place}</Text>
            <Image source={{ uri: imageUrl }} style={{ width: 450, height: 400 }} />
            <Text style={{ color: 'black', fontSize: 25, textAlign: 'justify', padding: 10 }}>{description}</Text>
        </View>
    );
};

export default PlaceDetails;
