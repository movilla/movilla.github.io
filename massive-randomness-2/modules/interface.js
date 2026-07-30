ModManager.modules.push(function(){

    return [
        {

            id:"interface",
            needs:[ ],
            provides:[ "interface" ],
            label:{
                EN:"Massive Randomness 2 UI configuration"
            },
            content:[
                {
                    type:"interface",
                    data:{
                        settings:[
                            {
                                type:"includeExclude",
                                isMandatory:true,
                                title:{
                                    IT:"Materiali disponibili",
                                    EN:"Available components",ES:"Componentes disponibles"
                                },
                                entries:[
                                    {
                                        code:"A",
                                        isMandatory:true,
                                        isDefault:true,
                                        label:{
                                            IT:"Massive Darkness 2: Hellscape",
                                            EN:"Massive Darkness 2: Hellscape",ES:"Massive Darkness 2: Hellscape"
                                        },
                                        description:{
                                            IT:"La scatola base del gioco",
                                            EN:"The game core box",ES:"La caja base del juego"
                                        },
                                        tags:[ "md2-hellscape" ]
                                    },{
                                        code:"C",
                                        idOption:"md2-heavenfall",
                                        label:{
                                            IT:"Massive Darkness 2: Heavenfall",
                                            EN:"Massive Darkness 2: Heavenfall",ES:"Massive Darkness 2: Heavenfall"
                                        },
                                        description:{
                                            IT:"4 tessere paradiso, Modalit&agrave; Campagna e boss",
                                            EN:"4 heaven tiles, Campaign Mode, and bosses",ES:"4 losetas de cielo, Modo Campaña y jefes"
                                        },
                                        tags:[ "md2-heavenfall" ]
                                    },{
                                        code:"G",
                                        label:{
                                            IT:"Massive Darkness 2: Rainbow Crossing",
                                            EN:"Massive Darkness 2: Rainbow Crossing",ES:"Massive Darkness 2: Rainbow Crossing"
                                        },
                                        description:{
                                            IT:"4 tessere arcobaleno",
                                            EN:"4 rainbow tiles",ES:"4 losetas de arcoíris"
                                        },
                                        tags:[ "md2-rainbowcrossing" ]
                                    },{
                                        idOption:"campaign-upgradepack",
                                        code:"H",
                                        label:{
                                            IT:"Massive Darkness 2: Pack di Aggiornamento",
                                            EN:"Massive Darkness 2: Upgrade Pack",ES:"Massive Darkness 2: Pack de Mejora"
                                        },
                                        description:{
                                            IT:"Carte della Campagna Prologo e boss",
                                            EN:"Prologue Campaign cards and boss",ES:"Cartas de la Campaña Prólogo y jefe"
                                        },
                                        tags:[ "campaign-upgradepack" ]
                                    },{
                                        ifMenuOptionSelected:[ "campaign-upgradepack" ],
                                        code:"I",
                                        label:{
                                            IT:"Massive Darkness: Ciclope Scudiera e Ciclope Spaccarupi",
                                            EN:"Massive Darkness: Spearmaiden Cyclops and Cliffbreaker Cyclops",ES:"Massive Darkness: Cíclope Doncella de Lanza y Cíclope Rompepeñascos"
                                        },
                                        description:{
                                            IT:"Boss",
                                            EN:"Boss",ES:"Jefe"
                                        },
                                        tags:[ "campaign-upgradepack-cyclopsduo" ]
                                    },{
                                        ifMenuOptionSelected:[ "campaign-upgradepack" ],
                                        code:"J",
                                        label:{
                                            IT:"Massive Darkness: Hellephant",
                                            EN:"Massive Darkness: Hellephant",ES:"Massive Darkness: Hellephant"
                                        },
                                        description:{
                                            IT:"Boss",
                                            EN:"Boss",ES:"Jefe"
                                        },
                                        tags:[ "campaign-upgradepack-hellephant" ]
                                    },{
                                        code:"K",
                                        label:{
                                            IT:"Massive Darkness 2: Quattro Cavalieri",
                                            EN:"Massive Darkness 2: Four Horsemen Pack",ES:"Massive Darkness 2: Los Cuatro Jinetes"
                                        },
                                        description:{
                                            IT:"Boss",
                                            EN:"Boss",ES:"Jefe"
                                        },
                                        tags:[ "campaign-fourhorsemen" ]
                                    },{
                                        code:"L",
                                        label:{
                                            IT:"Massive Darkness 2: Darkbringer",
                                            EN:"Massive Darkness 2: Darkbringer",ES:"Massive Darkness 2: Darkbringer"
                                        },
                                        description:{
                                            IT:"Boss",
                                            EN:"Boss",ES:"Jefe"
                                        },
                                        tags:[ "campaign-darkbringer" ]
                                    },{
                                        code:"D",
                                        label:{
                                            IT:"Massive Darkness",
                                            EN:"Massive Darkness",ES:"Massive Darkness"
                                        },
                                        description:{
                                            IT:"9 tessere dungeon",
                                            EN:"9 dungeon tiles",ES:"9 losetas de mazmorra"
                                        },
                                        tags:[ "md1-base" ]
                                    },{
                                        code:"B",
                                        label:{
                                            IT:"Massive Darkness: Una Missione di Lava &amp; Cristalli",
                                            EN:"Massive Darkness: A Quest of Crystal & Lava",ES:"Massive Darkness: Una Misión de Lava y Cristales"
                                        },
                                        description:{
                                            IT:"6 tessere cristalli/lava",
                                            EN:"6 crystal/lava tiles",ES:"6 losetas de cristal/lava"
                                        },
                                        tags:[ "md2-crystallava-cl" ]
                                    },{
                                        code:"b",
                                        label:{
                                            IT:"Massive Darkness: Una Missione di Lava &amp; Cristalli",
                                            EN:"Massive Darkness: A Quest of Crystal & Lava",ES:"Massive Darkness: Una Misión de Lava y Cristales"
                                        },
                                        description:{
                                            IT:"9 tessere dungeon che replicano quelle di Massive Darkness 1",
                                            EN:"9 dungeon tiles replicating Massive Darkness 1 tiles",ES:"9 losetas de mazmorra que replican las de Massive Darkness 1"
                                        },
                                        tags:[ "md2-crystallava-up" ]
                                    },{
                                        ifFlag:"zombicide",
                                        code:"E",
                                        label:{
                                            IT:"Zombicide: Black Plague",
                                            EN:"Zombicide: Black Plague",ES:"Zombicide: Black Plague"
                                        },
                                        description:{
                                            IT:"9 tessere esterne",
                                            EN:"9 outdoor tiles",ES:"9 losetas de exterior"
                                        },
                                        tags:[ "zc-blackplague" ]
                                    },{
                                        ifFlag:"zombicide",
                                        code:"F",
                                        label:{
                                            IT:"Zombicide: Green Horde",
                                            EN:"Zombicide: Green Horde",ES:"Zombicide: Green Horde"
                                        },
                                        description:{
                                            IT:"9 tessere esterne/villaggio",
                                            EN:"9 outdoor/village tiles",ES:"9 losetas de exterior/aldea"
                                        },
                                        tags:[ "zc-greenhorde" ]
                                    },{
                                        ifFlag:"zombicide",
                                        code:"f",
                                        label:{
                                            IT:"Zombicide: Friends and Foes",
                                            EN:"Zombicide: Friends and Foes",ES:"Zombicide: Friends and Foes"
                                        },
                                        description:{
                                            IT:"5 tessere esterne/villaggio",
                                            EN:"5 outdoor/village tiles",ES:"5 losetas de exterior/aldea"
                                        },
                                        tags:[ "zc-friendfoes" ]
                                    },{
                                        ifFlag:"zombicide",
                                        code:"e",
                                        label:{
                                            IT:"Zombicide: Wulfsburg",
                                            EN:"Zombicide: Wulfsburg",ES:"Zombicide: Wulfsburg"
                                        },
                                        description:{
                                            IT:"2 tessere torre",
                                            EN:"2 tower tiles",ES:"2 losetas de torre"
                                        },
                                        tags:[ "zc-wulfsburg" ]
                                    },{
                                        ifFlag:"zombicide",
                                        code:"M",
                                        label:{
                                            IT:"Zombicide: White Death",
                                            EN:"Zombicide: White Death",ES:"Zombicide: White Death"
                                        },
                                        description:{
                                            IT:"9 tessere innevate",
                                            EN:"9 snow tiles",ES:"9 losetas de nieve"
                                        },
                                        tags:[ "zc-whitedeath" ]
                                    },{
                                        ifFlag:"zombicide",
                                        code:"m",
                                        label:{
                                            IT:"Zombicide: Eternal Empire",
                                            EN:"Zombicide: Eternal Empire",ES:"Zombicide: Eternal Empire"
                                        },
                                        description:{
                                            IT:"4 tessere innevate",
                                            EN:"4 snow tiles",ES:"4 losetas de nieve"
                                        },
                                        tags:[ "zc-eternalempire" ]
                                    }
                                ]
                            },{
                                type:"includeExclude",
                                isSingleOption:true,
                                isMandatory:true,
                                title:{
                                    IT:"Ponti",
                                    EN:"Bridges",ES:"Puentes"
                                },
                                entries:[
                                    {
                                        code:"U",
                                        isDefault:true,
                                        label:{
                                            IT:"Due uscite",
                                            EN:"Two Exits",ES:"Dos salidas"
                                        },
                                        description:{
                                            IT:"Le tessere ponte possono essere attraversate orizzontalmente oppure verticalmente.",
                                            EN:"Bridge tiles can be crossed horizontally or vertically.",ES:"Las losetas de puente pueden cruzarse en horizontal o en vertical.",
                                        },
                                        tags:[ "bridge-default-twoexits" ]
                                    },{
                                        code:"u",
                                        label:{
                                            IT:"Quattro uscite",
                                            EN:"Four exits",ES:"Cuatro salidas"
                                        },
                                        description:{
                                            IT:"Le tessere ponte possono essere attraversate da ogni direzione.",
                                            EN:"Bridge tiles can be crossed from any direction.",ES:"Las losetas de puente pueden cruzarse desde cualquier dirección.",
                                        },
                                        tags:[ "bridge-default-fourexits" ]
                                    }
                                ]
                            },{
                                type:"includeSelected",
                                ifMenuOptionSelected:[ "md2-heavenfall" ],
                                isSingleOption:true,
                                isMandatory:true,
                                title:{
                                    IT:"Generatore",
                                    EN:"Generator",ES:"Generador"
                                },
                                entries:[
                                    {
                                        idOption:"generator-oneshot",
                                        code:"V",
                                        isDefault:true,
                                        label:{
                                            IT:"Avventura one-shot",
                                            EN:"One-shot quest",ES:"Aventura individual"
                                        },
                                        description:{
                                            IT:"Genera un'avventura one-shot.",
                                            EN:"Generate a one-shot quest.",ES:"Genera una aventura individual."
                                        },
                                        tags:[ "generator-oneshot" ]
                                    },{
                                        idOption:"generator-campaign",
                                        code:"v",
                                        label:{
                                            IT:"Campagna",
                                            EN:"Campaign",ES:"Campaña"
                                        },
                                        description:{
                                            IT:"Genera una serie di avventure da giocare in sequenza seguendo le regole di Massive Darkness 2: Heavenfall.",
                                            EN:"Generate a series of adventures to be played in sequence following the rules of Massive Darkness 2: Heavenfall.",ES:"Genera una serie de aventuras para jugar en orden siguiendo las reglas de Massive Darkness 2: Heavenfall."
                                        },
                                        tags:[ "generator-campaign", "generator-campaign-standard", "campaign-full",  "boss" ]
                                    },{
                                        idOption:"generator-campaign-mini",
                                        code:"w",
                                        label:{
                                            IT:"Mini-campagna",
                                            EN:"Mini-campaign",ES:"Mini-campaña"
                                        },
                                        description:{
                                            IT:"Genera una breve serie di avventure da giocare in sequenza seguendo le regole delle mini-campagne.",
                                            EN:"Generate a short series of adventures to be played in sequence following the mini-campaign rules.",ES:"Genera una breve serie de aventuras para jugar en orden siguiendo las reglas de las mini-campañas."
                                        },
                                        tags:[ "generator-campaign", "generator-campaign-standard", "campaign-mini",  "boss" ]
                                    },{
                                        idOption:"generator-campaign-2shots",
                                        code:"W",
                                        label:{
                                            IT:"Campagna 2-shot",
                                            EN:"2-shot campaign",ES:"Campaña de 2 misiones"
                                        },
                                        description:{
                                            IT:"Genera una brevissima campagna di 2 missioni da giocare in sequenza, seguendo le <a target=_blank href='https://boardgamegeek.com/thread/3460934/2-shot-campaign'>house rules</a> dell'utente <a target=_blank href='https://boardgamegeek.com/user/Rough_neck'>Roughneck CC</a> di BGG.",
                                            EN:"Generates a very short campaign of 2 missions to be played in sequence, following the BGG user <a target=_blank href='https://boardgamegeek.com/user/Rough_neck'>Roughneck CC</a> <a target=_blank href='https://boardgamegeek.com/thread/3460934/2-shot-campaign'>house rules</a>.",ES:"Genera una campaña muy breve de 2 misiones para jugar en orden, siguiendo las <a target=_blank href='https://boardgamegeek.com/thread/3460934/2-shot-campaign'>reglas caseras</a> del usuario <a target=_blank href='https://boardgamegeek.com/user/Rough_neck'>Roughneck CC</a> de BGG."
                                        },
                                        tags:[ "generator-campaign", "campaign-2shots",  "boss" ]
                                    }
                                ]
                            },{
                                type:"includeSelected",
                                ifMenuOptionSelected:[ "generator-oneshot" ],
                                isSingleOption:true,
                                isMandatory:true,
                                title:{
                                    IT:"Grandezza delle mappa",
                                    EN:"Map size",ES:"Tamaño del mapa"
                                },
                                entries:[
                                    {
                                        code:"0",
                                        label:{
                                            IT:"Piccola",
                                            EN:"Small",ES:"Pequeño"
                                        },
                                        description:{
                                            IT:"Se possibile, la mappa dell'avventura ha 1 tessera in meno rispetto a quelle suggerite.",
                                            EN:"If possible, the quest map has 1 fewer tile than suggested.",ES:"Si es posible, el mapa de la aventura tiene 1 loseta menos de las sugeridas."
                                        },
                                        tags:[ "maps-size-small" ]
                                    },{
                                        code:"1",
                                        isDefault:true,
                                        label:{
                                            IT:"Normale",
                                            EN:"Normal",ES:"Normal"
                                        },
                                        description:{
                                            IT:"La mappa dell'avventura ha il numero suggerito di tessere.",
                                            EN:"The adventure map has the suggested number of tiles.",ES:"El mapa de la aventura tiene el número de losetas sugerido."
                                        },
                                        tags:[ "maps-size-normal" ]
                                    },{
                                        code:"2",
                                        label:{
                                            IT:"Grande",
                                            EN:"Large",ES:"Grande"
                                        },
                                        description:{
                                            IT:"Se possibile, la mappa dell'avventura ha 1 tessera in pi&ugrave; rispetto a quelle suggerite.",
                                            EN:"If possible, the quest map has 1 more tile than suggested.",ES:"Si es posible, el mapa de la aventura tiene 1 loseta más de las sugeridas."
                                        },
                                        tags:[ "maps-size-large" ]
                                    }
                                ]
                            },{
                                type:"includeSelected",
                                ifMenuOptionSelected:[ "generator-oneshot" ],
                                isSingleOption:true,
                                isMandatory:true,
                                title:{
                                    IT:"Stile della mappa",
                                    EN:"Map style",ES:"Estilo del mapa"
                                },
                                entries:[
                                    {
                                        code:"Z",
                                        isDefault:true,
                                        label:{
                                            IT:"Uniforme",
                                            EN:"Uniform",ES:"Uniforme"
                                        },
                                        description:{
                                            IT:"Tutte le tessere della mappa mostrano la stessa ambientazione.",
                                            EN:"All tiles on the map show the same setting.",ES:"Todas las losetas del mapa muestran la misma ambientación.",
                                        },
                                        tags:[ "maps-default-uniform" ]
                                    },{
                                        code:"y",
                                        label:{
                                            IT:"Divisa",
                                            EN:"Split",ES:"Mixto"
                                        },
                                        description:{
                                            IT:"Le tessere sulla mappa possono mostrare 2 ambientazioni diverse. Migliora la variet&agrave; di struttura cercando di mantenere una buona estetica.",
                                            EN:"The map tiles can show 2 environments. Improves the variety of structure while trying to maintain good aesthetics.",ES:"Las losetas del mapa pueden mostrar 2 ambientaciones distintas. Mejora la variedad de estructura intentando mantener una buena estética.",
                                        },
                                        tags:[ "maps-default-split" ]
                                    },{
                                        code:"z",
                                        label:{
                                            IT:"Interdimensionale",
                                            EN:"Interdimensional",ES:"Interdimensional"
                                        },
                                        description:{
                                            IT:"Le tessere sulla mappa possono mostrare ambientazioni diverse. Aumenta la variet&agrave; di struttura a scapito dell'estetica.",
                                            EN:"The map tiles can show different environments. Increase layout variety to the detriment of aesthetics.",ES:"Las losetas del mapa pueden mostrar ambientaciones distintas. Aumenta la variedad de estructura a costa de la estética.",
                                        },
                                        tags:[ "maps-default-notuniform" ]
                                    }
                                ]
                            },{
                                type:"includeExclude",
                                title:{
                                    IT:"Extra",
                                    EN:"Extras",ES:"Extras"
                                },
                                entries:[
                                    {
                                        code:"O",
                                        ifMenuOptionSelected:[ "generator-campaign", "generator-campaign-mini", "generator-campaign-2shots" ],
                                        label:{
                                            IT:"Nascondi gli spoiler",
                                            EN:"Hide spoilers",ES:"Ocultar spoilers"
                                        },
                                        description:{
                                            IT:"Le ricompense e le parti narrative vengono nascoste.",
                                            EN:"The rewards and the narrative parts are hidden.",ES:"Se ocultan las recompensas y las partes narrativas.",
                                        },
                                        tags:[ "campaign-hidespoilers" ]
                                    },{
                                        code:"X",
                                        ifMenuOptionSelected:[ "generator-oneshot" ],
                                        label:{
                                            IT:"Sfide",
                                            EN:"Challenges",ES:"Desafíos"
                                        },
                                        description:{
                                            IT:"Aggiunge all'avventura delle sfide extra, che potrai decidere se accettare o meno.",
                                            EN:"It adds extra challenges to the adventure, you can decide whether to accept or not.",ES:"Añade a la aventura desafíos extra, que podrás decidir si aceptar o no.",
                                        },
                                        tags:[ "challenges-default" ]
                                    },{
                                        code:"N",
                                        ifMenuOptionSelected:[ "generator-oneshot" ],
                                        label:{
                                            IT:"Scontri con i Boss",
                                            EN:"Boss fights",ES:"Combates contra Jefes"
                                        },
                                        description:{
                                            IT:"Aggiunge al termine di alcune avventure uno scontro con il boss.",
                                            EN:"It adds a boss fight at the end of some quests.",ES:"Añade un combate contra el jefe al final de algunas aventuras.",
                                        },
                                        tags:[ "boss" ]
                                    },{
                                        code:"Y",
                                        ifMenuOptionSelected:[ "generator-oneshot" ],
                                        label:{
                                            IT:"Modalit&agrave; Esplorazione",
                                            EN:"Dungeon Crawling Mode",ES:"Modo Exploración"
                                        },
                                        description:{
                                            IT:"Il contenuto delle Camere &egrave; nascosto e viene mostrato quando vengono rivelate.",
                                            EN:"The content of the Chambers is hidden and is shown when they are revealed.",ES:"El contenido de las Cámaras se oculta y se muestra al ser reveladas.",
                                        },
                                        tags:[ "gamemode-dungeoncrawling" ]
                                    },{
                                        code:"y",
                                        label:{
                                            IT:"Escludi avventure non tradotte",
                                            EN:"Exclude untranslated quests",ES:"Excluir aventuras no traducidas",
                                            FR:"Exclure les qu&#xEA;tes non traduites"

                                        },
                                        description:{
                                            IT:"Non vengono generate le avventure non disponibili nella lingua selezionata.",
                                            EN:"Adventures not available in the selected language are not generated.",ES:"No se generan las aventuras no disponibles en el idioma seleccionado.",
                                            FR:"Les aventures non disponibles dans la langue s&#xE9;lectionn&#xE9;e ne sont pas g&#xE9;n&#xE9;r&#xE9;es."
                                        },
                                        languageExcludeTags:{
                                            IT:[ "untranslated-it" ],
                                            EN:[ "untranslated-en" ],ES:[ "untranslated-es" ],
                                            FR:[ "untranslated-fr" ]
                                        }
                                    },{
                                        ifFlag:"zombicide",
                                        isFlag:"zombicideRules",
                                        label:{
                                            IT:"Nascondi regole per Zombicide",
                                            EN:"Hide Zombicide rules",ES:"Ocultar reglas de Zombicide"

                                        },
                                        description:{
                                            IT:"Le regole comuni per giocare con le tessere di Zombicide non vengono aggiunte all'avventura.",
                                            EN:"The common rules for playing with Zombicide tiles are not added to the adventure.",ES:"Las reglas comunes para jugar con las losetas de Zombicide no se añaden a la aventura."
                                        },
                                        excludeTags:[ "quest-default-zombicide" ]
                                    },{
                                        ifNotFlag:"zombicide",
                                        isButton:true,
                                        isFlagButton:"zombicide",
                                        label:{
                                            IT:"Usa",
                                            EN:"Use",ES:"Usar"
                                        },
                                        description:{
                                            IT:"Prova ad usare alcuni componenti della serie Zombicide.",
                                            EN:"Try using some components from the Zombicide series.",ES:"Prueba a usar algunos componentes de la serie Zombicide."
                                        },
                                        message:{
                                            IT:"<p>Alcuni capitoli della serie <i>Fantasy Zombicide</i> usano tessere dalla dimensione e struttura simile a quelle usate da Massive Darkness 2. Queste includono nuove ambientazioni, spazi aperti e nuovi ostacoli ma possono risultare troppo facili o difficili da affrontare con le regole di Massive Darkness 2.</p><p>Se disponi di questi materiali e ti senti <i>molto coraggioso</i>, Massive Randomness 2 pu&ograve; usarle per generare le avventure.</p><p>Vuoi provarci?</p>",
                                            EN:"<p>Some chapters in the <i>Fantasy Zombicide</i> series use tiles with a similar size and structure to those used in Massive Darkness 2. These include new environments, open spaces, and new obstacles but may be too easy or difficult to deal with the Massive Darkness 2 rules.</p><p>If you have these materials and are feeling <i>very brave</i>, Massive Randomness 2 can use them to generate adventures.</p><p>Do you want to try it?</p>",ES:"<p>Algunos capítulos de la serie <i>Fantasy Zombicide</i> usan losetas de tamaño y estructura similar a las de Massive Darkness 2. Incluyen nuevas ambientaciones, espacios abiertos y nuevos obstáculos, pero pueden resultar demasiado fáciles o difíciles de afrontar con las reglas de Massive Darkness 2.</p><p>Si dispones de estos materiales y te sientes <i>muy valiente</i>, Massive Randomness 2 puede usarlos para generar aventuras.</p><p>¿Quieres probarlo?</p>"
                                        },
                                        buttons:{
                                            yes:{
                                                IT:"Si",
                                                EN:"Yes",ES:"Sí"
                                            },
                                            no:{
                                                IT:"No",
                                                EN:"No",ES:"No"
                                            }
                                        }
                                    },{
                                        isButton:true,
                                        isInstallerButton:true,
                                        label:{
                                            IT:"Installa",
                                            EN:"Install",ES:"Instalar"
                                        },
                                        description:{
                                            IT:"Permette di usare Massive Randomness 2 offline.",
                                            EN:"Allows you to use Massive Randomness 2 offline.",ES:"Permite usar Massive Randomness 2 sin conexión."
                                        }
                                    },{
                                        isHidden:true,
                                        isCounterTrigger:true,
                                        tags:[ "quests-mr-ending" ]
                                    }
                                ]
                            }
                        ],
                        supportedLanguages:{
                            EN:"English",ES:"Español",
                            IT:"Italiano",
                            FR:"Fran&#xE7;ais"
                        },
                        labels:{                            
                            toolName:{
                                IT:"Massive Randomness 2",
                                EN:"Massive Randomness 2",ES:"Massive Randomness 2"
                            },
                            toolDescription:{
                                IT:"Un generatore casuale di avventure per Massive Darkness 2",
                                EN:"A Massive Darkness 2 random quest generator",ES:"Un generador aleatorio de aventuras para Massive Darkness 2"
                            },
                            footer:{
                                IT:"Meglio su Firefox/Chrome - {toolName} - {toolVersion} - &copy; 2024 by KesieV - Sorgenti su <a target=_blank href='{sourcesAtFull}'>{sourcesAtShort}</a>",
                                EN:"Best on Firefox/Chrome - {toolName} - {toolVersion} - &copy; 2024 by KesieV - <a target=_blank href='{discordAt}'>Discord</a> - Sources at <a target=_blank href='{sourcesAtFull}'>{sourcesAtShort}</a>",ES:"Mejor en Firefox/Chrome - {toolName} - {toolVersion} - &copy; 2024 by KesieV - Código fuente en <a target=_blank href='{sourcesAtFull}'>{sourcesAtShort}</a>"
                            },
                            notice:{
                                EN:"Massive Darkness, Zombicide, and all related properties are owned by CMON Global Limited",ES:"Massive Darkness, Zombicide y todas las propiedades relacionadas son marcas registradas de CMON Global Limited",
                                IT:"Massive Darkness, Zombicide e tutte le relative propriet&agrave; sono marchi registrati CMON Global Limited"
                            },
                            wait:{
                                IT:"Sto preparando l'avventura...",
                                EN:"Please wait...",ES:"Preparando la aventura..."
                            },
                            tooltipNewQuest:{
                                IT:"Genera una nuova avventura",
                                EN:"Generate a new quest",ES:"Genera una nueva aventura"
                            },
                            tooltipSettings:{
                                IT:"Impostazioni",
                                EN:"Settings",ES:"Ajustes"
                            },
                            languageUnavailable:{
                                IT:"Questa avventura non &egrave; disponibile in italiano. Puoi escludere le avventure non tradotte dalle opzioni.",
                                EN:"This adventure is not available in English. You can exclude untranslated adventures from the options.",ES:"Esta aventura no está disponible en español. Puedes excluir las aventuras no traducidas desde las opciones.",
                                FR:"Cette aventure n&#x27;est pas disponible en fran&#xE7;ais. Vous pouvez exclure les aventures non traduites des options."
                            },
                            questUnavailable:{
                                IT:"Spiacente. Questa avventura non &egrave; disponibile.",
                                EN:"Sorry. This adventure is not available.",ES:"Lo sentimos. Esta aventura no está disponible.",
                                FR:"D&#xE9;sol&#xE9;. Cette aventure n&#x27;est pas disponible."
                            }
                        }
                    }
                }
            ]
        }
    ]

});
