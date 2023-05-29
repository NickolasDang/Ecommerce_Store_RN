import { render } from '@testing-library/react-native';
import { Provider } from "react-redux";
import { getStore } from "../src/app/store";

export const rednerWithRedux = (component: any) => {
    const storeTest = getStore()
    
    return render(<Provider store={storeTest}>{component}</Provider>)
}