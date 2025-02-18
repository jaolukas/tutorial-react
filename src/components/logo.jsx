import { Image } from 'expo-image'
import { StyleSheet, Text, View } from 'react-native-web'


export default function Logo() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source="https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-2945110.png?f=webp&w=256" />
                
                <Text>Meu logo é muito é massa!</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        padding: 8,
        backgroundColor: '#CDCDCD',
        borderRadius: 10
    },
    logo: {
        height: 80,
        width: 90
    }
})