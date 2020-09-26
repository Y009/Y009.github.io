
var skill_data = {
  soft_skills : [
    {
      name : "C",
      level : "7"
    },
    {
      name : "Python",
      level : "5"
    },
    {
      name : "C#",
      level : "5"
    },
    {
      name : "HTML",
      level : "5"
    },
    {
      name : "CSS",
      level : "5"
    },
    {
      name : "JavaScript",
      level : "4"
    },
    {
      name : "Bootstrap",
      level : "4"
    },
    {
      name : "Handlebars",
      level : "5"
    },
    {
      name : "SQL",
      level : "4"
    },
    {
      name : "jQuery",
      level : "3"
    },
    {
      name : "UML",
      level : "8"
    }
  ],

  emb_skills : [
    {
      name : "NFC",
      level : ""
    },
    {
      name : "PWM",
      level : ""
    },
    {
      name : "WiFi",
      level : ""
    },
    {
      name : "I2C",
      level : ""
    },
    {
      name : "U(S)ART",
      level : ""
    },
    {
      name : "SPI",
      level : ""
    },
    {
      name : "FreeRTOS",
      level : ""
    },
    {
      name : "Power",
      level : ""
    },
    {
      name : "Ultrasound",
      level : ""
    },
    {
      name : "LED",
      level : ""
    }
  ],

  program_skills : [
    {
      name : "MS Office",
      level : ""
    },
    {
      name : "Atollic",
      level : ""
    },
    {
      name : "STM CubeMX",
      level : ""
    },
    {
      name : "LogicPort",
      level : ""
    },
    {
      name : "Git",
      level : ""
    },
    {
      name : "Jira",
      level : ""
    }
  ],

  other_skills : [
    {
      name : "Inglise keel",
      level : ""
    },
    {
      name : "Load - B BE C CE",
      level : ""
    }
  ]

};

var projects_data = {
  projects:[
  	{
  	  name : "Tarkvara projekt",
  		description : "Tarkvara projekti eesmärgiks oli luua mäng, mille žanriks on tower defense.\nMängus on mängija ülesaneks on kaitsta ühte kindlat objekti, mida ründavad lainetena kollid.Iga kolli tapmise eest saab mängija punkte ja raha uute tornide ehitamiseks ja olemaolevate täiustamiseks.\nProjekt on loodud Unity ja C#'ga.",
      previewsrc : "https://camo.githubusercontent.com/90f5739ed3f5e7834fd8708dbc5320c8d337a7de/687474703a2f2f692e696d6775722e636f6d2f5a714d4f4c4d482e676966",
      previewdesc : "Gif mängust",
      buttons : [
        {
					src : "https://github.com/Y009/IXX1410---Tarkvara---projekt",
					desc : "Github"
        }
                ],
      images : [
        {
					src : "https://i.imgur.com/Cp9Eu5N.png",
					desc : "Tühi mänguplats"
        },
        {
          src : "https://i.imgur.com/GBC14Zv.png",
          desc : "Level 1"
        },
        {
          src : "https://i.imgur.com/WiB0U83.png",
          desc : "Torni info"
        },
        {
          src : "https://i.imgur.com/HQzmgN9.png",
          desc : "Level 10 boss"
        }
                ]

  	},
    {
      name : "Riistvara projekt",
      description : "Riistvara projekti eesmärgiks oli luua riistvaraline kauguse mõõtja. See oli esimene kokkupuude sardsüsteemidega ning see tõttu on projekt ka väga lihtne. Projekt kasutas TI MSP430 launchpad'i, HC-SR04 ultrahelimoodulit ja LED ekraani. Projekt on loodud C's, kasutatud on TI DriveLibi ja dokumenteerimiseks Doxygeni.",
      previewsrc : "https://i.imgur.com/PhvU3fc.jpg",
      previewdesc : "Mõõtja kauguse numbriga",
      buttons : [
        {
          src : "https://github.com/Y009/IXX1420---Riistvara---projekt",
          desc : "Github"
        },
        {
          src : "http://www.y009.eu/usproject/",
          desc : "Dokumentatsioon"
        }
      ],
      images : [
        {
          src : "https://i.imgur.com/U3u9gqs.jpg",
          desc : "Mõõtja eestpoolt"
        }
               ]

    },
    {
      name : "Baka lõputöö",
      description : "Bakalaureuse töö eesmärgiks oli luua klassikalise Breakout mängu koopia mikrokontrolleri baasil, mille mänguväljaks said 4 LED maatriksit, shift registrite juhtimisel. Töös kasutatud alusena TI msp kontrollerit. Programmeerimise keeleks on C ja rakendatud on DriveLib library.",
      previewsrc : "https://i.imgur.com/wZxlvbc.jpg",
      previewdesc : "Sega-pundar LED maatriksitest ja juhtmetest",
      buttons : [
        {
          src : "https://github.com/Y009/IXX1430---Arvutis-steemid---projekt",
          desc : "Github"
        }
                ],
      images : [
        {
          src : "https://i.imgur.com/Ai7OBlo.jpg",
          desc : "Sega-pundar LED maatriksitest ja juhtmetest. Nurk 2."
        },
        {
          src : "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Breakout2600.svg/1280px-Breakout2600.svg.png",
          desc : "Inspiratisoon originaal mängust. By Source, Fair use, https://en.wikipedia.org/w/index.php?curid=52132637"
        }
                ]

    },
    {
      name : "Enginaator 2019",
      description : "2019 aasta Enginaatoril eelvoorus oli ülesandeks STM32 arendusplaadi põhjal luua kell. Aega oli seal küll vähe aga millegagi saime hakkama. Siin olid komponendid ette antud, tuli need õigesti ja kiiresti kokku panna, ning peale seda luua samuti ka programne osa. \nTeine osa oli luua tuulegeneraator. See osa hõlmas rohkem ka muid teadmisi - magnetvälja abil elektri tootmine, kogu süsteemi disain ja füüsilise prototüübi kiire ehitamine, tuli mõõta ka tuuliku pöörlemiskiirust HALL'i sensori abil. See sai saavutatud kergesti kasutada antud Arduino kontrolleri abil.",
      previewsrc : "../assets/img/enginaator_pic.jpg",
      previewdesc : "2. koha pilt",
      images : [
        {
          src : "../assets/img/enginaator_pic.jpg",
          desc : "2. koht 2019. Vastasmeeskond"
        }
                ]
    },
    {
      name : "Magistri lõputöö",
      description : "Magistritöö ülesandeks oli luua prototüüp õpirobot, mis hõlmaks paljusid erinevaid elemente. Robot sai loodud STM32 arendusplaadi põhjal ning hõlmab järgnevaid komponente: LCD, NFC arendusplaat, 3 servot, mootori kontroller, IMU, HALL'i sensor, WiFi moodul, ultraheli moodul, piezo kõlar ja LDO'dest koosnev pingeregulaator. Robot saab oma toite 6st akust/ või patareist. Roboti eesmärgiks on orienteeruda erinevaid komponente kasutades ette antud alal, lugeda sealt NFC siltidelt olevat infot, ning vahetada seda infot serveriga WiFi abil. Kuna tegemist oli õpiobjektiga siis oli parem kui on võimalik komponente üks haaval ise lisada, mitte lihtsalt ettevalmis loodud PCB'd lasta programmeerida. Lõpptulemus robotist kasutab FreeRTOS'i ja HAL librarysid.",
      previewsrc : "https://i.imgur.com/088wqFB.jpg",
      previewdesc : "Lõputöö, named Wall-e",
      buttons : [
        {
          src : "https://digikogu.taltech.ee/et/Item/939e8050-497e-4042-9145-a8784ac87b91",
          desc : "Digikogu"
        }
                ],
      images : [
        {
          src : "https://i.imgur.com/088wqFB.jpg",
          desc : "Lõputöö, named Wall-e"
        },
        {
          src : "https://i.imgur.com/houD6nb.png",
          desc : "Komponentide üldine ühendamine."
        },
        {
          src : "https://i.imgur.com/Al4Wf9q.png",
          desc : "Robot navigeeritaval alal."
        }
                ]
    }
]};
