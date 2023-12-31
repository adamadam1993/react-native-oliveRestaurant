import React, { useState } from 'react'
import { View, Text, Image, Pressable, Modal } from 'react-native';

import { down } from '../../assets/images';
import Counter from '../include/counter';

import { cartList } from '../../utils/dishData';
import Checkout from '../checkout/checkout';

function CartModal(props) {
    
    const [showMoreCart, setShowMoreCart ] = useState(false)

    return (
        <View>
            <Modal animationType="fade" transparent={true} visible={props.visible} onRequestClose={() => {
                props.action(!props.visible);
            }}>
                <View className={"absolute w-[630px] bg-white rounded-[10px] top-[100px] right-[60px]"}>
                    <View className="static pt-[38px] pr-[42px] pl-[43px] pb-[35px]">
                        <View><Text className="text-[25px] fong-[700]">Your Cart</Text></View>
                        <View className="divide-solid divide-y divide-[#E7E7E7]">
                            <View className="flex flex-row static">
                                <View className="pl-[20px]"><Text className="text-[16px] text-[#ACACAC]">items</Text></View>
                                <View className="pl-[243px]"><Text className="text-[16px] text-[#ACACAC]">quantity</Text></View>
                                <View className="pl-[95px]"><Text className="text-[16px] text-[#ACACAC]">price</Text></View>
                            </View>
                                {
                                    cartList.map((ele, idx) => 
                                        <View className="flex flex-row" key={idx}>
                                            <View className="flex flex-row p-[10px]">
                                                <View className="pr-[22px]">
                                                    <Image className="w-[57px] h-[45px]" source={ele.img}></Image>
                                                </View> 
                                                <View className="w-[146px]">
                                                    <View className="pb-[6px]"><Text className="text-[16px] leading-[22px]">{ele.title}</Text></View>
                                                    <View className="pb-[5px]"><Text className="text-[12px] leading-[16px]">{"- " + (ele.roll ? "Roll" : "No Roll")}</Text></View>
                                                    <View className="pb-[5px]"><Text className="text-[12px] leading-[16px]">{"- " + ele.side}</Text></View>
                                                    <View className="pb-[5px]"><Text className="text-[12px] leading-[16px]">{"- " + ele.drink}</Text></View>
                                                </View>
                                            </View>
                                            <View className="pl-[43px] pt-[13px]">
                                                <Counter size="md"></Counter>
                                            </View>
                                            <View className="pl-[55px] pt-[9px]"><Text className="text-[23px] font-[600] text-[#b2ba21]">{ele.price}</Text></View>
                                        </View>
                                    )
                                }
                            <View className="flex flex-row justify-between pt-[11px] pb-[11px]">
                                <View><Text>Subtotal</Text></View>
                                <View><Text className="text-[#b2ba21]">$3.25</Text></View>
                            </View>
                            <View className="flex flex-row justify-between pt-[11px] pb-[11px]" >
                                <View><Text>Tax</Text></View>
                                <View><Text className="text-[#b2ba21]">0.25</Text></View>
                            </View>
                            <View className="flex flex-row justify-between pt-[11px] pb-[11px] ">
                                <View>
                                    <Text>Fees</Text>
                                    <Pressable className="absolute left-[59px] bottom-[0px]" onPress={() => {setShowMoreCart(!showMoreCart)}}>
                                        <Image source={down}></Image>
                                    </Pressable>
                                </View>
                                <View><Text className="text-[#b2ba21]">0.25</Text></View>
                            </View>
                            <View className={"flex pl-[30px] pt-[3px] " + (showMoreCart ? "" : "hidden")} >
                                <View className="flex flex-row justify-between">
                                    <View><Text>Online Ordering</Text></View>
                                    <View><Text className="text-[#b2ba21]">$0.35</Text></View>
                                </View>
                                <View className="flex flex-row justify-between">
                                    <View><Text>Tip</Text></View>
                                    <View><Text className="text-[#b2ba21]">$0.0</Text></View>
                                </View>
                            </View>
                        </View>
                        <View className="flex flex-row justify-between pt-[25px]">
                            <Pressable className="w-[205px] h-[50px] justify-center items-center rounded-7px" onPress={() => {props.action(false); props.chkaction(true);}}>
                                <Text className="bg-[#b2ba21] w-[234px] leading-[22px] py-[14px] text-white text-[16px] text-center">CHECKOUT</Text>
                            </Pressable>
                            <View className="pl-[24px] pr-[23px] pb-[9px]">
                                <Text className="text-[#b2ba21] text-[23px] leading-[31px] py-[10px]">$10.14</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
            
        </View>
    )
}

export default CartModal