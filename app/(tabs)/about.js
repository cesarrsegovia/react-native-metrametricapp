import { Pressable, ScrollView, Text } from "react-native";
import { Link } from "expo-router";
import { HomeIcon } from "../../components/Icons";
import { Screen } from "../../components/Screen";

export default function About() {
    return (
        <Screen>
            <ScrollView>
                <Link asChild href="/">
                    <Pressable>
                        <HomeIcon />
                    </Pressable>
                </Link>
                <Text className="text-white font-bold mb-8 text-2xl">
                    Sobre el proyecto
                </Text>
                <Text className="text-white text-white/90 mb-4">
                    En este video, aprenderás a crear una app con Expo y TailwindCSS.
                    Repasamos la instalación y configuración, mejoramos la UI,
                    implementamos enrutado y navegación con animaciones, y mucho más. ¡No
                    te lo pierdas!
                </Text>
                <Text className="text-white text-white/90 mb-4">
                    En este video, aprenderás a crear una app con Expo y TailwindCSS.
                    Repasamos la instalación y configuración, mejoramos la UI,
                    implementamos enrutado y navegación con animaciones, y mucho más. ¡No
                    te lo pierdas!
                </Text>
                <Text className="text-white text-white/90 mb-4">
                    En este video, aprenderás a crear una app con Expo y TailwindCSS.
                    Repasamos la instalación y configuración, mejoramos la UI,
                    implementamos enrutado y navegación con animaciones, y mucho más. ¡No
                    te lo pierdas!
                </Text>
                <Text className="text-white text-white/90 mb-4">
                    En este video, aprenderás a crear una app con Expo y TailwindCSS.
                    Repasamos la instalación y configuración, mejoramos la UI,
                    implementamos enrutado y navegación con animaciones, y mucho más. ¡No
                    te lo pierdas!
                </Text>
            </ScrollView>
        </Screen>
    );
}
