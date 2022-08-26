let doc, bdy, hed, con
const d = doc = document
const b = bdy = document.body
const h = hed = document.head
const c = con = console

const wait = ms => new Promise(resolve => setTimeout(resolve, ms))
const play = q => qSelect(q).play()

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
function getElementsByText(tag, txt){
    let txtFilter = filterText(txt)
    let elsArr = getElementsArray(tag)
    let filterArr = elsArr.filter(txtFilter)
    return filterArr
}
function getElementsByHref(tag, href){
    let hrefFilter = filterHref(href)
    let elsArr = getElementsArray(tag)
    let filterArr = elsArr.filter(hrefFilter)
    return filterArr
}
function getElementsBySrc(tag, src){
    let srcFilter = filterSrc(src)
    let elsArr = getElementsArray(tag)
    let filterArr = elsArr.filter(srcFilter)
    return filterArr
}
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

const screenshot = (tag = "*", q = "#printscreen") => html2canvas(qSelect("*")).then(canvas => qSelect(q).appendChild(canvas))
const toggleDebug = _ => isDebug = qSelect("#inToggleDebug").checked
const toggleShowHide = (q, isHidden) => qSelect(q).setAttribute("style", "visibility:" + (isHidden ? "visible": "hidden"))
function toggleMenu(){
    isMenuVisible = !isMenuVisible
    toggleShowHide("#divToggledMenu", isMenuVisible)
}

qSelectAll(".clipboard").forEach(el => el.addEventListener("click", clipboard))
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
    let scriptHtmlInjector = doc.createElement("script")
    scriptHtmlInjector.src = scriptSrc
    hed.append(scriptHtmlInjector)
}

//floatMenu()
function floatMenu(){
    qSelect("#inToggleMenu").addEventListener("click", toggleMenu)
    qSelect("#inToggleDebug").addEventListener("change", toggleDebug)
    qSelect("#btnScreenshot").addEventListener("click", screenshot)
}

//SELECTORS
const Q_BTN = "button"
const Q_IN = "input"
const Q_ADDR = "[name='address']"
const Q_SUB = "[type='submit']"
const Q_TXT = "[type='text']"

//QUERIES
const Q_HCAPTCHA = "iframe[data-hcaptcha-widget-id]"
const Q_BTN_SUB = Q_BTN + Q_SUB
const Q_IN_SUB = Q_IN + Q_SUB

//IDS
const Q_ID_SUB = "#submit"

//CLASSES
const Q_SUCCESS = ".success"
const Q_WARN = ".warn"

//TIME
const MILLI = 1000
const SECOND = 1 * MILLI
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE

//WAITS
const WAIT_HCAPTCHA = 5 * SECOND
const WAIT_ELEMENT = 3 * SECOND

//DEFAULTS
const ORIGIN = window.location.origin
const DAY = new Date(Date.now()).getDate()
const STARTUP_TIME = performance.now()
//const STORAGE_ID = 986296337813487616
const STORAGE_API = "https://jsonblob.com/api/jsonBlob/"
//////////////////////////////////////////////////////

//VARS
//let isTracing = true
let isDebugging = true
let isDebugLogging = true
let startupOk = false
let endupOk = false
let updateOk = false
let scriptOk = false
let scriptSuccess = false
let scriptAlert = false
let scriptEndup = false
let scriptPassed = false

let CURRENT_OBJ = {}
let CURRENT_OBJS = {}
//let WEBSITE_OBJ = {}
let WEBSITE_OBJS = {}
//let STORED_OBJ = {}
let STORED_OBJS = {}
let NEXT_OBJ = {}
const DEFAULT_WEBSITE_OBJ = {
    claims:0,
    lastclaim:-1,
    maxclaims:Number.MAX_SAFE_INTEGER,
    cooldown:-1,
    day:DAY,
    coin:BTC,
}

function checkAlerts(){
    if(qSelectAll(Q_SUCCESS).length > 0) scriptSuccess = true
    if(qSelectAll(Q_WARN).length > 0) scriptAlert = true

    warn("scriptSuccess:", scriptSuccess)
    warn("scriptAlert:", scriptAlert)
}
async function scriptAlertsHandler(passFunc = () => log("default pass"), failFunc = () => log("default fail"), endFunc = () => log("default end") ){
    //scrapes .sucess or .warn classes
    checkAlerts()

    if(scriptSuccess) await passFunc()
    if(scriptAlert) await failFunc()
    if(scriptSuccess || scriptAlert) await endFunc()
}
async function scriptHandler(websiteScript){
    //gets the previous executions data stored remotely
    await getStoredData()
    log("STORED_OBJS", STORED_OBJS)

    //checks if is going to use past data or default data
    await startup()
    log("startupOk:", startupOk)

    //the website specific instructions
    if(startupOk) await websiteScript()
    log("scriptOk:", scriptOk)

    //updates data based on execution and moves to next website
    if(scriptOk || scriptSuccess || scriptAlert) await endup()
    log("endupOk:", endupOk)
}

function startup(){
    //updates execution data based on stored data if is recent
    updateLocalData()
    log("updateOk:", updateOk)

    //updates data with default parameters in case of old/null stored data
    if(!updateOk) {
        CURRENT_OBJ = WEBSITE_OBJS[ORIGIN]
        populateObj(CURRENT_OBJ)
    }
    log("CURRENT_OBJ:", CURRENT_OBJ)

    //is it possible to run the website script or is in cooldown/max
    if(!canClaim()) return
    startupOk = true
}
async function endup(){
    //updates stored data with this execution
    if(scriptOk || scriptSuccess) updateExecution()

    await storeData()

    //determines the best next website to goto
    await gotoNextWebsite()
}

async function getStoredData(){
    await getPromisedJSON().then( (result) => {STORED_OBJS = JSON.parse(result)} ).catch( (reason) => error("reason:", reason))
    updateStoredData()
}
function updateStoredData(){
    CURRENT_OBJS = STORED_OBJS
    if(CURRENT_OBJS[ORIGIN]) CURRENT_OBJ = CURRENT_OBJS[ORIGIN]
}
async function storeData(jsonObject = CURRENT_OBJS){
    await setPromisedJSON(JSON.stringify(jsonObject))
        .then( (result) => log("result:", result))
        .catch( (reason) => error("reason:", reason))
}
function updateLocalData(){
    if(!CURRENT_OBJ) return
    if(!isDataRecent(CURRENT_OBJ.day)) return
    updateOk = true
}

function populateObj(objToPopulate = CURRENT_OBJ, objPopulator = DEFAULT_WEBSITE_OBJ){
    Object.entries(objPopulator).forEach(objPopulatorEntry => updateEntry(objPopulatorEntry, objToPopulate))
}
async function updateCurrentObjs(){
    await Object.entries(CURRENT_OBJS).forEach(entry => updateEntry(entry, CURRENT_OBJS) )
    await Object.entries(CURRENT_OBJS).forEach(entry => updateWithDefaultvalues(CURRENT_OBJS, entry[0]) )
}
function updateEntry(entry, objToUpdate){
    let entryKey = entry[0]
    if(!objToUpdate[entryKey])objToUpdate[entryKey] = entry[1]
}
function updateWithDefaultvalues(objsToUpdate, objEntry){
    Object.entries(DEFAULT_WEBSITE_OBJ).forEach(defaultEntry => updateEntry(defaultEntry, objsToUpdate[objEntry]))
}

function getPromisedJSON(jsonID = 986296337813487600){
    return new Promise(function (resolve, reject) {
        let xhttp = new XMLHttpRequest()
        let url = STORAGE_API + jsonID

        //xhttp.responseType = 'json'
        xhttp.open('GET', url, true)
        xhttp.onload = function () {
            let status = xhttp.status
            if (status == 200) resolve(xhttp.responseText)
            else reject(status)
        }
        xhttp.send()
    })
}
async function setPromisedJSON(jsonString, jsonID =986296337813487600, resolve = (response) => log("setJSON resolved:", response), reject = (status) => error("setJSON rejected:", status) ){
    let promise = await new Promise(function (resolve, reject) {
        let xhttp = new XMLHttpRequest()
        let url = STORAGE_API + jsonID
        xhttp.open('PUT', url, true)
        //xhttp.responseType = 'json'
        xhttp.setRequestHeader("Content-type", "application/json")

        xhttp.onload = function () {
            let status = xhttp.status
            let response = xhttp.responseText
            if (status == 200)resolve(response)
            else reject(status)
        }
        xhttp.send(jsonString)
    })
    return promise
}

async function gotoNextWebsite(){
    await getNextObj()
    log("NEXT_OBJ:", NEXT_OBJ)

    while(!confirm() && isDebugging) {await wait(SECOND); debugger}

    await(5 * SECOND)
    window.location.href = NEXT_OBJ
}
async function getNextObj(){
    let nextObj = filterSortObj()
    while(!nextObj){
        warn("waiting for next for: 1 minute")
        await wait(MINUTE)
        nextObj = filterSortObj()
    }
    NEXT_OBJ = nextObj
}

function filterObject(obj, callback) {return Object.fromEntries(Object.entries(obj).filter(([key, val]) => callback(val, key)))}
function filterSortObj(objs = CURRENT_OBJS){
    const FILTERED_OBJS = filterObject(objs, filterClaims)
    debug("FILTERED_OBJS:", FILTERED_OBJS)

    if(Object.entries(FILTERED_OBJS).length == 0) return
    return getFirstSorted(FILTERED_OBJS, sortClaims)
}
function sortClaims(obj){return -obj.cooldown}
function filterClaims(obj){
    const NOT_MAX = obj.maxclaims > obj.claims
    const NOT_COOLDOWN = obj.lastclaim == -1 || Date.now() - obj.lastclaim > obj.cooldown * MINUTE
    return NOT_MAX && NOT_COOLDOWN
}
function getFirstSorted(obj, callback){
    const SORTED = Object.entries(obj).sort(([key, val]) => callback(val, key))
    const FIRST_SORTED = SORTED[0]
    return FIRST_SORTED[0]
}

function elapsedTime(startTimer){return Math.round((Date.now() - startTimer))}
function isDataRecent(day = CURRENT_OBJ.day){return day == DAY}
function isClaimTime(obj = CURRENT_OBJ){return obj.lastclaim < 0 ? true : elapsedTime(obj.lastclaim) > obj.cooldown}
function canClaim(obj = CURRENT_OBJ){return obj.claims >= obj.maxclaims ? false : isClaimTime(obj)}
function updateExecution(obj = CURRENT_OBJ){
    obj.lastclaim = Date.now()
    obj.claims += 1
    obj.day = DAY
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
function log(msg, obj = ""){console.log("%c[LOG]", "color:green", msg, obj)}
function info(msg, obj = ""){console.info("%c[INFO]", "color:cyan", msg, obj)}
function debug(msg, obj = ""){console.debug("%c[DEBUG]", "color:blue", msg, obj)}
function warn(msg, obj = ""){console.warn("%c[WARN]", "color:yellow", msg, obj)}
function error(msg, obj = ""){console.error("%c[ERROR]", "color:red", msg, obj)}
function trace(msg, obj = ""){console.trace("%c[TRACE]", "color:pink", msg, obj)}
function table(msg, obj = ""){console.table(msg)}
//let logLevel = ALL

//const debugging = () => {if(isDebugging) debugger}
//const debugFunc = async () => {while(!confirm && isDebugging) await wait(SECOND)}

async function waitHCaptcha(){
    const HCAPTCHA = await qqSelect(Q_HCAPTCHA)
    while(HCAPTCHA.getAttribute("data-hcaptcha-response").length < 1){
        warn("waiting hcaptcha response " + WAIT_HCAPTCHA/MILLI + "s")
        await wait(WAIT_HCAPTCHA)
    }
}

function optionSelect(value){qSelect("option[value=" + value + "]").selected = true}
function qsubmit(query){qSelect(query).submit()}
function qqsubmit(query){qqSelect(query).then(element => element.submit() ) }
function qclick(query){qSelect(query).click()}
function qqclick(query){qqSelect(query).then(element => {element.click()})}
function qSelect(query){return document.querySelector(query)}
function qSelectAll(query){return document.querySelectorAll(query)}
async function qqSelect(query){
    let element
    while(!element){
        element = qSelect(query)
        if(element) break
        else await wait(WAIT_ELEMENT)
    }
    debug("element:", element)
    return element
}

function triggerEvent(el, type) {
    try{
        let ev = document.createEvent('HTMLEvents')
        ev.initEvent(type, false, true)
        el.dispatchEvent(ev)
    }catch(ex){
        error(ex)
    }
}
function triggerClick(query){
    let el = document.querySelector(query)
    triggerEvent(el,'mousedown')
    triggerEvent(el,'mouseup')
    el.click()
}

async function textSubmit(textValue){
    await inputText(textValue)
    await triggerClick(Q_SUB)
}
async function inputText(value){
    let addr = qSelect(Q_TXT)
    addr.value = value
}

String.prototype.nthLastIndexOf = function(searchString, n){
    if(this === null) return -1
    //if(typeof(this) != "string") return -1
    if(!n || isNaN(n) || n <= 1) return this.lastIndexOf(searchString)
    return this.lastIndexOf(searchString, this.nthLastIndexOf(searchString, --n) - 1)
};
    
    
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
