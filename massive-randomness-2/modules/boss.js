ModManager.modules.push(function(){

    const
        QUESTVICTORY={
            IT:[ "ha inizio lo Scontro con il Boss", "dare inizio allo Scontro con il Boss" ],
            EN:[ "the Boss Fight begins", "begin the Boss Fight" ],
            ES:[ "comienza el Combate contra el Jefe", "comenzar el Combate contra el Jefe" ]
        },
        HELLSCAPEMODE={
            IT:[ " (da MD2: Hellscape)"],
            EN:[ " (from MD2: Hellscape)"],
            ES:[ " (de MD2: Hellscape)"]
        },
        ONESHOTMODE={
            IT:[ " (Partita Autoconclusiva)"],
            EN:[ " (One-Shot)"],
            ES:[ " (Partida Autoconclusiva)"]
        },
        CAMPAIGNMODE={
            IT:[ " (Modalit&agrave; campagna)"],
            EN:[ " (Campaign mode)"],
            ES:[ " (Modo Campa&ntilde;a)"]
        },
        WEAKAT=[
            { act:0, map:0 },
            { act:0, map:1 }
        ],
        PLAINAT=[
            { act:0, map:2 },
            { act:1, map:0 }
        ],
        BOSSMODIFIER={
            IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe." ],
            EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero." ],
            ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe." ]
        },
        BOSSPHASE2MODIFIER={
            IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossPhase2Health} PV per Eroe." ],
            EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossPhase2Health} HP per Hero." ],
            ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossPhase2Health} PV por H&eacute;roe." ]
        }
        BOSSAT=[
            [ { act:1, map:1 } ],
            [ { act:1, map:2 } ],
            [ { act:2, map:0 } ],
            [ { act:2, map:1 } ],
            [ { act:2, map:2 } ]
        ],
        SINGLEPHASEBOSSWEAK=[
            { bossHealth:{ EN:-5 } },
            { bossHealth:{ EN:-5 } }
        ],
        SINGLEPHASECOMPANIONBOSSWEAK_5=[
            { companionHealth:{ EN: -1 }, bossHealth:{ EN:-5 } },
            { companionHealth:{ EN: -1 }, bossHealth:{ EN:-5 } }
        ],
        SINGLEPHASEGROUPBOSSWEAK=[
            { bossHealth:{ EN:-1 } },
            { bossHealth:{ EN:-1 } }
        ],
        SINGLEPHASEDUOBOSSWEAK=[
            { bossHealth:{ EN:-2 } },
            { bossHealth:{ EN:-2 } }
        ],
        DOUBLEPHASEBOSSWEAK=[
            { bossPhase2Health:{ EN:-5 } },
            { bossPhase2Health:{ EN:-5 } }
        ],
        SINGLEPHASEBOSSBONUS=[
            { bossHealth:{ EN:5 } },
            { bossHealth:{ EN:15 } },
            { bossHealth:{ EN:25 } },
            { bossHealth:{ EN:35 } },
            { bossHealth:{ EN:45 } },
        ],
        SINGLEPHASECOMPANIONBOSSBONUS_5=[
            { companionHealth:{ EN:1 }, bossHealth:{ EN:5 } },
            { companionHealth:{ EN:3 }, bossHealth:{ EN:15 } },
            { companionHealth:{ EN:5 }, bossHealth:{ EN:25 } },
            { companionHealth:{ EN:7 }, bossHealth:{ EN:35 } },
            { companionHealth:{ EN:9 }, bossHealth:{ EN:45 } },
        ],
        SINGLEPHASEGROUPBOSSBONUS=[
            { bossHealth:{ EN:1 } },
            { bossHealth:{ EN:4 } },
            { bossHealth:{ EN:6 } },
            { bossHealth:{ EN:9 } },
            { bossHealth:{ EN:11 } },
        ],
        SINGLEPHASEDUOBOSSBONUS=[
            { bossHealth:{ EN:3 } },
            { bossHealth:{ EN:8 } },
            { bossHealth:{ EN:13 } },
            { bossHealth:{ EN:18 } },
            { bossHealth:{ EN:23 } },
        ],
        DOUBLEPHASEBOSSBONUS=[
            { bossHealth:{ EN:5 }, bossPhase2Health:{ EN:5 } },
            { bossHealth:{ EN:5 }, bossPhase2Health:{ EN:10 } },
            { bossHealth:{ EN:10 }, bossPhase2Health:{ EN:15 } },
            { bossHealth:{ EN:10 }, bossPhase2Health:{ EN:25 } },
            { bossHealth:{ EN:15 }, bossPhase2Health:{ EN:30 } },
        ],
        BOSSLEVELS={
            1:{
                labels:{
                    bossHealth:{ EN:15 },
                    bossModifier:BOSSMODIFIER
                }
            },
            2:{
                labels:{
                    bossHealth:{ EN:25 },
                    bossModifier:BOSSMODIFIER
                }
            },
            3:{
                labels:{
                    bossHealth:{ EN:35 },
                    bossModifier:BOSSMODIFIER
                }
            },
            4:{
                labels:{
                    bossHealth:{ EN:45 },
                    bossModifier:BOSSMODIFIER
                }
            }
        },
        COMPANIONBOSSLEVELS={
            1:{
                labels:{
                    bossHealth:{ EN:15 },
                    companionHealth:{ EN:3 },
                    bossModifier:BOSSMODIFIER
                }
            },
            2:{
                labels:{
                    bossHealth:{ EN:25 },
                    companionHealth:{ EN:5 },
                    bossModifier:BOSSMODIFIER
                }
            },
            3:{
                labels:{
                    bossHealth:{ EN:35 },
                    companionHealth:{ EN:7 },
                    bossModifier:BOSSMODIFIER
                }
            },
            4:{
                labels:{
                    bossHealth:{ EN:45 },
                    companionHealth:{ EN:9 },
                    bossModifier:BOSSMODIFIER
                }
            }
        },
        DUOBOSSLEVELS={
            1:{
                labels:{
                    bossHealth:{ EN:8 },
                    bossModifier:BOSSMODIFIER
                }
            },
            2:{
                labels:{
                    bossHealth:{ EN:13 },
                    bossModifier:BOSSMODIFIER
                }
            },
            3:{
                labels:{
                    bossHealth:{ EN:18 },
                    bossModifier:BOSSMODIFIER
                }
            },
            4:{
                labels:{
                    bossHealth:{ EN:23 },
                    bossModifier:BOSSMODIFIER
                }
            }
        },
        STRONGERBOSSLEVELS={
            1:{
                labels:{
                    bossHealth:{ EN:20 },
                    bossModifier:BOSSMODIFIER
                }
            },
            2:{
                labels:{
                    bossHealth:{ EN:30 },
                    bossModifier:BOSSMODIFIER
                }
            },
            3:{
                labels:{
                    bossHealth:{ EN:40 },
                    bossModifier:BOSSMODIFIER
                }
            },
            4:{
                labels:{
                    bossHealth:{ EN:50 },
                    bossModifier:BOSSMODIFIER
                }
            }
        },
        VERYSTRONGBOSSLEVELS={
            1:{
                labels:{
                    bossHealth:{ EN:25 },
                    bossModifier:BOSSMODIFIER
                }
            },
            2:{
                labels:{
                    bossHealth:{ EN:40 },
                    bossModifier:BOSSMODIFIER
                }
            },
            3:{
                labels:{
                    bossHealth:{ EN:45 },
                    bossModifier:BOSSMODIFIER
                }
            },
            4:{
                labels:{
                    bossHealth:{ EN:50 },
                    bossModifier:BOSSMODIFIER
                }
            }
        },
        BASESINGLEPHASEBOSSCAMPAIGN=[
            {
                at:PLAINAT
            },
            {
                at:WEAKAT,
                mods:{
                    labelsBonus:SINGLEPHASEBOSSWEAK[0]
                }
            },
            {
                at:BOSSAT[0],
                mods:{
                    labelsBonus:SINGLEPHASEBOSSBONUS[0],
                    labels:{
                        bossMode:CAMPAIGNMODE
                    }
                }
            },{
                at:BOSSAT[1],
                mods:{
                    labelsBonus:SINGLEPHASEBOSSBONUS[1],
                    labels:{
                        bossMode:CAMPAIGNMODE
                    }
                }
            },{
                at:BOSSAT[2],
                mods:{
                    labelsBonus:SINGLEPHASEBOSSBONUS[2],
                    labels:{
                        bossMode:CAMPAIGNMODE
                    }
                }
            },{
                at:BOSSAT[3],
                mods:{
                    labelsBonus:SINGLEPHASEBOSSBONUS[3],
                    labels:{
                        bossMode:CAMPAIGNMODE
                    }
                }
            },{
                at:BOSSAT[4],
                mods:{
                    labelsBonus:SINGLEPHASEBOSSBONUS[4],
                    labels:{
                        bossMode:CAMPAIGNMODE
                    }
                }
            }
        ],
        BASEDOUBLEPHASEBOSSCAMPAIGN=[
            { at:PLAINAT },
            {
                at:WEAKAT,
                mods:{
                    labelsBonus:DOUBLEPHASEBOSSWEAK[0]
                }
            },
            {
                at:BOSSAT[0],
                mods:{
                    labelsBonus:DOUBLEPHASEBOSSBONUS[0],
                    labels:{
                        bossMode:CAMPAIGNMODE,
                        bossPhase2Modifier:BOSSPHASE2MODIFIER
                    }
                }
            },{
                at:BOSSAT[1],
                mods:{
                    labelsBonus:DOUBLEPHASEBOSSBONUS[1],
                    labels:{
                        bossMode:CAMPAIGNMODE,
                        bossPhase2Modifier:BOSSPHASE2MODIFIER
                    }
                }
            },{
                at:BOSSAT[2],
                mods:{
                    labelsBonus:DOUBLEPHASEBOSSBONUS[2],
                    labels:{
                        bossMode:CAMPAIGNMODE,
                        bossPhase2Modifier:BOSSPHASE2MODIFIER
                    }
                }
            },{
                at:BOSSAT[3],
                mods:{
                    labelsBonus:DOUBLEPHASEBOSSBONUS[3],
                    labels:{
                        bossMode:CAMPAIGNMODE,
                        bossPhase2Modifier:BOSSPHASE2MODIFIER
                    }
                }
            },{
                at:BOSSAT[4],
                mods:{
                    labelsBonus:DOUBLEPHASEBOSSBONUS[4],
                    labels:{
                        bossMode:CAMPAIGNMODE,
                        bossPhase2Modifier:BOSSPHASE2MODIFIER
                    }
                }
            }
        ],
        ADVANCEDSINGLEPHASEBOSSCAMPAIGN=[
            {
                at:PLAINAT
            },
            {
                at:WEAKAT,
                mods:{
                    labelsBonus:SINGLEPHASEBOSSWEAK[0]
                }
            },
            {
                at:BOSSAT[0],
                mods:{
                    labelsBonus:SINGLEPHASEBOSSBONUS[0],
                    labels:{
                        bossModifier:BOSSMODIFIER
                    }
                }
            },{
                at:BOSSAT[1],
                mods:{
                    labelsBonus:SINGLEPHASEBOSSBONUS[1],
                    labels:{
                        bossModifier:BOSSMODIFIER
                    }
                }
            },{
                at:BOSSAT[2],
                mods:{
                    labelsBonus:SINGLEPHASEBOSSBONUS[2],
                    labels:{
                        bossModifier:BOSSMODIFIER
                    }
                }
            },{
                at:BOSSAT[3],
                mods:{
                    labelsBonus:SINGLEPHASEBOSSBONUS[3],
                    labels:{
                        bossModifier:BOSSMODIFIER
                    }
                }
            },{
                at:BOSSAT[4],
                mods:{
                    labelsBonus:SINGLEPHASEBOSSBONUS[4],
                    labels:{
                        bossModifier:BOSSMODIFIER
                    }
                }
            }
        ],
        ADVANCEDDOUBLEPHASEBOSSCAMPAIGN=[
            { at:PLAINAT },
            {
                at:WEAKAT,
                mods:{
                    labelsBonus:DOUBLEPHASEBOSSWEAK[0]
                }
            },
            {
                at:BOSSAT[0],
                mods:{
                    labelsBonus:DOUBLEPHASEBOSSBONUS[0],
                    labels:{
                        bossModifier:BOSSMODIFIER,
                        bossPhase2Modifier:BOSSPHASE2MODIFIER
                    }
                }
            },{
                at:BOSSAT[1],
                mods:{
                    labelsBonus:DOUBLEPHASEBOSSBONUS[1],
                    labels:{
                        bossModifier:BOSSMODIFIER,
                        bossPhase2Modifier:BOSSPHASE2MODIFIER
                    }
                }
            },{
                at:BOSSAT[2],
                mods:{
                    labelsBonus:DOUBLEPHASEBOSSBONUS[2],
                    labels:{
                        bossModifier:BOSSMODIFIER,
                        bossPhase2Modifier:BOSSPHASE2MODIFIER
                    }
                }
            },{
                at:BOSSAT[3],
                mods:{
                    labelsBonus:DOUBLEPHASEBOSSBONUS[3],
                    labels:{
                        bossModifier:BOSSMODIFIER,
                        bossPhase2Modifier:BOSSPHASE2MODIFIER
                    }
                }
            },{
                at:BOSSAT[4],
                mods:{
                    labelsBonus:DOUBLEPHASEBOSSBONUS[4],
                    labels:{
                        bossModifier:BOSSMODIFIER,
                        bossPhase2Modifier:BOSSPHASE2MODIFIER
                    }
                }
            }
        ]

    return [
        {
            id:"boss",
            needs:[ ],
            provides:[ "boss" ],
            label:{
                EN:"Add boss fights."
            },
            content:[
                {
                    type:"bossLabels",
                    data:{
                        bossPreparation:{
                            IT:"Rimuovere tutte le Tessere, inclusi tutti i componenti collocati su di esse. {boss.bossTiles@0}, rimuovere il tracciato Oscurit&agrave; e collocate la plancia Boss {boss.bossDashboardName@0}{boss.bossMode@0} {boss.bossTiles@1}, con l'indicatore Oscurit&agrave; sulla casella pi&ugrave; a sinistra del tracciato Boss.",
                            EN:"Remove all Tiles, including all components placed on them. {boss.bossTiles@0}, remove the Darkness track, and place the {boss.bossDashboardName@0}{boss.bossMode@0} Boss dashboard {boss.bossTiles@1}, with the Darkness indicator on the leftmost space of the Boss track.",
                            ES:"Retira todas las Losetas, incluidos todos los componentes colocados sobre ellas. {boss.bossTiles@0}, retira la barra de Oscuridad y coloca el panel de Jefe {boss.bossDashboardName@0}{boss.bossMode@0} {boss.bossTiles@1}, con el indicador de Oscuridad en la casilla m&aacute;s a la izquierda de la barra de Jefe."
                        },
                        bossPhase2Preparation:{
                            IT:"riportare l'indicatore Oscurit&agrave; sulla casella pi&ugrave; a sinistra del tracciato Boss e rimuovere tutte le Ferite dal Boss",
                            EN:"move back the Darkness indicator on the leftmost space of the Boss track and remove all Wounds from the Boss",
                            ES:"devuelve el indicador de Oscuridad a la casilla m&aacute;s a la izquierda de la barra de Jefe y retira todas las Heridas del Jefe"
                        },
                        bossModifier:{
                            IT:[ "", "" ],
                            EN:[ "", "" ],
                            ES:[ "", "" ]
                        },
                        bossPhase2Modifier:{
                            IT:[ "", "" ],
                            EN:[ "", "" ],
                            ES:[ "", "" ]
                        },
                        bossMode:{
                            IT:[ "" ],
                            EN:[ "" ],
                            ES:[ "" ]
                        },
                        heroPreparation:{
                            IT:"Gli Eroi recuperano tutta la Salute e il Mana, riportandoli ai loro valori massimi.",
                            EN:"Heroes recover all Health and Mana, returning them to their maximum values.",
                            ES:"Los H&eacute;roes recuperan toda su Vida y Man&aacute;, volviendo a sus valores m&aacute;ximos."
                        },
                        bossSideQuestValidation:{
                            IT:"<p>Verificare ora se la condizione della Missione Secondaria &egrave; stata verificata. Se si, la ricompensa della missione verr&agrave; ottenuta in caso di vittoria.</p>",
                            EN:"<p>Check now if the Side Quest condition has been met. If so, the mission reward will be obtained in case of victory.</p>",
                            ES:"<p>Comprueba ahora si se ha cumplido la condici&oacute;n de la Misi&oacute;n Secundaria. Si es as&iacute;, se obtendr&aacute; la recompensa de la misi&oacute;n en caso de victoria.</p>",
                        },
                        bossChallengeValidation:{
                            IT:"<p>Se avete rispettato la regola della Sfida del Vecchio Rosso fino a questo punto, la ricompensa della sfida verr&agrave; ottenuta in caso di vittoria. Non &egrave; pi&ugrave; necessario rispettarla.</p>",
                            EN:"<p>If you have followed the Old Red Challenge rule up to this point, the challenge reward will be obtained if case of victory. It is no longer necessary to follow it.</p>",
                            ES:"<p>Si has seguido la regla del Desaf&iacute;o del Viejo Rojo hasta este punto, se obtendr&aacute; la recompensa del desaf&iacute;o en caso de victoria. Ya no es necesario seguir cumpli&eacute;ndola.</p>"
                        },
                        bossMichaelPreparation:{
                            IT:[
                                "<p>Questo Scontro con il Boss segue le regole descritte nella sezione Scontro con il Boss della missione <b>La Liberazione dell'Arcangelo</b> nel manuale di Massive Darkness 2.</p>"
                            ],
                            EN:[
                                "<p>This Boss Fight follows the rules described in the Boss Fight section of the <b>Releasing Michael</b> quest in the Massive Darkness 2 rulebook.</p>"
                            ],
                            ES:[ "<p>Este Combate contra el Jefe sigue las reglas descritas en la secci&oacute;n de Combate contra el Jefe de la misi&oacute;n <b>Liberar a Michael</b> del manual de Massive Darkness 2.</p>" ]
                        },
                        bossReaperPreparation:{
                            IT:[
                                "<p>Questo Boss segue le regole descritte nella sezione Scontro con il Boss della missione <b>Le Chiavi delle Anime</b> nel manuale di Massive Darkness 2.</p>"
                            ],
                            EN:[
                                "<p>This Boss follows the rules described in the Boss Fight section of the <b>The Soul Keys</b> quest in the Massive Darkness 2 rulebook.</p>"
                            ],
                            ES:[ "<p>Este Jefe sigue las reglas descritas en la secci&oacute;n de Combate contra el Jefe de la misi&oacute;n <b>Las Llaves de las Almas</b> del manual de Massive Darkness 2.</p>" ]
                        },
                        bossBaalberithPreparation:{
                            IT:[
                                "<p>Questo Boss segue la preparazione e le regole descritte nella sezione Scontro con il Boss della missione <b>Il Duca dell'Inferno</b> nel manuale di Heavenfall. Posizionate 40 segnalini Salute invece di 70 segnalini Salute nella Zona del segnalino Obiettivo.</p>"
                            ],
                            EN:[
                                "<p>This Boss follows the preparation and the rules described in the Boss Fight section of the <b>Duke of Hell</b> quest in the Heavenfall rulebook. Place 40 Health instead of 70 Health tokens in the Objective token Zone.</p>"
                            ],
                            ES:[ "<p>Este Jefe sigue la preparaci&oacute;n y las reglas descritas en la secci&oacute;n de Combate contra el Jefe de la misi&oacute;n <b>El Duque del Infierno</b> del manual de Heavenfall. Coloca 40 marcadores de Salud en lugar de 70 en la Zona del marcador de Objetivo.</p>" ]
                        },
                        bossBaaalberithPlainMods:{
                            IT:[
                                "si difende con 4 {symbol.blueDie} 1 {symbol.blackDie} e attacca con 2 {symbol.yellowDie} 1 {symbol.orangeDie} 1 {symbol.blackDie}"
                            ],
                            EN:[
                                "it defends with 4 {symbol.blueDie} 1 {symbol.blackDie}, and it attacks with 2 {symbol.yellowDie} 1 {symbol.orangeDie} 1 {symbol.blackDie}"
                            ],
                            ES:[ "se defiende con 4 {symbol.blueDie} 1 {symbol.blackDie}, y ataca con 2 {symbol.yellowDie} 1 {symbol.orangeDie} 1 {symbol.blackDie}" ]
                        },
                        bossBaalberithEnragedPreparation:{
                            IT:[
                                "<p>Questo Boss segue la preparazione e le regole descritte nella sezione Scontro con il Boss della missione <b>Il Duca dell'Inferno</b> nel manuale di Heavenfall. Generare il Mostro Errante Uriel sul portale dei Mostri Erranti e posizionate 40 segnalini Salute invece di 70 segnalini Salute nella Zona del segnalino Obiettivo.</p>"
                            ],
                            EN:[
                                "<p>This Boss follows the preparation and the rules described in the Boss Fight section of the <b>Duke of Hell</b> quest in the Heavenfall rulebook. Spawn the Roaming Monster Uriel in the Roaming Monster Portal and place 40 Health instead of 70 Health tokens in the Objective token Zone.</p>"
                            ],
                            ES:[ "<p>Este Jefe sigue la preparaci&oacute;n y las reglas descritas en la secci&oacute;n de Combate contra el Jefe de la misi&oacute;n <b>El Duque del Infierno</b> del manual de Heavenfall. Genera al Monstruo Errante Uriel en el Portal de Monstruos Errantes y coloca 40 marcadores de Salud en lugar de 70 en la Zona del marcador de Objetivo.</p>" ]
                        },
                        bossBaaalberithEnragedPlainMods:{
                            IT:[
                                "si difende con 4 {symbol.blueDie} 2 {symbol.blackDie} e attacca con 2 {symbol.yellowDie} 2 {symbol.orangeDie} 2 {symbol.blackDie}"
                            ],
                            EN:[
                                "it defends with 4 {symbol.blueDie} 2 {symbol.blackDie}, and it attacks with 2 {symbol.yellowDie} 2 {symbol.orangeDie} 2 {symbol.blackDie}"
                            ],
                            ES:[ "se defiende con 4 {symbol.blueDie} 2 {symbol.blackDie}, y ataca con 2 {symbol.yellowDie} 2 {symbol.orangeDie} 2 {symbol.blackDie}" ]
                        },
                        bossAbyssalDemonPreparation:{
                            IT:[
                                "<p>Questo Boss segue le regole descritte nella sezione Scontro con il Boss della missione <b>Cuore di Tenebra</b> nel manuale di Massive Darkness 2: Pack di Aggiornamento.</p>"
                            ],
                            EN:[
                                "<p>This Boss follows the rules described in the Boss Fight section of the <b>The Heart of Darkness</b> quest in the Massive Darkness 2: Upgrade Pack rulebook.</p>"
                            ],
                            ES:[ "<p>Este Jefe sigue las reglas descritas en la secci&oacute;n de Combate contra el Jefe de la misi&oacute;n <b>El Coraz&oacute;n de la Oscuridad</b> del manual de Massive Darkness 2: Pack de Mejora.</p>" ]
                        },
                        bossAbyssalDemonOneShotMod:{
                            IT:[
                                "prelevare le carte Mostro Errante da far assimilare all'Emissario Oscuro dal mazzo di 2 ranghi al di sopra dell'attuale Livello del Dungeon o dal mazzo di Livello 5 se non disponibile"
                            ],
                            EN:[
                                "take the Roaming Monster cards to be assimilated by the Abyssal Demon from the deck 2 ranks above the current Dungeon Level or from the Level 5 deck if unavailable"
                            ],
                            ES:[ "toma las cartas de Monstruo Errante que asimilar&aacute; el Demonio Abisal del mazo de 2 rangos por encima del Nivel de Mazmorra actual, o del mazo de Nivel 5 si no est&aacute; disponible" ]
                        },
                        bossAbyssalDemonCampaignMod:{
                            IT:[
                                "prelevare le carte Mostro Errante da far assimilare all'Emissario Oscuro dal mazzo di 2 ranghi al di sopra dell'attuale Livello del Dungeon o dal mazzo di Livello 10 se non disponibile"
                            ],
                            EN:[
                                "take the Roaming Monster cards to be assimilated by the Abyssal Demon from the deck 2 ranks above the current Dungeon Level or from the Level 10 deck if unavailable"
                            ],
                            ES:[ "toma las cartas de Monstruo Errante que asimilar&aacute; el Demonio Abisal del mazo de 2 rangos por encima del Nivel de Mazmorra actual, o del mazo de Nivel 10 si no est&aacute; disponible" ]
                        },
                        heroHellephantPreparation:{
                            IT:"Gli Eroi recuperano tutta la Salute fino al valore massimo ma <b>scartano tutto il Mana</b>.",
                            EN:"Heroes recover all Health returning to its maximum value but <b>discard all Mana</b>.",
                            ES:"Los H&eacute;roes recuperan toda su Vida hasta el valor m&aacute;ximo, pero <b>descartan todo su Man&aacute;</b>."
                        },
                        bossHellephantPreparation:{
                            IT:[
                                "<p>Questo Boss segue le regole descritte nella sezione Scontro con il Boss della missione <b>La Desolazione dell'Hellephant</b> nel manuale di Massive Darkness 2: Pack di Aggiornamento.</p>"
                            ],
                            EN:[
                                "<p>This Boss follows the rules described in the Boss Fight section of the <b>The Desolation of the Hellephant</b> quest in the Massive Darkness 2: Upgrade Pack rulebook.</p>"
                            ],
                            ES:[ "<p>Este Jefe sigue las reglas descritas en la secci&oacute;n de Combate contra el Jefe de la misi&oacute;n <b>La Desolaci&oacute;n del Hellephant</b> del manual de Massive Darkness 2: Pack de Mejora.</p>" ]
                        },
                        bossHellephantHardMods:{
                            IT:[
                                "si difende con 3 {symbol.blueDie} 3 {symbol.greenDie} 1 {symbol.blackDie} e attacca con 1 {symbol.yellowDie} 3 {symbol.orangeDie} 2 {symbol.redDie} 2 {symbol.blackDie}"
                            ],
                            EN:[
                                "it defends with 3 {symbol.blueDie} 3 {symbol.greenDie} 1 {symbol.blackDie}, and it attacks with 1 {symbol.yellowDie} 3 {symbol.orangeDie} 2 {symbol.redDie} 2 {symbol.blackDie}"
                            ],
                            ES:[ "se defiende con 3 {symbol.blueDie} 3 {symbol.greenDie} 1 {symbol.blackDie}, y ataca con 1 {symbol.yellowDie} 3 {symbol.orangeDie} 2 {symbol.redDie} 2 {symbol.blackDie}" ]
                        },
                        bossCyclopsDuoPreparation:{
                            IT:[
                                "<p>Questo Boss segue le regole descritte nella sezione Scontro con il Boss della missione <b>Doppio Problema</b> nel manuale di Massive Darkness 2: Pack di Aggiornamento.</p>"
                            ],
                            EN:[
                                "<p>This Boss follows the rules described in the Boss Fight section of the <b>Double Trouble</b> quest in the Massive Darkness 2: Upgrade Pack rulebook.</p>"
                            ],
                            ES:[ "<p>Este Jefe sigue las reglas descritas en la secci&oacute;n de Combate contra el Jefe de la misi&oacute;n <b>Doble Problema</b> del manual de Massive Darkness 2: Pack de Mejora.</p>" ]
                        },
                        bossCyclopsDuoHardMods:{
                            IT:[
                                "si difende con 4 {symbol.blueDie} 4 {symbol.greenDie} 1 {symbol.blackDie} e attacca con 3 {symbol.yellowDie} 2 {symbol.orangeDie} 2 {symbol.redDie} 1 {symbol.blackDie}"
                            ],
                            EN:[
                                "it defends with 4 {symbol.blueDie} 4 {symbol.greenDie} 1 {symbol.blackDie}, and it attacks with 3 {symbol.yellowDie} 2 {symbol.orangeDie} 2 {symbol.redDie} 1 {symbol.blackDie}"
                            ],
                            ES:[ "se defiende con 4 {symbol.blueDie} 4 {symbol.greenDie} 1 {symbol.blackDie}, y ataca con 3 {symbol.yellowDie} 2 {symbol.orangeDie} 2 {symbol.redDie} 1 {symbol.blackDie}" ]
                        },
                        bossFourHorsemenPreparation:{
                            IT:[
                                " <b>Assegna 1 segnalino Carestia e 1 segnalino Peste ad ogni Eroe.</b><p>Questo Boss segue le regole descritte nella sezione Scontro con il Boss della missione <b>I Quattro Cavalieri</b> del manuale di Massive Darkness 2: Quattro Cavalieri.</p>"
                            ],
                            EN:[
                                " <b>Place 1 Famine token and 1 Plague token on each Hero.</b><p>This Boss follows the rules described in the Boss Fight section of the <b>The Four Horsemen</b> quest of the Massive Darkness 2: Four Horsemen rulebook.</p>"
                            ],
                            ES:[ " <b>Coloca 1 marcador de Hambruna y 1 marcador de Peste sobre cada H&eacute;roe.</b><p>Este Jefe sigue las reglas descritas en la secci&oacute;n de Combate contra el Jefe de la misi&oacute;n <b>Los Cuatro Jinetes</b> del manual de Massive Darkness 2: Los Cuatro Jinetes.</p>" ],
                        },
                        bossScorpionKingPreparation:{
                            IT:[
                                " <b>Ogni Eroe prende 1 segnalino Veleno.</b><p>Questo Boss segue le regole descritte nella sezione Scontro con il Boss della missione <b>Il Re Scorpione</b> del manuale di Massive Darkness 2: Darkbringer.</p>"
                            ],
                            EN:[
                                " <b>Each Hero takes 1 Poison token.</b><p>This Boss follows the rules described in the Boss Fight section of the <b>The Scorpion King</b> quest of the Massive Darkness 2: Darkbringer rulebook.</p>"
                            ],
                            ES:[ " <b>Cada H&eacute;roe toma 1 marcador de Veneno.</b><p>Este Jefe sigue las reglas descritas en la secci&oacute;n de Combate contra el Jefe de la misi&oacute;n <b>El Rey Escorpi&oacute;n</b> del manual de Massive Darkness 2: Darkbringer.</p>" ],
                        },
                        bossScorpionKingHardMods:{
                            IT:[
                                "si difende con 3 {symbol.blueDie} 3 {symbol.greenDie} 1 {symbol.blackDie} e attacca con 3 {symbol.yellowDie} 2 {symbol.orangeDie} 2 {symbol.redDie} 3 {symbol.blackDie}"
                            ],
                            EN:[
                                "it defends with 3 {symbol.blueDie} 3 {symbol.greenDie} 1 {symbol.blackDie}, and it attacks with 1 {symbol.yellowDie} 1 {symbol.orangeDie} 2 {symbol.redDie} 3 {symbol.blackDie}"
                            ],
                            ES:[ "se defiende con 3 {symbol.blueDie} 3 {symbol.greenDie} 1 {symbol.blackDie}, y ataca con 1 {symbol.yellowDie} 1 {symbol.orangeDie} 2 {symbol.redDie} 3 {symbol.blackDie}" ]
                        },
                        bossHadesPreparation:{
                            IT:[
                                " <b>Ogni Eroe prende 4 segnalini Giudizio.</b><p>Ogni Eroe tira 1 {symbol.blackDie} per segnalino Giudizio. Per ogni {symbol.fang} ottenuto, l'Eroe subisce 1 Ferita e scarta il gettone. Nota che per ogni {symbol.blackDie} tirato, se non viene ottenuto un {symbol.fang}, l'Eroe tiene il gettone.</p><p>Questo Boss segue le regole descritte nella sezione Scontro con il Boss della missione <b>Hades</b> del manuale di Massive Darkness 2: Darkbringer.</p>"
                            ],
                            EN:[
                                " <b>Each Hero takes 4 Judgement tokens.</b><p>Each Hero rolls 1 {symbol.blackDie} per Judgement token. For each {symbol.fang} rolled, the Hero takes 1 Wound and discards the token. Note that for each {symbol.blackDie} rolled, if a {symbol.fang} is not rolled, the Hero keeps the token.</p><p>This Boss follows the rules described in the Boss Fight section of the <b>Hades</b> quest of the Massive Darkness 2: Darkbringer rulebook.</p>"
                            ],
                            ES:[ " <b>Cada H&eacute;roe toma 4 marcadores de Juicio.</b><p>Cada H&eacute;roe tira 1 {symbol.blackDie} por cada marcador de Juicio. Por cada {symbol.fang} obtenido, el H&eacute;roe sufre 1 Herida y descarta el marcador. Ten en cuenta que, por cada {symbol.blackDie} tirado, si no se obtiene un {symbol.fang}, el H&eacute;roe conserva el marcador.</p><p>Este Jefe sigue las reglas descritas en la secci&oacute;n de Combate contra el Jefe de la misi&oacute;n <b>Hades</b> del manual de Massive Darkness 2: Darkbringer.</p>" ]
                        },
                        bossHadesHardMods:{
                            IT:[
                                "si difende con 5 {symbol.blueDie} 5 {symbol.greenDie} 1 {symbol.blackDie} e attacca con 2 {symbol.yellowDie} 1 {symbol.orangeDie} 2 {symbol.redDie} 1 {symbol.blackDie}"
                            ],
                            EN:[
                                "it defends with 5 {symbol.blueDie} 5 {symbol.greenDie} 1 {symbol.blackDie}, and it attacks with 2 {symbol.yellowDie} 1 {symbol.orangeDie} 2 {symbol.redDie} 1 {symbol.blackDie}"
                            ],
                            ES:[ "se defiende con 5 {symbol.blueDie} 5 {symbol.greenDie} 1 {symbol.blackDie}, y ataca con 2 {symbol.yellowDie} 1 {symbol.orangeDie} 2 {symbol.redDie} 1 {symbol.blackDie}" ]
                        },
                        bossCharonPreparation:{
                            IT:[
                                " <b>Charon inizia con 2 segnalini Spirito.</b><p>Questo Boss segue le regole descritte nella sezione Scontro con il Boss della missione <b>Dark Ride</b> del manuale di Massive Darkness 2: Darkbringer.</p>"
                            ],
                            EN:[
                                " <b>Charon starts with 2 Soul tokens.</b><p>This Boss follows the rules described in the Boss Fight section of the <b>Dark Ride</b> quest of the Massive Darkness 2: Darkbringer rulebook.</p>"
                            ],
                            ES:[ " <b>Caronte empieza con 2 marcadores de Alma.</b><p>Este Jefe sigue las reglas descritas en la secci&oacute;n de Combate contra el Jefe de la misi&oacute;n <b>Dark Ride</b> del manual de Massive Darkness 2: Darkbringer.</p>" ],
                        },
                        bossCharonHardMods:{
                            IT:[
                                "si difende con 5 {symbol.blueDie} 5 {symbol.greenDie} 1 {symbol.blackDie} e attacca con 3 {symbol.orangeDie} 2 {symbol.redDie} 1 {symbol.blackDie}"
                            ],
                            EN:[
                                "it defends with 5 {symbol.blueDie} 5 {symbol.greenDie} 1 {symbol.blackDie}, and it attacks with 3 {symbol.orangeDie} 2 {symbol.redDie} 1 {symbol.blackDie}"
                            ],
                            ES:[ "se defiende con 5 {symbol.blueDie} 5 {symbol.greenDie} 1 {symbol.blackDie}, y ataca con 3 {symbol.orangeDie} 2 {symbol.redDie} 1 {symbol.blackDie}" ]
                        },
                    }
                }
            ]
        },
        {
            id:"boss",
            needs:[ "md2-hellscape" ],
            provides:[ "boss" ],
            label:{
                EN:"Add MD2: Hellscape boss fights."
            },
            content:[
                {
                    type:"bossList",
                    data:[
                        {
                            levels:BOSSLEVELS,
                            campaign:BASESINGLEPHASEBOSSCAMPAIGN,
                            tags:[ "michael" ],
                            title:{
                                IT:"Scontro con il Boss: Arcangelo Michele",
                                EN:"Boss Fight: Archangel Michael",
                                ES:"Combate contra el Jefe: Arc&aacute;ngel Miguel",
                            },
                            randomLabels:{
                                bossBadName:[
                                    {
                                        IT:[ "l'Arcangelo corrotto" ],
                                        EN:[ "the corrupted Archangel"],
                                        ES:[ "el Arc&aacute;ngel corrompido" ]
                                    }
                                ]
                            },
                            questLabels:{
                                questVictory:QUESTVICTORY
                            },
                            tilesNeeded:{
                                IT:"Tenere da parte: <i>(da MD2: Hellscape)</i> <b>[A]8A</b>.",
                                EN:"Keep aside: <i>(from MD2: Hellscape)</i> <b>[A]8A</b>.",
                                ES:"Aparta: <i>(de MD2: Hellscape)</i> <b>[A]8A</b>."
                            },
                            labels:{
                                bossTiles:{
                                    IT:[ "Posizionate la Tessera [A]8A di Hellscape", "accanto alla Tessera appena posizionata"],
                                    EN:[ "Place the Hellscape Tile [A]8A", "next to the just placed tile" ],
                                    ES:[ "Coloca la Loseta de Hellscape [A]8A", "junto a la Loseta que acabas de colocar" ]
                                },
                                bossMode:HELLSCAPEMODE,
                                bossDashboardName:{
                                    IT:[ "Arcangelo Michele" ],
                                    EN:[ "Archangel Michael" ],
                                    ES:[ "Arc&aacute;ngel Miguel" ]
                                },
                                bossName:{
                                    IT:[ "Arcangelo Michele" ],
                                    EN:[ "Archangel Michael" ],
                                    ES:[ "Arc&aacute;ngel Miguel" ]
                                },
                                bossUnit:{
                                    IT:[ "Arcangelo Michele" ],
                                    EN:[ "Archangel Michael" ],
                                    ES:[ "Arc&aacute;ngel Miguel" ]
                                }
                            },
                            preparation:{
                                IT:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossMichaelPreparation@0}"+
                                    "<p>Se gli Eroi riescono a sconfiggerlo, l'Arcangelo {label.bossBeat@0} e la Missione termina con una vittoria.</p>",
                                EN:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossMichaelPreparation@0}"+
                                    "<p>If the Heroes manage to defeat the Archangel, {label.bossBeat@0} and the Quest ends with a victory.</p>",
                                    ES:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossMichaelPreparation@0}"+"<p>Si los H&eacute;roes logran derrotar al Arc&aacute;ngel, {label.bossBeat@0} y la Misi&oacute;n termina con una victoria.</p>"
                            }
                        },{
                            levels:{
                                3:{
                                    labels:{
                                        bossHealth:{ EN:15 },
                                        bossModifier:BOSSMODIFIER,
                                        bossPhase2Health:{ EN:20 },
                                        bossPhase2Modifier:BOSSPHASE2MODIFIER
                                    }
                                },
                                4:{
                                    labels:{
                                        bossHealth:{ EN:15 },
                                        bossModifier:BOSSMODIFIER,
                                        bossPhase2Health:{ EN:30 },
                                        bossPhase2Modifier:BOSSPHASE2MODIFIER
                                    }
                                }
                            },
                            campaign:BASEDOUBLEPHASEBOSSCAMPAIGN,
                            tags:[ "michael" ],
                            title:{
                                IT:"Scontro con il Boss: Arcangelo Michele Infuriato",
                                EN:"Boss Fight: Enraged Archangel Michael",
                                ES:"Combate contra el Jefe: Arc&aacute;ngel Miguel Enfurecido",
                            },
                            randomLabels:{
                                bossBadName:[
                                    {
                                        IT:[ "l'Arcangelo corrotto" ],
                                        EN:[ "the corrupted Archangel"],
                                        ES:[ "el Arc&aacute;ngel corrompido" ]
                                    }
                                ]
                            },
                            questLabels:{
                                questVictory:QUESTVICTORY
                            },
                            tilesNeeded:{
                                IT:"Tenere da parte: <i>(da MD2: Hellscape)</i> <b>[A]8A</b>.",
                                EN:"Keep aside: <i>(from MD2: Hellscape)</i> <b>[A]8A</b>.",
                                ES:"Aparta: <i>(de MD2: Hellscape)</i> <b>[A]8A</b>."
                            },
                            labels:{
                                bossTiles:{
                                    IT:[ "Posizionate la Tessera [A]8A di Hellscape", "accanto alla Tessera appena posizionata"],
                                    EN:[ "Place the Hellscape Tile [A]8A", "next to the just placed tile" ],
                                    ES:[ "Coloca la Loseta de Hellscape [A]8A", "junto a la Loseta que acabas de colocar" ]
                                },
                                bossMode:HELLSCAPEMODE,
                                bossDashboardName:{
                                    IT:[ "Arcangelo Michele" ],
                                    EN:[ "Archangel Michael" ],
                                    ES:[ "Arc&aacute;ngel Miguel" ]
                                },
                                bossName:{
                                    IT:[ "Arcangelo Michele" ],
                                    EN:[ "Archangel Michael" ],
                                    ES:[ "Arc&aacute;ngel Miguel" ]
                                },
                                bossUnit:{
                                    IT:[ "Arcangelo Michele" ],
                                    EN:[ "Archangel Michael" ],
                                    ES:[ "Arc&aacute;ngel Miguel" ]
                                }
                            },
                            preparation:{
                                IT:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossMichaelPreparation@0}"+
                                    "<p>Se gli Eroi riescono a sconfiggere l'Arcangelo, {boss.bossPhase2Preparation}.{boss.bossPhase2Modifier@0}</p>"+
                                    "<p>Se gli Eroi riescono a sconfiggerlo una seconda volta, l'Arcangelo {label.bossBeat@0} e la Missione termina con una vittoria.</p>",
                                EN:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossMichaelPreparation@0}"+
                                    "<p>If the Heroes manage to defeat the Archangel, {boss.bossPhase2Preparation}.{boss.bossPhase2Modifier@0}</p>"+
                                    "<p>If the Heroes manage to defeat the Archangel a second time, {label.bossBeat@0} and the Quest ends with a victory.</p>",
                                    ES:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossMichaelPreparation@0}"+"<p>Si los H&eacute;roes logran derrotar al Arc&aacute;ngel, {boss.bossPhase2Preparation}.{boss.bossPhase2Modifier@0}</p>"+"<p>Si los H&eacute;roes logran derrotar al Arc&aacute;ngel por segunda vez, {label.bossBeat@0} y la Misi&oacute;n termina con una victoria.</p>"
                            }
                        },{
                            levels:BOSSLEVELS,
                            campaign:BASESINGLEPHASEBOSSCAMPAIGN,
                            tags:[ "reaper" ],
                            title:{
                                IT:"Scontro con il Boss: Il Mietitore",
                                EN:"Boss Fight: The Reaper",
                                ES:"Combate contra el Jefe: El Segador",
                            },
                            randomLabels:{
                                bossBadName:[
                                    {
                                        IT:[ "Il Mietitore" ],
                                        EN:[ "The Reaper"],
                                        ES:[ "El Segador" ]
                                    }
                                ]
                            },
                            questLabels:{
                                questVictory:QUESTVICTORY
                            },
                            tilesNeeded:{
                                IT:"Tenere da parte: <i>(da MD2: Hellscape)</i> <b>[A]8B</b>.",
                                EN:"Keep aside: <i>(from MD2: Hellscape)</i> <b>[A]8B</b>.",
                                ES:"Aparta: <i>(de MD2: Hellscape)</i> <b>[A]8B</b>."
                            },
                            labels:{
                                bossTiles:{
                                    IT:[ "Posizionate la Tessera [A]8B di Hellscape", "accanto alla Tessera appena posizionata" ],
                                    EN:[ "Place the Hellscape Tile [A]8B", "next to the just placed tile" ],
                                    ES:[ "Coloca la Loseta de Hellscape [A]8B", "junto a la Loseta que acabas de colocar" ]
                                },
                                bossMode:HELLSCAPEMODE,
                                bossDashboardName:{
                                    IT:[ "Il Mietitore" ],
                                    EN:[ "The Reaper" ],
                                    ES:[ "El Segador" ]
                                },
                                bossName:{
                                    IT:[ "Il Mietitore" ],
                                    EN:[ "The Reaper" ],
                                    ES:[ "El Segador" ]
                                },
                                bossUnit:{
                                    IT:[ "Il Mietitore" ],
                                    EN:[ "The Reaper" ],
                                    ES:[ "El Segador" ]
                                }
                            },
                            preparation:{
                                IT:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossReaperPreparation@0}"+
                                    "<p>Se gli Eroi riescono a sconfiggerlo, Il Mietitore {label.bossBeat@0} e la Missione termina con una vittoria.</p>",
                                EN:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossReaperPreparation@0}"+
                                    "<p>If the Heroes manage to defeat The Reaper, {label.bossBeat@0} and the Quest ends with a victory.</p>",
                                    ES:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossReaperPreparation@0}"+"<p>Si los H&eacute;roes logran derrotar a El Segador, {label.bossBeat@0} y la Misi&oacute;n termina con una victoria.</p>"
                            }
                        },{
                            levels:{
                                3:{
                                    labels:{
                                        bossHealth:{ EN:15 },
                                        bossModifier:BOSSMODIFIER,
                                        bossPhase2Health:{ EN:20 },
                                        bossPhase2Modifier:BOSSPHASE2MODIFIER
                                    }
                                },
                                4:{
                                    labels:{
                                        bossHealth:{ EN:15 },
                                        bossModifier:BOSSMODIFIER,
                                        bossPhase2Health:{ EN:30 },
                                        bossPhase2Modifier:BOSSPHASE2MODIFIER
                                    }
                                }
                            },
                            campaign:BASEDOUBLEPHASEBOSSCAMPAIGN,
                            tags:[ "reaper" ],
                            title:{
                                IT:"Scontro con il Boss: Il Mietitore Infuriato",
                                EN:"Boss Fight: The Enraged Reaper",
                                ES:"Combate contra el Jefe: El Segador Enfurecido",
                            },
                            randomLabels:{
                                bossBadName:[
                                    {
                                        IT:[ "Il Mietitore" ],
                                        EN:[ "The Reaper"],
                                        ES:[ "El Segador" ]
                                    }
                                ]
                            },
                            questLabels:{
                                questVictory:QUESTVICTORY
                            },
                            tilesNeeded:{
                                IT:"Tenere da parte: <i>(da MD2: Hellscape)</i> <b>[A]8B</b>.",
                                EN:"Keep aside: <i>(from MD2: Hellscape)</i> <b>[A]8B</b>.",
                                ES:"Aparta: <i>(de MD2: Hellscape)</i> <b>[A]8B</b>."
                            },
                            labels:{
                                bossTiles:{
                                    IT:[ "Posizionate la Tessera [A]8B di Hellscape", "accanto alla Tessera appena posizionata" ],
                                    EN:[ "Place the Hellscape Tile [A]8B", "next to the just placed tile" ],
                                    ES:[ "Coloca la Loseta de Hellscape [A]8B", "junto a la Loseta que acabas de colocar" ]
                                },
                                bossMode:HELLSCAPEMODE,
                                bossDashboardName:{
                                    IT:[ "Il Mietitore" ],
                                    EN:[ "The Reaper" ],
                                    ES:[ "El Segador" ]
                                },
                                bossName:{
                                    IT:[ "Il Mietitore" ],
                                    EN:[ "The Reaper" ],
                                    ES:[ "El Segador" ]
                                },
                                bossUnit:{
                                    IT:[ "Il Mietitore" ],
                                    EN:[ "The Reaper" ],
                                    ES:[ "El Segador" ]
                                }
                            },
                            preparation:{
                                IT:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossReaperPreparation@0}"+
                                    "<p>Se gli Eroi riescono a sconfiggere Il Mietitore, {boss.bossPhase2Preparation}.{boss.bossPhase2Modifier@0}</p>"+
                                    "<p>Se gli Eroi riescono a sconfiggerlo una seconda volta, Il Mietitore {label.bossBeat@0} e la Missione termina con una vittoria.</p>",
                                EN:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossReaperPreparation@0}"+
                                    "<p>If the Heroes manage to defeat the Reaper, {boss.bossPhase2Preparation}.{boss.bossPhase2Modifier@0}</p>"+
                                    "<p>If the Heroes manage to defeat the Reaper a second time, {label.bossBeat@0} and the Quest ends with a victory.</p>",
                                    ES:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossReaperPreparation@0}"+"<p>Si los H&eacute;roes logran derrotar a El Segador, {boss.bossPhase2Preparation}.{boss.bossPhase2Modifier@0}</p>"+"<p>Si los H&eacute;roes logran derrotar a El Segador por segunda vez, {label.bossBeat@0} y la Misi&oacute;n termina con una victoria.</p>"
                            }
                        }
                    ]
                }
            ]
        },{
            id:"boss",
            needs:[ "md2-heavenfall" ],
            provides:[ "boss" ],
            label:{
                EN:"Add MD2: Heavenfall boss fights."
            },
            content:[
                {
                    type:"bossList",
                    data:[
                        {
                            levels:{
                                1:{
                                    labels:{
                                        bossHealth:{ EN:15 },
                                        bossModifier:{
                                            IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossBaaalberithPlainMods@0}." ],
                                            EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossBaaalberithPlainMods@0}." ],
                                            ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossBaaalberithPlainMods@0}." ]
                                        }
                                    }
                                },
                                2:{
                                    labels:{
                                        bossHealth:{ EN:25 },
                                        bossModifier:{
                                            IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossBaaalberithPlainMods@0}." ],
                                            EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossBaaalberithPlainMods@0}." ],
                                            ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossBaaalberithPlainMods@0}." ]
                                        }
                                    }
                                },
                                3:{
                                    labels:{
                                        bossHealth:{ EN:35 },
                                        bossModifier:{
                                            IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossBaaalberithPlainMods@0}." ],
                                            EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossBaaalberithPlainMods@0}." ],
                                            ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossBaaalberithPlainMods@0}." ]
                                        }
                                    }
                                },
                                4:{
                                    labels:{
                                        bossHealth:{ EN:45 },
                                        bossModifier:{
                                            IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossBaaalberithPlainMods@0}." ],
                                            EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossBaaalberithPlainMods@0}." ],
                                            ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossBaaalberithPlainMods@0}." ]
                                        }
                                    }
                                }
                            },
                            campaign:ADVANCEDSINGLEPHASEBOSSCAMPAIGN,
                            tags:[ "baalberith" ],
                            title:{
                                IT:"Scontro con il Boss: Baalberith Alpha",
                                EN:"Boss Fight: Baalberith Alpha",
                                ES:"Combate contra el Jefe: Baalberith Alfa",
                            },
                            randomLabels:{
                                bossBadName:[
                                    {
                                        IT:[ "Baalberith" ],
                                        EN:[ "Baalberith"],
                                        ES:[ "Baalberith" ]
                                    }
                                ]
                            },
                            questLabels:{
                                questVictory:QUESTVICTORY
                            },
                            tilesNeeded:{
                                IT:"Tenere da parte: <i>(da MD2: Heavenfall)</i> <b>[B]4A</b>, <b>[B]4B</b> .",
                                EN:"Keep aside: <i>(from MD2: Heavenfall)</i> <b>[B]4A</b>, <b>[B]4B</b>.",
                                ES:"Aparta: <i>(de MD2: Heavenfall)</i> <b>[B]4A</b>, <b>[B]4B</b>."
                            },
                            labels:{
                                bossTiles:{
                                    IT:[ "Affiancate le Tessere [B]4A e [B]4B di Heavenfall formando il disegno di un ramo", "accanto alle Tessere appena affiancate"],
                                    EN:[ "Place the [B]4A and [B]4B Heavenfall Tiles side by side to form a branch image", "next to the Tiles you just placed side by side"],
                                    ES:[ "Coloca las Losetas de Heavenfall [B]4A y [B]4B una junto a la otra para formar la imagen de una rama", "junto a las Losetas que acabas de colocar una junto a la otra" ],
                                },
                                bossMode:{
                                    IT:[ " (Lato Iniziale)" ],
                                    EN:[ " (Initial Side)" ],
                                    ES:[ " (Lado Inicial)" ]
                                },
                                bossDashboardName:{
                                    IT:[ "Baalberith" ],
                                    EN:[ "Baalberith" ],
                                    ES:[ "Baalberith" ]
                                },
                                bossName:{
                                    IT:[ "Baalberith" ],
                                    EN:[ "Baalberith" ],
                                    ES:[ "Baalberith" ]
                                },
                                bossUnit:{
                                    IT:[ "Baalberith" ],
                                    EN:[ "Baalberith" ],
                                    ES:[ "Baalberith" ]
                                }
                            },
                            preparation:{
                                IT:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossBaalberithPreparation@0}"+
                                    "<p>Se gli Eroi riescono a infliggere abbastanza Ferite da uccidere, Baalberith <b>non viene girato sul lato Infuriato</b>, {label.bossBeat@0} e la Missione termina con una vittoria.</p>",
                                EN:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossBaalberithPreparation@0}"+
                                    "<p>If the Heroes deal enough Wounds to kill Baalberith <b>it's not flipped on the Enraged side</b>: {label.bossBeat@0} and the Quest ends with a victory.</p>",
                                    ES:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossBaalberithPreparation@0}"+"<p>Si los H&eacute;roes infligen suficientes Heridas para matar a Baalberith <b>y no se voltea a su lado Enfurecido</b>: {label.bossBeat@0} y la Misi&oacute;n termina con una victoria.</p>"
                            }
                        },{
                            levels:{
                                1:{
                                    labels:{
                                        bossHealth:{ EN:15 },
                                        bossModifier:{
                                            IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossBaaalberithEnragedPlainMods@0}." ],
                                            EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossBaaalberithEnragedPlainMods@0}." ],
                                            ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossBaaalberithEnragedPlainMods@0}." ]
                                        }
                                    }
                                },
                                2:{
                                    labels:{
                                        bossHealth:{ EN:25 },
                                        bossModifier:{
                                            IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossBaaalberithEnragedPlainMods@0}." ],
                                            EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossBaaalberithEnragedPlainMods@0}." ],
                                            ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossBaaalberithEnragedPlainMods@0}." ]
                                        }
                                    }
                                },
                                3:{
                                    labels:{
                                        bossHealth:{ EN:35 },
                                        bossModifier:{
                                            IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossBaaalberithEnragedPlainMods@0}." ],
                                            EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossBaaalberithEnragedPlainMods@0}." ],
                                            ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossBaaalberithEnragedPlainMods@0}." ]
                                        }
                                    }
                                },
                                4:{
                                    labels:{
                                        bossHealth:{ EN:45 },
                                        bossModifier:{
                                            IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossBaaalberithEnragedPlainMods@0}." ],
                                            EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossBaaalberithEnragedPlainMods@0}." ],
                                            ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossBaaalberithEnragedPlainMods@0}." ]
                                        }
                                    }
                                }
                            },
                            tags:[ "baalberith" ],
                            campaign:ADVANCEDSINGLEPHASEBOSSCAMPAIGN,
                            title:{
                                IT:"Scontro con il Boss: Baalberith Infuriato",
                                EN:"Boss Fight: Enraged Baalberith",
                                ES:"Combate contra el Jefe: Baalberith Enfurecido",
                            },
                            randomLabels:{
                                bossBadName:[
                                    {
                                        IT:[ "Baalberith" ],
                                        EN:[ "Baalberith"],
                                        ES:[ "Baalberith" ]
                                    }
                                ]
                            },
                            questLabels:{
                                questVictory:QUESTVICTORY
                            },
                            tilesNeeded:{
                                IT:"Tenere da parte: <i>(da MD2: Heavenfall)</i> <b>[B]4A</b>, <b>[B]4B</b> .",
                                EN:"Keep aside: <i>(from MD2: Heavenfall)</i> <b>[B]4A</b>, <b>[B]4B</b>.",
                                ES:"Aparta: <i>(de MD2: Heavenfall)</i> <b>[B]4A</b>, <b>[B]4B</b>."
                            },
                            labels:{
                                bossTiles:{
                                    IT:[ "Affiancate le Tessere [B]4A e [B]4B di Heavenfall formando il disegno di un ramo", "accanto alle Tessere appena affiancate"],
                                    EN:[ "Place the [B]4A and [B]4B Heavenfall Tiles side by side to form a branch image", "next to the Tiles you just placed side by side"],
                                    ES:[ "Coloca las Losetas de Heavenfall [B]4A y [B]4B una junto a la otra para formar la imagen de una rama", "junto a las Losetas que acabas de colocar una junto a la otra" ],
                                },
                                bossMode:{
                                    IT:[ " (Lato Infuriato)" ],
                                    EN:[ " (Enraged Side)" ],
                                    ES:[ " (Lado Enfurecido)" ]
                                },
                                bossDashboardName:{
                                    IT:[ "Baalberith" ],
                                    EN:[ "Baalberith" ],
                                    ES:[ "Baalberith" ]
                                },
                                bossName:{
                                    IT:[ "Baalberith" ],
                                    EN:[ "Baalberith" ],
                                    ES:[ "Baalberith" ]
                                },
                                bossUnit:{
                                    IT:[ "Baalberith" ],
                                    EN:[ "Baalberith" ],
                                    ES:[ "Baalberith" ]
                                }
                            },
                            preparation:{
                                IT:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossBaalberithEnragedPreparation@0}"+
                                    "<p>Se gli Eroi riescono a sconfiggerlo, Baalberith {label.bossBeat@0} e la Missione termina con una vittoria.</p>",
                                EN:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossBaalberithEnragedPreparation@0}"+
                                    "<p>If the Heroes manage to defeat Baalberith, {label.bossBeat@0} and the Quest ends with a victory.</p>",
                                    ES:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossBaalberithEnragedPreparation@0}"+"<p>Si los H&eacute;roes logran derrotar a Baalberith, {label.bossBeat@0} y la Misi&oacute;n termina con una victoria.</p>"
                            }
                        },{
                            levels:{
                                3:{
                                    labels:{
                                        bossHealth:{ EN:10 },
                                        bossModifier:{
                                            IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossBaaalberithPlainMods@0}." ],
                                            EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossBaaalberithPlainMods@0}." ],
                                            ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossBaaalberithPlainMods@0}." ]
                                        },
                                        bossPhase2Health:{ EN:25 },
                                        bossPhase2Modifier:{
                                            IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossPhase2Health} PV per Eroe, {boss.bossBaaalberithEnragedPlainMods@0}." ],
                                            EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossPhase2Health} HP per Hero, {boss.bossBaaalberithEnragedPlainMods@0}." ],
                                            ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossPhase2Health} PV por H&eacute;roe, {boss.bossBaaalberithEnragedPlainMods@0}." ]
                                        }
                                    }
                                },
                                4:{
                                    labels:{
                                        bossHealth:{ EN:15 },
                                        bossModifier:{
                                            IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossBaaalberithPlainMods@0}." ],
                                            EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossBaaalberithPlainMods@0}." ],
                                            ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossBaaalberithPlainMods@0}." ]
                                        },
                                        bossPhase2Health:{ EN:30 },
                                        bossPhase2Modifier:{
                                            IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossPhase2Health} PV per Eroe, {boss.bossBaaalberithEnragedPlainMods@0}." ],
                                            EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossPhase2Health} HP per Hero, {boss.bossBaaalberithEnragedPlainMods@0}." ],
                                            ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossPhase2Health} PV por H&eacute;roe, {boss.bossBaaalberithEnragedPlainMods@0}." ]
                                        }
                                    }
                                }
                            },
                            campaign:ADVANCEDDOUBLEPHASEBOSSCAMPAIGN,
                            tags:[ "baalberith" ],
                            title:{
                                IT:"Scontro con il Boss: Baalberith",
                                EN:"Boss Fight: Baalberith",
                                ES:"Combate contra el Jefe: Baalberith",
                            },
                            randomLabels:{
                                bossBadName:[
                                    {
                                        IT:[ "Baalberith" ],
                                        EN:[ "Baalberith"],
                                        ES:[ "Baalberith" ]
                                    }
                                ]
                            },
                            questLabels:{
                                questVictory:QUESTVICTORY
                            },
                            tilesNeeded:{
                                IT:"Tenere da parte: <i>(da MD2: Heavenfall)</i> <b>[B]4A</b>, <b>[B]4B</b> .",
                                EN:"Keep aside: <i>(from MD2: Heavenfall)</i> <b>[B]4A</b>, <b>[B]4B</b>.",
                                ES:"Aparta: <i>(de MD2: Heavenfall)</i> <b>[B]4A</b>, <b>[B]4B</b>."
                            },
                            labels:{
                                bossTiles:{
                                    IT:[ "Affiancate le Tessere [B]4A e [B]4B di Heavenfall formando il disegno di un ramo", "accanto alle Tessere appena affiancate"],
                                    EN:[ "Place the [B]4A and [B]4B Heavenfall Tiles side by side to form a branch image", "next to the Tiles you just placed side by side"],
                                    ES:[ "Coloca las Losetas de Heavenfall [B]4A y [B]4B una junto a la otra para formar la imagen de una rama", "junto a las Losetas que acabas de colocar una junto a la otra" ],
                                },
                                bossMode:{
                                    IT:[ " (Lato Iniziale)" ],
                                    EN:[ " (Initial Side)" ],
                                    ES:[ " (Lado Inicial)" ]
                                },
                                bossDashboardName:{
                                    IT:[ "Baalberith" ],
                                    EN:[ "Baalberith" ],
                                    ES:[ "Baalberith" ]
                                },
                                bossName:{
                                    IT:[ "Baalberith" ],
                                    EN:[ "Baalberith" ],
                                    ES:[ "Baalberith" ]
                                },
                                bossUnit:{
                                    IT:[ "Baalberith" ],
                                    EN:[ "Baalberith" ],
                                    ES:[ "Baalberith" ]
                                }
                            },
                            preparation:{
                                IT:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossBaalberithPreparation@0}"+
                                    "<p>Se gli Eroi riescono a infliggere abbastanza Ferite da uccidere, Baalberith viene girato sul lato Infuriato secondo le regole della sezione Scontro con il Boss della missione <b>Il Duca dell'Inferno</b> nel manuale di Heavenfall.{boss.bossPhase2Modifier@0}</p>"+
                                    "<p>Se gli Eroi riescono a sconfiggerlo, Baalberith {label.bossBeat@0} e la Missione termina con una vittoria.</p>",
                                EN:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossBaalberithPreparation@0}"+
                                    "<p>If the Heroes deal enough Wounds to kill Baalberith it is flipped on the Enraged side following the rules described in the Boss Fight section of the <b>Duke of Hell</b> quest in the Heavenfall rulebook.{boss.bossPhase2Modifier@0}</p>"+
                                    "<p>If the Heroes manage to defeat Baalberith, {label.bossBeat@0} and the Quest ends with a victory.</p>",
                                    ES:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossBaalberithPreparation@0}"+"<p>Si los H&eacute;roes infligen suficientes Heridas para matar a Baalberith, se voltea a su lado Enfurecido siguiendo las reglas descritas en la secci&oacute;n de Combate contra el Jefe de la misi&oacute;n <b>El Duque del Infierno</b> del manual de Heavenfall.{boss.bossPhase2Modifier@0}</p>"+"<p>Si los H&eacute;roes logran derrotar a Baalberith, {label.bossBeat@0} y la Misi&oacute;n termina con una victoria.</p>"
                            }
                        }
                    ]
                }
            ]
        },
        {
            id:"boss",
            needs:[ "campaign-upgradepack", "campaign-upgradepack-cyclopsduo" ],
            provides:[ "boss" ],
            label:{
                EN:"Add MD2: Upgrade pack Cyclops Duo boss fight."
            },
            content:[
                {
                    type:"bossList",
                    data:[
                        {
                            levels:DUOBOSSLEVELS,
                            campaign:[
                                { at:PLAINAT },
                                {
                                    at:WEAKAT,
                                    mods:{
                                        labelsBonus:SINGLEPHASEDUOBOSSWEAK[0]
                                    }
                                },
                                {
                                    at:BOSSAT[0],
                                    mods:{
                                        labelsBonus:SINGLEPHASEDUOBOSSBONUS[0],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossCyclopsDuoHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossCyclopsDuoHardMods@0}." ],
                                                ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossCyclopsDuoHardMods@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[1],
                                    mods:{
                                        labelsBonus:SINGLEPHASEDUOBOSSBONUS[1],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossCyclopsDuoHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossCyclopsDuoHardMods@0}." ],
                                                ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossCyclopsDuoHardMods@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[2],
                                    mods:{
                                        labelsBonus:SINGLEPHASEDUOBOSSBONUS[2],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossCyclopsDuoHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossCyclopsDuoHardMods@0}." ],
                                                ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossCyclopsDuoHardMods@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[3],
                                    mods:{
                                        labelsBonus:SINGLEPHASEDUOBOSSBONUS[3],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossCyclopsDuoHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossCyclopsDuoHardMods@0}." ],
                                                ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossCyclopsDuoHardMods@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[4],
                                    mods:{
                                        labelsBonus:SINGLEPHASEDUOBOSSBONUS[4],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossCyclopsDuoHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossCyclopsDuoHardMods@0}." ],
                                                ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossCyclopsDuoHardMods@0}." ]
                                            }
                                        }
                                    }
                                }
                            ],
                            tags:[ "cyclopsduo" ],
                            title:{
                                IT:"Scontro con il Boss: Duo di Ciclopi",
                                EN:"Boss Fight: Cyclops Duo",
                                ES:"Combate contra el Jefe: D&uacute;o de C&iacute;clopes",
                            },
                            components:2,
                            randomLabels:{
                                bossBadName:[
                                    {
                                        IT:[ "il Duo di Ciclopi" ],
                                        EN:[ "the Cyclops Duo"],
                                        ES:[ "el D&uacute;o de C&iacute;clopes" ]
                                    }
                                ]
                            },
                            questLabels:{
                                questVictory:QUESTVICTORY
                            },
                            tilesNeeded:{
                                IT:"Tenere da parte: <i>(da MD1)</i> <b>2V</b> e <b>4V</b>.",
                                EN:"Keep aside: <i>(from MD1)</i> <b>2V</b> and <b>4V</b>.",
                                ES:"Aparta: <i>(de MD1)</i> <b>2V</b> y <b>4V</b>."
                            },
                            labels:{

                                IT:[
                                    "<p>Questo Boss segue le regole descritte nella sezione Scontro con il Boss della missione <b>Doppio Problema</b> del manuale di Massive Darkness 2: Pack di Aggiornamento.</p>"
                                ],
                                EN:[
                                    "<p>This Boss follows the rules described in the Boss Fight section of the <b>Double Trouble</b> quest of the Massive Darkness 2: Upgrade Pack rulebook.</p>"
                                ],
                                ES:[ "<p>Este Jefe sigue las reglas descritas en la secci&oacute;n de Combate contra el Jefe de la misi&oacute;n <b>Doble Problema</b> del manual de Massive Darkness 2: Pack de Mejora.</p>" ],
                                bossTiles:{
                                    IT:[ "Posizionate le Tessere 2V e 4V di Massive Darkness 1 ed i segnalini su di esse seguendo le indicazioni della missione <b>Doppio Problema</b> nel manuale di Massive Darkness 2: Pack di Aggiornamento", "accanto alla Tessere appena posizionate"],
                                    EN:[ "Place the Massive Darkness 1 Tiles 2V and 4V and the tokens on them following the instructions in the <b>Double Trouble</b> mission of the Massive Darkness 2: Upgrade Pack manual", "next to the just placed tiles" ],
                                    ES:[ "Coloca las Losetas 2V y 4V de Massive Darkness 1 y los marcadores que llevan encima siguiendo las instrucciones de la misi&oacute;n <b>Doble Problema</b> del manual de Massive Darkness 2: Pack de Mejora", "junto a las Losetas que acabas de colocar" ]
                                },
                                bossDashboardName:{
                                    IT:[ "Duo di Ciclopi" ],
                                    EN:[ "Cyclops Duo" ],
                                    ES:[ "D&uacute;o de C&iacute;clopes" ]
                                },
                                bossName:{
                                    IT:[ "il Duo di Ciclopi" ],
                                    EN:[ "the Cyclops Duo" ],
                                    ES:[ "el D&uacute;o de C&iacute;clopes" ]
                                },
                                bossUnit:{
                                    IT:[ "ogni Ciclope" ],
                                    EN:[ "each Cyclops" ],
                                    ES:[ "cada C&iacute;clope" ]
                                }
                            },
                            preparation:{
                                IT:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossCyclopsDuoPreparation@0}"+
                                    "<p>Se gli Eroi riescono a sconfiggerlo, il duo {label.bossBeat@0} e la Missione termina con una vittoria.</p>",
                                EN:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossCyclopsDuoPreparation@0}"+
                                    "<p>If the Heroes manage to defeat the duo, {label.bossBeat@0} and the Quest ends with a victory.</p>",
                                    ES:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossCyclopsDuoPreparation@0}"+"<p>Si los H&eacute;roes logran derrotar al d&uacute;o, {label.bossBeat@0} y la Misi&oacute;n termina con una victoria.</p>"
                            }
                        }
                    ]
                }
            ]
        },
        {
            id:"boss",
            needs:[ "campaign-upgradepack", "campaign-upgradepack-hellephant" ],
            provides:[ "boss" ],
            label:{
                EN:"Add MD2: Upgrade pack Hellephant boss fight."
            },
            content:[
                {
                    type:"bossList",
                    data:[
                        {
                            levels:STRONGERBOSSLEVELS,
                            campaign:[
                                { at:PLAINAT },
                                {
                                    at:WEAKAT,
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSWEAK[0]
                                    }
                                },
                                {
                                    at:BOSSAT[0],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[0],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossHellephantHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossHellephantHardMods@0}." ],
                                                ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossHellephantHardMods@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[1],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[1],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossHellephantHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossHellephantHardMods@0}." ],
                                                ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossHellephantHardMods@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[2],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[2],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossHellephantHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossHellephantHardMods@0}." ],
                                                ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossHellephantHardMods@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[3],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[3],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossHellephantHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossHellephantHardMods@0}." ],
                                                ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossHellephantHardMods@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[4],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[4],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossHellephantHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossHellephantHardMods@0}." ],
                                                ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossHellephantHardMods@0}." ]
                                            }
                                        }
                                    }
                                }
                            ],
                            tags:[ "hellephant" ],
                            title:{
                                IT:"Scontro con il Boss: Hellephant",
                                EN:"Boss Fight: Hellephant",
                                ES:"Combate contra el Jefe: Hellephant",
                            },
                            randomLabels:{
                                bossBadName:[
                                    {
                                        IT:[ "l'Hellephant" ],
                                        EN:[ "the Hellephant"],
                                        ES:[ "el Hellephant" ]
                                    }
                                ]
                            },
                            questLabels:{
                                questVictory:QUESTVICTORY
                            },
                            tilesNeeded:{
                                IT:"Tenere da parte: <i>(da MD2: Hellscape)</i> <b>[A]8A</b>.",
                                EN:"Keep aside: <i>(from MD2: Hellscape)</i> <b>[A]8A</b>.",
                                ES:"Aparta: <i>(de MD2: Hellscape)</i> <b>[A]8A</b>."
                            },
                            labels:{
                                bossTiles:{
                                    IT:[ "Posizionate la Tessera [A]8A di Hellscape", "accanto alla Tessera appena posizionata"],
                                    EN:[ "Place the Hellscape Tile [A]8A", "next to the just placed tile" ],
                                    ES:[ "Coloca la Loseta de Hellscape [A]8A", "junto a la Loseta que acabas de colocar" ]
                                },
                                bossDashboardName:{
                                    IT:[ "Hellephant" ],
                                    EN:[ "Hellephant" ],
                                    ES:[ "Hellephant" ]
                                },
                                bossName:{
                                    IT:[ "Hellephant" ],
                                    EN:[ "Hellephant" ],
                                    ES:[ "Hellephant" ]
                                },
                                bossUnit:{
                                    IT:[ "Hellephant" ],
                                    EN:[ "Hellephant" ],
                                    ES:[ "Hellephant" ]
                                }
                            },
                            preparation:{
                                IT:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroHellephantPreparation}{boss.bossHellephantPreparation@0}"+
                                    "<p>Se gli Eroi riescono a sconfiggerlo, l'Hellephant {label.bossBeat@0} e la Missione termina con una vittoria.</p>",
                                EN:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroHellephantPreparation}{boss.bossHellephantPreparation@0}"+
                                    "<p>If the Heroes manage to defeat the Hellephant, {label.bossBeat@0} and the Quest ends with a victory.</p>",
                                    ES:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroHellephantPreparation}{boss.bossHellephantPreparation@0}"+"<p>Si los H&eacute;roes logran derrotar al Hellephant, {label.bossBeat@0} y la Misi&oacute;n termina con una victoria.</p>"
                            }
                        },
                        {
                            levels:{
                                3:{
                                    labels:{
                                        bossHealth:{ EN:20 },
                                        bossModifier:BOSSMODIFIER,
                                        bossPhase2Health:{ EN:25 },
                                        bossPhase2Modifier:BOSSPHASE2MODIFIER
                                    }
                                },
                                4:{
                                    labels:{
                                        bossHealth:{ EN:25 },
                                        bossModifier:BOSSMODIFIER,
                                        bossPhase2Health:{ EN:25 },
                                        bossPhase2Modifier:BOSSPHASE2MODIFIER
                                    }
                                }
                            },
                            campaign:[
                                { at:PLAINAT },
                                {
                                    at:WEAKAT,
                                    mods:{
                                        labelsBonus:DOUBLEPHASEBOSSWEAK[0]
                                    }
                                },
                                {
                                    at:BOSSAT[0],
                                    mods:{
                                        labelsBonus:DOUBLEPHASEBOSSBONUS[0],
                                        labels:{
                                            bossPhase2Modifier:BOSSPHASE2MODIFIER,
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossHellephantHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossHellephantHardMods@0}." ],
                                                ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossHellephantHardMods@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[1],
                                    mods:{
                                        labelsBonus:DOUBLEPHASEBOSSBONUS[1],
                                        labels:{
                                            bossPhase2Modifier:BOSSPHASE2MODIFIER,
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossHellephantHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossHellephantHardMods@0}." ],
                                                ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossHellephantHardMods@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[2],
                                    mods:{
                                        labelsBonus:DOUBLEPHASEBOSSBONUS[2],
                                        labels:{
                                            bossPhase2Modifier:BOSSPHASE2MODIFIER,
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossHellephantHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossHellephantHardMods@0}." ],
                                                ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossHellephantHardMods@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[3],
                                    mods:{
                                        labelsBonus:DOUBLEPHASEBOSSBONUS[3],
                                        labels:{
                                            bossPhase2Modifier:BOSSPHASE2MODIFIER,
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossHellephantHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossHellephantHardMods@0}." ],
                                                ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossHellephantHardMods@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[4],
                                    mods:{
                                        labelsBonus:DOUBLEPHASEBOSSBONUS[4],
                                        labels:{
                                            bossPhase2Modifier:BOSSPHASE2MODIFIER,
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossHellephantHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossHellephantHardMods@0}." ],
                                                ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossHellephantHardMods@0}." ]
                                            }
                                        }
                                    }
                                }
                            ],
                            tags:[ "hellephant" ],
                            title:{
                                IT:"Scontro con il Boss: Hellephant Infuriato",
                                EN:"Boss Fight: Enraged Hellephant",
                                ES:"Combate contra el Jefe: Hellephant Enfurecido",
                            },
                            randomLabels:{
                                bossBadName:[
                                    {
                                        IT:[ "l'Hellephant" ],
                                        EN:[ "the Hellephant"],
                                        ES:[ "el Hellephant" ]
                                    }
                                ]
                            },
                            questLabels:{
                                questVictory:QUESTVICTORY
                            },
                            tilesNeeded:{
                                IT:"Tenere da parte: <i>(da MD2: Hellscape)</i> <b>[A]8A</b>.",
                                EN:"Keep aside: <i>(from MD2: Hellscape)</i> <b>[A]8A</b>.",
                                ES:"Aparta: <i>(de MD2: Hellscape)</i> <b>[A]8A</b>."
                            },
                            labels:{
                                bossTiles:{
                                    IT:[ "Posizionate la Tessera [A]8A di Hellscape", "accanto alla Tessera appena posizionata"],
                                    EN:[ "Place the Hellscape Tile [A]8A", "next to the just placed tile" ],
                                    ES:[ "Coloca la Loseta de Hellscape [A]8A", "junto a la Loseta que acabas de colocar" ]
                                },
                                bossDashboardName:{
                                    IT:[ "Hellephant" ],
                                    EN:[ "Hellephant" ],
                                    ES:[ "Hellephant" ]
                                },
                                bossName:{
                                    IT:[ "Hellephant" ],
                                    EN:[ "Hellephant" ],
                                    ES:[ "Hellephant" ]
                                },
                                bossUnit:{
                                    IT:[ "Hellephant" ],
                                    EN:[ "Hellephant" ],
                                    ES:[ "Hellephant" ]
                                }
                            },
                            preparation:{
                                IT:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroHellephantPreparation}{boss.bossHellephantPreparation@0}"+
                                    "<p>Se gli Eroi riescono a sconfiggere l'Hellephant, {boss.bossPhase2Preparation}.{boss.bossPhase2Modifier@0}</p>"+
                                    "<p>Se gli Eroi riescono a sconfiggerlo una seconda volta, l'Hellephant {label.bossBeat@0} e la Missione termina con una vittoria.</p>",
                                EN:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroHellephantPreparation}{boss.bossHellephantPreparation@0}"+
                                    "<p>If the Heroes manage to defeat the Hellephant, {boss.bossPhase2Preparation}.{boss.bossPhase2Modifier@0}</p>"+
                                    "<p>If the Heroes manage to defeat the Hellephant a second time, {label.bossBeat@0} and the Quest ends with a victory.</p>",
                                    ES:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroHellephantPreparation}{boss.bossHellephantPreparation@0}"+"<p>Si los H&eacute;roes logran derrotar al Hellephant, {boss.bossPhase2Preparation}.{boss.bossPhase2Modifier@0}</p>"+"<p>Si los H&eacute;roes logran derrotar al Hellephant por segunda vez, {label.bossBeat@0} y la Misi&oacute;n termina con una victoria.</p>"
                            }
                        }
                    ]
                }
            ]
        },
        {
            id:"boss",
            needs:[ "campaign-upgradepack" ],
            provides:[ "boss" ],
            label:{
                EN:"Add MD2: Upgrade pack MD1 boss fights."
            },
            content:[
                {
                    type:"bossList",
                    data:[
                        
                        {
                            levels:{
                                1:{
                                    labels:{
                                        bossHealth:{ EN:15 },
                                        bossModifier:{
                                            IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                            EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                            ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossAbyssalDemonOneShotMod@0}." ]
                                        }
                                    }
                                },
                                2:{
                                    labels:{
                                        bossHealth:{ EN:25 },
                                        bossModifier:{
                                            IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                            EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                            ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossAbyssalDemonOneShotMod@0}." ]
                                        }
                                    }
                                },
                                3:{
                                    labels:{
                                        bossHealth:{ EN:35 },
                                        bossModifier:{
                                            IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                            EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                            ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossAbyssalDemonOneShotMod@0}." ]
                                        }
                                    }
                                },
                                4:{
                                    labels:{
                                        bossHealth:{ EN:45 },
                                        bossModifier:{
                                            IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                            EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                            ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossAbyssalDemonOneShotMod@0}." ]
                                        }
                                    }
                                }
                            },
                            campaign:[
                                {
                                    at:PLAINAT,
                                    mods:{
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonCampaignMod@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonCampaignMod@0}." ],
                                                ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossAbyssalDemonCampaignMod@0}." ]
                                            }
                                        }
                                    }
                                },
                                {
                                    at:WEAKAT,
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSWEAK[0],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonCampaignMod@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonCampaignMod@0}." ],
                                                ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossAbyssalDemonCampaignMod@0}." ]
                                            }
                                        }
                                    }
                                },
                                {
                                    at:BOSSAT[0],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[0],
                                        labels:{
                                            bossMode:CAMPAIGNMODE,
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonCampaignMod@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonCampaignMod@0}." ],
                                                ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossAbyssalDemonCampaignMod@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[1],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[1],
                                        labels:{
                                            bossMode:CAMPAIGNMODE,
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonCampaignMod@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonCampaignMod@0}." ],
                                                ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossAbyssalDemonCampaignMod@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[2],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[2],
                                        labels:{
                                            bossMode:CAMPAIGNMODE,
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonCampaignMod@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonCampaignMod@0}." ],
                                                ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossAbyssalDemonCampaignMod@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[3],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[3],
                                        labels:{
                                            bossMode:CAMPAIGNMODE,
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonCampaignMod@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonCampaignMod@0}." ],
                                                ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossAbyssalDemonCampaignMod@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[4],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[4],
                                        labels:{
                                            bossMode:CAMPAIGNMODE,
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonCampaignMod@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonCampaignMod@0}." ],
                                                ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossAbyssalDemonCampaignMod@0}." ]
                                            }
                                        }
                                    }
                                }
                            ],
                            tags:[ "abyssaldemon" ],
                            title:{
                                IT:"Scontro con il Boss: Emissario Oscuro",
                                EN:"Boss Fight: Abyssal Demon",
                                ES:"Combate contra el Jefe: Demonio Abisal",
                            },
                            randomLabels:{
                                bossBadName:[
                                    {
                                        IT:[ "l'Emissario Oscuro" ],
                                        EN:[ "the Abyssal Demon"],
                                        ES:[ "el Demonio Abisal" ]
                                    }
                                ]
                            },
                            questLabels:{
                                questVictory:QUESTVICTORY
                            },
                            tilesNeeded:{
                                IT:"Tenere da parte: <i>(da MD2: Hellscape)</i> <b>[A]8A</b>.",
                                EN:"Keep aside: <i>(from MD2: Hellscape)</i> <b>[A]8A</b>.",
                                ES:"Aparta: <i>(de MD2: Hellscape)</i> <b>[A]8A</b>."
                            },
                            labels:{
                                bossTiles:{
                                    IT:[ "Posizionate la Tessera [A]8A di Hellscape", "accanto alla Tessera appena posizionata"],
                                    EN:[ "Place the Hellscape Tile [A]8A", "next to the just placed tile" ],
                                    ES:[ "Coloca la Loseta de Hellscape [A]8A", "junto a la Loseta que acabas de colocar" ]
                                },
                                bossMode:ONESHOTMODE,
                                bossDashboardName:{
                                    IT:[ "Emissario Oscuro" ],
                                    EN:[ "Abyssal Demon" ],
                                    ES:[ "Demonio Abisal" ]
                                },
                                bossName:{
                                    IT:[ "Emissario Oscuro" ],
                                    EN:[ "Abyssal Demon" ],
                                    ES:[ "Demonio Abisal" ]
                                },
                                bossUnit:{
                                    IT:[ "Emissario Oscuro" ],
                                    EN:[ "Abyssal Demon" ],
                                    ES:[ "Demonio Abisal" ]
                                }
                            },
                            preparation:{
                                IT:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossAbyssalDemonPreparation@0}"+
                                    "<p>Se gli Eroi riescono a scacciarlo, l'Emissario Oscuro {label.bossBeat@0} e la Missione termina con una vittoria.</p>",
                                EN:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossAbyssalDemonPreparation@0}"+
                                    "<p>If the Heroes manage to banish the Abyssal Demon, {label.bossBeat@0} and the Quest ends with a victory.</p>",
                                    ES:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossAbyssalDemonPreparation@0}"+"<p>Si los H&eacute;roes logran desterrar al Demonio Abisal, {label.bossBeat@0} y la Misi&oacute;n termina con una victoria.</p>"
                            }
                        },
                        {
                            levels:{
                                3:{
                                    labels:{
                                        bossHealth:{ EN:15 },
                                        bossModifier:{
                                            IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                            EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                            ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossAbyssalDemonOneShotMod@0}." ]
                                        },
                                        bossPhase2Health:{ EN:20 },
                                        bossPhase2Modifier:BOSSPHASE2MODIFIER
                                    }
                                },
                                4:{
                                    labels:{
                                        bossHealth:{ EN:15 },
                                        bossModifier:{
                                            IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                            EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                            ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossAbyssalDemonOneShotMod@0}." ]
                                        },
                                        bossPhase2Health:{ EN:30 },
                                        bossPhase2Modifier:BOSSPHASE2MODIFIER
                                    }
                                }
                            },
                            campaign:[
                                {
                                    at:PLAINAT,
                                    mods:{
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                                ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossAbyssalDemonOneShotMod@0}." ]
                                            }
                                        }
                                    }
                                },
                                {
                                    at:WEAKAT,
                                    mods:{
                                        labelsBonus:DOUBLEPHASEBOSSWEAK[0],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                                ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossAbyssalDemonOneShotMod@0}." ]
                                            }
                                        }
                                    }
                                },
                                {
                                    at:BOSSAT[0],
                                    mods:{
                                        labelsBonus:DOUBLEPHASEBOSSBONUS[0],
                                        labels:{
                                            bossMode:CAMPAIGNMODE,
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                                ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossAbyssalDemonOneShotMod@0}." ]
                                            },
                                            bossPhase2Modifier:BOSSPHASE2MODIFIER
                                        }
                                    }
                                },{
                                    at:BOSSAT[1],
                                    mods:{
                                        labelsBonus:DOUBLEPHASEBOSSBONUS[1],
                                        labels:{
                                            bossMode:CAMPAIGNMODE,
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                                ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossAbyssalDemonOneShotMod@0}." ]
                                            },
                                            bossPhase2Modifier:BOSSPHASE2MODIFIER
                                        }
                                    }
                                },{
                                    at:BOSSAT[2],
                                    mods:{
                                        labelsBonus:DOUBLEPHASEBOSSBONUS[2],
                                        labels:{
                                            bossMode:CAMPAIGNMODE,
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                                ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossAbyssalDemonOneShotMod@0}." ]
                                            },
                                            bossPhase2Modifier:BOSSPHASE2MODIFIER
                                        }
                                    }
                                },{
                                    at:BOSSAT[3],
                                    mods:{
                                        labelsBonus:DOUBLEPHASEBOSSBONUS[3],
                                        labels:{
                                            bossMode:CAMPAIGNMODE,
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                                ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossAbyssalDemonOneShotMod@0}." ]
                                            },
                                            bossPhase2Modifier:BOSSPHASE2MODIFIER
                                        }
                                    }
                                },{
                                    at:BOSSAT[4],
                                    mods:{
                                        labelsBonus:DOUBLEPHASEBOSSBONUS[4],
                                        labels:{
                                            bossMode:CAMPAIGNMODE,
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                                ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossAbyssalDemonOneShotMod@0}." ]
                                            },
                                            bossPhase2Modifier:BOSSPHASE2MODIFIER
                                        }
                                    }
                                }
                            ],
                            tags:[ "abyssaldemon" ],
                            title:{
                                IT:"Scontro con il Boss: Emissario Oscuro Infuriato",
                                EN:"Boss Fight: Enraged Abyssal Demon",
                                ES:"Combate contra el Jefe: Demonio Abisal Enfurecido",
                            },
                            randomLabels:{
                                bossBadName:[
                                    {
                                        IT:[ "l'Emissario Oscuro" ],
                                        EN:[ "the Abyssal Demon"],
                                        ES:[ "el Demonio Abisal" ]
                                    }
                                ]
                            },
                            questLabels:{
                                questVictory:QUESTVICTORY
                            },
                            tilesNeeded:{
                                IT:"Tenere da parte: <i>(da MD2: Hellscape)</i> <b>[A]8A</b>.",
                                EN:"Keep aside: <i>(from MD2: Hellscape)</i> <b>[A]8A</b>.",
                                ES:"Aparta: <i>(de MD2: Hellscape)</i> <b>[A]8A</b>."
                            },
                            labels:{
                                bossTiles:{
                                    IT:[ "Posizionate la Tessera [A]8A di Hellscape", "accanto alla Tessera appena posizionata"],
                                    EN:[ "Place the Hellscape Tile [A]8A", "next to the just placed tile" ],
                                    ES:[ "Coloca la Loseta de Hellscape [A]8A", "junto a la Loseta que acabas de colocar" ]
                                },
                                bossMode:ONESHOTMODE,
                                bossDashboardName:{
                                    IT:[ "Emissario Oscuro" ],
                                    EN:[ "Abyssal Demon" ],
                                    ES:[ "Demonio Abisal" ]
                                },
                                bossName:{
                                    IT:[ "Emissario Oscuro" ],
                                    EN:[ "Abyssal Demon" ],
                                    ES:[ "Demonio Abisal" ]
                                },
                                bossUnit:{
                                    IT:[ "Emissario Oscuro" ],
                                    EN:[ "Abyssal Demon" ],
                                    ES:[ "Demonio Abisal" ]
                                }
                            },
                            preparation:{
                                IT:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossAbyssalDemonPreparation@0}"+
                                    "<p>Se gli Eroi riescono a scacciare l'Emissario Oscuro, resister&agrave; al Portale: {boss.bossPhase2Preparation}.{boss.bossPhase2Modifier@0}</p>"+
                                    "<p>Se gli Eroi riescono a scacciarlo una seconda volta, l'Emissario Oscuro {label.bossBeat@0} e la Missione termina con una vittoria.</p>",
                                EN:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossAbyssalDemonPreparation@0}"+
                                    "<p>If the Heroes manage to banish the Abyssal Demon, it will resist the Portal: {boss.bossPhase2Preparation}.{boss.bossPhase2Modifier@0}</p>"+
                                    "<p>If the Heroes manage to banish the Abyssal Demon a second time, {label.bossBeat@0} and the Quest ends with a victory.</p>",
                                    ES:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossAbyssalDemonPreparation@0}"+"<p>Si los H&eacute;roes logran desterrar al Demonio Abisal, este se resistir&aacute; al Portal: {boss.bossPhase2Preparation}.{boss.bossPhase2Modifier@0}</p>"+"<p>Si los H&eacute;roes logran desterrar al Demonio Abisal por segunda vez, {label.bossBeat@0} y la Misi&oacute;n termina con una victoria.</p>"
                            }
                        }
                    ]
                }
            ]
        },
        {
            id:"boss",
            needs:[ "campaign-fourhorsemen" ],
            provides:[ "boss" ],
            label:{
                EN:"Add MD2: Four Horsemen boss fight."
            },
            content:[
                {
                    type:"bossList",
                    data:[
                        {
                            levels:{
                                1:{
                                    labels:{
                                        bossHealth:{ EN:4 },
                                        bossModifier:{
                                            IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe." ],
                                            EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero." ],
                                            ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe." ]
                                        }
                                    }
                                },
                                2:{
                                    labels:{
                                        bossHealth:{ EN:6 },
                                        bossModifier:{
                                            IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe." ],
                                            EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero." ],
                                            ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe." ]
                                        }
                                    }
                                },
                                3:{
                                    labels:{
                                        bossHealth:{ EN:9 },
                                        bossModifier:{
                                            IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe." ],
                                            EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero." ],
                                            ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe." ]
                                        }
                                    }
                                },
                                4:{
                                    labels:{
                                        bossHealth:{ EN:11 },
                                        bossModifier:{
                                            IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe." ],
                                            EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero." ],
                                            ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe." ]
                                        }
                                    }
                                }
                            },
                            campaign:[
                                {
                                    at:PLAINAT,
                                    mods:{
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero." ],
                                                ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe." ]
                                            }
                                        }
                                    }
                                },
                                {
                                    at:WEAKAT,
                                    mods:{
                                        labelsBonus:SINGLEPHASEGROUPBOSSWEAK[0],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero." ],
                                                ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe." ]
                                            }
                                        }
                                    }
                                },
                                {
                                    at:BOSSAT[0],
                                    mods:{
                                        labelsBonus:SINGLEPHASEGROUPBOSSBONUS[0],
                                        labels:{
                                            bossMode:CAMPAIGNMODE,
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero." ],
                                                ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[1],
                                    mods:{
                                        labelsBonus:SINGLEPHASEGROUPBOSSBONUS[1],
                                        labels:{
                                            bossMode:CAMPAIGNMODE,
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero." ],
                                                ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[2],
                                    mods:{
                                        labelsBonus:SINGLEPHASEGROUPBOSSBONUS[2],
                                        labels:{
                                            bossMode:CAMPAIGNMODE,
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero." ],
                                                ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[3],
                                    mods:{
                                        labelsBonus:SINGLEPHASEGROUPBOSSBONUS[3],
                                        labels:{
                                            bossMode:CAMPAIGNMODE,
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero." ],
                                                ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[4],
                                    mods:{
                                        labelsBonus:SINGLEPHASEGROUPBOSSBONUS[4],
                                        labels:{
                                            bossMode:CAMPAIGNMODE,
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero." ],
                                                ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe." ]
                                            }
                                        }
                                    }
                                }
                            ],
                            tags:[ "campaign-fourhorsemen" ],
                            title:{
                                IT:"Scontro con il Boss: Quattro Cavalieri",
                                EN:"Boss Fight: Four Horsemen",
                                ES:"Combate contra el Jefe: Los Cuatro Jinetes",
                            },
                            components:4,
                            randomLabels:{
                                bossBadName:[
                                    {
                                        IT:[ "l'Armata dei Quattro Cavalieri" ],
                                        EN:[ "the Four Horsemen Army"],
                                        ES:[ "el Ej&eacute;rcito de los Cuatro Jinetes" ]
                                    }
                                ]
                            },
                            questLabels:{
                                questVictory:QUESTVICTORY
                            },
                            rules:[
                                {
                                    priority:5,
                                    type:"rule",
                                    name:{
                                        IT:"La Fine Pu&ograve; attendere",
                                        EN:"The End Can Wait",
                                        ES:"El Fin Puede Esperar"
                                    },
                                    explanation:{
                                        IT:"Per questa Missione, non mescolare le carte dei Quattro Cavalieri nei loro mazzi corrispondenti.",
                                        EN:"For this Mission, do not shuffle the Four Horsemen Roaming Monsters card into their corresponding decks.",
                                        ES:"Para esta Misi&oacute;n, no mezcles las cartas de Monstruo Errante de los Cuatro Jinetes en sus mazos correspondientes."
                                    }
                                }
                            ],
                            tilesNeeded:{
                                IT:"Tenere da parte: <i>(da MD2: Quattro Cavalieri)</i> <b>1B</b>, <b>2B</b>, <b>3B</b> e <b>4B</b>.",
                                EN:"Keep aside: <i>(from MD2: Four Horsemen)</i> <b>1B</b>, <b>2B</b>, <b>3B</b> e <b>4B</b>.",
                                ES:"Aparta: <i>(de MD2: Los Cuatro Jinetes)</i> <b>1B</b>, <b>2B</b>, <b>3B</b> y <b>4B</b>.",
                            },
                            labels:{
                                bossTiles:{
                                    IT:[ "Posizionate le Tessere 1B, 2B, 3B e 4B di Massive Darkness 2: Quattro Cavalieri ed i segnalini su di esse seguendo le indicazioni della missione <b>I Quattro Cavalieri</b> nel manuale di Massive Darkness 2: Quattro Cavalieri", "accanto alla Tessere appena posizionate"],
                                    EN:[ "Place the Massive Darkness 2: Four Horsemen Tiles  1B, 2B, 3B, and 4B and the tokens on them following the instructions in the <b>The Four Horsemen</b> mission of the Massive Darkness 2: Four Horsemen manual", "next to the just placed tiles" ],
                                    ES:[ "Coloca las Losetas 1B, 2B, 3B y 4B de Massive Darkness 2: Los Cuatro Jinetes y los marcadores que llevan encima siguiendo las instrucciones de la misi&oacute;n <b>Los Cuatro Jinetes</b> del manual de Massive Darkness 2: Los Cuatro Jinetes", "junto a las Losetas que acabas de colocar" ]
                                },
                                bossMode:ONESHOTMODE,
                                bossDashboardName:{
                                    IT:[ "Quattro Cavalieri" ],
                                    EN:[ "Four Horsemen" ],
                                    ES:[ "Los Cuatro Jinetes" ]
                                },
                                bossName:{
                                    IT:[ "i Quattro Cavalieri" ],
                                    EN:[ "the Four Horsemen" ],
                                    ES:[ "los Cuatro Jinetes" ]
                                },
                                bossUnit:{
                                    IT:[ "ogni Cavaliere" ],
                                    EN:[ "each Horsemen" ],
                                    ES:[ "cada Jinete" ]
                                }
                            },
                            preparation:{
                                IT:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossFourHorsemenPreparation@0}"+
                                    "<p>Se gli Eroi riescono a sconfiggerli, il gruppo dei Quattro Cavalieri {label.bossBeat@0} e la Missione termina con una vittoria.</p>",
                                EN:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossFourHorsemenPreparation@0}"+
                                    "<p>If the Heroes manage to defeat them, the Four Horsemen group {label.bossBeat@0} and the Quest ends with a victory.</p>",
                                    ES:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossFourHorsemenPreparation@0}"+"<p>Si los H&eacute;roes logran derrotarlos, el grupo de los Cuatro Jinetes {label.bossBeat@0} y la Misi&oacute;n termina con una victoria.</p>"
                            }
                        }
                    ]
                }
            ]
        },
        {
            id:"boss",
            needs:[ "campaign-darkbringer" ],
            provides:[ "boss" ],
            label:{
                EN:"Add MD2: Darkbringer boss fight."
            },
            content:[
                {
                    type:"bossList",
                    data:[
                        {
                            levels:BOSSLEVELS,
                            campaign:[
                                { at:PLAINAT },
                                {
                                    at:WEAKAT,
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSWEAK[0]
                                    }
                                },
                                {
                                    at:BOSSAT[0],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[0],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossScorpionKingHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossScorpionKingHardMods@0}." ],
                                                ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossScorpionKingHardMods@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[1],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[1],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossScorpionKingHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossScorpionKingHardMods@0}." ],
                                                ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossScorpionKingHardMods@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[2],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[2],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossScorpionKingHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossScorpionKingHardMods@0}." ],
                                                ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossScorpionKingHardMods@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[3],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[3],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossScorpionKingHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossScorpionKingHardMods@0}." ],
                                                ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossScorpionKingHardMods@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[4],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[4],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossScorpionKingHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossScorpionKingHardMods@0}." ],
                                                ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossScorpionKingHardMods@0}." ]
                                            }
                                        }
                                    }
                                }
                            ],
                            tags:[ "scorpionking" ],
                            title:{
                                IT:"Scontro con il Boss: Re Scorpione",
                                EN:"Boss Fight: Scorpion King",
                                ES:"Combate contra el Jefe: Rey Escorpi&oacute;n",
                            },
                            randomLabels:{
                                bossBadName:[
                                    {
                                        IT:[ "il Re Scorpione" ],
                                        EN:[ "the Scorpion King"],
                                        ES:[ "el Rey Escorpi&oacute;n" ]
                                    }
                                ]
                            },
                            questLabels:{
                                questVictory:QUESTVICTORY
                            },
                            tilesNeeded:{
                                IT:"Tenere da parte: <i>(da MD2: Darkbringer)</i> <b>1A</b> e <b>2A</b>.",
                                EN:"Keep aside: <i>(from MD2: Darkbringer)</i> <b>1A</b> and <b>2A</b>.",
                                ES:"Aparta: <i>(de MD2: Darkbringer)</i> <b>1A</b> y <b>2A</b>."
                            },
                            labels:{
                                bossTiles:{
                                    IT:[ "Posizionate le Tessere 1A e 2A di Massive Darkness 2: Darkbringer seguendo le indicazioni della missione <b>Il Re Scorpione</b> nel manuale di Massive Darkness 2: Darkbringer", "accanto alla Tessere appena posizionate"],
                                    EN:[ "Place the Massive Darkness 2: Darkbringer Tiles 1A and 2A following the instructions in the <b>The Scorpion King</b> mission of the Massive Darkness 2: Darkbringer manual", "next to the just placed tiles" ],
                                    ES:[ "Coloca las Losetas 1A y 2A de Massive Darkness 2: Darkbringer siguiendo las instrucciones de la misi&oacute;n <b>El Rey Escorpi&oacute;n</b> del manual de Massive Darkness 2: Darkbringer", "junto a las Losetas que acabas de colocar" ]
                                },
                                bossDashboardName:{
                                    IT:[ "Re Scorpione" ],
                                    EN:[ "Scorpion King" ],
                                    ES:[ "Rey Escorpi&oacute;n" ]
                                },
                                bossName:{
                                    IT:[ "il Re Scorpione" ],
                                    EN:[ "the Scorpion King" ],
                                    ES:[ "el Rey Escorpi&oacute;n" ]
                                },
                                bossUnit:{
                                    IT:[ "il Re Scorpione" ],
                                    EN:[ "the Scorpion King" ],
                                    ES:[ "el Rey Escorpi&oacute;n" ]
                                },
                            },
                            preparation:{
                                IT:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossScorpionKingPreparation@0}"+
                                    "<p>Se gli Eroi riescono a sconfiggerlo, il Re Scorpione {label.bossBeat@0} e la Missione termina con una vittoria.</p>",
                                EN:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossScorpionKingPreparation@0}"+
                                    "<p>If the Heroes manage to defeat the Scorpion King, {label.bossBeat@0} and the Quest ends with a victory.</p>",
                                    ES:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossScorpionKingPreparation@0}"+"<p>Si los H&eacute;roes logran derrotar al Rey Escorpi&oacute;n, {label.bossBeat@0} y la Misi&oacute;n termina con una victoria.</p>"
                            }
                        },{
                            levels:COMPANIONBOSSLEVELS,
                            campaign:[
                                { at:PLAINAT },
                                {
                                    at:WEAKAT,
                                    mods:{
                                        labelsBonus:SINGLEPHASECOMPANIONBOSSWEAK_5[0]
                                    }
                                },
                                {
                                    at:BOSSAT[0],
                                    mods:{
                                        labelsBonus:SINGLEPHASECOMPANIONBOSSBONUS_5[0],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossHadesHardMods@0}. Ogni Anima Errante ha {boss.companionHealth} PV." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossHadesHardMods@0}. Each Lingering Soul has {boss.companionHealth} HP." ],
                                                ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossHadesHardMods@0}. Cada Alma Errante tiene {boss.companionHealth} PV." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[1],
                                    mods:{
                                        labelsBonus:SINGLEPHASECOMPANIONBOSSBONUS_5[1],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossHadesHardMods@0}. Ogni Anima Errante ha {boss.companionHealth} PV." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossHadesHardMods@0}. Each Lingering Soul has {boss.companionHealth} HP." ],
                                                ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossHadesHardMods@0}. Cada Alma Errante tiene {boss.companionHealth} PV." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[2],
                                    mods:{
                                        labelsBonus:SINGLEPHASECOMPANIONBOSSBONUS_5[2],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossHadesHardMods@0}. Ogni Anima Errante ha {boss.companionHealth} PV." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossHadesHardMods@0}. Each Lingering Soul has {boss.companionHealth} HP." ],
                                                ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossHadesHardMods@0}. Cada Alma Errante tiene {boss.companionHealth} PV." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[3],
                                    mods:{
                                        labelsBonus:SINGLEPHASECOMPANIONBOSSBONUS_5[3],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossHadesHardMods@0}. Ogni Anima Errante ha {boss.companionHealth} PV." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossHadesHardMods@0}. Each Lingering Soul has {boss.companionHealth} HP." ],
                                                ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossHadesHardMods@0}. Cada Alma Errante tiene {boss.companionHealth} PV." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[4],
                                    mods:{
                                        labelsBonus:SINGLEPHASECOMPANIONBOSSBONUS_5[4],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossHadesHardMods@0}. Ogni Anima Errante ha {boss.companionHealth} PV." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossHadesHardMods@0}. Each Lingering Soul has {boss.companionHealth} HP." ],
                                                ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossHadesHardMods@0}. Cada Alma Errante tiene {boss.companionHealth} PV." ]
                                            }
                                        }
                                    }
                                }
                            ],
                            tags:[ "hades" ],
                            title:{
                                IT:"Scontro con il Boss: Hades",
                                EN:"Boss Fight: Hades",
                                ES:"Combate contra el Jefe: Hades",
                            },
                            randomLabels:{
                                bossBadName:[
                                    {
                                        IT:[ "Hades" ],
                                        EN:[ "Hades"],
                                        ES:[ "Hades" ]
                                    }
                                ]
                            },
                            questLabels:{
                                questVictory:QUESTVICTORY
                            },
                            tilesNeeded:{
                                IT:"Tenere da parte: <i>(da MD2: Darkbringer)</i> <b>3A</b> e <b>4A</b>.",
                                EN:"Keep aside: <i>(from MD2: Darkbringer)</i> <b>3A</b> and <b>4A</b>.",
                                ES:"Aparta: <i>(de MD2: Darkbringer)</i> <b>3A</b> y <b>4A</b>."
                            },
                            labels:{
                                bossTiles:{
                                    IT:[ "Posizionate le Tessere 3A e 4A di Massive Darkness 2: Darkbringer e i segnalini su di esse seguendo le indicazioni della seguendo le indicazioni della missione <b>Hades</b> nel manuale di Massive Darkness 2: Darkbringer", "accanto alla Tessere appena posizionate"],
                                    EN:[ "Place the Massive Darkness 2: Darkbringer Tiles 3A and 4A and the tokens on them following the instructions in the <b>Hades</b> mission of the Massive Darkness 2: Darkbringer manual", "next to the just placed tiles" ],
                                    ES:[ "Coloca las Losetas 3A y 4A de Massive Darkness 2: Darkbringer y los marcadores que llevan encima siguiendo las instrucciones de la misi&oacute;n <b>Hades</b> del manual de Massive Darkness 2: Darkbringer", "junto a las Losetas que acabas de colocar" ]
                                },
                                bossDashboardName:{
                                    IT:[ "Hades" ],
                                    EN:[ "Hades" ],
                                    ES:[ "Hades" ]
                                },
                                bossName:{
                                    IT:[ "Hades" ],
                                    EN:[ "Hades" ],
                                    ES:[ "Hades" ]
                                },
                                bossUnit:{
                                    IT:[ "Hades" ],
                                    EN:[ "Hades" ],
                                    ES:[ "Hades" ]
                                },
                            },
                            preparation:{
                                IT:"{boss.bossPreparation}{boss.bossModifier@0} Ogni Anima Errante ha {boss.companionHealth} PV. {boss.heroPreparation}{boss.bossHadesPreparation@0}"+
                                    "<p>Se gli Eroi riescono a sconfiggerlo, Hades {label.bossBeat@0} e la Missione termina con una vittoria.</p>",
                                EN:"{boss.bossPreparation}{boss.bossModifier@0} Each Lingering Soul has {boss.companionHealth} HP. {boss.heroPreparation}{boss.bossHadesPreparation@0}"+
                                    "<p>If the Heroes manage to defeat Hades, {label.bossBeat@0} and the Quest ends with a victory.</p>",
                                    ES:"{boss.bossPreparation}{boss.bossModifier@0} Cada Alma Errante tiene {boss.companionHealth} PV. {boss.heroPreparation}{boss.bossHadesPreparation@0}"+"<p>Si los H&eacute;roes logran derrotar a Hades, {label.bossBeat@0} y la Misi&oacute;n termina con una victoria.</p>"
                            }
                        },{
                            levels:VERYSTRONGBOSSLEVELS,
                            campaign:[
                                { at:PLAINAT },
                                {
                                    at:WEAKAT,
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSWEAK[0]
                                    }
                                },
                                {
                                    at:BOSSAT[0],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[0],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossCharonHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossCharonHardMods@0}." ],
                                                ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossCharonHardMods@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[1],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[1],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossCharonHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossCharonHardMods@0}." ],
                                                ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossCharonHardMods@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[2],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[2],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossCharonHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossCharonHardMods@0}." ],
                                                ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossCharonHardMods@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[3],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[3],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossCharonHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossCharonHardMods@0}." ],
                                                ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossCharonHardMods@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[4],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[4],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossCharonHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossCharonHardMods@0}." ],
                                                ES:[ " En este combate, {boss.bossUnit@0} tiene {boss.bossHealth} PV por H&eacute;roe, {boss.bossCharonHardMods@0}." ]
                                            }
                                        }
                                    }
                                }
                            ],
                            tags:[ "charon" ],
                            title:{
                                IT:"Scontro con il Boss: Charon",
                                EN:"Boss Fight: Charon",
                                ES:"Combate contra el Jefe: Caronte",
                            },
                            randomLabels:{
                                bossBadName:[
                                    {
                                        IT:[ "Charon" ],
                                        EN:[ "Charon"],
                                        ES:[ "Caronte" ]
                                    }
                                ]
                            },
                            questLabels:{
                                questVictory:QUESTVICTORY
                            },
                            rules:[
                                {
                                    priority:5,
                                    type:"rule",
                                    name:{
                                        IT:"Condizione di Sconfitta Speciale",
                                        EN:"Special Losing Condition",
                                        ES:"Condici&oacute;n Especial de Derrota"
                                    },
                                    explanation:{
                                        IT:"Se Charon abbandona il Dungeon dopo l'inizio dello scontro con il boss, la Missione termina immediatamente con una sconfitta.",
                                        EN:"After the Boss Fight begins, if Charon leaves the Dungeon, the Quest immediately ends in defeat.",
                                        ES:"Despu&eacute;s de que comience el Combate contra el Jefe, si Caronte abandona la Mazmorra, la Misi&oacute;n termina inmediatamente en derrota."
                                    }
                                }
                            ],
                            tilesNeeded:{
                                IT:"Tenere da parte: <i>(da MD2: Darkbringer)</i> <b>1B</b>, <b>2B</b>, <b>3B</b> e <b>4B</b>.",
                                EN:"Keep aside: <i>(from MD2: Darkbringer)</i> <b>1B</b>, <b>2B</b>, <b>3B</b>, and <b>4B</b>.",
                                ES:"Aparta: <i>(de MD2: Darkbringer)</i> <b>1B</b>, <b>2B</b>, <b>3B</b> y <b>4B</b>."
                            },
                            labels:{
                                bossTiles:{
                                    IT:[ "Posizionate le Tessere 1B, 2B, 3B e 4B di Massive Darkness 2: Darkbringer e i segnalini su di esse seguendo le indicazioni della seguendo le indicazioni della missione <b>Dark Ride</b> nel manuale di Massive Darkness 2: Darkbringer", "accanto alla Tessere appena posizionate"],
                                    EN:[ "Place the Massive Darkness 2: Darkbringer Tiles 1B, 2B, 3B, and 4B and the tokens on them following the instructions in the <b>Dark Ride</b> mission of the Massive Darkness 2: Darkbringer manual", "next to the just placed tiles" ],
                                    ES:[ "Coloca las Losetas 1B, 2B, 3B y 4B de Massive Darkness 2: Darkbringer y los marcadores que llevan encima siguiendo las instrucciones de la misi&oacute;n <b>Dark Ride</b> del manual de Massive Darkness 2: Darkbringer", "junto a las Losetas que acabas de colocar" ]
                                },
                                bossDashboardName:{
                                    IT:[ "Charon" ],
                                    EN:[ "Charon" ],
                                    ES:[ "Caronte" ]
                                },
                                bossName:{
                                    IT:[ "Charon" ],
                                    EN:[ "Charon" ],
                                    ES:[ "Caronte" ]
                                },
                                bossUnit:{
                                    IT:[ "Charon" ],
                                    EN:[ "Charon" ],
                                    ES:[ "Caronte" ]
                                },
                            },
                            preparation:{
                                IT:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossCharonPreparation@0}"+
                                    "<p>Se gli Eroi riescono a sconfiggerlo, Charon {label.bossBeat@0} e la Missione termina con una vittoria.</p>",
                                EN:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossCharonPreparation@0}"+
                                    "<p>If the Heroes manage to defeat Charon, {label.bossBeat@0} and the Quest ends with a victory.</p>",
                                    ES:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossCharonPreparation@0}"+"<p>Si los H&eacute;roes logran derrotar a Caronte, {label.bossBeat@0} y la Misi&oacute;n termina con una victoria.</p>"
                            }
                        }
                    ]
                }
            ]
        },
    ];

});