import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";

export default function Box(props) {
    return (
        <View style={styles.container}>

            <View style={styles.text}>
                <Text style={styles.mensagem}>eae mano bora jogar bola hoje!?</Text>
            </View>

            <Image
                style={styles.avatar}
                source={"https://github.com/jaolukas.png"} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginLeft: 'auto',
        marginRight: 50,
        marginTop: 30,
        alignItems: 'center'
    },
    text: {
        height: 100,
        width: 250,  
        marginTop: 15, 
        backgroundColor: '#CCC4EB',
        borderRadius: 15,
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingHorizontal: 20,
    },
    mensagem: {
        fontSize: 18, 
        textAlign: 'center', 
        color: '#333', 
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginLeft: 25
    }
});