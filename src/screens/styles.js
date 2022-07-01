import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '100%',
        maxWidth: 300,
        maxHeight: 200,
    },
    input: {
        margin: 5,
        padding: 8,
        borderWidth: 1,
        borderColor: '#777',
        width: '100%',
        height: 50,
        backgroundColor: "white",
        borderRadius: 10
    },
    container: {
        margin: 5,
        flex: 1,
        flexDirection: "row",
        padding: 8,
        alignItems: 'center',
        width: 100,
        flex: 1,
        justifyContent: 'center',
        height: 50,
    },
    text: {
        margin: 15,
        fontWeight: "bold",
        fontSize: 22,
        color: "white"
    },
    text2: {
        color: 'white',
        fontWeight: "bold",
        fontSize: 16,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15,
        borderRadius: 2,
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#6692d9',
    }

})

export default styles;