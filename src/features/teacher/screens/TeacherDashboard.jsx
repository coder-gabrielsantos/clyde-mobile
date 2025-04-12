import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    ActivityIndicator,
    Alert,
} from "react-native";
import { createClassroom, listOwnClassrooms } from "../services/teacherService";

export default function TeacherDashboard() {
    const [classrooms, setClassrooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [newClassroomName, setNewClassroomName] = useState("");

    useEffect(() => {
        fetchClassrooms();
    }, []);

    const fetchClassrooms = async () => {
        try {
            setLoading(true);
            const response = await listOwnClassrooms();
            setClassrooms(response);
        } catch (err) {
            Alert.alert("Error", "Failed to load classrooms");
        } finally {
            setLoading(false);
        }
    };

    const handleCreateClassroom = async () => {
        if (!newClassroomName.trim()) return;

        try {
            const response = await createClassroom({ name: newClassroomName });
            setClassrooms((prev) => [...prev, response]);
            setNewClassroomName("");
            setShowForm(false);
        } catch (err) {
            Alert.alert("Error", "Failed to create classroom");
        }
    };

    const renderClassroom = ({ item }) => (
        <View style={styles.card}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.code}>Code: {item.code}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Your Classrooms</Text>

            {loading ? (
                <ActivityIndicator size="large" color="#007AFF" />
            ) : (
                <FlatList
                    data={classrooms}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderClassroom}
                />
            )}

            {showForm && (
                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        placeholder="Classroom name"
                        value={newClassroomName}
                        onChangeText={setNewClassroomName}
                    />
                    <TouchableOpacity style={styles.createButton} onPress={handleCreateClassroom}>
                        <Text style={styles.createButtonText}>Create</Text>
                    </TouchableOpacity>
                </View>
            )}

            <TouchableOpacity style={styles.fab} onPress={() => setShowForm(!showForm)}>
                <Text style={styles.fabText}>{showForm ? "×" : "+"}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#f2f2f2",
        borderRadius: 8,
        marginBottom: 12,
        padding: 16,
    },
    code: {
        color: "#555",
        marginTop: 4,
    },
    container: {
        backgroundColor: "#fff",
        flex: 1,
        padding: 20,
    },
    createButton: {
        alignItems: "center",
        backgroundColor: "#007AFF",
        borderRadius: 8,
        padding: 12,
    },
    createButtonText: {
        color: "#fff",
        fontWeight: "bold",
    },
    fab: {
        alignItems: "center",
        backgroundColor: "#007AFF",
        borderRadius: 28,
        bottom: 30,
        elevation: 5,
        height: 56,
        justifyContent: "center",
        position: "absolute",
        right: 30,
        width: 56,
    },
    fabText: {
        color: "#fff",
        fontSize: 30,
        marginTop: -2,
    },
    form: {
        marginTop: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    input: {
        borderColor: "#ccc",
        borderRadius: 8,
        borderWidth: 1,
        marginBottom: 10,
        padding: 12,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
});

