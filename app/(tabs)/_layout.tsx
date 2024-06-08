import React from 'react';
import { View, Image } from 'react-native';
import { Tabs } from 'expo-router';

// Assuming you have an icons object with your icons
import { icons } from '../../constants/icons';

// Define the props for TabIcon
interface TabIconProps {
    icon: any; // Replace 'any' with the specific type of your icon if available
}

// Create the TabIcon component with props
const TabIcon: React.FC<TabIconProps> = ({ icon }) => (
    <View>
        <Image source={icon} style={{ width: 24, height: 24 }} />
    </View>
);

const TabsLayout: React.FC = () => {
    return (
        <>
            <Tabs>
                <Tabs.Screen
                    name="home"
                    options={{
                        headerShown: false,
                        title: "Home",
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon icon={icons.Home} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="create"
                    options={{
                        headerShown: false,
                        title: "Create",
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon icon={icons.Create} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        headerShown: false,
                        title: "Profile",
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon icon={icons.Profile} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="bookmark"
                    options={{
                        headerShown: false,
                        title: "Bookmark",
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon icon={icons.Bookmark} />
                        ),
                    }}
                />
            </Tabs>
        </>
    );
};

export default TabsLayout;
