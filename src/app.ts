import { createBot } from '@builderbot/bot'
import { MemoryDB as Database } from '@builderbot/bot'
import templates from './templates/createFlow'
import { provider } from './provider/meta'
import { config } from './config/config'


const btn = [
    {body:'Soy víctima de violencia y necesito ayuda inmediata'},
    {body:'Deseo información'},
    {body:'Quiereo consultar documentación'}
]

const main = async () => {   

    const chatbot = await createBot(
        {
            flow: templates,
            provider,
            database: new Database()
        },
        {
            queue: {
                timeout: 20000,
                concurrencyLimit: 50
            }
        }
    )

    const { handleCtx, httpServer } = await chatbot

    httpServer(+config.PORT)
}

main()
