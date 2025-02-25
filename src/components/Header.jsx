import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import Octicons from '@expo/vector-icons/Octicons';

export default function Header() { 
    return (
        <View style={styles.container}>

            <View style={styles.aside}>

            <Image 
            style={styles.avatar}
            source={"https://github.com/jaolukas.png"} />

            <Text style={styles.nome}>João Lucas Santos</Text>

            </View>


            <Octicons style={styles.menu} name="three-bars" size={24} color="black" />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: '100%',
        backgroundColor: '#551fbd',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', 
    },
    aside: {
        gap: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatar: {
        height: 65,
        width: 65,
        borderRadius: 35
    },
    nome: {
        color: '#a2eacb',
        fontSize: 22,
    },
    menu: {
        color: '#a2eacb',
        cursor: 'pointer'
    }
});