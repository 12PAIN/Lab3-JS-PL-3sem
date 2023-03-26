
function Browser(name, version){
    let Browser = {
        name: name,
        version: version,
    }

    function aboutBrowser(){
            
        for(item in this){

            if(typeof(this[item]) != "function") console.log (item + ": " + this[item]);
        }

    }

    Browser.aboutBrowser = aboutBrowser.bind(Browser);

    return Browser;
}

let myBrowser = new Browser("Microsoft Internet Explorer", "9.0");

console.log(myBrowser);
myBrowser.aboutBrowser();