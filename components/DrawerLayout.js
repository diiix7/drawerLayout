import React, { useState } from 'react';
import {Button, Pressable, StyleSheet, Text, View} from 'react-native';
import { Drawer } from 'react-native-drawer-layout';
import Icon from "react-native-vector-icons/MaterialIcons";
import {heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from "react-native-responsive-screen";

export default function DrawerLayout() {
    const [open, setOpen] = useState(false);
    const drawerContent = () =>{

        const handleKiosk = () => {

        }

        const handleSubServices = () => {

        }
        return (
        <>
            <View style={styles.drawerHead}>
                <Text style={styles.drawerHeadTitle}>DRAWER</Text>
            </View>
                <View style={styles.line}></View>
            <View style={styles.drawerItems}>
                <Pressable
                    style={({ pressed }) => [
                        styles.drawerItem,
                        {
                            backgroundColor: pressed ? "lightgray" : "white",
                        },
                    ]}
                >
                    <View style={styles.drawerItemLabel}><Text style={styles.label}>Home</Text></View>
                </Pressable>
                <Pressable
                    style={({ pressed }) => [
                        styles.drawerItem,
                        {
                            backgroundColor: pressed ? "lightgray" : "white",
                        },
                    ]}
                >
                    <View style={styles.drawerItemLabel}><Text style={styles.label}>Services</Text></View>
                </Pressable>
                <Pressable
                    style={({ pressed }) => [
                        styles.drawerItem,
                        {
                            backgroundColor: pressed ? "lightgray" : "white",
                        },
                    ]}
                >
                    <View style={styles.drawerItemLabel}><Text style={styles.label}>Users</Text></View>
                </Pressable>
                <Pressable
                    style={({ pressed }) => [
                        styles.drawerItem,
                        {
                            backgroundColor: pressed ? "lightgray" : "white",
                        },
                    ]}
                >
                    <View style={styles.drawerItemLabel}><Text style={styles.label}>Workspace</Text></View>
                </Pressable>
                <Pressable
                    style={({ pressed }) => [
                        styles.drawerItem,
                        {
                            backgroundColor: pressed ? "lightgray" : "white",
                        },
                    ]}
                >
                    <View style={styles.drawerItemLabel}><Text style={styles.label}>About</Text></View>
                </Pressable>
            </View>
            </>
        );
    }
    return (
        <Drawer
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            renderDrawerContent={() => drawerContent()}
            drawerType={"front"}
            drawerStyle={{
                width: wp("80"),
            }}
        >
            <View style={styles.container}>
                <Pressable onPress={() => setOpen((prevOpen) => !prevOpen)}>
                <Icon name="notes" size={40} style={styles.icon} />
                </Pressable>
                <View style={styles.headTitle}>
                    <Text style={styles.title}>Drawer Layout</Text>
                </View>
            </View>
        </Drawer>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        top: 40,
    },
    icon: {
        left:wp("5"),
    },
    headTitle: {
        left: wp("8"),
        justifyContent: "center"
    },
    title: {
        fontSize: wp("6"),
    },
    drawerHead: {
        left: wp("10"),
        top: hp("8")
    },
    drawerHeadTitle: {
        fontSize: wp("6"),
    },
    line: {
        width: wp("80"),
        borderBottomWidth: 2,
        borderBottomColor: "black",
        top: hp("12"),
    },
    drawerItems: {
        top: hp("14"),
        alignSelf: "center",
    },
    drawerItem: {
        paddingVertical: 5,
    },
    drawerItemLabel: {
        width: wp("76"),
        paddingVertical: 18,
    },
    label: {
        fontSize: wp("5"),
        left: wp("8"),
    }
});
