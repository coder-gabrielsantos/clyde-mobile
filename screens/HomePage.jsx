import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HomePage() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Clyde 👋</Text>
            <Text style={styles.subtitle}>You're authenticated</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1e2a38",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
    },
    title: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 12,
    },
    subtitle: {
        color: "#aaa",
        fontSize: 16,
    },
});
