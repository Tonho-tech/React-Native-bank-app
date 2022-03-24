import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import Adm from '../pages/Adm'
import Depositar from '../pages/Depositar'
import Suporte from '../pages/Suporte'
import Transferir from '../pages/Transferir'


const Stack = createNativeStackNavigator()

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />
             <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
            />
             <Stack.Screen
                name="Depositar"
                component={Depositar}
                options={{ headerShown: false }}
            />
             <Stack.Screen
                name="Adm"
                component={Adm}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Transferir"
                component={Transferir}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Suporte"
                component={Suporte}
                options={{ headerShown: false }}
            />
          

        </Stack.Navigator>
    )
}