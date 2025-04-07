import React, { useState, useEffect } from "react";
import {
    Alert,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { login, register } from "../services/authService";

export default function AuthScreen() {
    const [activeTab, setActiveTab] = useState("login"); // or "register"

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("STUDENT"); // or "TEACHER"

    const navigation = useNavigation();

    useEffect(() => {
        if (activeTab === "login") {
            setEmail("");
            setPassword("");
        } else {
            setName("");
            setEmail("");
            setPassword("");
            setRole("STUDENT");
        }
    }, [activeTab]);

    const handleLogin = async () => {
        try {
            const { token } = await login({ email, password });

            // Save token to AsyncStorage
            await AsyncStorage.setItem("token", token);

            // Navigate to Home
            navigation.replace("Home");
        } catch (error) {
            Alert.alert("Login failed", "Invalid credentials");
            console.error(error);
        }
    };

    const handleRegister = async () => {
        try {
            await register({ name, email, password, role });
            Alert.alert("Registration successful", "User created successfully.");
        } catch (error) {
            Alert.alert("Registration failed", "Check the data or try a different email.");
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            {/* Tab switcher */}
            <View style={styles.tabContainer}>
                <TouchableOpacity
                    style={[styles.tab, activeTab === "login" && styles.activeTab]}
                    onPress={() => setActiveTab("login")}
                >
                    <Text style={[styles.tabText, activeTab === "login" && styles.activeTabText]}>
                        Login
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.tab, activeTab === "register" && styles.activeTab]}
                    onPress={() => setActiveTab("register")}
                >
                    <Text style={[styles.tabText, activeTab === "register" && styles.activeTabText]}>
                        Register
                    </Text>
                </TouchableOpacity>
            </View>

            {activeTab === "login" && (
                <>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="#999"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="#999"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TouchableOpacity style={styles.actionButton} onPress={handleLogin}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </>
            )}

            {activeTab === "register" && (
                <>
                    <TextInput
                        style={styles.input}
                        placeholder="Full Name"
                        placeholderTextColor="#999"
                        value={name}
                        onChangeText={setName}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="#999"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="#999"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TouchableOpacity
                        style={styles.roleButton}
                        onPress={() => setRole((prev) => (prev === "STUDENT" ? "TEACHER" : "STUDENT"))}
                    >
                        <Text style={styles.roleButtonText}>Role: {role} (tap to switch)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton} onPress={handleRegister}>
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1e2a38",
        flex: 1,
        padding: 24,
        paddingTop: 80,
    },
    tabContainer: {
        backgroundColor: "#3a4a5a",
        borderRadius: 24,
        flexDirection: "row",
        marginBottom: 32,
    },
    tab: {
        alignItems: "center",
        borderRadius: 20,
        flex: 1,
        paddingVertical: 12,
    },
    activeTab: {
        backgroundColor: "#fff",
        borderRadius: 20,
    },
    tabText: {
        color: "#ccc",
        fontSize: 16,
    },
    activeTabText: {
        color: "#1e90ff",
        fontWeight: "bold",
    },
    input: {
        backgroundColor: "#fff",
        borderRadius: 12,
        height: 50,
        marginBottom: 16,
        paddingHorizontal: 16,
    },
    actionButton: {
        backgroundColor: "#1e90ff",
        borderRadius: 12,
        height: 50,
        justifyContent: "center",
        marginTop: 8,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
    roleButton: {
        alignItems: "center",
        backgroundColor: "#ddd",
        borderRadius: 12,
        height: 50,
        justifyContent: "center",
        marginBottom: 12,
    },
    roleButtonText: {
        color: "#333",
        fontWeight: "500",
    },
});
