import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
const Calculator = () => {
    const [result, setResult] = useState('');
    const Calculate = (title) => {
        if (title == "AC") {
            setResult('');
        }
        else if (title == "<-") {
            setResult(result.substring(0, result.length - 1));
        }
        else if (title == "=") {
            try {
                let ans = Number(eval(result).toFixed(3)).toString();
                setResult(ans);
            } catch (error) {

            }

        }
        else {
            setResult(result + title);
        }
    }
    const Btn = ({ title, color, type }) =>
    (
        <TouchableOpacity onPress={() => { Calculate(title) }} style={{
            padding: 5,
            borderRadius: 35,
            height: 70,
            width: 70,
            margin: 10,
            backgroundColor: getEqualcolor(type),
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Text style={{
                fontSize: 37,
                color: getBtncolor(color),
                textAlign: "center",
                textAlignVertical: "center",


            }}>{title}</Text>
        </TouchableOpacity>
    );
    const getBtncolor = (color) => {
        if (color == "blue") {
            return "blue";
        }
        else if (color == "white") {
            return "white";
        }
        else {
            return "black";
        }
    }
    const getEqualcolor = (type) => {
        if (type == "equal") {
            return "blue";
        }
    }
    return (
        <>
            <View>
                <View>
                    <Text style={{
                        fontSize: 40,
                        width: '100%',
                        textAlign: 'right',
                        marginTop: 50,
                        marginBottom: 140,
                        paddingRight: 20
                    }}>{result}</Text>
                </View>
                <View style={styles.btncontainer}>
                    <Btn title="AC" color="blue" />
                    <Btn title="<-" color="blue" />
                    <Btn title="/" color="blue" />
                    <Btn title="%" color="blue" />
                    <Btn title="7" />
                    <Btn title="8" />
                    <Btn title="9" />
                    <Btn title="*" color="blue" />
                    <Btn title="4" />
                    <Btn title="5" />
                    <Btn title="6" />
                    <Btn title="-" color="blue" />
                    <Btn title="1" />
                    <Btn title="2" />
                    <Btn title="3" />
                    <Btn title="+" color="blue" />
                    <Btn title="00" />
                    <Btn title="0" />
                    <Btn title="." />
                    <Btn title="=" color="white" type="equal" />
                </View>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    btncontainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        backgroundColor: "white",
        elevation: 30,
        shadowColor: 'black',

    }
});
export default Calculator
