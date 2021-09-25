import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Text} from 'react-native-paper';
import Colors from '../../constants/Colors';

const AppButton = ({title, mode, bgColor, textColor, borderColor, borderSize, width, loading, onPress}) => {

    let btnBgColor = bgColor ?? Colors.primary;
    let btnTextColor = textColor ?? Colors.light;
    let btnBorderColor = borderColor ?? Colors.transparent;
    let btnBorderSize = 0;
    let btnWidth = width ?? null;

    if (mode === 'outlined') {
        btnBgColor = bgColor ?? Colors.primary;
        btnTextColor = textColor ? textColor : (bgColor ?? Colors.primary);
        btnBorderColor = borderColor ? borderColor : (bgColor ?? Colors.primary);
        btnBorderSize = borderSize ? borderSize : 1;
    }

    return (
        <>
            <Button
                color={btnBgColor}
                style={{
                    ...styles.button,
                    borderColor: btnBorderColor,
                    borderWidth: btnBorderSize,
                    width: btnWidth
                }}
                contentStyle={{...styles.content}} mode={mode ?? 'contained'}
                onPress={(onPress !== undefined && onPress) ? onPress : () => null}
                loading={loading ?? false}>
                <Text style={{color: btnTextColor}}>{title}</Text>
            </Button>
        </>
    );
};

const styles = StyleSheet.create({
    button: {
        marginVertical: 10,
        height: 50,
        marginLeft: 0,
        marginRight: 0,
        justifyContent: 'center',
    },
    content: {
        height: 50,
    },
});

export default AppButton;
