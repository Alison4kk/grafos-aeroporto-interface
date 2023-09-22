(function(){"use strict";var t={2244:function(t,e,o){var i=o(9242),s=o(3396),r=o(7139);const n={class:"container"},a={class:"row"},d={class:"col-12 col-lg-7 d-flex align-items-center justify-content-center"},c={class:"col-12 col-lg-5"},l={class:"h-100 shadow-lg p-4 animate__animated animate__zoomInDown"},p={class:""},u={class:"mb-3 w-100"},h=(0,s._)("label",{for:"inputStart",class:"form-label"},"Partida",-1),A={class:"mb-3 w-100"},v=(0,s._)("label",{for:"inputStart",class:"form-label"},"Destino",-1),g=["disabled"],f={key:0},m=(0,s._)("br",null,null,-1);function P(t,e,o,i,P,S){const y=(0,s.up)("map-viewer"),R=(0,s.up)("ModelSelect"),M=(0,s.up)("loading-state"),O=(0,s.up)("empty-state"),C=(0,s.up)("RouteTable");return(0,s.wg)(),(0,s.iD)("div",n,[(0,s._)("div",a,[(0,s._)("div",d,[(0,s.Wm)(y,{class:"animate__animated animate__fadeIn animate__delay-1s",airports:t.airports,connections:t.connections,regionColors:t.regionColors,activeRoute:t.activeRoute,"selected-option-start":t.selectedOptionStart,"selected-option-end":t.selectedOptionEnd,onSetStartAirport:t.setOptionStartAirport,onSetEndAirport:t.setOptionEndAirport},null,8,["airports","connections","regionColors","activeRoute","selected-option-start","selected-option-end","onSetStartAirport","onSetEndAirport"])]),(0,s._)("div",c,[(0,s._)("div",l,[(0,s._)("div",p,[(0,s._)("div",u,[h,(0,s.Wm)(R,{options:t.airportOptionsStart,class:"w-100",modelValue:t.selectedOptionStart,"onUpdate:modelValue":e[0]||(e[0]=e=>t.selectedOptionStart=e)},null,8,["options","modelValue"])]),(0,s._)("div",A,[v,(0,s.Wm)(R,{options:t.airportOptionsEnd,class:"w-100",modelValue:t.selectedOptionEnd,"onUpdate:modelValue":e[1]||(e[1]=e=>t.selectedOptionEnd=e)},null,8,["options","modelValue"])])]),(0,s._)("button",{disabled:!t.canpickRoutes,onClick:e[2]||(e[2]=(...e)=>t.pickRoutes&&t.pickRoutes(...e)),class:"btn btn-primary w-100"}," Montar Rota ",8,g),t.airportRoutes.length&&!t.isLoadingRoutes?((0,s.wg)(),(0,s.iD)("div",f,[(0,s._)("p",null,[(0,s.Uk)("Qtd de Rotas: "+(0,r.zw)(t.calculatedPathsCount),1),m,(0,s.Uk)(" Tempo de Calculo: "+(0,r.zw)(t.calculatedTime),1)])])):(0,s.kq)("",!0),t.isLoadingRoutes?((0,s.wg)(),(0,s.j4)(M,{key:1,class:"mt-5 animate__animated animate__zoomIn animate__faster"})):(0,s.kq)("",!0),t.airportRoutes.length||t.isLoadingRoutes?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(O,{key:2,class:"mt-4"})),t.airportRoutes.length?((0,s.wg)(),(0,s.j4)(C,{key:3,airportRoutes:t.airportRoutes,onActiveRouteSelect:t.setActiveRoute},null,8,["airportRoutes","onActiveRouteSelect"])):(0,s.kq)("",!0)])])])])}o(7658);var S=o(2682),y=JSON.parse('{"$1":[{"id":"RS1","x":308,"y":507,"description":"Aeroporto Internacional de Porto Alegre / Salgado Filho"},{"id":"RS2","x":323,"y":557,"description":"Aeroporto Regional de Caxias do Sul / Hugo Cantergiani"},{"id":"SC1","x":373,"y":491,"description":"Aeroporto Internacional de Florianópolis / Hercílio Luz"},{"id":"SC2","x":330,"y":482,"description":"Aeroporto Internacional de Navegantes / Ministro Victor Konder"},{"id":"PR1","x":322,"y":447,"description":"Aeroporto Internacional de Curitiba / Afonso Pena"},{"id":"PR2","x":358,"y":453,"description":"Aeroporto Regional de Maringá / Silvio Name"},{"id":"SP1","x":380,"y":422,"description":"Aeroporto Internacional de São Paulo / Congonhas"},{"id":"SP2","x":420,"y":442,"description":"Aeroporto Internacional de Viracopos / Campinas"},{"id":"SP3","x":393,"y":456,"description":"Aeroporto Internacional de São Paulo/Guarulhos-Governador André Franco Motoro"},{"id":"SP4","x":394,"y":399,"description":"Aeroporto Estadual de Presidente Prudente"},{"id":"SP5","x":360,"y":402,"description":"Aeroporto Estadual de Bauru/Arealva"},{"id":"MG1","x":376,"y":374,"description":"Aeroporto Internacional de Minas Gerais / Confins – Tancredo Neves"},{"id":"MG2","x":462,"y":374,"description":"Aeroporto de Montes Claros/Mário Ribeiro"},{"id":"MG3","x":432,"y":331,"description":"Aeroporto de Uberlândia / Ten. Cel. Av. César Bombonato"},{"id":"RJ1","x":458,"y":426,"description":"Aeroporto Internacional do Rio de Janeiro / Galeão-Antônio Carlos Jobim"},{"id":"RJ2","x":486,"y":430,"description":"Aerorporto Santos Dumont"},{"id":"RJ3","x":502,"y":416,"description":"Aeroporto Internacional de Cabo Frio"},{"id":"ES1","x":513,"y":390,"description":"Aeroporto de Vitória – Eurico de Aguiar Salles"},{"id":"MS1","x":308,"y":398,"description":"Aeroporto Internacional de Campo Grande"},{"id":"GO1","x":355,"y":348,"description":"Aeroporto de Goiânia / Santa Genoveva"},{"id":"GO2","x":374,"y":304,"description":"Aeroporto Internacional de Brasília / Presidente Jucelino Kubitschek"},{"id":"DF1","x":398,"y":324,"description":"Aeroporto Internacional de Manaus / Eduardo Gomes"},{"id":"MT1","x":272,"y":272,"description":"Aeroporto Internacional de Cuiabá / Marechal Rondon"},{"id":"BA1","x":460,"y":271,"description":"Aeroporto Internacional de Salvador / Deputado Luis Eduardo Magalhães"},{"id":"BA2","x":491,"y":296,"description":"Aeroporto Internacional de Porto Seguro"},{"id":"PI1","x":450,"y":222,"description":"Aeroporto de Teresina – Senador Petrônio Portella"},{"id":"SE1","x":554,"y":257,"description":"Aeroporto Internacional de Aracaju / Santa Maria"},{"id":"AL1","x":572,"y":240,"description":"Aeroporto de Maceió / Zumbi dos Palmares"},{"id":"PB1","x":569,"y":201,"description":"Aeroporto Internacional de João Pessoa / Presidente Castro Pinto"},{"id":"PE1","x":569,"y":218,"description":"Aeroporto Internacional do Recife/ Guararapes – Gilberto Freyre"},{"id":"PE2","x":510,"y":216,"description":"Aeroporto de Petrolina / Senador Nilo Coelho"},{"id":"RN1","x":558,"y":184,"description":"Aeroporto Internacional de Natal / Augusto Severo"},{"id":"MA1","x":438,"y":158,"description":"Aeroporto Internacional de São Luís / Marechal Cunha Machado"},{"id":"CE1","x":520,"y":156,"description":"Aeroporto Internacional de Fortaleza / Pinto Martins"},{"id":"CE2","x":511,"y":188,"description":"Aeroporto de Juazeiro do Norte – Orlando Bezerra"},{"id":"AM1","x":133,"y":142,"description":"Aeroporto Internacional de Manaus / Eduardo Gomes"},{"id":"AP1","x":336,"y":84,"description":"Aeroporto Internacional de Macapá"},{"id":"RO1","x":180,"y":230,"description":"Aeroporto Internacional de Porto Velho / Governador Jorge Teixeira de Oliveira"},{"id":"RR1","x":206,"y":78,"description":"Aeroporto Internacional de Boa Vista / Atlas Brasil Cantanhede"},{"id":"TO1","x":391,"y":246,"description":"Aeroporto de Palmas/Brigadeiro Lysias Rodrigues"},{"id":"AC1","x":84,"y":239,"description":"Aeroporto Internacional de Rio Branco / Plácido de Castro"},{"id":"PA1","x":332,"y":196,"description":"Aeroporto Internacional de Belém / Val de Cans"}],"I_":[{"ids":["RS1","RS2"],"cost":0},{"ids":["RS1","SC1"],"cost":0},{"ids":["SC1","SC2"],"cost":0},{"ids":["SC1","PR2"],"cost":0},{"ids":["PR2","PR1"],"cost":0},{"ids":["PR2","SP3"],"cost":0},{"ids":["SP3","SP2"],"cost":0},{"ids":["SP2","SP1"],"cost":0},{"ids":["SP2","RJ1"],"cost":0},{"ids":["SP2","SP4"],"cost":0},{"ids":["SP4","MG2"],"cost":0},{"ids":["SP4","SP5"],"cost":0},{"ids":["RJ1","RJ2"],"cost":0},{"ids":["RJ2","RJ3"],"cost":0},{"ids":["RJ3","ES1"],"cost":0},{"ids":["ES1","MG2"],"cost":0},{"ids":["MG2","RJ2"],"cost":0},{"ids":["MG2","RJ3"],"cost":0},{"ids":["MG2","MG1"],"cost":0},{"ids":["MG2","MG3"],"cost":0},{"ids":["MG2","BA2"],"cost":0},{"ids":["MG1","SP5"],"cost":0},{"ids":["MG1","MG3"],"cost":0},{"ids":["MG1","DF1"],"cost":0},{"ids":["MG1","GO1"],"cost":0},{"ids":["MG1","MS1"],"cost":0},{"ids":["ES1","BA2"],"cost":0},{"ids":["ES1","MG3"],"cost":0},{"ids":["MG3","BA2"],"cost":0},{"ids":["MG3","DF1"],"cost":0},{"ids":["MG3","BA1"],"cost":0},{"ids":["BA2","SE1"],"cost":0},{"ids":["BA2","BA1"],"cost":0},{"ids":["BA1","SE1"],"cost":0},{"ids":["BA1","PI1"],"cost":0},{"ids":["BA1","PE2"],"cost":0},{"ids":["BA1","TO1"],"cost":0},{"ids":["PE2","AL1"],"cost":0},{"ids":["SE1","AL1"],"cost":0},{"ids":["AL1","PE1"],"cost":0},{"ids":["PE1","PB1"],"cost":0},{"ids":["PB1","RN1"],"cost":0},{"ids":["PE2","PE1"],"cost":0},{"ids":["PE2","CE2"],"cost":0},{"ids":["PE2","PI1"],"cost":0},{"ids":["CE2","PB1"],"cost":0},{"ids":["CE2","CE1"],"cost":0},{"ids":["CE2","MA1"],"cost":0},{"ids":["CE2","PI1"],"cost":0},{"ids":["PB1","AP1"],"cost":0},{"ids":["RN1","AP1"],"cost":0},{"ids":["RN1","CE1"],"cost":0},{"ids":["CE1","PI1"],"cost":0},{"ids":["CE1","AP1"],"cost":0},{"ids":["MA1","PI1"],"cost":0},{"ids":["MA1","TO1"],"cost":0},{"ids":["MA1","AP1"],"cost":0},{"ids":["MA1","PA1"],"cost":0},{"ids":["TO1","MT1"],"cost":0},{"ids":["TO1","PA1"],"cost":0},{"ids":["TO1","AP1"],"cost":0},{"ids":["GO1","MS1"],"cost":0},{"ids":["GO1","GO2"],"cost":0},{"ids":["GO1","MT1"],"cost":0},{"ids":["GO2","DF1"],"cost":0},{"ids":["GO2","MT1"],"cost":0},{"ids":["MT1","RO1"],"cost":0},{"ids":["MT1","AC1"],"cost":0},{"ids":["MT1","AM1"],"cost":0},{"ids":["MT1","AP1"],"cost":0},{"ids":["MT1","PA1"],"cost":0},{"ids":["PA1","AP1"],"cost":0},{"ids":["AP1","RR1"],"cost":0},{"ids":["RR1","AM1"],"cost":0},{"ids":["AC1","AM1"],"cost":0},{"ids":["AC1","RO1"],"cost":0}],"sL":[{"ids":["SC","RS","PR"],"color":"#D5E8D4"},{"ids":["SP","RJ","ES","MG"],"color":"#FFF2CC"},{"ids":["BA","PI","PE","SE","AL","PE","PB","RN","CE","MA"],"color":"#F8CECC"},{"ids":["MS","GO","DF","MT"],"color":"#D0CEE2"},{"ids":["RO","AM","AC","RR","AP","PA","TO"],"color":"#FFE6CC"}]}');const R={class:"d-flex flex-column justify-content-center align-items-center"},M=(0,s._)("img",{src:"img/loading.gif",alt:""},null,-1),O=(0,s._)("p",null,"Carregando...",-1),C=[M,O];function x(t,e){return(0,s.wg)(),(0,s.iD)("div",R,C)}var E=o(89);const b={},_=(0,E.Z)(b,[["render",x]]);var w=_;const G={class:"py-2"},I={class:"form-floating mb-3"},T=(0,s._)("label",{for:"inputSearch"},"Buscar...",-1),k=["onMouseover"];function D(t,e,o,n,a,d){const c=(0,s.up)("EasyDataTable");return(0,s.wg)(),(0,s.iD)("div",G,[(0,s._)("div",I,[(0,s.wy)((0,s._)("input",{type:"text",class:"form-control",id:"inputSearch",placeholder:"Buscar...","onUpdate:modelValue":e[0]||(e[0]=e=>t.searchValue=e)},null,512),[[i.nr,t.searchValue]]),T]),(0,s.Wm)(c,{headers:t.headers,items:t.routes,"search-field":"path","search-value":t.searchValueDebouced,"rows-per-page":10,"buttons-pagination":"",alternating:""},{"item-path":(0,s.w5)((({path:o})=>[(0,s._)("div",{onMouseover:e=>t.$emit("activeRouteSelect",o),onMouseleave:e[1]||(e[1]=e=>t.$emit("activeRouteSelect",[])),class:"route-item"},(0,r.zw)(o),41,k)])),_:1},8,["headers","items","search-value"])])}var B=o(814),V=o(354),J=o.n(V);const q=[{text:"Pos.",value:"pos",sortable:!0},{text:"Distancia",value:"distance"},{text:"Caminho",value:"path"}];var L=(0,s.aZ)({props:{airportRoutes:{required:!0,type:Array}},data(){return{headers:q,searchValue:"",searchValueDebouced:"",updateSearchValue:null}},computed:{routes(){return this.airportRoutes.map((t=>t))}},mounted(){this.updateSearchValue=J()((()=>{this.searchValueDebouced=this.searchValue}),200)},directives:{tippy:B.XM},watch:{searchValue(){"function"==typeof this.updateSearchValue&&this.updateSearchValue()}}});const $=(0,E.Z)(L,[["render",D]]);var F=$,j=o.p+"img/mapa-brasil.884d5862.svg";const N={class:""},Z={ref:"map-image",id:"map-image",src:j,width:"600",height:"600",alt:""},z={class:"p-1"},U={class:"text-center"},H={class:"d-flex gap-2 mt-2"},K=["onClick"],W=["onClick"];function X(t,e,o,i,n,a){const d=(0,s.up)("tippy");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("div",N,[(0,s._)("div",{ref:"map-container",id:"map-container",class:(0,r.C_)({"showing-active-route":t.activeRoute.length}),onMouseup:e[0]||(e[0]=e=>t.draggingAirport=null),onMousemove:e[1]||(e[1]=(...e)=>t.moveDraggingAirport&&t.moveDraggingAirport(...e))},[(0,s._)("img",Z,null,512),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.airports,((e,o)=>((0,s.wg)(),(0,s.j4)(d,{style:(0,r.j5)({left:`${e.x}px`,top:`${e.y}px`,"background-color":t.airportColors[e.id]}),class:(0,r.C_)(["airport",{"selected-end":e.id===t.selectedOptionEnd.value,"selected-start":e.id===t.selectedOptionStart.value}]),key:o,onMousedown:o=>t.draggingAirport=e,tag:"div","content-tag":"span","content-class":"airport",interactive:""},{default:(0,s.w5)((()=>[(0,s.Uk)((0,r.zw)(e.id),1)])),content:(0,s.w5)((()=>[(0,s._)("div",z,[(0,s._)("div",U,(0,r.zw)(e.description),1),(0,s._)("div",H,[(0,s._)("button",{class:"btn btn-set-start btn-sm flex-grow-1",onClick:o=>t.$emit("setStartAirport",e.id)},"Partida",8,K),(0,s._)("button",{class:"btn btn-set-end btn-sm flex-grow-1",onClick:o=>t.$emit("setEndAirport",e.id)},"Destino",8,W)])])])),_:2},1032,["style","class","onMousedown"])))),128)),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.conectionLines,((t,e)=>((0,s.wg)(),(0,s.iD)("div",{class:(0,r.C_)(["connection-line",{active:t.isActive}]),key:e,style:(0,r.j5)({left:`${t.x}px`,top:`${t.y}px`,width:`${t.width}px`,transform:`rotate(${t.angle}deg)`})},null,6)))),128))],34)]),(0,s._)("button",{class:"btn btn-outline-dark d-none",onClick:e[2]||(e[2]=(...e)=>t.copyAirportsJSON&&t.copyAirportsJSON(...e))}," Copy JSON ")])}o(6718);var Y=(0,s.aZ)({data(){return{draggingAirport:null,airportColors:{},timer:0}},props:{airports:{required:!0,type:Array},connections:{required:!0,type:Array},regionColors:{required:!0,type:Array},activeRoute:{required:!0,type:Array},selectedOptionStart:{required:!0,type:Object},selectedOptionEnd:{required:!0,type:Object}},methods:{moveDraggingAirport(t){this.draggingAirport&&this.$refs["map-container"]instanceof HTMLElement&&(this.draggingAirport.x=t.clientX-this.$refs["map-container"].offsetLeft,this.draggingAirport.y=t.clientY-this.$refs["map-container"].offsetTop)},copyAirportsJSON(){navigator.clipboard.writeText(JSON.stringify({airports:this.airports,connections:this.connections,regionColors:this.regionColors}))},setAirportColors(){let t={};this.regionColors.forEach((e=>{e.ids.forEach((o=>{t[o]=e.color}))}));let e={};this.airports.forEach((o=>{let i=o.id.substring(0,2);e[o.id]=t[i]})),this.airportColors=e}},computed:{conectionLines(){let t=[];return this.connections.forEach(((e,o)=>{const i=this.airports.find((t=>t.id==e.ids[0])),s=this.airports.find((t=>t.id==e.ids[1]));if(!i||!s)return;const r=i.x,n=i.y,a=s.x,d=s.y,c=Math.sqrt((r-a)*(r-a)+(n-d)*(n-d)),l=(r+a)/2,p=(n+d)/2,u=Math.atan2(n-d,r-a),h=180*u/Math.PI,A=this.activeRoute.join("-"),v=-1!=A.indexOf(`${i.id}-${s.id}`)||-1!=A.indexOf(`${s.id}-${i.id}`);t.push({x:l-c/2,y:p,width:c,angle:h,isActive:v})})),t}},directives:{tippy:B.XM},created(){this.setAirportColors()}});const Q=(0,E.Z)(Y,[["render",X],["__scopeId","data-v-26c998f8"]]);var tt=Q;const et={class:"alert alert-light mt-4 text-center",role:"alert"},ot=(0,s._)("img",{src:"img/empty-box.jpg",class:"img-fluid w-25 d-block mx-auto",alt:""},null,-1);function it(t,e){return(0,s.wg)(),(0,s.iD)("div",et,[ot,(0,s.Uk)(" Suas rotas aparecerão aqui ")])}const st={},rt=(0,E.Z)(st,[["render",it]]);var nt=rt,at=o(7327);class dt{constructor(){(0,at.Z)(this,"points",[]),(0,at.Z)(this,"initialPoint",null),(0,at.Z)(this,"finalPoint",null),(0,at.Z)(this,"validPaths",[])}setPoints(t){this.points=t}setInitialPoint(t){this.initialPoint=t}setFinalPoint(t){this.finalPoint=t}getValidPaths(){return this.validPaths}traverse(t=void 0,e=void 0){this.initialPoint&&this.finalPoint&&(void 0===t&&(t=this.initialPoint),void 0===e&&(e={sequence:"",distance:0}),e.sequence+="-"+t.id,t.id!=this.finalPoint.id?t.conections.forEach((t=>{if(e&&!e.sequence.includes(t.point.id)){const o={sequence:e.sequence,distance:e.distance};o.distance+=t.cost,this.traverse(t.point,o)}})):this.validPaths.push({sequence:e.sequence,distance:e.distance}))}}var ct=(0,s.aZ)({name:"App",components:{ModelSelect:S.q2,RouteTable:F,MapViewer:tt,LoadingState:w,EmptyState:nt},data(){return{airportOptionsStart:[],airports:y.$1,connections:y.I_,regionColors:y.sL,selectedOptionStart:{value:""},selectedOptionEnd:{value:""},airportRoutes:[],isLoadingRoutes:!1,activeRoute:[],calculatedPathsCount:0,calculatedTime:0}},mounted(){this.loadAirportOptions()},methods:{loadAirportOptions(){this.airportOptionsStart=this.airports.map((t=>({value:t.id,text:`${t.id} - ${t.description}`})))},pickRoutes(){this.isLoadingRoutes=!0,this.airportRoutes=[];let t=[];this.airports.forEach((e=>{t.push({id:e.id,conections:[]})}));const e=t.find((t=>t.id==this.selectedOptionStart.value)),o=t.find((t=>t.id==this.selectedOptionEnd.value));if(this.connections.forEach((e=>{const o=e.ids[0],i=e.ids[1],s=this.airports.find((t=>t.id==o)),r=this.airports.find((t=>t.id==i));if(!s||!r)return;const n=t.find((t=>t.id==o)),a=t.find((t=>t.id==i));if(!n||!a)return;const d=s.x,c=s.y,l=r.x,p=r.y,u=Math.sqrt((d-l)*(d-l)+(c-p)*(c-p));n.conections.push({point:a,cost:u}),a.conections.push({point:n,cost:u})})),!e||!o)return;const i=new dt;i.setPoints(t),i.setInitialPoint(e),i.setFinalPoint(o),setTimeout((()=>{const t=new Date,e=t.getTime();i.traverse();let o=[];o=i.getValidPaths(),this.calculatedPathsCount=o.length;const s=new Date,r=s.getTime();o=o.sort(((t,e)=>t.distance-e.distance)),o=o.slice(0,1e4),this.isLoadingRoutes=!1,this.airportRoutes=[],o.forEach(((t,e)=>{this.airportRoutes.push({pos:e.toString(),distance:Math.round(t.distance),path:t.sequence})})),this.calculatedTime=(r-e)/1e3}),30)},setActiveRoute(t){this.activeRoute=t instanceof Array?t:t.split("-")},setOptionStartAirport(t){this.selectedOptionEnd.value==t&&(this.selectedOptionEnd={value:""}),this.selectedOptionStart={value:t}},setOptionEndAirport(t){this.selectedOptionStart.value==t&&(this.selectedOptionStart={value:""}),this.selectedOptionEnd={value:t}}},computed:{airportOptionsEnd(){return this.airportOptionsStart.filter((t=>this.selectedOptionStart.value!=t.value))},canpickRoutes(){return""!=this.selectedOptionEnd.value&&""!=this.selectedOptionStart.value}},watch:{selectedOptionStart(){this.selectedOptionStart.value==this.selectedOptionEnd.value&&(this.selectedOptionEnd={value:""})}}});const lt=(0,E.Z)(ct,[["render",P]]);var pt=lt,ut=o(5893);const ht=(0,i.ri)(pt);ht.component("EasyDataTable",ut.Z),ht.use(B.ZP,{directive:"tippy",component:"tippy",defaultProps:{allowHTML:!0,placement:"top",delay:[300,50]}}),ht.mount("#app")}},e={};function o(i){var s=e[i];if(void 0!==s)return s.exports;var r=e[i]={exports:{}};return t[i].call(r.exports,r,r.exports,o),r.exports}o.m=t,function(){var t=[];o.O=function(e,i,s,r){if(!i){var n=1/0;for(l=0;l<t.length;l++){i=t[l][0],s=t[l][1],r=t[l][2];for(var a=!0,d=0;d<i.length;d++)(!1&r||n>=r)&&Object.keys(o.O).every((function(t){return o.O[t](i[d])}))?i.splice(d--,1):(a=!1,r<n&&(n=r));if(a){t.splice(l--,1);var c=s();void 0!==c&&(e=c)}}return e}r=r||0;for(var l=t.length;l>0&&t[l-1][2]>r;l--)t[l]=t[l-1];t[l]=[i,s,r]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var i in e)o.o(e,i)&&!o.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.p="/grafos-aeroporto-interface/"}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,i){var s,r,n=i[0],a=i[1],d=i[2],c=0;if(n.some((function(e){return 0!==t[e]}))){for(s in a)o.o(a,s)&&(o.m[s]=a[s]);if(d)var l=d(o)}for(e&&e(i);c<n.length;c++)r=n[c],o.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return o.O(l)},i=self["webpackChunkgrafos_aeroporto_interface"]=self["webpackChunkgrafos_aeroporto_interface"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=o.O(void 0,[998],(function(){return o(2244)}));i=o.O(i)})();
//# sourceMappingURL=app.03614ce0.js.map