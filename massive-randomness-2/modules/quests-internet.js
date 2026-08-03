ModManager.modules.push(function(){

    const
        QUESTVICTORY = [
            {
                IT:[ "la Missione termina con una vittoria", "terminare la Missione con una vittoria" ],
                EN:[ "the Mission ends with a victory", "end the Mission with a victory" ],
                ES:[ "la Misi&oacute;n termina con una victoria", "terminar la Misi&oacute;n con una victoria" ]
            }
        ],
        BOSSBEAT = [
            {
                IT:[ "viene eliminato", "viene eliminata" ],
                EN:[ "it is eliminated", "it is eliminated" ],
                ES:[ "es eliminada", "es eliminada" ]
            }
        ];

    return [
        {

            id:"quests-internet",
            needs:[ "quests-default", "md2-hellscape" ],
            provides:[ "quests", "quests-internet", "untranslated-fr" ],
            label:{
                EN:"MD2 Fanmade quests inspired quest models"
            },
            content:[
                {
                    type:"quests",
                    data:[
                        {
                            forCampaign:[ ], // Uses armor sets.
                            type:"armorToBoss",
                            objective:{
                                EN:"Collect an armor set, elimiminate a Roaming Monster, and reach a Zone to win.",
                                ES:"Recoge un set de armadura, elimina a un Monstruo Errante y alcanza una Zona para ganar."
                            },
                            by:{
                                IT:"Ispirato all'avventura di hugolink10/Zoju su BGG \"The Warrior of Light\"",
                                EN:"Inspired by hugolink10/Zoju quest on BGG \"The Warrior of Light\"",
                                ES:"Inspirado en la aventura de hugolink10/Zoju en BGG \"The Warrior of Light\""
                            },
                            suggestedTilesCount:5,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                lightBad:[
                                                    {
                                                        IT:[ "L'Oscurit&agrave; &egrave; pi&ugrave; forte che mai."],
                                                        EN:[ "Darkness is stronger than ever." ],
                                                        ES:[ "La Oscuridad es m&aacute;s fuerte que nunca." ]
                                                    },{
                                                        IT:[ "La Luce sembra averci abbandonato." ],
                                                        EN:[ "The Light seems to have abandoned us." ],
                                                        ES:[ "La Luz parece habernos abandonado." ]
                                                    },{
                                                        IT:[ "Abbiamo ormai perso ogni speranza." ],
                                                        EN:[ "We have now lost all hope." ],
                                                        ES:[ "Hemos perdido ya toda esperanza." ]
                                                    }
                                                ],
                                                veryBad:[
                                                    {
                                                        IT:[ "L'umanit&agrave; sta per perdere la guerra mentre le forze del male diventano sempre pi&ugrave; forti." ],
                                                        EN:[ "Mankind is about to lose the war as the forces of evil only grow stronger." ],
                                                        ES:[ "La humanidad est&aacute; a punto de perder la guerra mientras las fuerzas del mal se hacen cada vez m&aacute;s fuertes." ]
                                                    },{
                                                        IT:[ "Nessuno &egrave; riuscito a impedire l'arrivo del Grande Distruttore e nessuno potr&agrave; fermarlo." ],
                                                        EN:[ "Nobody managed to prevent the arrival of the Great Destroyer and no one will be able to stop it." ],
                                                        ES:[ "Nadie logr&oacute; impedir la llegada del Gran Destructor y nadie podr&aacute; detenerlo." ]
                                                    },{
                                                        IT:[ "L'alleanza con i Demoni &egrave; saltata e non riusciremo mai a sconfiggerli tutti." ],
                                                        EN:[ "The alliance with the Demons is broken and we will never be able to defeat them all." ],
                                                        ES:[ "La alianza con los Demonios se ha roto y nunca lograremos derrotarlos a todos." ]
                                                    }
                                                ],
                                                lastHope:[
                                                    {
                                                        IT:[ "L'ultima speranza che abbiamo &egrave; recuperare {label.equipment@0}" ],
                                                        EN:[ "The last hope is to recover {label.equipment@0}" ],
                                                        ES:[ "La &uacute;ltima esperanza es recuperar {label.equipment@0}" ],
                                                    },{
                                                        IT:[ "Ci rimane una sola possibilit&agrave;: trovare {label.equipment@0}" ],
                                                        EN:[ "We only have one possibility left: find {label.equipment@0}" ],
                                                        ES:[ "Solo nos queda una posibilidad: encontrar {label.equipment@0}" ],
                                                    },{
                                                        IT:[ "Ma non tutto &egrave; perduto: dobbiamo prendere {label.equipment@0}" ],
                                                        EN:[ "We only have one possibility left: we must take {label.equipment@0}" ],
                                                        ES:[ "No todo est&aacute; perdido: debemos hacernos con {label.equipment@0}" ],
                                                    }
                                                ],
                                                legend:[
                                                    {
                                                        IT:[ "che, secondo le antiche leggende, era destinato al Guerriero della Luce.", "il Guerriero della Luce" ],
                                                        EN:[ "for the Warrior of Light from legends old.", "the Warrior of Light" ],
                                                        ES:[ "que, seg&uacute;n las antiguas leyendas, estaba destinado al Guerrero de la Luz.", "el Guerrero de la Luz" ]
                                                    },{
                                                        EN:[ "that the Sun gave to humans.", "the Gift of the Sun" ],
                                                        ES:[ "que el Sol entreg&oacute; a los humanos.", "el Don del Sol" ],
                                                        IT:[ "che il Sole ha donato agli umani.", "il Dono del Sole" ]
                                                    },{
                                                        EN:[ "which, as it has been said for centuries, is capable of devouring Shadows.", "the Shadow Eater" ],
                                                        ES:[ "que, seg&uacute;n se cuenta desde hace siglos, es capaz de devorar las Sombras.", "el Devorador de Sombras" ],
                                                        IT:[ "che, si narra da secoli, sia in grado di divorare le Ombre.", "il Divoratore di Ombre" ]
                                                    }
                                                ],
                                                chosenOne:[
                                                    {
                                                        IT:[ "l'Eletto", "l'Eletto riceve" ],
                                                        EN:[ "the Chosen One", "the Chosen One receives" ],
                                                        ES:[ "el Elegido", "el Elegido recibe" ]
                                                    },{
                                                        IT:[ "il Prescelto", "il Prescelto riceve" ],
                                                        EN:[ "the One", "the One receives" ],
                                                        ES:[ "el Predestinado", "el Predestinado recibe" ]
                                                    },{
                                                        IT:[ "il Campione", "il Campione riceve" ],
                                                        EN:[ "the Champion", "the Champion receives" ],
                                                        ES:[ "el Campe&oacute;n", "el Campe&oacute;n recibe" ]
                                                    }
                                                ],
                                                badGuy:[
                                                    {
                                                        IT:[ "il Guardiano del Male", "il Guardiano", "viene ucciso" ],
                                                        EN:[ "the Evil Warden", "the Warden", "is killed" ],
                                                        ES:[ "el Guardi&aacute;n del Mal", "Guardi&aacute;n", "es asesinado" ]
                                                    },{
                                                        IT:[ "la Buia Vedetta", "la Vedetta", "viene uccisa" ],
                                                        EN:[ "the Dark Lookout", "the Lookout", "is killed" ],
                                                        ES:[ "la Vig&iacute;a Oscura", "Vig&iacute;a", "es asesinada" ]
                                                    },{
                                                        IT:[ "il Custode Ombroso", "il Custode", "viene ucciso" ],
                                                        EN:[ "the Shadow Warden", "the Shadow Warden", "is killed" ],
                                                        ES:[ "el Custodio de las Sombras", "Custodio", "es asesinado" ]
                                                    }
                                                ],
                                                place:[
                                                    {
                                                        IT:[ "dal santuario", "l'ingresso del santuario" ],
                                                        EN:[ "from the inner sanctum", "the sanctum entrance" ],
                                                        ES:[ "del santuario interior", "la entrada del santuario" ]
                                                    },{
                                                        IT:[ "dalla tomba", "l'ingresso della tomba" ],
                                                        EN:[ "from the tomb", "the tomb entrance" ],
                                                        ES:[ "de la tumba", "la entrada de la tumba" ]
                                                    },{
                                                        IT:[ "dalla cappella", "l'ingresso della cappella" ],
                                                        EN:[ "from the chapel", "the chapel entrance" ],
                                                        ES:[ "de la capilla", "la entrada de la capilla" ]
                                                    }
                                                ],
                                                equipment:[
                                                    {
                                                        IT:[ "il leggendario equipaggiamento del Flagello delle Ombre", "l'equipaggiamento", "del set del Flagello delle Ombre", "dal set del Flagello delle Ombre", "il set del Flagello delle Ombre", "parte dell'equipaggiamento" ],
                                                        EN:[ "the legendary Shadowbane equipment", "the equipment", "of the Shadowbane Set", "from the Shadowbane Set", "the Shadowbane Set", "piece of equipment" ],
                                                        ES:[ "el legendario equipamiento del Flagelo de las Sombras", "el equipamiento", "del set del Flagelo de las Sombras", "del set del Flagelo de las Sombras", "el set del Flagelo de las Sombras", "pieza de equipamiento" ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN:"{label.legend:capital@1}",
                                            ES:"{label.legend:capital@1}"
                                        },{
                                            EN:"{label.chosenOne:capital@0}",
                                            ES:"{label.chosenOne:capital@0}"
                                        },{
                                            EN:"{label.place:capital@1}",
                                            ES:"{label.place:capital@1}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.lightBad@0} {label.veryBad@0} {label.lastHope@0} {label.legend@0}",
                                            ES:"{label.lightBad@0} {label.veryBad@0} {label.lastHope@0} {label.legend@0}"
                                        }
                                    ],
                                    objectivesHeader:[
                                        {
                                            IT:"Completate gli obiettivi nell'ordine indicato:",
                                            EN:"Complete the objectives in order:",
                                            ES:"Completa los objetivos en el orden indicado:"
                                        }
                                    ],
                                    challenges:[
                                        { intensity:2, tag:"default" },
                                        { intensity:3, tag:"default" },
                                    ],
                                    rules:[
                                        [
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        EN:"{label.equipment:capital@4}",
                                                        ES:"{label.equipment:capital@4}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Recupera {label.equipment@1} {label.place@0}",
                                                        EN:"Recover {label.equipment@1} {label.place@0}",
                                                        ES:"Recuperar {label.equipment@1} {label.place@0}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Eliminare {label.badGuy@1}",
                                                        EN:"Eliminate {label.badGuy@1}",
                                                        ES:"Eliminar a {label.badGuy@1}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Uccidere {label.badGuy@0}",
                                                        EN:"Kill {label.badGuy@0}",
                                                        ES:"Matar a {label.badGuy@1}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Fuggire",
                                                        EN:"Escape",
                                                        ES:"Huir"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Uscire dal dungeon",
                                                        EN:"Exit the dungeon",
                                                        ES:"Salir de la mazmorra"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Nemici Addestrati",
                                                        EN:"Trained Foes",
                                                        ES:"Enemigos Entrenados"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"I Comandanti tirano anche un {symbol.blackDie} quando attaccano o difendono. I Mostri Erranti guadagnano +1 {symbol.blackDie} in attacco o in difesa ogni 2 giocatori. (1-2 giocatori: +1 {symbol.blackDie} , 3-4 giocatori: +2 {symbol.blackDie} , 5-6 giocatori: +3 {symbol.blackDie})",
                                                        EN:"Leaders also roll a {symbol.blackDie} when attacking or defending. Roaming Monsters gain +1 {symbol.blackDie} on attacking or defending for every 2 players. (1-2 Players: +1 {symbol.blackDie} , 3-4 players: +2 {symbol.blackDie} , 5-6 players: +3 {symbol.blackDie})",
                                                        ES:"Los L&iacute;deres tambi&eacute;n tiran un {symbol.blackDie} cuando atacan o se defienden. Los Monstruos Errantes ganan +1 {symbol.blackDie} al atacar o defenderse por cada 2 jugadores. (1-2 jugadores: +1 {symbol.blackDie} , 3-4 jugadores: +2 {symbol.blackDie} , 5-6 jugadores: +3 {symbol.blackDie})"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"{label.chosenOne:capital@0}",
                                                        EN:"{label.chosenOne:capital@0}",
                                                        ES:"{label.chosenOne:capital@0}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Seleziona uno degli Eroi che sia {label.chosenOne@0}. Se {label.chosenOne@0} finisce KO, la Missione termina immediatamente con una sconfitta.<p>Cerca nei mazzi Tesori Rari e Tesori Epici ogni {label.equipment@5} {label.equipment@2}, rimuovile e tienile da parte.</p>",
                                                        EN:"Select one of the Heroes to be {label.chosenOne@0}. If {label.chosenOne@0} is KOed, the Mission immediately ends in defeat.<p>Search the Rare and Epic Treasure decks and remove every {label.equipment@5} {label.equipment@2} from the decks and set them aside.</p>",
                                                        ES:"Selecciona a uno de los H&eacute;roes para que sea {label.chosenOne@0}. Si {label.chosenOne@0} queda KO, la Misi&oacute;n termina inmediatamente en derrota.<p>Busca en los mazos de Tesoro Raro y Tesoro &Eacute;pico cada {label.equipment@5} {label.equipment@2}, ret&iacute;ralas del mazo y d&eacute;jalas aparte.</p>"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"La Chiave",
                                                        EN:"The Key",
                                                        ES:"La Llave"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"La porta contrassegnata da un contorno rosso rappresenta {label.place@1} e non pu&ograve; essere aperta a meno che gli Eroi non prendano la chiave, rappresentata dal segnalino Obiettivo con il lato colorato rivolto verso l'alto. Gli Eroi possono raccogliere la chiave utilizzando 1 PM. Tratta il segnalino Obiettivo con il lato colorato rivolto verso l'alto come una carta equipaggiamento negli scambi.",
                                                        EN:"The door marked with a red outline represents {label.place@1} and cannot be opened unless the Heroes grabs the key represented by the color-side-up Objective token. Heroes may collect the key using 1 MP. Treat the color-side-up Objective token as an equipment card for the purpose of trading.",
                                                        ES:"La puerta marcada con un contorno rojo representa {label.place@1} y no puede abrirse a menos que los H&eacute;roes cojan la llave, representada por el marcador de Objetivo con el lado de color hacia arriba. Los H&eacute;roes pueden recoger la llave gastando 1 PM. Trata el marcador de Objetivo con el lado de color hacia arriba como una carta de equipamiento a efectos de intercambio."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"La Porta",
                                                        EN:"The Door",
                                                        ES:"La Puerta"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Un Eroe con la chiave pu&ograve; aprire la porta contrassegnata da un contorno rosso utilizzando 1 PM. Non pescare una carta Porta per quella Camera. Una volta aperta la porta, sostituisci il segnalino Corruzione {symbol.corruptionToken} con un Mostro Errante di livello 5 e gira il segnalino Obiettivo grigio sulla Tessera {tileLabel.fourth} sul suo lato colorato. Inoltre, tutti gli eroi ricevono immediatamente 2 {symbol.frostToken}.",
                                                        EN:"A Hero with the key may open the door marked with a red outline using 1 MP. Do not draw a door card for that Chamber. Once that door is opened, replace the Corruption token {symbol.corruptionToken} for a level 5 Roaming Monster and flip the grayed Objective token on the {tileLabel.fourth} Tile to the color side up. Also, all heroes immediately receive 2 {symbol.frostToken}.",
                                                        ES:"Un H&eacute;roe con la llave puede abrir la puerta marcada con un contorno rojo gastando 1 PM. No robes una carta de Puerta para esa C&aacute;mara. Una vez abierta la puerta, sustituye el marcador de Corrupci&oacute;n {symbol.corruptionToken} por un Monstruo Errante de nivel 5 y da la vuelta al marcador de Objetivo gris de la Loseta {tileLabel.fourth} a su lado de color. Adem&aacute;s, todos los h&eacute;roes reciben inmediatamente 2 {symbol.frostToken}."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.equipment:capital@4}",
                                                        ES:"{label.equipment:capital@4}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Se un qualsiasi eroe si trova nella stessa zona del segnalino Obiettivo con il lato colorato rivolto verso l'alto della Tessera {tileLabel.fourth}, rimuovi quel segnalino dal gioco e {label.chosenOne@1} ogni {label.equipment@5} {label.equipment@3} e la rispettiva arma di classe. Lui o lei pu&ograve; organizzare l'inventario gratuitamente.",
                                                        EN:"If any hero is at the same zone as the color-side-up Objective token on the {tileLabel.fourth} Tile, remove that token from the game and {label.chosenOne@1} every {label.equipment@5} {label.equipment@3} and its respective class weapon. He or She may organize the inventory for free.",
                                                        ES:"Si alg&uacute;n h&eacute;roe se encuentra en la misma zona que el marcador de Objetivo con el lado de color hacia arriba de la Loseta {tileLabel.fourth}, retira ese marcador del juego y {label.chosenOne@1} cada {label.equipment@5} {label.equipment@3} y su respectiva arma de clase. &Eacute;l o ella puede organizar el inventario gratis."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.badGuy:capital@0}",
                                                        ES:"{label.badGuy:capital@0}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Dopo che {label.chosenOne@0} ha ricevuto {label.equipment@4}, gira il rimanente segnalino Obiettivo in grigio sulla Tessera {tileLabel.fifth} sul suo lato colorato e genera un Mostro Errante nella sua Zona: questo &egrave; {label.badGuy@0}.<p>{label.badGuy:capital@0} &egrave; un Mostro Errante di livello 5 con +15 Punti Vita. Ottiene anche +2 {symbol.sword} quando attacca e +3 {symbol.shield} quando difende. Inoltre, {label.badGuy@0} si attiva due volte nella Fase dei Nemici.</p>",
                                                        EN:"After {label.chosenOne@0} receives {label.equipment@4}, flip the remaining grayed Objective token on {tileLabel.fifth} Tile to the color side up and spawn a Roaming Monster in its Zone: this is {label.badGuy@0}.<p>{label.badGuy:capital@0} is a level 5 Roaming Monster with +15 Life Points. It also receives a +2 {symbol.sword} when Attacking and a +3 {symbol.shield} when defending. {label.badGuy:capital@0} also activates twice at the Enemy Phase.</p>",
                                                        ES:"Despu&eacute;s de que {label.chosenOne@0} reciba {label.equipment@4}, da la vuelta al marcador de Objetivo gris restante de la Loseta {tileLabel.fifth} a su lado de color y genera un Monstruo Errante en su Zona: se trata de {label.badGuy@0}.<p>{label.badGuy:capital@0} es un Monstruo Errante de nivel 5 con +15 Puntos de Vida. Adem&aacute;s, recibe +2 {symbol.sword} al atacar y +3 {symbol.shield} al defender. Asimismo, {label.badGuy:capital@0} se activa dos veces en la Fase de los Enemigos.</p>"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Fuga",
                                                        EN:"Escape",
                                                        ES:"Huida"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Una volta che {label.badGuy@0} {label.badGuy@2} e ogni Eroe si trova nella zona del segnalino Obiettivo con il lato colorato rivolto verso l'alto della Tessera {tileLabel.fifth} senza che ci siano nemici in quella zona, {label.questVictory@0}.",
                                                        EN:"Once {label.badGuy@0} {label.badGuy@2} and every hero is at the color-side-up Objective token zone on the {tileLabel.fifth} Tile and with no enemies in that zone, {label.questVictory@0}.",
                                                        ES:"Una vez que {label.badGuy@0} {label.badGuy@2} y cada H&eacute;roe se encuentra en la zona del marcador de Objetivo con el lado de color hacia arriba de la Loseta {tileLabel.fifth} sin que haya enemigos en esa zona, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "armorToBoss" ],
                                            gameMode: [ "armorToBoss" ],
                                            difficulty:[ "increasedLoot" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "default" ],
                                            skin:[ "default" ],
                                            size: [ "default" ],
                                            bridges:[ "none" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "armorToBoss" ],
                                        }
                                    ],
                                    boss:{
                                        rules:[
                                            {
                                                type:"objective",
                                                name:{
                                                    IT:"Sconfiggere {boss.bossBadName@0}",
                                                    EN:"Defeat {boss.bossBadName@0}",
                                                    ES:"Derrotar a {boss.bossBadName@0}",
                                                },
                                                summary:{
                                                    IT:"Elimina {boss.bossBadName@0}, custode {label.equipment@2}",
                                                    EN:"Eliminate {boss.bossBadName@0}, keeper {label.equipment@2}",
                                                    ES:"Elimina a {boss.bossBadName@0}, guardi&aacute;n {label.equipment@2}"
                                                }
                                            }
                                        ],
                                        preparation:{
                                            IT:"<p>Rimuovere tutti i segnalini Obiettivo dall'inventario degli Eroi.</p>",
                                            EN:"<p>Remove all Objective tokens from the Heroes' inventories.</p>",
                                            ES:"<p>Retira todos los marcadores de Objetivo del inventario de los H&eacute;roes.</p>"
                                        },
                                        levelByTilesCount:{
                                            3:1,
                                            4:2,
                                            5:3,
                                            6:4
                                        }
                                    }
                                }
                            ]
                        },{
                            forCampaign:[ "2shots", "full", "mini" ],
                            forMaps:[2],
                            type:"mirrors",
                            objective:{
                                EN:"Align mirrors to remove a token type from the map. Remove all of them and beat a Roaming Monster to win.",
                                ES:"Alinea espejos para retirar un tipo de marcador del mapa. Ret&iacute;ralos todos y derrota a un Monstruo Errante para ganar."
                            },
                            by:{
                                IT:"Ispirato all'avventura di Spidey_NZ su BGG \"Riflessi Oscuri\"",
                                EN:"Inspired by Spidey_NZ quest on BGG \"Dark reflections\"",
                                ES:"Inspirado en la aventura de Spidey_NZ en BGG \"Dark reflections\""
                            },
                            suggestedTilesCount:4,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                energy:[
                                                    {
                                                        IT:[ "l'Energia Sacra", "di Energia Sacra", "l'unica", "guidarla" ],
                                                        EN:[ "Sacred Energy", "a Sacred Energy", "the only one", "guide it" ],
                                                        ES:[ "la Energ&iacute;a Sagrada", "de Energ&iacute;a Sagrada", "la &uacute;nica", "guiarla" ]
                                                    },{
                                                        IT:[ "la Luce Divina", "di Luce Divina", "l'unica", "guidarla" ],
                                                        EN:[ "Divine Light", "a Divine Light", "the only one", "guide it" ],
                                                        ES:[ "la Luz Divina", "de Luz Divina", "la &uacute;nica", "guiarla" ]
                                                    },{
                                                        IT:[ "il Potere Astrale", "di Potere Astrale", "l'unico", "guidarlo" ],
                                                        EN:[ "Astral Power", "an Astral Power", "the only one", "guide it" ],
                                                        ES:[ "el Poder Astral", "de Poder Astral", "el &uacute;nico", "guiarlo" ]
                                                    }
                                                ],
                                                flow:[
                                                    {
                                                        IT:[ "il raggio", "un raggio", "dal raggio", "del raggio" ],
                                                        EN:[ "the ray", "ray", "by the ray", "ray" ],
                                                        ES:[ "el rayo", "un rayo", "por el rayo", "del rayo" ]
                                                    },{
                                                        IT:[ "il flusso", "un flusso", "dal flusso", "del flusso" ],
                                                        EN:[ "the flow", "flow", "by the flow", "flow" ],
                                                        ES:[ "el flujo", "un flujo", "por el flujo", "del flujo" ]
                                                    },{
                                                        IT:[ "il globo", "un globo", "dal globo", "del globo" ],
                                                        EN:[ "the globe", "globe", "by the globe", "globe" ],
                                                        ES:[ "el globo", "un globo", "por el globo", "del globo" ]
                                                    }
                                                ],
                                                mirror:[
                                                    {
                                                        IT:[ "gli Specchi", "uno Specchio", "raccoglierlo" ],
                                                        EN:[ "the Mirrors", "a Mirror", "to pick it up" ],
                                                        ES:[ "los Espejos", "un Espejo", "recogerlo" ]
                                                    },{
                                                        IT:[ "i Fari", "un Faro", "raccoglierlo" ],
                                                        EN:[ "the Lighthouses", "a Lighthouse", "to pick it up" ],
                                                        ES:[ "los Faros", "un Faro", "recogerlo" ]
                                                    },{
                                                        IT:[ "i Cristalli", "un Cristallo", "raccoglierlo" ],
                                                        EN:[ "the Crystals", "a Crystal", "to pick it up" ],
                                                        ES:[ "los Cristales", "un Cristal", "recogerlo" ]
                                                    }
                                                ],
                                                mud:[
                                                    {
                                                        IT:[ "la Melma", "{label.poison@0}", "", "della Melma" ],
                                                        EN:[ "the Slime", "{label.poison@0}", "has", "the Slime" ],
                                                        ES:[ "el Cieno", "{label.poison@0}", "ha", "del Cieno" ]
                                                    },{
                                                        IT:[ "le Spore", "{label.poison@1}", "", "delle Spore" ],
                                                        EN:[ "the Spores", "{label.poison@1}", "have", "the Spores" ],
                                                        ES:[ "las Esporas", "{label.poison@1}", "han", "de las Esporas" ]
                                                    },{
                                                        IT:[ "l'Oscurit&agrave;", "{label.poison@0}", "", "dell'Oscurit&agrave;" ],
                                                        EN:[ "the Darkness", "{label.poison@0}", "have", "the Darkness" ],
                                                        ES:[ "la Oscuridad", "{label.poison@0}", "ha", "de la Oscuridad" ]
                                                    }
                                                ],
                                                poison:[
                                                    {
                                                        IT:[ "avvelena", "avvelenano" ],
                                                        EN:[ "that {label.mud@2} been poisoning", "that {label.mud@2} been poisoning" ],
                                                        ES:[ "que {label.mud@2} estado envenenando", "que {label.mud@2} estado envenenando" ]
                                                    },{
                                                        IT:[ "corrompe", "corrompono" ],
                                                        EN:[ "that {label.mud@2} been corrupting", "that {label.mud@2} been corrupting" ],
                                                        ES:[ "que {label.mud@2} estado corrompiendo", "que {label.mud@2} estado corrompiendo" ]
                                                    },{
                                                        IT:[ "infetta", "infettano" ],
                                                        EN:[ "that {label.mud@2} been infecting", "that {label.mud@2} been infecting" ],
                                                        ES:[ "que {label.mud@2} estado infectando", "que {label.mud@2} estado infectando" ]
                                                    }
                                                ],
                                                enemy:[
                                                    {
                                                        IT:[ "il Distruttore" ],
                                                        EN:[ "the Destroyer" ],
                                                        ES:[ "Destructor" ]
                                                    },{
                                                        IT:[ "il Guardiano" ],
                                                        EN:[ "the Guardian" ],
                                                        ES:[ "Guardi&aacute;n" ]
                                                    },{
                                                        IT:[ "l'Assassino" ],
                                                        EN:[ "the Assassin" ],
                                                        ES:[ "Asesino" ]
                                                    }
                                                ],
                                                remove:[
                                                    {
                                                        IT:[ "in grado di sciogliere" ],
                                                        EN:[ "that can dissolve" ],
                                                        ES:[ "que puede disolver" ]
                                                    },{
                                                        IT:[ "che pu&ograve; eliminare" ],
                                                        EN:[ "that can eliminate" ],
                                                        ES:[ "que puede eliminar" ]
                                                    }
                                                ],
                                                time:[
                                                    {
                                                        IT:[ "che da molto tempo" ],
                                                        EN:[ "for a long time" ],
                                                        ES:[ "desde hace mucho tiempo" ]
                                                    },{
                                                        IT:[ "che da mesi" ],
                                                        EN:[ "for months" ],
                                                        ES:[ "desde hace meses" ]
                                                    },{
                                                        IT:[ "che da giorni" ],
                                                        EN:[ "for days" ],
                                                        ES:[ "desde hace d&iacute;as" ]
                                                    }
                                                ],
                                                infecting:[
                                                    {
                                                        IT:[ "i corsi d'acqua" ],
                                                        EN:[ "the waterways" ],
                                                        ES:[ "los cursos de agua" ]
                                                    },{
                                                        IT:[ "l'aria" ],
                                                        EN:[ "the air" ],
                                                        ES:[ "el aire" ]
                                                    },{
                                                        IT:[ "il cibo" ],
                                                        EN:[ "the food" ],
                                                        ES:[ "los alimentos" ]
                                                    }
                                                ],
                                                solve:[
                                                    {
                                                        IT:[ "e eliminare il problema" ],
                                                        EN:[ "and eliminate the problem" ],
                                                        ES:[ "y eliminar el problema" ]
                                                    },{
                                                        IT:[ "e risolvere la questione" ],
                                                        EN:[ "and resolve the issue" ],
                                                        ES:[ "y resolver la cuesti&oacute;n" ]
                                                    },{
                                                        IT:[ "e porre fine questa piaga" ],
                                                        EN:[ "and put an end to this plague" ],
                                                        ES:[ "y poner fin a esta plaga" ]
                                                    }
                                                ],
                                                forever:[
                                                    {
                                                        IT:[ "per sempre" ],
                                                        EN:[ "forever" ],
                                                        ES:[ "para siempre" ]
                                                    },{
                                                        IT:[ "una volta per tutte" ],
                                                        EN:[ "once and for all" ],
                                                        ES:[ "de una vez por todas" ]
                                                    },{
                                                        IT:[ "alla radice" ],
                                                        EN:[ "at the root" ],
                                                        ES:[ "de ra&iacute;z" ]
                                                    }
                                                ],
                                                guardian:[
                                                    {
                                                        IT:[ "un silenzioso guardiano" ],
                                                        EN:[ "a silent guardian" ],
                                                        ES:[ "un guardi&aacute;n silencioso" ]
                                                    },{
                                                        IT:[ "un assassino spietato" ],
                                                        EN:[ "a ruthless assassin" ],
                                                        ES:[ "un asesino despiadado" ]
                                                    },{
                                                        IT:[ "una creatura immonda" ],
                                                        EN:[ "a bloody creature" ],
                                                        ES:[ "una criatura sangrienta" ]
                                                    }
                                                ],
                                                watch:[
                                                    {
                                                        IT:[ "li osserva da lontano..." ],
                                                        EN:[ "is watching them from afar..." ],
                                                        ES:[ "los observa desde lejos..." ]
                                                    },{
                                                        IT:[ "li tiene sott'occhio..." ],
                                                        EN:[ "is keeping an eye on them..." ],
                                                        ES:[ "los vigila de cerca..." ]
                                                    },{
                                                        IT:[ "li attende da tempo..." ],
                                                        EN:[ "is waiting for them for a long time..." ],
                                                        ES:[ "lleva tiempo esper&aacute;ndolos..." ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                teamwork:[
                                                    {
                                                        IT:[ "dividersi il lavoro", "assicurandosi che ogni Eroe abbia posseduto {label.mirror@1} almeno una volta" ],
                                                        EN:[ "divide the work", "ensuring that each Hero has owned {label.mirror@1} at least once" ],
                                                        ES:[ "repartirse el trabajo", "asegur&aacute;ndose de que cada H&eacute;roe haya tenido {label.mirror@1} al menos una vez" ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            IT:"{label.mirror:capital@0}",
                                            EN:"{label.mirror:capital@0}",
                                            ES:"{label.mirror:capital@0}"
                                        },{
                                            IT:"{label.mud:capital@0}",
                                            EN:"{label.mud:capital@0}",
                                            ES:"{label.mud:capital@0}"
                                        },{
                                            IT:"{label.guardian:capital@0}",
                                            EN:"{label.guardian:capital@0}",
                                            ES:"{label.guardian:capital@0}"
                                        }
                                    ],
                                    story:[
                                        {
                                            IT:"{label.energy:capital@0} &egrave; {label.energy@2} {label.remove@0} {label.mud@0} {label.time@0} {label.mud@1} {label.infecting@0}. Con un po' d'ingegno e lavoro di squadra, gli Eroi possono {label.energy@3} {label.solve@0} {label.forever@0}. Ma {label.guardian@0} {label.watch@0}",
                                            EN:"{label.energy:capital@0} is {label.energy@2} {label.remove@0} {label.mud@0} {label.mud@1} {label.infecting@0} {label.time@0}. With ingenuity and teamwork, the Heroes can {label.energy@3} {label.solve@0} {label.forever@0}. But {label.guardian@0} {label.watch@0}",
                                            ES:"{label.energy:capital@0} es {label.energy@2} {label.remove@0} {label.mud@0}, {label.mud@1} {label.infecting@0} {label.time@0}. Con ingenio y trabajo en equipo, los H&eacute;roes pueden {label.energy@3} {label.solve@0} {label.forever@0}. Pero {label.guardian@0} {label.watch@0}",
                                        }
                                    ],
                                    objectivesHeader:[
                                        {
                                            IT:"Completate gli obiettivi nell'ordine indicato:",
                                            EN:"Complete the objectives in order:",
                                            ES:"Completa los objetivos en el orden indicado:"
                                        }
                                    ],
                                    challenges:[
                                        { intensity:1, tag:"default" },
                                        { intensity:2, tag:"default" },
                                        { intensity:3, tag:"default" },
                                    ],
                                    rules:[
                                        [
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Eliminare {label.mud@0}",
                                                        EN:"Eliminate {label.mud@0}",
                                                        ES:"Eliminar {label.mud@0}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Usare {label.energy@0} e {label.mirror@0} per eliminare {label.mud@0}",
                                                        EN:"Use {label.energy@0} and {label.mirror@0} to eliminate {label.mud@0}",
                                                        ES:"Usar {label.energy@0} y {label.mirror@0} para eliminar {label.mud@0}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Eliminare {label.enemy@0}",
                                                        EN:"Eliminate {label.enemy@0}",
                                                        ES:"Eliminar a {label.enemy@0}",
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Uccidere {label.enemy@0}",
                                                        EN:"Kill {label.enemy@0}",
                                                        ES:"Matar a {label.enemy@0}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"{label.mirror:capital@0}",
                                                        EN:"{label.mirror:capital@0}",
                                                        ES:"{label.mirror:capital@0}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"I segnalini Obiettivo con il lato colorato a faccia in su rappresentano {label.mirror@0}. Qualsiasi Eroe pu&ograve; che si trova nella Zona di {label.mirror@1} pu&ograve; spendere 1 PM per {label.mirror@2}. Un Eroe in possesso di {label.mirror@1} pu&ograve; spendere 1 PM per lasciarlo nella sua Zona. Inoltre, {label.mirror@0} possono essere scambiati come fossero oggetti.",
                                                        EN:"Objective tokens with the colored side up represent {label.mirror@0}. Any Hero who is in the Zone of {label.mirror@1} can spend 1 MP {label.mirror@2}. A Hero who owns {label.mirror@1} can spend 1 MP to drop it in his Zone. Additionally, {label.mirror@0} can be exchanged as if they were items.",
                                                        ES:"Los marcadores de Objetivo con el lado de color hacia arriba representan {label.mirror@0}. Cualquier H&eacute;roe que se encuentre en la Zona de {label.mirror@1} puede gastar 1 PM para {label.mirror@2}. Un H&eacute;roe en posesi&oacute;n de {label.mirror@1} puede gastar 1 PM para dejarlo en su Zona. Adem&aacute;s, {label.mirror@0} pueden intercambiarse como si fueran objetos."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Eliminare {label.mud@0}",
                                                        EN:"Eliminate {label.mud@0}",
                                                        ES:"Eliminar {label.mud@0}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"I segnalini Tempo {symbol.timeToken} rappresentano {label.mud@0}. All'inizio di ogni Fase dell'Oscurit&agrave;, {label.flow@1} {label.energy@1} parte dal segnalino Obiettivo grigio e si muove in linea retta rispettando la Linea di Vista. I giocatori possono interrompere il movimento {label.flow@3} in qualsiasi momento."+
                                                        "<p>Se {label.flow@0} raggiunge un segnalino Obiettivo con il lato colorato a faccia in su, {label.flow@0} pu&ograve; cambiare direzione."+
                                                        "<p>Se {label.flow@0} raggiunge un segnalino Tempo {symbol.timeToken}, il segnalino viene rimosso ed il percorso del raggio si interrompe.</p>"+
                                                        "<p>Se {label.flow@0} raggiunge un Nemico, il Nemico subisce 1 Ferita ed il percorso {label.flow@3} prosegue normalmente. Un nemico pu&ograve; essere colpito {label.flow@2} una sola volta per round.</p>",
                                                        EN:"The Time tokens {symbol.timeToken} represent {label.mud@0}. At the start of each Darkness Phase, {label.energy@1} {label.flow@1} starts from the gray Objective token and moves in a straight line respecting the Line of Sight. Players can interrupt the {label.flow@3} movement at any time."+
                                                        "<p>If {label.flow@0} reaches an Objective token with the colored side up, {label.flow@0} can change direction."+
                                                        "<p>If {label.flow@0} reaches a Time token {symbol.timeToken}, the token is removed and the ray movement is interrupted.</p>"+
                                                        "<p>If {label.flow@0} reaches an Enemy, the Enemy suffers 1 Wound and the {label.flow@3} movement continues normally. An enemy can only be hit {label.flow@2} once per round.</p>",
                                                        ES:"Los marcadores de Tiempo {symbol.timeToken} representan {label.mud@0}. Al principio de cada Fase de la Oscuridad, {label.flow@1} {label.energy@1} parte del marcador de Objetivo gris y se mueve en l&iacute;nea recta respetando la L&iacute;nea de Visi&oacute;n. Los jugadores pueden interrumpir el movimiento {label.flow@3} en cualquier momento." + "<p>Si {label.flow@0} alcanza un marcador de Objetivo con el lado de color hacia arriba, {label.flow@0} puede cambiar de direcci&oacute;n.</p>" + "<p>Si {label.flow@0} alcanza un marcador de Tiempo {symbol.timeToken}, el marcador se retira y el recorrido del rayo se interrumpe.</p>" + "<p>Si {label.flow@0} alcanza a un Enemigo, el Enemigo sufre 1 Herida y el recorrido {label.flow@3} contin&uacute;a con normalidad. Un enemigo solo puede ser golpeado {label.flow@2} una vez por ronda.</p>"
                                                    }
                                                ],
                                                miniCampaignExplanation:[
                                                    {
                                                        IT:"I segnalini Tempo {symbol.timeToken} rappresentano {label.mud@0}. All'inizio di ogni Fase dell'Oscurit&agrave;, {label.flow@1} {label.energy@1} parte dal segnalino Obiettivo grigio e si muove in linea retta rispettando la Linea di Vista. I giocatori possono interrompere il movimento {label.flow@3} in qualsiasi momento."+
                                                        "<p>Se {label.flow@0} raggiunge un segnalino Obiettivo con il lato colorato a faccia in su, {label.flow@0} pu&ograve; cambiare direzione."+
                                                        "<p>Se {label.flow@0} raggiunge un segnalino Tempo {symbol.timeToken}, il segnalino viene rimosso, tutti gli Eroi guadagnano {label.miniCampaignObjectivesXp:split:tokensCount.time} PE ed il percorso del raggio si interrompe.</p>"+
                                                        "<p>Se {label.flow@0} raggiunge un Nemico, il Nemico subisce 1 Ferita ed il percorso {label.flow@3} prosegue normalmente. Un nemico pu&ograve; essere colpito {label.flow@2} una sola volta per round.</p>",
                                                        EN:"The Time tokens {symbol.timeToken} represent {label.mud@0}. At the start of each Darkness Phase, {label.energy@1} {label.flow@1} starts from the gray Objective token and moves in a straight line respecting the Line of Sight. Players can interrupt the {label.flow@3} movement at any time."+
                                                        "<p>If {label.flow@0} reaches an Objective token with the colored side up, {label.flow@0} can change direction."+
                                                        "<p>If {label.flow@0} reaches a Time token {symbol.timeToken}, the token is removed, all Heroes gets {label.miniCampaignObjectivesXp:split:tokensCount.time} XP, and the ray movement is interrupted.</p>"+
                                                        "<p>If {label.flow@0} reaches an Enemy, the Enemy suffers 1 Wound and the {label.flow@3} movement continues normally. An enemy can only be hit {label.flow@2} once per round.</p>",
                                                        ES:"Los marcadores de Tiempo {symbol.timeToken} representan {label.mud@0}. Al principio de cada Fase de la Oscuridad, {label.flow@1} {label.energy@1} parte del marcador de Objetivo gris y se mueve en l&iacute;nea recta respetando la L&iacute;nea de Visi&oacute;n. Los jugadores pueden interrumpir el movimiento {label.flow@3} en cualquier momento." + "<p>Si {label.flow@0} alcanza un marcador de Objetivo con el lado de color hacia arriba, {label.flow@0} puede cambiar de direcci&oacute;n.</p>" + "<p>Si {label.flow@0} alcanza un marcador de Tiempo {symbol.timeToken}, el marcador se retira, todos los H&eacute;roes ganan {label.miniCampaignObjectivesXp:split:tokensCount.time} PE y el recorrido del rayo se interrumpe.</p>" + "<p>Si {label.flow@0} alcanza a un Enemigo, el Enemigo sufre 1 Herida y el recorrido {label.flow@3} contin&uacute;a con normalidad. Un enemigo solo puede ser golpeado {label.flow@2} una vez por ronda.</p>"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"{label.enemy:capital@0}",
                                                        EN:"{label.enemy:capital@0}",
                                                        ES:"{label.enemy:capital@0}",
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"La porta con il bordo rosso pu&ograve; essere aperta solo se tutti i segnalini Tempo {symbol.timeToken} sono stati rimossi. Quando aprite la porte con il bordo rosso, rimuovete il segnalino Corruzione {symbol.corruptionToken} e generate un Mostro Errante di Livello 5 nella sua zona: &egrave; {label.enemy@0}. Non appena {label.enemy@0} viene eliminato, {label.questVictory@0}.",
                                                        EN:"The door with the red border can only be opened if all Time tokens {symbol.timeToken} have been removed. When you open the door with the red border, remove the Corruption token {symbol.corruptionToken} and spawn a Level 5 Roaming Monster in its zone: it is {label.enemy@0}. As soon as {label.enemy@0} is eliminated, {label.questVictory@0}.",
                                                        ES:"La puerta con el borde rojo solo puede abrirse si se han retirado todos los marcadores de Tiempo {symbol.timeToken}. Al abrir la puerta con el borde rojo, retira el marcador de Corrupci&oacute;n {symbol.corruptionToken} y genera un Monstruo Errante de nivel 5 en su zona: es {label.enemy@0}. En cuanto {label.enemy@0} sea eliminado, {label.questVictory@0}."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"La porta con il bordo rosso pu&ograve; essere aperta solo se tutti i segnalini Tempo {symbol.timeToken} sono stati rimossi. Quando aprite la porte con il bordo rosso, rimuovete il segnalino Corruzione {symbol.corruptionToken} e generate {label.campaignBoss@0} nella sua zona: &egrave; {label.enemy@0}. Non appena {label.enemy@0} viene eliminato, {label.questVictory@0}.",
                                                        EN:"The door with the red border can only be opened if all Time tokens {symbol.timeToken} have been removed. When you open the door with the red border, remove the Corruption token {symbol.corruptionToken} and spawn {label.campaignBoss@0} in its zone: it is {label.enemy@0}. As soon as {label.enemy@0} is eliminated, {label.questVictory@0}.",
                                                        ES:"La puerta con el borde rojo solo puede abrirse si se han retirado todos los marcadores de Tiempo {symbol.timeToken}. Al abrir la puerta con el borde rojo, retira el marcador de Corrupci&oacute;n {symbol.corruptionToken} y genera {label.campaignBoss@0} en su zona: es {label.enemy@0}. En cuanto {label.enemy@0} sea eliminado, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "pathToRoom-large" ],
                                            gameMode: [ "mirrorToBoss" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "default" ],
                                            skin:[ "default" ],
                                            size: [ "default" ],
                                            bridges:[ "default" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "mirrorToBoss" ]
                                        }
                                    ],
                                    campaign:[
                                        {
                                            forCampaign:[ "full", "mini" ],
                                            sideQuests:[
                                                { tags:[
                                                    [ "visitAllRooms", "teamwork" ]
                                                ] }
                                            ]
                                        },{
                                            forCampaign:[ "2shots" ]
                                        }
                                    ],
                                    boss:{
                                        rules:[
                                            {
                                                type:"objective",
                                                name:{
                                                    IT:"Sconfiggere {boss.bossBadName@0}",
                                                    EN:"Defeat {boss.bossBadName@0}",
                                                    ES:"Derrotar a {boss.bossBadName@0}",
                                                },
                                                summary:{
                                                    IT:"Elimina {boss.bossBadName@0}, la fonte {label.mud@3}",
                                                    EN:"Eliminate {boss.bossBadName@0}, the source of {label.mud@3}",
                                                    ES:"Elimina a {boss.bossBadName@0}, la fuente {label.mud@3}"
                                                }
                                            }
                                        ],
                                        preparation:{
                                            IT:"<p>Rimuovere tutti i segnalini Obiettivo dall'inventario degli Eroi.</p>",
                                            EN:"<p>Remove all Objective tokens from the Heroes' inventories.</p>",
                                            ES:"<p>Retira todos los marcadores de Objetivo del inventario de los H&eacute;roes.</p>"
                                        },
                                        levelByTilesCount:{
                                            3:1,
                                            4:2,
                                            5:3,
                                            6:4
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]

});