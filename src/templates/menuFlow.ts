import { addKeyword, EVENTS } from '@builderbot/bot'

const menuFlow = addKeyword(EVENTS.ACTION).addAction(
    async (ctx, {provider}) => {
        const options = {
            header:{
                type: "text",
                text: "Menu de opciones" // No debe superar los 60 caracteres.
            },
            body:{
                text: "Estas son las opciones que dispongo"
            },
            footer: {text:""},
            action: {
                button: "Opciones", // No debe superar los 20 caracteres.
                sections: [{
                    title: "Sección",
                    rows: [
                        {
                            id: "menuflowopt1",
                            title: 'Opcion 1', // No debe superar los 24 caracteres.
                            description: "Elijo la opcion 1" //No debe superar los 72 caracteres.
                        },
                        {
                            id: "menuflowopt2",
                            title: 'Opcion 2',
                            description: "Elijo la opcion 2"
                        },
                        {
                            id: "menuflowopt3",
                            title: 'Opcion 3',
                            description: "Elijo la opcion 3"
                        }
                    ]
                },{
                    title: "Sección 2",
                    rows: [
                        {
                            id: "menuflowopt4",
                            title: 'Opcion 4',
                            description: "Elijo la opcion 4"
                        },
                        {
                            id: "menuflowopt5",
                            title: 'Opcion 5',
                            description: "Elijo la opcion 5"
                        },
                        {
                            id: "menuflowopt6",
                            title: 'Opcion 6',
                            description: "Elijo la opcion 6"
                        }
                    ]
                }]
            }
        }
        await provider.sendList(`${ctx.from}@s.whatsapp.net`,options)
    }
)

export {menuFlow}