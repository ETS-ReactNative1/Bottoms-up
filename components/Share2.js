// Share button using 'react-native-share' npm, able to customize more options
import Share from 'react-native-share';
import {Button, View} from 'react-native';


export default ShareButton2 = (props) => {

    const onShare = () => {

        const shareOptions = {
            title: props.title,
            message: props.message,
            url: props.url,
        }

        Share.shareSingle(shareOptions)
        .then((res) => { console.log(res) })
        .catch((err) => { err && console.log(err); })
    }
    
    return (
        <View style={{ marginTop: 50}}>
            <Button onPress={onShare} title="Share" />
        </View> 
    )
};



