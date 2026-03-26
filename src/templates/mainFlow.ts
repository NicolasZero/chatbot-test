import { addKeyword, EVENTS } from '@builderbot/bot'
import {menuFlow} from './menuFlow'

const mainFlow = addKeyword([
    EVENTS.WELCOME,
]).addAction(async (ctx, ctxFn) =>{
    if (ctx.body.includes("_event_")) {
        return ctxFn.endFlow('En proceso')
    }

    await ctxFn.flowDynamic('Bienvenido')
    return ctxFn.gotoFlow(menuFlow)
})

export {mainFlow}