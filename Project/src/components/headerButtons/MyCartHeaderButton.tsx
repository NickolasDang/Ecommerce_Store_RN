import { MY_CART_ICON_WHITE_IMG } from "../../constants/Images"
import HeaderButton from "../HeaderButton"

export const MyCartHeaderButton = (navigation: any) => {
    return(
      <HeaderButton
      img={MY_CART_ICON_WHITE_IMG}
      onPress={() =>
        navigation.navigate('MyCartStack', {screen: 'MyCart'})
      }
    />
    )
  }