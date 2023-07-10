import React, {useState} from 'react';
import { View, Text, Image, TextInput, Pressable, ImageBackground, ScrollView, Alert } from 'react-native';
import { SearchBar } from '@rneui/themed';
import { logo, union, search, basket } from './assets/images';

import DishList from './components/dishlist'
import CartModal from './components/modals/cartModal';
import { SafeAreaView } from 'react-native-safe-area-context';
import Checkout from './components/checkout/checkout';

const scrollDishTypeMenu = ['PASTA', 'CHICKEN SANDWICHES', 'APPETIZERS', 'SOUP AND SALADS', 'PIZZA', 'PASTA', 'CHICKEN SANDWICHES', 'APPETIZERS', 'SOUP AND SALADS', 'PIZZA', 'PASTA', 'CHICKEN SANDWICHES', 'APPETIZERS', 'SOUP AND SALADS', 'PIZZA', 'PASTA', 'CHICKEN SANDWICHES', 'APPETIZERS', 'SOUP AND SALADS', 'PIZZA', 'PASTA', 'CHICKEN SANDWICHES', 'APPETIZERS', 'SOUP AND SALADS', 'PIZZA', 'PASTA', 'CHICKEN SANDWICHES', 'APPETIZERS', 'SOUP AND SALADS', 'PIZZA']

function Main({ navigation }) {
    const [cartModalVisible, setCartModalVisible] = useState(false);
    const [chkoutModalVisible, setChkoutModalVisible] = useState(false);
    const badgeCount = 3;
    const gotoStart = () => {
        navigation.navigate('Home')
    }

    return (
        <View style={{ flex: 1 }}>
            <View className="flex flex-row py-[16px] px-[62px] bg-white">
                <View className="w-1/3">
                    <Pressable onPress={gotoStart}>
                        <Image className="h-[87px]" source={logo}></Image>
                    </Pressable>
                </View>
                <View className="w-1/3">
                    <Text className="text-[28px] self-center m-auto">Hello there 😄</Text>
                </View>
                <View className="flex flex-row items-stretch w-1/3">
                    <View className="flex flex-row self-center m-auto w-[260px] h-[50px] static">
                        <TextInput placeholder='Search' className="focus:border-solid rounded-[10px] focus:border-2 focus:boder-radius-[5px] focus:border-[#869198] w-[260px] bg-[#f5f5f5] pl-[20px]"></TextInput>
                        <Pressable className="absolute top-[16px] right-[23px]">
                            <Image source={search}></Image>
                        </Pressable>
                    </View>
                    <View className="flex flex-row self-center m-auto items-stretch">
                        <Text className="self-center m-auto pr-[22px] pl-[27px] leading-[31px] text-[27px]">Cart</Text>
                        <Pressable className="static self-center m-auto" onPress={() => {setCartModalVisible(true)}}>
                            <Image source={basket} className="w-[49px] h-[48.21px] pr-[58px] self-center m-auto">
                            </Image>
                            <View className="absolute h-[35px] w-[35px] bg-[#b2ba21] rounded-full border-solid border-[3px] border-[#fff] items-center bottom-[-17px] right-[-17px]" >
                                <Text className="text-[19px] leading-[23px] text-white text-center m-auto">{badgeCount}</Text>
                            </View>
                        </Pressable>
                    </View>
                </View>
            </View>
            <CartModal visible={cartModalVisible} action={setCartModalVisible} chkaction={setChkoutModalVisible}></CartModal>

            <View>
                <ImageBackground source={union} className="h-[105px] w-full" resizeMode='cover'>
                    <ScrollView horizontal >
                        <View className="flex flex-row h-[90px]">
                            {
                                scrollDishTypeMenu.map((ele, idx) =>
                                    <View className="w-[200px] justify-center" key={idx}>
                                        <Text className="text-[25px] leading-[27px] text-center">{ele}</Text>
                                    </View>
                                )
                            }
                        </View>
                    </ScrollView>
                </ImageBackground>
            </View>

            <DishList></DishList>
            <Checkout chkvisible={chkoutModalVisible} chkaction={setChkoutModalVisible} navigation={navigation}></Checkout>
        </View >
    )
}

export default Main;