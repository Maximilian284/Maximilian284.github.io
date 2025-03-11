const text = document.getElementById("bestemmia-text")
const button = document.getElementById("bestemmia-btn")
let godOnly = false

button.addEventListener("click", () => {
    let timeout = 1000

    if (text.innerText !== "") {
        text.classList.remove("animate__zoomIn")
        text.classList.add("animate__bounceOutDown")
    } else {
        timeout = 0
    }
    
    setTimeout(() => {
        text.innerText = bestemmiaGenerator()
        text.classList.add("animate__zoomIn")
    }, timeout)
})

const soggetti = [
    "Dio", "Madonna", "San Giuseppe", "San Gennaro", "Cristo", "Padre Pio", "La Vergine Maria"
]

const soggettiFemminili = ["Madonna", "La Vergine Maria"]

const aggettivi = [
    "incandescente", "radioattivo", "a reazione nucleare", "scivoloso", "fluorescente",
    "in HD", "pixelato", "turbo", "iperattivo", "5G", "ancestrale", "epilettico",
    "cibernetico", "paranormale", "frattale", "quantistico", "sotterraneo", "affumicato",
    "invisibile", "sopra le righe", "warp-speed", "turbo-cristallizzato", "pixelart",
    "magnetico", "esplosivo", "da competizione", "in 4K HDR", "stroboscopico", "iperluminale",
    "troia", "puttana", "coglione", "merda", "bastardo", "lurido", "infame",
    "succhiacazzi", "figlio di puttana", "stronzo", "pezzo di merda", "culo flaccido",
    "fottuto", "ritardato", "schifoso", "lebbroso", "deforme", "merdoso", "bue impestato", 
    "cesso ambulante", "incestuoso", "drogato", "masturbatore seriale",
    "incenerito", "vibrante", "pseudo-scientifico", "bioluminescente", "irrispettoso",
    "serpentesco", "gonfiato", "sovrumano", "frizzante", "amplificato", "spaziale", "patologico", 
    "delirante", "monstruoso", "apocalittico", "futuristico", "catastrofico", "ipnotico", 
    "oltraggioso", "scandaloso", "psichedelico"
]

const situazioni = [
    "sopra un trattore", "nella nebbia di Milano", "mentre beve un caffè", "sotto effetto placebo",
    "con il WiFi lento", "bloccato nel traffico", "con il Green Pass scaduto", "nel metaverso",
    "nel deep web", "in una puntata di Uomini e Donne", "dentro un NFT", "durante una conferenza su Zoom",
    "senza più giga", "in un universo parallelo", "con la batteria al 2%", "dentro un 747",
    "durante il Festival di Sanremo", "con la pizza con l’ananas", "prima dell'11 Settembre",
    "sullo sfondo di Windows XP", "bloccato nel limbo del parcheggio del centro commerciale",
    "con l’IVA al 22%", "a bordo di un treno regionale in ritardo", "nella schermata di caricamento di GTA Online",
    "durante il loading su Netflix", "con l’oroscopo negativo", "nel deepfake di un video anni ‘80",
    "dopo il viaggio in Messico", "che litiga con un senzatetto", "in giro con dei maranza",
    "sopra una montagna russa", "in una partita di Fortnite", "mentre scivola su una buccia di banana",
    "dentro una macchina del tempo", "con la batteria del telefono morta", "in una discussione su Twitter",
    "nel retro di un fast food", "in un karaoke distrutto dal rumore", "a mangiare un gelato che si scioglie",
    "in una stanza piena di zanzare", "mentre si fa una doccia fredda", "nel bel mezzo di un blackout", 
    "mentre naviga su Internet Explorer", "con una sveglia che suona in continuazione",
    "con le scarpe rotte", "a cercare di decifrare un menù in cinese", "in un horror anni '90",
    "mentre fa la fila al supermercato", "al buio in un tunnel", "con il Wi-Fi che si disconnette ogni minuto",
    "mentre tenta di passare il test di guida", "con 1 grammo di cocaina in tasca", "mentre copia un esame universitario",
    "con due razzi al posto delle gambe", "mentre cerca di fare un selfie con un orso", "sotto il pontos",
    "mentre duetta con Tony Effe"
]

const cambiaAggettivoFemminile = (aggettivo) => {
    if (aggettivo.endsWith("o")) return aggettivo.slice(0, -1) + "a"
    if (aggettivo.endsWith("e")) return aggettivo
    return aggettivo
};

const bestemmiaGenerator = () => {
    const soggetto = godOnly ? "Dio" : soggetti[Math.floor(Math.random() * soggetti.length)]

    let aggettivo = aggettivi[Math.floor(Math.random() * aggettivi.length)]
    if (soggettiFemminili.includes(soggetto)) {
        aggettivo = cambiaAggettivoFemminile(aggettivo)
    }

    let bestemmia = `${soggetto} ${aggettivo}`

    if (Math.random() < 0.66) {
        const situazione = situazioni[Math.floor(Math.random() * situazioni.length)]
        bestemmia += ` ${situazione}`
    }

    return bestemmia;
};
