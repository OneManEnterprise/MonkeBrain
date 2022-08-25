let doc, bdy, hed, con
const d = doc = document
const b = bdy = document.body
const h = hed = document.head
const c = con = console

const wait = ms => new Promise(resolve => setTimeout(resolve, ms))
const play = q => d.querySelector(q).play()

const setEv = (el, ev, fun) => el.addEventListener(ev, fun)
const addClass = (el, clazz) => el.classList.add(clazz)
const delClass = (el, clazz) => el.classList.remove(clazz)
const addcss = css => h.appendChild(d.createElement("style")).innerHTML=css;
const outlineCss = ".outline{outline:green solid 5px}"
const highlightCss = ".highlight{border: red 1px solid;}"

const qSelect = q => d.querySelector(q)
const qSelectAll = q => d.querySelectorAll(q)

//const isArrayOneElement = array => array.length == 1
const flat = obj => [...obj]
//const getElementsArray = tag => flat(qSelectAll(tag))
const getElementsArray = tag => [...qSelectAll(tag)]
const filterText = (el, txt) => el.textContent.toUpperCase().includes(txt)
const filterHref = (el, href) => el.href.toUpperCase().includes(href)
const filterSrc = (el, src) => el.src.toUpperCase().includes(src)
const getElementsByText = (tag, txt) => getElementsArray(tag).filter(filterText(txt))
const getElementsByHref = (tag, href) => getElementsArray(tag).filter(filterHref(href))
const getElementsBySrc = (tag, src) => getElementsArray(tag).filter(filterSrc(src))
function getElementByText(tag, txt){
    let elsArr = getElementsByText(tag, txt)
    let el = ambiguousArray(elsArr)
    return el
}
function getElementByHref(tag, href){
    let elsArr = getElementsByHref(tag, href)
    let el = ambiguousArray(elsArr)
    return el
}
function getElementBySrc(tag, src){
    let elsArr = getElementsBySrc(tag, src)
    let el = ambiguousArray(elsArr)
    return el
}
function ambiguousArray(arr){
    if(arr.length != 1) throw "AMBIGUOUS RESULTS"
    return arr[0]
}

let isDebug = false
let isMenuVisible = false

const screenshot = (tag = "*", q = "#printscreen") => html2canvas(document.querySelector("*")).then(canvas => document.querySelector(q).appendChild(canvas))
const toggleDebug = _ => isDebug = document.querySelector("#inToggleDebug").checked
const toggleShowHide = (q, isHidden) => document.querySelector(q).setAttribute("style", "visibility:" + (isHidden ? "visible": "hidden"))
function toggleMenu(){
    isMenuVisible = !isMenuVisible
    toggleShowHide("#divToggledMenu", isMenuVisible)
}

document.querySelectorAll(".clipboard").forEach(el => el.addEventListener("click", clipboard))
function clipboard(){
    let coinAddrMap = new Map()
    coinAddrMap.set("ZCASH", "t1XmjzKxe1ndY6sruWrBu828j4XESfq22FA")
    coinAddrMap.set("DASH", "Xbnj3vtVXUnEye8ERBaR2M7dXj8fysnVCo")
    coinAddrMap.set("LITECOIN", "MSgS1PYbQD54h1d4as7VZHRpvtNnPdCUDT")
    coinAddrMap.set("SOLANA", "3knrCxQPrjaDrX87uAbGmzLL2GcEGAntddeQWqAwCTuY")
    coinAddrMap.set("BITCOINCASH", "qzcpvtkka6tnvvvp88qtnmz33kmgf79r9slrtvy82s")
    coinAddrMap.set("DOGECOIN", "D8TKc74V8jFzBFuWpxKyYdaCRRBUxmzjEz")
    coinAddrMap.set("TRON", "0x2fA59Be2Ee252675937e453C5324De1F8849eDb3")
    coinAddrMap.set("BINANCE", "0xAD57fc27a2cF924d4F847298bac75fF65864c9b7")
    coinAddrMap.set("BITCOIN", "3QcD5ZTyWFE6zn8A7KKwn4HLRq5k2dhbuS")
    coinAddrMap.set("FEYORRA", "0xAD57fc27a2cF924d4F847298bac75fF65864c9b7")
    coinAddrMap.set("ETHEREUM", "0x2fA59Be2Ee252675937e453C5324De1F8849eDb3")
    navigator.clipboard.writeText(coinAddrMap.get(this.value))
}

//scriptHtmlInjector("https://html2canvas.hertzen.com/dist/html2canvas.min.js")
function scriptHtmlInjector(scriptSrc = "htmlInjector.js"){
    let scriptHtmlInjector = document.createElement("script")
    scriptHtmlInjector.src = scriptSrc
    document.head.append(scriptHtmlInjector)
}

//floatMenu()
function floatMenu(){
    document.querySelector("#inToggleMenu").addEventListener("click", toggleMenu)
    document.querySelector("#inToggleDebug").addEventListener("change", toggleDebug)
    document.querySelector("#btnScreenshot").addEventListener("click", screenshot)
}
    
    
//CRYPTO ADDRESSES
const ADDR_ZCASH = "t1XmjzKxe1ndY6sruWrBu828j4XESfq22FA"
const ADDR_DASH = "Xbnj3vtVXUnEye8ERBaR2M7dXj8fysnVCo"
const ADDR_LITECOIN = "MSgS1PYbQD54h1d4as7VZHRpvtNnPdCUDT"
const ADDR_SOLANA = "3knrCxQPrjaDrX87uAbGmzLL2GcEGAntddeQWqAwCTuY"
const ADDR_BITCOINCASH = "qzcpvtkka6tnvvvp88qtnmz33kmgf79r9slrtvy82s"
const ADDR_DOGECOIN = "D8TKc74V8jFzBFuWpxKyYdaCRRBUxmzjEz"
const ADDR_TRON = "0x2fA59Be2Ee252675937e453C5324De1F8849eDb3" // wrong addr but goes to fp anyway
const ADDR_BINANCE = "0xAD57fc27a2cF924d4F847298bac75fF65864c9b7"
const ADDR_BITCOIN = "3QcD5ZTyWFE6zn8A7KKwn4HLRq5k2dhbuS"
const ADDR_FEYORRA = "0xAD57fc27a2cF924d4F847298bac75fF65864c9b7"
const ADDR_ETHEREUM = "0x2fA59Be2Ee252675937e453C5324De1F8849eDb3"
//FAUCETPAY WITHDRAWAL
const FEES = {
    ZEC: 0.00000500, // 0.0005 cents
    DSH: 0.00005000, // 0.002 cents
    LTC: 0.00005000, // 0.003 cents
    SOL: 0.00050000, // 0.03 cents
    BCH: 0.00010000, // 0.02 cents
    DOG: 1.00000000, // 0.09 cents
    TRX: 2.00000000, // 0.17 cents
    BNB: 0.00064000, // 0.19 cents TRY
    BTC: 0.00001000, // 0.29 cents
    FEY: 1000.00000, // 2.525 eur
    ETH: 0.01000000, // 19.81 eur
    USD: 0.01000000, // unknown
    DGB: 0.01000000, // unknown
}

//CRYPTO ACR
const ZEC = "ZEC"
const DSH = "DSH"
const LTC = "LCT"
const SOL = "SOL"
const BCH = "BCH"
const DOG = "DOG"
const TRX = "TRX"
const BNB = "BNB"
const BTC = "BTC"
const FEY = "FEY"
const ETH = "ETH"
//CRYPTO COIN
const COIN_ZEC = "ZCASH"
const COIN_BCH = "BITCOINCASH"
const COIN_BTC = "BITCOIN"
const COIN_DSH = "DASH"
const COIN_DOG = "DOGECOIN"
const COIN_ETH = "ETHEREUM"
const COIN_LTC = "LITECOIN"
const COIN_SOL = "SOLANA"
const COIN_BNB = "BINANCE"
const COIN_FEY = "FEYORRA"
const COIN_TRX = "TRON"
//CRYPTO ASSOC
let coinMap = new Map([
    [ZEC, ADDR_ZCASH],
    [DSH, ADDR_DASH],
    [LTC, ADDR_LITECOIN],
    [SOL, ADDR_SOLANA],
    [BCH, ADDR_BITCOINCASH],
    [DOG, ADDR_DOGECOIN],
    [TRX, ADDR_TRON],
    [BNB, ADDR_BINANCE],
    [BTC, ADDR_BITCOIN],
    [FEY, ADDR_FEYORRA],
    [ETH, ADDR_ETHEREUM],
    [COIN_ZEC, ADDR_ZCASH],
    [COIN_DSH, ADDR_DASH],
    [COIN_LTC, ADDR_LITECOIN],
    [COIN_SOL, ADDR_SOLANA],
    [COIN_BCH, ADDR_BITCOINCASH],
    [COIN_DOG, ADDR_DOGECOIN],
    [COIN_TRX, ADDR_TRON],
    [COIN_BNB, ADDR_BINANCE],
    [COIN_BTC, ADDR_BITCOIN],
    [COIN_FEY, ADDR_FEYORRA],
    [COIN_ETH, ADDR_ETHEREUM]
])
function includesCoin(str){
    str = str.toUpperCase()
    if(str.includes(BTC)) return BTC
    if(str.includes(BCH)) return BCH
    if(str.includes(DSH)) return DSH
    if(str.includes(DOG)) return DOG
    if(str.includes(ETH)) return ETH
    if(str.includes(LTC)) return LTC
    if(str.includes(SOL)) return SOL
    if(str.includes(ZEC)) return ZEC
    if(str.includes(BNB)) return BNB
    if(str.includes(FEY)) return FEY
    if(str.includes(TRX)) return TRX
    if(str.includes("BITCOIN") && string.includes("CASH")) return BCH
    if(str.includes(COIN_BTC)) return BTC
    if(str.includes(COIN_DSH)) return DSH
    if(str.includes(COIN_DOG)) return DOG
    if(str.includes(COIN_ETH)) return ETH
    if(str.includes(COIN_LTC)) return LTC
    if(str.includes(COIN_SOL)) return SOL
    if(str.includes(COIN_ZEC)) return ZEC
    if(str.includes(COIN_BNB)) return BNB
    if(str.includes(COIN_FEY)) return FEY
    if(str.includes(COIN_TRX)) return TRX
}
