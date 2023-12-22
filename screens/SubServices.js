import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
export default function SubServices() {
    return (
        <View style={styles.container}>
            <Text>Ici c'est Home</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
