import { MetaProvider as Provider } from '@builderbot/provider-meta'
import { createProvider } from '@builderbot/bot'
import {config} from '../config/config'

const {jwtToken,numberId,verifyToken,version} = config

export const provider = createProvider(Provider,{
    jwtToken,numberId,verifyToken,version
})