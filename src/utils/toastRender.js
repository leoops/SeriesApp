import { Toast } from 'native-base';

export const renderToastMessage = (message, nameButton, type, duration = 5000, position ) => {
    Toast.show({
        text : message,
        buttonText: nameButton,
        position : position,
        type: type,
        duration: duration,
    })
}