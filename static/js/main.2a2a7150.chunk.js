(this["webpackJsonpjsnes-web"]=this["webpackJsonpjsnes-web"]||[]).push([[0],{38:function(e,t,a){e.exports=a(70)},48:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(12),s=a.n(n),o=a(0),r=a.n(o),i=a(14),l=a.n(i),h=a(13),m=a(10),u=(a(48),a(72));var p={ROMS:{aladdin:{name:"Aladdin 4 1996",url:"/nes/roms/Aladdin 4 1996.nes"},bomberman:{name:"Bomberman",url:"/nes/roms/Bomberman.nes"},chipndaile:{name:"Chip n Dale Rescue Rangers",url:"/nes/roms/Chip n Dale Rescue Rangers.nes"},circus:{name:"Circus Charlie",url:"/nes/roms/Circus Charlie.nes"},double_dragon:{name:"Double Dragon II - The Revenge",url:"/nes/roms/Double Dragon II - The Revenge.nes"},drmario:{name:"Dr. Mario",url:"/nes/roms/Dr. Mario.nes"},f1race:{name:"F-1 Race",url:"/nes/roms/F-1 Race.nes"},jewelry:{name:"JEWELRY",url:"/nes/roms/JEWELRY.nes"},kage:{name:"Legend of Kage",url:"/nes/roms/Legend of Kage.nes"},magicjewelry:{name:"Magic Jewelry",url:"/nes/roms/Magic Jewelry.nes"},mariomoon:{name:"Mario Moon Adventure",url:"/nes/roms/Mario Moon Adventure.nes"},pinball:{name:"Pinball",url:"/nes/roms/Pinball.nes"},popeye:{name:"Popeye",url:"/nes/roms/Popeye.nes"},popersia:{name:"Prince of Persia",url:"/nes/roms/Prince of Persia.nes"},supermario:{name:"Super Mario Bros",url:"/nes/roms/Super Mario Bros.nes"},tetris:{name:"Tetris",url:"/nes/roms/Tetris.nes"},tetris2:{name:"Tetris 2",url:"/nes/roms/Tetris2.nes"},trackfield:{name:"Track & Field",url:"/nes/roms/TrackField.nes"}}};var d={getRomInfoByHash:function(e){return this.load().find(t=>t.hash===e)},save:function(e){return function(e){return new Promise((t,a)=>{var n=new FileReader;n.onload=t,n.readAsBinaryString(e)})}(e).then((function(e){const t=e.target.result;return function(e){const t=new ArrayBuffer(e.length);for(var a=new Uint8Array(t),n=0;n<e.length;n++)a[n]=e.charCodeAt(n);return crypto.subtle.digest("SHA-1",t).then(e=>Array.from(new Uint8Array(e)).map(e=>e.toString(16).padStart(2,"0")).join(""))}(t).then(e=>({hash:e,byteString:t}))})).then(({hash:t,byteString:a})=>{const n=localStorage.getItem("savedRomInfo"),s=n?JSON.parse(n):[],o={name:e.name,hash:t,added:Date.now()},r=JSON.stringify(s.concat([o]));return localStorage.setItem("savedRomInfo",r),localStorage.setItem("blob-"+t,a),o})},load:function(){return localStorage.getItem("savedRomInfo")&&JSON.parse(localStorage.getItem("savedRomInfo"))||[]},delete:function(e){const t=this.load();localStorage.removeItem("blob-"+e),localStorage.setItem("savedRomInfo",JSON.stringify(t.filter(t=>t.hash!==e)))}};class c extends o.Component{constructor(e){super(e),this.deleteRom=e=>{d.delete(e),this.updateLibrary()},this.updateLibrary=()=>{this.setState({romLibrary:d.load()})},this.handleDragOver=e=>{e.preventDefault(),e.dataTransfer.dropEffect="copy"},this.handleDrop=e=>{e.preventDefault();const t=e.dataTransfer.items?e.dataTransfer.items[0].getAsFile():e.dataTransfer.files[0];d.save(t).then(e=>{this.updateLibrary(),this.props.history.push({pathname:"nes/run/local-"+e.hash})})},this.state={romLibrary:d.load()}}render(){return r.a.createElement("div",{className:"container ListPage my-4",onDragOver:this.handleDragOver,onDrop:this.handleDrop},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement("header",{className:"mb-4"},r.a.createElement("h1",{className:"mb-3"},"JSNES"),r.a.createElement("p",null,"A JavaScript NES emulator."," ")),r.a.createElement(u.a,{className:"mb-4"},Object.keys(p.ROMS).sort().map(e=>r.a.createElement(h.b,{key:e,to:"/nes/run/"+encodeURIComponent(e),className:"list-group-item"},p.ROMS[e].name,r.a.createElement("span",{className:"float-right"},"\u203a")))),r.a.createElement("p",null,"Or, drag and drop a ROM file onto the page to play it."),r.a.createElement("p",null,r.a.createElement("a",{href:"https://github.com/bfirsh/jsnes"},"Source on GitHub.")),this.state.romLibrary.length>0?r.a.createElement("div",null,r.a.createElement("p",null,"Previously played:"),r.a.createElement(u.a,{className:"mb-4"},this.state.romLibrary.sort((e,t)=>new Date(t.added)-new Date(e.added)).map(e=>r.a.createElement(h.b,{key:e.hash,to:"nes/run/local-"+e.hash,className:"list-group-item"},e.name,r.a.createElement("span",{onClick:t=>{t.preventDefault(),this.deleteRom(e.hash)},className:"delete",title:"Delete"},"\xd7"),r.a.createElement("span",{className:"float-right"},"\u203a"))))):null)))}}var g=c,f=a(77),y=a(78),C=a(37),b=a(79),v=a(73),B=a(74),w=a(75),T=a(76),E=a(3);class N extends o.Component{constructor(e){super(e),this.state={playerOneButton:"",playerTwoButton:"",waitingForKey:0},this.handleClick=this.handleClick.bind(this)}componentDidMount(){var e=this.props.keys,t=this.props.button,a=[];for(var n in e)1===e[n][0]&&e[n][1]===t?(a[0]=e[n][2],console.log(a[0])):2===e[n][0]&&e[n][1]===t&&(a[1]=e[n][2]);this.setState({playerOneButton:a[0],playerTwoButton:a[1]})}componentDidUpdate(e,t){var a,n,s=this.props.keys,o=this.props.button,r=[];for(var i in s)1===s[i][0]&&s[i][1]===o?(r[0]=s[i][2],console.log(r[0])):2===s[i][0]&&s[i][1]===o&&(r[1]=s[i][2]);var l=(e,t)=>e.buttons.filter(e=>e.buttonId===t)[0],h=(e,t)=>t.buttons.filter(t=>!e||!e.buttons.some(e=>e.buttonId===t.buttonId))[0],m=0,u=0,p=e=>"button"===e.type?"Btn-"+e.code:"axis"===e.type?"Axis-"+e.code+" "+e.value:void 0;if(this.props.gamepadConfig&&this.props.gamepadConfig.playerGamepadId){const t=this.props.gamepadConfig.playerGamepadId;t[0]&&(r[0]="",a=l(this.props.gamepadConfig.configs[t[0]],o),n=h(e.gamepadConfig.configs[t[0]],this.props.gamepadConfig.configs[t[0]]),a?r[0]=p(a):n&&n.buttonId===this.props.prevButton&&(m||(m=1,u=1))),t[1]&&(r[1]="",a=l(this.props.gamepadConfig.configs[t[1]],o),n=h(e.gamepadConfig.configs[t[1]],this.props.gamepadConfig.configs[t[1]]),a?r[1]=p(a):n&&n.buttonId===this.props.prevButton&&(m||(m=2,u=2)))}var d={};m&&this.props.handleClick([u,this.props.button]),t.playerOneButton===r[0]&&t.playerTwoButton===r[1]||(d.playerOneButton=r[0],d.playerTwoButton=r[1]),m?d.waitingForKey=m:1===t.waitingForKey?this.props.currentPromptButton!==this.props.button&&(d.waitingForKey=0):2===t.waitingForKey&&this.props.currentPromptButton!==this.props.button&&(d.waitingForKey=0),Object.keys(d).length>0&&this.setState(d)}handleClick(e){this.props.handleClick([e,this.props.button]),this.setState({waitingForKey:e})}render(){return r.a.createElement("tr",null,r.a.createElement("td",null,this.props.buttonName),r.a.createElement("td",{onClick:()=>this.handleClick(1)},1===this.state.waitingForKey?"Press key or button...":this.state.playerOneButton),r.a.createElement("td",{onClick:()=>this.handleClick(2)},2===this.state.waitingForKey?"Press key or button...":this.state.playerTwoButton))}}var k=N;const S="../img/nes_controller.png";class D extends o.Component{constructor(e){super(e),this.state={gamepadConfig:e.gamepadConfig,keys:e.keys,button:void 0,modified:!1},this.handleKeyDown=this.handleKeyDown.bind(this),this.handleGamepadButtonDown=this.handleGamepadButtonDown.bind(this),this.listenForKey=this.listenForKey.bind(this),this.state.gamepadConfig=this.state.gamepadConfig||{},this.state.gamepadConfig.playerGamepadId=this.state.gamepadConfig.playerGamepadId||[null,null],this.state.gamepadConfig.configs=this.state.gamepadConfig.configs||{},this.state.controllerIcon=this.state.gamepadConfig.playerGamepadId.map(e=>e?S:"../img/keyboard.png"),this.state.controllerIconAlt=this.state.gamepadConfig.playerGamepadId.map(e=>e?"gamepad":"keyboard"),this.state.currentPromptButton=-1}componentWillUnmount(){this.state.modified&&(this.props.setKeys(this.state.keys),this.props.setGamepadConfig(this.state.gamepadConfig)),this.removeKeyListener()}listenForKey(e){var t=e[1];this.removeKeyListener(),this.setState({button:e,currentPromptButton:t}),this.props.promptButton(this.handleGamepadButtonDown),document.addEventListener("keydown",this.handleKeyDown)}handleGamepadButtonDown(e){this.removeKeyListener();var t=this.state.button;const a=t[0],n=t[1],s=e.gamepadId,o=this.state.gamepadConfig,r=o.playerGamepadId.slice(0),i={};r[a-1]=s;const l={code:e.code,type:e.type,buttonId:n,value:e.value};i[s]={buttons:(o.configs[s]||{buttons:[]}).buttons.filter(e=>e.buttonId!==n).concat([l])};const h=Object.assign({},o.configs,i);this.setState({gamepadConfig:{configs:h,playerGamepadId:r},currentPromptButton:-1,controllerIcon:r.map(e=>e?S:"../img/keyboard.png"),modified:!0})}handleKeyDown(e){this.removeKeyListener();var t=this.state.button,a=this.state.keys,n={};for(var s in a)a[s][0]===t[0]&&a[s][1]===t[1]||(n[s]=a[s]);const o=this.state.gamepadConfig.playerGamepadId.slice(0);o[t[0]-1]=null,this.setState({keys:Object(C.a)({},n,{[e.keyCode]:[...t.slice(0,2),e.key.length>1?e.key:String(e.key).toUpperCase()]}),button:void 0,gamepadConfig:{configs:this.state.gamepadConfig.configs,playerGamepadId:o},currentPromptButton:-1,controllerIcon:o.map(e=>e?S:"../img/keyboard.png"),controllerIconAlt:o.map(e=>e?"gamepad":"keyboard"),modified:!0})}removeKeyListener(){this.props.promptButton(null),document.removeEventListener("keydown",this.handleKeyDown)}render(){return r.a.createElement(b.a,{isOpen:this.props.isOpen,toggle:this.props.toggle,className:"ControlsModal"},r.a.createElement(v.a,{toggle:this.props.toggle},"Controls"),r.a.createElement(B.a,null,r.a.createElement(w.a,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Button"),r.a.createElement("th",null,"Player 1",r.a.createElement("img",{className:"controller-icon",src:this.state.controllerIcon[0],alt:this.state.controllerIconAlt[0]})),r.a.createElement("th",null,"Player 2",r.a.createElement("img",{className:"controller-icon",src:this.state.controllerIcon[1],alt:this.state.controllerIconAlt[1]})))),r.a.createElement("tbody",null,r.a.createElement(k,{buttonName:"Left",currentPromptButton:this.state.currentPromptButton,button:E.Controller.BUTTON_LEFT,prevButton:E.Controller.BUTTON_SELECT,keys:this.state.keys,handleClick:this.listenForKey,gamepadConfig:this.state.gamepadConfig}),r.a.createElement(k,{buttonName:"Right",currentPromptButton:this.state.currentPromptButton,button:E.Controller.BUTTON_RIGHT,prevButton:E.Controller.BUTTON_LEFT,keys:this.state.keys,handleClick:this.listenForKey,gamepadConfig:this.state.gamepadConfig}),r.a.createElement(k,{buttonName:"Up",currentPromptButton:this.state.currentPromptButton,button:E.Controller.BUTTON_UP,prevButton:E.Controller.BUTTON_RIGHT,keys:this.state.keys,handleClick:this.listenForKey,gamepadConfig:this.state.gamepadConfig}),r.a.createElement(k,{buttonName:"Down",currentPromptButton:this.state.currentPromptButton,button:E.Controller.BUTTON_DOWN,prevButton:E.Controller.BUTTON_UP,keys:this.state.keys,handleClick:this.listenForKey,gamepadConfig:this.state.gamepadConfig}),r.a.createElement(k,{buttonName:"A",currentPromptButton:this.state.currentPromptButton,button:E.Controller.BUTTON_A,prevButton:E.Controller.BUTTON_DOWN,keys:this.state.keys,handleClick:this.listenForKey,gamepadConfig:this.state.gamepadConfig}),r.a.createElement(k,{buttonName:"B",currentPromptButton:this.state.currentPromptButton,button:E.Controller.BUTTON_B,prevButton:E.Controller.BUTTON_A,keys:this.state.keys,handleClick:this.listenForKey,gamepadConfig:this.state.gamepadConfig}),r.a.createElement(k,{buttonName:"Start",currentPromptButton:this.state.currentPromptButton,button:E.Controller.BUTTON_START,prevButton:E.Controller.BUTTON_B,keys:this.state.keys,handleClick:this.listenForKey,gamepadConfig:this.state.gamepadConfig}),r.a.createElement(k,{buttonName:"Select",currentPromptButton:this.state.currentPromptButton,button:E.Controller.BUTTON_SELECT,prevButton:E.Controller.BUTTON_START,keys:this.state.keys,handleClick:this.listenForKey,gamepadConfig:this.state.gamepadConfig})))),r.a.createElement(T.a,null,r.a.createElement(f.a,{outline:!0,color:"primary",onClick:this.props.toggle},"Close")))}}var I=D;class O{constructor(e){this.onAnimationFrame=e=>{this.requestAnimationFrame();let t=e%this.interval,a=e-t;if(!this.lastFrameTime)return void(this.lastFrameTime=a);let n=Math.round((a-this.lastFrameTime)/this.interval);if(0===n)return;this.generateFrame(),this.onWriteFrame();let s=this.interval-t;for(let o=1;o<n;o++)setTimeout(()=>{this.generateFrame()},o*s/n);n>1&&console.log("SKIP",n-1,this.lastFrameTime)},this.onGenerateFrame=e.onGenerateFrame,this.onWriteFrame=e.onWriteFrame,this.onAnimationFrame=this.onAnimationFrame.bind(this),this.running=!0,this.interval=1e3/60.098,this.lastFrameTime=!1}start(){this.running=!0,this.requestAnimationFrame()}stop(){this.running=!1,this._requestID&&window.cancelAnimationFrame(this._requestID),this.lastFrameTime=!1}requestAnimationFrame(){this._requestID=window.requestAnimationFrame(this.onAnimationFrame)}generateFrame(){this.onGenerateFrame(),this.lastFrameTime+=this.interval}}class F{constructor(e){this.disableIfGamepadEnabled=e=>{var t=this;return(a,n)=>{if(!t.gamepadConfig)return e(a,n);var s=t.gamepadConfig.playerGamepadId;return s&&s[a-1]?void 0:e(a,n)}},this._getPlayerNumberFromGamepad=e=>this.gamepadConfig.playerGamepadId[0]===e.id?1:this.gamepadConfig.playerGamepadId[1]===e.id?2:1,this.poll=()=>{const e=navigator.getGamepads?navigator.getGamepads():navigator.webkitGetGamepads(),t=[];for(let a=0;a<e.length;a++){const n=e[a],s=this.gamepadState[a];if(!n)continue;if(!s){this.gamepadState[a]=n;continue}const o=n.buttons,r=s.buttons;if(this.buttonCallback){for(let e=0;e<n.axes.length;e++){const t=n.axes[e],a=s.axes[e];-1===t&&-1!==a&&this.buttonCallback({gamepadId:n.id,type:"axis",code:e,value:t}),1===t&&1!==a&&this.buttonCallback({gamepadId:n.id,type:"axis",code:e,value:t})}for(let e=0;e<o.length;e++){const t=o[e],a=r[e];t.pressed&&!a.pressed&&this.buttonCallback({gamepadId:n.id,type:"button",code:e})}}else if(this.gamepadConfig){let e=this._getPlayerNumberFromGamepad(n);if(t.length<2&&(-1!==t.indexOf(e)&&(e++,e>2&&(e=1)),t.push(e),this.gamepadConfig.configs[n.id])){const t=this.gamepadConfig.configs[n.id].buttons;for(let a=0;a<t.length;a++){const i=t[a];if("button"===i.type){const t=i.code,a=o[t],n=r[t];a.pressed&&!n.pressed?this.onButtonDown(e,i.buttonId):!a.pressed&&n.pressed&&this.onButtonUp(e,i.buttonId)}else if("axis"===i.type){const t=i.code,a=n.axes[t],o=s.axes[t];a===i.value&&o!==i.value&&this.onButtonDown(e,i.buttonId),a!==i.value&&o===i.value&&this.onButtonUp(e,i.buttonId)}}}}this.gamepadState[a]={buttons:o.map(e=>({pressed:e.pressed})),axes:n.axes.slice(0)}}},this.promptButton=e=>{this.buttonCallback=e?t=>{this.buttonCallback=null,e(t)}:e},this.loadGamepadConfig=()=>{var e;try{(e=localStorage.getItem("gamepadConfig"))&&(e=JSON.parse(e))}catch(t){console.log("Failed to get gamepadConfig from localStorage.",t)}this.gamepadConfig=e},this.setGamepadConfig=e=>{try{localStorage.setItem("gamepadConfig",JSON.stringify(e)),this.gamepadConfig=e}catch(t){console.log("Failed to set gamepadConfig in localStorage")}},this.startPolling=()=>{if(!navigator.getGamepads&&!navigator.webkitGetGamepads)return{stop:()=>{}};let e=!1;const t=()=>{e||(this.poll(),requestAnimationFrame(t))};return requestAnimationFrame(t),{stop:()=>{e=!0}}},this.onButtonDown=e.onButtonDown,this.onButtonUp=e.onButtonUp,this.gamepadState=[],this.buttonCallback=null}}const U={88:[1,E.Controller.BUTTON_A,"X"],89:[1,E.Controller.BUTTON_B,"Y"],90:[1,E.Controller.BUTTON_B,"Z"],17:[1,E.Controller.BUTTON_SELECT,"Right Ctrl"],13:[1,E.Controller.BUTTON_START,"Enter"],38:[1,E.Controller.BUTTON_UP,"Up"],40:[1,E.Controller.BUTTON_DOWN,"Down"],37:[1,E.Controller.BUTTON_LEFT,"Left"],39:[1,E.Controller.BUTTON_RIGHT,"Right"],103:[2,E.Controller.BUTTON_A,"Num-7"],105:[2,E.Controller.BUTTON_B,"Num-9"],99:[2,E.Controller.BUTTON_SELECT,"Num-3"],97:[2,E.Controller.BUTTON_START,"Num-1"],104:[2,E.Controller.BUTTON_UP,"Num-8"],98:[2,E.Controller.BUTTON_DOWN,"Num-2"],100:[2,E.Controller.BUTTON_LEFT,"Num-4"],102:[2,E.Controller.BUTTON_RIGHT,"Num-6"]};class P{constructor(e){this.loadKeys=()=>{var e;try{(e=localStorage.getItem("keys"))&&(e=JSON.parse(e))}catch(t){console.log("Failed to get keys from localStorage.",t)}this.keys=e||U},this.setKeys=e=>{try{localStorage.setItem("keys",JSON.stringify(e)),this.keys=e}catch(t){console.log("Failed to set keys in localStorage")}},this.handleKeyDown=e=>{var t=this.keys[e.keyCode];t&&(this.onButtonDown(t[0],t[1]),e.preventDefault())},this.handleKeyUp=e=>{var t=this.keys[e.keyCode];t&&(this.onButtonUp(t[0],t[1]),e.preventDefault())},this.handleKeyPress=e=>{e.preventDefault()},this.onButtonDown=e.onButtonDown,this.onButtonUp=e.onButtonUp}}a(66);class x extends o.Component{constructor(...e){super(...e),this.setBuffer=e=>{for(var t=0,a=0;a<240;++a)for(var n=0;n<256;++n)t=256*a+n,this.buf32[t]=4278190080|e[t]},this.writeBuffer=()=>{this.imageData.data.set(this.buf8),this.context.putImageData(this.imageData,0,0)},this.fitInParent=()=>{let e=this.canvas.parentNode,t=e.clientWidth,a=e.clientHeight;256/240<t/a?(this.canvas.style.width="".concat(Math.round(a*(256/240)),"px"),this.canvas.style.height="".concat(a,"px")):(this.canvas.style.width="".concat(t,"px"),this.canvas.style.height="".concat(Math.round(t/(256/240)),"px"))},this.handleMouseDown=e=>{if(!this.props.onMouseDown)return;let t=256/parseFloat(this.canvas.style.width),a=this.canvas.getBoundingClientRect(),n=Math.round((e.clientX-a.left)*t),s=Math.round((e.clientY-a.top)*t);this.props.onMouseDown(n,s)}}render(){return r.a.createElement("canvas",{className:"Screen",width:256,height:240,onMouseDown:this.handleMouseDown,onMouseUp:this.props.onMouseUp,ref:e=>{this.canvas=e}})}componentDidMount(){this.initCanvas()}componentDidUpdate(){this.initCanvas()}initCanvas(){this.context=this.canvas.getContext("2d"),this.imageData=this.context.getImageData(0,0,256,240),this.context.fillStyle="black",this.context.fillRect(0,0,256,240),this.buf=new ArrayBuffer(this.imageData.data.length),this.buf8=new Uint8ClampedArray(this.buf),this.buf32=new Uint32Array(this.buf);for(var e=0;e<this.buf32.length;++e)this.buf32[e]=4278190080}screenshot(){var e=new Image;return e.src=this.canvas.toDataURL("image/png"),e}}var R=x,M=a(36),A=a.n(M);const K=(e,t)=>{console.error(e),s.a.captureException(e,{extra:t})};class G{constructor({onBufferUnderrun:e}){this.writeSample=(e,t)=>{this.buffer.size()/2>=this.bufferSize&&(console.log("Buffer overrun"),this.buffer.deqN(this.bufferSize/2)),this.buffer.enq(e),this.buffer.enq(t)},this.onaudioprocess=e=>{var t=e.outputBuffer.getChannelData(0),a=e.outputBuffer.getChannelData(1),n=t.length;this.buffer.size()<2*n&&this.onBufferUnderrun&&this.onBufferUnderrun(this.buffer.size(),2*n);try{var s=this.buffer.deqN(2*n)}catch(e){var o=this.buffer.size()/2;o>0&&console.log("Buffer underrun (needed ".concat(n,", got ").concat(o,")"));for(var r=0;r<n;r++)t[r]=0,a[r]=0;return}for(var i=0;i<n;i++)t[i]=s[2*i],a[i]=s[2*i+1]},this.onBufferUnderrun=e,this.bufferSize=8192,this.buffer=new A.a(2*this.bufferSize)}getSampleRate(){if(!window.AudioContext)return 44100;let e=new window.AudioContext,t=e.sampleRate;return e.close(),t}start(){window.AudioContext&&(this.audioCtx=new window.AudioContext,this.scriptNode=this.audioCtx.createScriptProcessor(1024,0,2),this.scriptNode.onaudioprocess=this.onaudioprocess,this.scriptNode.connect(this.audioCtx.destination))}stop(){this.scriptNode&&(this.scriptNode.disconnect(this.audioCtx.destination),this.scriptNode.onaudioprocess=null,this.scriptNode=null),this.audioCtx&&(this.audioCtx.close().catch(K),this.audioCtx=null)}}class L extends o.Component{constructor(...e){super(...e),this.start=()=>{this.frameTimer.start(),this.speakers.start(),this.fpsInterval=setInterval(()=>{console.log("FPS: ".concat(this.nes.getFPS()))},1e3)},this.stop=()=>{this.frameTimer.stop(),this.speakers.stop(),clearInterval(this.fpsInterval)}}render(){return r.a.createElement(R,{ref:e=>{this.screen=e},onGenerateFrame:()=>{this.nes.frame()},onMouseDown:(e,t)=>{this.nes.zapperMove(e,t),this.nes.zapperFireDown()},onMouseUp:()=>{this.nes.zapperFireUp()}})}componentDidMount(){this.fitInParent(),this.speakers=new G({onBufferUnderrun:(e,t)=>{this.props.paused||(console.log("Buffer underrun, running another frame to try and catch up"),this.frameTimer.generateFrame(),this.speakers.buffer.size()<t&&(console.log("Still buffer underrun, running a second frame"),this.frameTimer.generateFrame()))}}),this.nes=new E.NES({onFrame:this.screen.setBuffer,onStatusUpdate:console.log,onAudioSample:this.speakers.writeSample,sampleRate:this.speakers.getSampleRate()}),window.nes=this.nes,this.frameTimer=new O({onGenerateFrame:s.a.wrap(this.nes.frame),onWriteFrame:s.a.wrap(this.screen.writeBuffer)}),this.gamepadController=new F({onButtonDown:this.nes.buttonDown,onButtonUp:this.nes.buttonUp}),this.gamepadController.loadGamepadConfig(),this.gamepadPolling=this.gamepadController.startPolling(),this.keyboardController=new P({onButtonDown:this.gamepadController.disableIfGamepadEnabled(this.nes.buttonDown),onButtonUp:this.gamepadController.disableIfGamepadEnabled(this.nes.buttonUp)}),this.keyboardController.loadKeys(),document.addEventListener("keydown",this.keyboardController.handleKeyDown),document.addEventListener("keyup",this.keyboardController.handleKeyUp),document.addEventListener("keypress",this.keyboardController.handleKeyPress),this.nes.loadROM(this.props.romData),this.start()}componentWillUnmount(){this.stop(),document.removeEventListener("keydown",this.keyboardController.handleKeyDown),document.removeEventListener("keyup",this.keyboardController.handleKeyUp),document.removeEventListener("keypress",this.keyboardController.handleKeyPress),this.gamepadPolling.stop(),window.nes=void 0}componentDidUpdate(e){this.props.paused!==e.paused&&(this.props.paused?this.stop():this.start())}fitInParent(){this.screen.fitInParent()}}var _=L;a(67);class q extends o.Component{constructor(e){super(e),this.load=()=>{if(this.props.match.params.slug){const e=this.props.match.params.slug,t=/^local-/.test(e),a=e.split("-")[1],n=t?d.getRomInfoByHash(a):p.ROMS[e];if(!n)return void this.setState({error:"No such ROM: ".concat(e)});if(t){this.setState({romName:n.name});const e=localStorage.getItem("blob-"+a);this.handleLoaded(e)}else this.setState({romName:n.description}),this.currentRequest=function(e,t,a){var n=new XMLHttpRequest;return n.open("GET",e),n.overrideMimeType("text/plain; charset=x-user-defined"),n.onload=function(){if(200===this.status){if(n.responseText.match(/^<!doctype html>/i))return t(new Error("Page not found"));t(null,this.responseText)}else 0===this.status||t(new Error(n.statusText))},n.onerror=function(){t(new Error(n.statusText))},n.onprogress=a,n.send(),n}(n.url,(e,t)=>{e?this.setState({error:"Error loading ROM: ".concat(e.message)}):this.handleLoaded(t)},this.handleProgress)}else if(this.props.location.state&&this.props.location.state.file){let e=new FileReader;e.readAsBinaryString(this.props.location.state.file),e.onload=t=>{this.currentRequest=null,this.handleLoaded(e.result)}}else this.setState({error:"No ROM provided"})},this.handleProgress=e=>{e.lengthComputable&&this.setState({loadedPercent:e.loaded/e.total*100})},this.handleLoaded=e=>{this.setState({running:!0,loading:!1,romData:e})},this.handlePauseResume=()=>{this.setState({paused:!this.state.paused})},this.layout=()=>{let e=parseFloat(window.getComputedStyle(this.navbar).height);this.screenContainer.style.height="".concat(window.innerHeight-e,"px"),this.emulator&&this.emulator.fitInParent()},this.toggleControlsModal=()=>{this.setState({controlsModalOpen:!this.state.controlsModalOpen})},this.state={romName:null,romData:null,running:!1,paused:!1,controlsModalOpen:!1,loading:!0,loadedPercent:3,error:null}}render(){return r.a.createElement("div",{className:"RunPage"},r.a.createElement("nav",{className:"navbar navbar-expand",ref:e=>{this.navbar=e}},r.a.createElement("ul",{className:"navbar-nav",style:{width:"200px"}},r.a.createElement("li",{className:"navitem"},r.a.createElement(h.b,{to:"/nes",className:"nav-link"},"\u2039 Back"))),r.a.createElement("ul",{className:"navbar-nav ml-auto mr-auto"},r.a.createElement("li",{className:"navitem"},r.a.createElement("span",{className:"navbar-text mr-3"},this.state.romName))),r.a.createElement("ul",{className:"navbar-nav",style:{width:"200px"}},r.a.createElement("li",{className:"navitem"},r.a.createElement(f.a,{outline:!0,color:"primary",onClick:this.toggleControlsModal,className:"mr-3"},"Controls"),r.a.createElement(f.a,{outline:!0,color:"primary",onClick:this.handlePauseResume,disabled:!this.state.running},this.state.paused?"Resume":"Pause")))),this.state.error?this.state.error:r.a.createElement("div",{className:"screen-container",ref:e=>{this.screenContainer=e}},this.state.loading?r.a.createElement(y.a,{value:this.state.loadedPercent,style:{position:"absolute",width:"70%",left:"15%",top:"48%"}}):this.state.romData?r.a.createElement(_,{romData:this.state.romData,paused:this.state.paused,ref:e=>{this.emulator=e}}):null,this.state.controlsModalOpen&&r.a.createElement(I,{isOpen:this.state.controlsModalOpen,toggle:this.toggleControlsModal,keys:this.emulator.keyboardController.keys,setKeys:this.emulator.keyboardController.setKeys,promptButton:this.emulator.gamepadController.promptButton,gamepadConfig:this.emulator.gamepadController.gamepadConfig,setGamepadConfig:this.emulator.gamepadController.setGamepadConfig})))}componentDidMount(){window.addEventListener("resize",this.layout),this.layout(),this.load()}componentWillUnmount(){window.removeEventListener("resize",this.layout),this.currentRequest&&this.currentRequest.abort()}}var J=q;a(68);class z extends o.Component{constructor(e){super(e),this.state={error:null}}render(){return this.state.error?r.a.createElement("div",{className:"container my-4"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-md-8"},"Oops - there has been an error. It has been logged to the console."))):r.a.createElement(h.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(m.a,{exact:!0,path:"/",component:g}),r.a.createElement(m.a,{exact:!0,path:"/nes",component:g}),r.a.createElement(m.a,{exact:!0,path:"/run",component:J}),r.a.createElement(m.a,{exact:!0,path:"/nes/run",component:J}),r.a.createElement(m.a,{exact:!0,path:"/nes/run/:slug",component:J}),r.a.createElement(m.a,{exact:!0,path:"/run/:slug",component:J})))}componentDidCatch(e,t){this.setState({error:e}),K(e,t)}}var W=z;a(69);s.a.context((function(){l.a.render(r.a.createElement(W,null),document.getElementById("root"))}))}},[[38,1,2]]]);
//# sourceMappingURL=main.2a2a7150.chunk.js.map