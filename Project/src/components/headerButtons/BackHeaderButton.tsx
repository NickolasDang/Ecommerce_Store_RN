import { BACK_ARROW_ICON_IMG } from "../../constants/Images"
import HeaderButton from "../HeaderButton"

export const BackHeaderButton = (navigation: any) => {
    return(
      <HeaderButton
              img={BACK_ARROW_ICON_IMG}
              onPress={() => navigation.goBack()}/>
    )
  }