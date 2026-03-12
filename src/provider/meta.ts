import { MetaProvider as Provider } from '@builderbot/provider-meta'
import { createProvider } from '@builderbot/bot'
import {jwtToken,numberId,saludo,verifyToken,version} from '../config/config'

export const provider = createProvider(Provider,{
    jwtToken,numberId,verifyToken,version
})