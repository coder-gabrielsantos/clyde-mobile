import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthScreen from "../../features/auth/screens/AuthScreen";
import TeacherDashboard from "../../features/teacher/screens/TeacherDashboard";
// import StudentDashboard from "../../features/student/screens/StudentDashboard";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Auth" component={AuthScreen} />
            <Stack.Screen name="TeacherDashboard" component={TeacherDashboard} />
        </Stack.Navigator>
    );
}
