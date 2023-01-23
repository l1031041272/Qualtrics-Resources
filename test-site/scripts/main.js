console.log("633")

window.onload = init;
//设置js代码在DOM模型完全加载之后才开始运行；否则会无法访问元素.
function handleButtonClick() {
    alert("按钮被点击了！");
}
//创建按钮点击函数；函数体中为按钮被点击时发生的事件.
function init() {
    var button = document.getElementById("likeButton");
    console.log("533")
    button.onclick = c;
}
/*使用getElementById访问元素得到元素句柄，使用.onclick属性
	使handleButtonClick函数在按钮被点击时运行*/

function c(){
    let indexLibrary = null;
    const serverURL = "localhost://41080";
    const debug = false;
    const modelPath = "https://cdn.jsdelivr.net/gh/l1031041272/Qualtrics-Resources@master/test-site/dist/Resources/Hiyori_2/Hiyori2.model3.json";

    /*ページが読み込まれたときに実行するJavaScriptをここに配置してください*/

    // const cssLink = document.createElement("link");
    // const cssPlace = document.getElementById("cssPlace");
    // // <link id="PageStyleSheet" rel="stylesheet" href="Style1.css" />
    // cssLink.href = "https://cdn.jsdelivr.net/gh/hyokonbanwa/InteractiveValueResources@809b43115db7ba562ae76cf2d3fffe9cff2d3bba/" + "css/SectionOmote.css";
    // cssLink.rel = "stylesheet";
    // cssPlace.appendChild(cssLink);



    console.log("133")

    console.log("233")
    //背景色
    //const jfe = document.querySelector(".JFE");
    //jfe.classList.add("bg-danger");
    //次ボタンを隠す
    //this.hideNextButton();
    //https://cdn.jsdelivr.net/gh/GifuTaro/InteractiveValueResources@main/css/SectionOmote.css
    //https://cdn.jsdelivr.net/gh/hyokonbanwa/InteractiveValueResources@314b41d7013a67b7460c1aba0509061ce9d85607/
    const requiredResources = [
        "https://cubism.live2d.com/sdk-web/cubismcore/live2dcubismcore.min.js",
        "https://cdn.jsdelivr.net/gh/dylanNew/live2d/webgl/Live2D/lib/live2d.min.js",
        //"https://cdn.jsdelivr.net/gh/edu-053/AgentInteractionResources@ddd90da306fdbaff6b5ad71d120cd2e7343d9a2d/js/IndexLibraryPerfectPrefarence2.js",
        "https://cdn.jsdelivr.net/gh/l1031041272/Qualtrics-Resources@master/test-site/dist/js/IndexLibrary.js",
    ];
    console.log("333")
    const loadScript = (idx) => {
        console.log("Loading ", requiredResources[idx]);
        jQuery.getScript(requiredResources[idx], function () {
            if (idx + 1 < requiredResources.length) {
                loadScript(idx + 1);
            } else {
                initExp();
            }
        });
    };

    const initExp = () => {
        //550, 900, 0.235, 0, -20 モデル全身/
        //550, 700, 0.45, 0, 500 モデル顔中心
        //225, 350, 0.25, 0, 250
        const position = {
            boxWidth: 550,
            boxHeight: 700,
            modelScale: 0.4,
            modelX: 0,
            modelY: 500,
        };

        //インスタンス作成＆DOMLoad操作
        console.log("ロード");
        indexLibrary = new IndexLibrary(debug, modelPath, position);
        //indexLibrary = new IndexLibrary(debug, serverURL,modelPath, position);
        indexLibrary.onload();
    };



    console.log("スクリプト読み込み");
    loadScript(0);

    /*ページが読み込まれたときに実行するJavaScriptをここに配置してください*/
}