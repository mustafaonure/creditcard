import { View, Text, Image, StyleSheet, Button, Pressable } from 'react-native'
import React, { useState } from 'react'
import { TextInput, TouchableOpacity } from "react-native-gesture-handler"
import Logo from '../../assets/images/logo.png'
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions'

import styles from './styles'

const Validation = () => {

    const { height } = useWindowDimensions();
    const [cardNumber, setCardNumber] = useState('');
    const [date, setDate] = useState('');
    const [dateYear, setDateYear] = useState('');
    const [cvv, setCvv] = useState('');


    function getDigit(cardNumber) {
        if (cardNumber < 9)
            return cardNumber;
        return Math.floor(cardNumber / 10) + cardNumber % 10;
    }

    // Return the number of digits in d
    function getSize(d) {
        let num = d.toString();
        return num.length;
    }

    // Return the first k number of digits from
    // number. If the number of digits in number
    // is less than k, return number.
    function getPrefix(cardNumber, k) {
        if (getSize(cardNumber) > k) {
            let num = cardNumber.toString();
            return parseInt(num.substring(0, k));
        }
        return cardNumber;
    }

    // Return true if the digit d is a prefix for number
    function prefixMatched(cardNumber, d) {
        return getPrefix(cardNumber, getSize(d)) == d;
    }

    // Get the result from Step 2
    function sumOfDoubleEvenPlace(cardNumber) {
        let sum = 0;
        let num = cardNumber.toString();
        for (let i = getSize(cardNumber) - 2; i >= 0; i -= 2)
            sum += getDigit((num.charCodeAt(i) - '0'.charCodeAt(0)) * 2);

        return sum;
    }

    // Return sum of odd-place digits in number
    function sumOfOddPlace(cardNumber) {
        let sum = 0;
        let num = cardNumber.toString();
        for (let i = getSize(cardNumber) - 1; i >= 0; i -= 2)
            sum += num.charCodeAt(i) - '0'.charCodeAt(0);
        return sum;
    }
    const isValid = (text) => {
        console.log("Click happened");
        if (!cardNumber.trim() || !cvv.trim() || !date.trim() || !dateYear.trim()) {
            alert("Please fill in all the blanks.");
            return;
        }
        if (cardNumber.length < 13) {
            alert('Invalid Card');
            return;
        }
        if (cvv.length != 3 || cvv < 0) {
            alert('Wrong cvv');
            return;
        }
        if (date < 0 || date > 12) {
            alert('Wrong month');
            return;
        }
        if (dateYear < 0) {
            alert('Wrong year');
            return;
        }

        if (getSize(cardNumber.length) >= 13 &&
            getSize(cardNumber.length) <= 16 &&
            prefixMatched(cardNumber, 4) ||
            prefixMatched(cardNumber, 5) ||
            prefixMatched(cardNumber, 37) ||
            prefixMatched(cardNumber, 6) &&
            sumOfDoubleEvenPlace(cardNumber) +
            sumOfOddPlace(cardNumber) % 10 == 0) {


            return alert("Valid Card");
        } else {
            alert("Invalid Card");
        }
    }


    return (
        <View style={styles.root}>
            <Image
                source={Logo}
                style={[styles.logo, { height: height * 0.3 }]}
                resizeMode="contain" />
            <Text style={styles.text}>
                Enter Credit Card Number
            </Text>
            <TextInput
                maxLength={16}
                style={styles.input}
                placeholder="Credit Card Number"
                onChangeText={
                    (value) => setCardNumber(value)
                }
                keyboardType="numeric"

            />
            <View style={styles.container}>
                <TextInput
                    maxLength={2}
                    style={styles.input}
                    placeholder="MM"
                    onChangeText={
                        (value) => setDate(value)
                    }
                    keyboardType="numeric"

                />
                <TextInput
                    maxLength={2}
                    style={styles.input}
                    placeholder="YY"
                    onChangeText={
                        (value) => setDateYear(value)
                    }
                    keyboardType="numeric"

                />
                <TextInput
                    maxLength={3}
                    style={styles.input}
                    placeholder="CVV"
                    onChangeText={
                        (value) => setCvv(value)
                    }
                    keyboardType="numeric"
                    pattern={[
                        "^[0-9]{3, 4}$"
                    ]}

                />
            </View>
            <Pressable
                title="test"
                style={styles.button}
                onPress={() => isValid()}>
                <Text style={styles.text2}>Valid</Text>
            </Pressable>

        </View>


    )
}



export default Validation;