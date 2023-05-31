import { MENU_ICON_IMG } from "../../constants/Images"
import HeaderButton from "../HeaderButton"

export const MenuHeaderButton = (navigation: any) => {
    return(
        <HeaderButton
        img={MENU_ICON_IMG}
        onPress={() => navigation.toggleDrawer()}
        />
    )
  }