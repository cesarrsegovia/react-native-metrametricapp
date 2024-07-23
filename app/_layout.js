import { Stack, Link } from "expo-router";
import { View, Pressable } from "react-native";
import { Logo } from "../components/Logo";
import { CircleIcon } from "../components/Icons";

export default function Layout() {
    return (
        <View className="flex-1">
            <Stack
                screenOptions={{
                    headerStyle: { backgroundColor: "black" },
                    headerTintColor: "yellow",
                    headerTitle: "",
                    headerLeft: () => <Logo />,
                    headerRight: () => (
                        <Link asChild href="/about">
                            <Pressable>
                                <CircleIcon />
                            </Pressable>
                        </Link>
                    ),
                }}
            />
        </View>
    );
}

