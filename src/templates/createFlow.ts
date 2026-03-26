import { createFlow } from '@builderbot/bot'

import { mainFlow } from './mainFlow'
import { menuFlow } from './menuFlow'
import { sendResponse as option1 } from './menu/option1'
import { sendResponse as option2 } from './menu/option2'
import { sendResponse as option3 } from './menu/option3'


export default createFlow([
    mainFlow,
    menuFlow,
    option1,
    option2,
    option3
])