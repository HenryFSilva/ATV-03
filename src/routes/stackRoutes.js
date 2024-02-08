import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Inicio from '../pages/Inicio';
import Contato from '../pages/Contato';
import Cursos from '../pages/Curso';

const Stack = createNativeStackNavigator()

export default function StackRoutes() {
  
    return (
        <StackRoutes.Navigator>
            <Stack.Screen
                name='Inicio'
                component={Inicio}
            />

            <Stack.Screen
                name='Contato'
                component={Contato}
            />

            <Stack.Screen
                name='Cursos'
                component={Cursos}
            />



        </StackRoutes.Navigator>
    )
}