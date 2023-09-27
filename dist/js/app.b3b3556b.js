(function(){"use strict";var t={7105:function(t,e,o){var i=o(9242),s=o(3396),n=o(7139);const r={class:"container"},a={class:"row"},c={class:"col-12 col-lg-7 d-flex align-items-center justify-content-center"},d={class:"col-12 col-lg-5"},l={class:"right-menu-container shadow-lg p-4"},p={class:""},u={class:"mb-3 w-100"},h=(0,s._)("label",{for:"inputStart",class:"form-label"},"Partida",-1),v={class:"mb-3 w-100"},f=(0,s._)("label",{for:"inputStart",class:"form-label"},"Destino",-1),m={class:"form-group mt-3"},g=(0,s._)("label",{for:"input-qtd-rotas",class:"form-label"},"Metodo de Pesquisa:",-1),A={class:"form-check"},y=(0,s._)("label",{class:"form-check-label",for:"input-radio-pesquisa-rapida"}," Pesquisa Rapida ",-1),S={class:"form-check"},P=(0,s._)("label",{class:"form-check-label",for:"input-radio-pesquisa-total"}," Pesquisa Total (Lento) ",-1),C={class:"form-check"},R=(0,s._)("label",{class:"form-check-label",for:"input-radio-pesquisa-server"}," Calcular no Servidor ",-1),x={key:0,class:"form-group mt-3"},O={for:"input-qtd-rotas",class:"form-label"},M=["disabled"],E={key:1},b=(0,s._)("br",null,null,-1);function w(t,e,o,w,_,k){const T=(0,s.up)("map-viewer"),G=(0,s.up)("ModelSelect"),D=(0,s.up)("loading-state"),I=(0,s.up)("empty-state"),L=(0,s.up)("RouteTable");return(0,s.wg)(),(0,s.iD)("div",r,[(0,s._)("div",a,[(0,s._)("div",c,[(0,s.Wm)(T,{class:"",airports:t.airports,connections:t.connections,regionColors:t.regionColors,activeRoute:t.activeRoute,"selected-option-start":t.selectedOptionStart,"selected-option-end":t.selectedOptionEnd,onSetStartAirport:t.setOptionStartAirport,onSetEndAirport:t.setOptionEndAirport,onRemoveConnection:t.removeConnection,onAddConnection:t.addConnection},null,8,["airports","connections","regionColors","activeRoute","selected-option-start","selected-option-end","onSetStartAirport","onSetEndAirport","onRemoveConnection","onAddConnection"])]),(0,s._)("div",d,[(0,s._)("div",l,[(0,s._)("div",p,[(0,s._)("div",u,[h,(0,s.Wm)(G,{options:t.airportOptionsStart,class:"w-100",modelValue:t.selectedOptionStart,"onUpdate:modelValue":e[0]||(e[0]=e=>t.selectedOptionStart=e)},null,8,["options","modelValue"])]),(0,s._)("div",v,[f,(0,s.Wm)(G,{options:t.airportOptionsEnd,class:"w-100",modelValue:t.selectedOptionEnd,"onUpdate:modelValue":e[1]||(e[1]=e=>t.selectedOptionEnd=e)},null,8,["options","modelValue"])])]),(0,s._)("div",m,[g,(0,s._)("div",A,[(0,s.wy)((0,s._)("input",{class:"form-check-input",type:"radio",id:"input-radio-pesquisa-rapida",value:"rapida","onUpdate:modelValue":e[2]||(e[2]=e=>t.searchType=e),checked:""},null,512),[[i.G2,t.searchType]]),y]),(0,s._)("div",S,[(0,s.wy)((0,s._)("input",{class:"form-check-input",type:"radio",value:"total",id:"input-radio-pesquisa-total","onUpdate:modelValue":e[3]||(e[3]=e=>t.searchType=e)},null,512),[[i.G2,t.searchType]]),P]),(0,s._)("div",C,[(0,s.wy)((0,s._)("input",{class:"form-check-input",type:"radio",value:"server",id:"input-radio-pesquisa-server","onUpdate:modelValue":e[4]||(e[4]=e=>t.searchType=e)},null,512),[[i.G2,t.searchType]]),R])]),"rapida"==t.searchType?((0,s.wg)(),(0,s.iD)("div",x,[(0,s._)("label",O,"Quantidade de Rotas: "+(0,n.zw)(t.pathsLimit),1),(0,s.wy)((0,s._)("input",{type:"range",class:"form-range",min:"100",max:"10000",step:"100",id:"input-qtd-rotas","onUpdate:modelValue":e[5]||(e[5]=e=>t.pathsLimit=e)},null,512),[[i.nr,t.pathsLimit]])])):(0,s.kq)("",!0),(0,s._)("button",{disabled:!t.canpickRoutes,onClick:e[6]||(e[6]=(...e)=>t.pickRoutes&&t.pickRoutes(...e)),class:"btn btn-primary w-100 mt-3"}," Montar Rota ",8,M),t.airportRoutes.length&&!t.isLoadingRoutes?((0,s.wg)(),(0,s.iD)("div",E,[(0,s._)("p",null,[(0,s.Uk)(" Qtd de Rotas: "+(0,n.zw)(t.calculatedPathsCount),1),b,(0,s.Uk)(" Tempo de Calculo: "+(0,n.zw)(t.calculatedTime),1)])])):(0,s.kq)("",!0),t.isLoadingRoutes?((0,s.wg)(),(0,s.j4)(D,{key:2,class:"mt-5 animate__animated animate__zoomIn animate__faster"})):(0,s.kq)("",!0),t.airportRoutes.length||t.isLoadingRoutes?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(I,{key:3,class:"mt-4"})),t.airportRoutes.length?((0,s.wg)(),(0,s.j4)(L,{key:4,airportRoutes:t.airportRoutes,onActiveRouteSelect:t.setActiveRoute},null,8,["airportRoutes","onActiveRouteSelect"])):(0,s.kq)("",!0)])])])])}o(7658);var _=o(2682),k=JSON.parse('{"$1":[{"id":"RS1","x":308,"y":507,"description":"Aeroporto Internacional de Porto Alegre / Salgado Filho"},{"id":"RS2","x":323,"y":557,"description":"Aeroporto Regional de Caxias do Sul / Hugo Cantergiani"},{"id":"SC1","x":373,"y":491,"description":"Aeroporto Internacional de Florianópolis / Hercílio Luz"},{"id":"SC2","x":330,"y":482,"description":"Aeroporto Internacional de Navegantes / Ministro Victor Konder"},{"id":"PR1","x":322,"y":447,"description":"Aeroporto Internacional de Curitiba / Afonso Pena"},{"id":"PR2","x":358,"y":453,"description":"Aeroporto Regional de Maringá / Silvio Name"},{"id":"SP1","x":380,"y":422,"description":"Aeroporto Internacional de São Paulo / Congonhas"},{"id":"SP2","x":420,"y":442,"description":"Aeroporto Internacional de Viracopos / Campinas"},{"id":"SP3","x":393,"y":456,"description":"Aeroporto Internacional de São Paulo/Guarulhos-Governador André Franco Motoro"},{"id":"SP4","x":394,"y":399,"description":"Aeroporto Estadual de Presidente Prudente"},{"id":"SP5","x":360,"y":402,"description":"Aeroporto Estadual de Bauru/Arealva"},{"id":"MG1","x":376,"y":374,"description":"Aeroporto Internacional de Minas Gerais / Confins – Tancredo Neves"},{"id":"MG2","x":462,"y":374,"description":"Aeroporto de Montes Claros/Mário Ribeiro"},{"id":"MG3","x":432,"y":331,"description":"Aeroporto de Uberlândia / Ten. Cel. Av. César Bombonato"},{"id":"RJ1","x":458,"y":426,"description":"Aeroporto Internacional do Rio de Janeiro / Galeão-Antônio Carlos Jobim"},{"id":"RJ2","x":486,"y":430,"description":"Aerorporto Santos Dumont"},{"id":"RJ3","x":502,"y":416,"description":"Aeroporto Internacional de Cabo Frio"},{"id":"ES1","x":513,"y":390,"description":"Aeroporto de Vitória – Eurico de Aguiar Salles"},{"id":"MS1","x":308,"y":398,"description":"Aeroporto Internacional de Campo Grande"},{"id":"GO1","x":355,"y":348,"description":"Aeroporto de Goiânia / Santa Genoveva"},{"id":"GO2","x":374,"y":304,"description":"Aeroporto Internacional de Brasília / Presidente Jucelino Kubitschek"},{"id":"DF1","x":398,"y":324,"description":"Aeroporto Internacional de Manaus / Eduardo Gomes"},{"id":"MT1","x":272,"y":272,"description":"Aeroporto Internacional de Cuiabá / Marechal Rondon"},{"id":"BA1","x":460,"y":271,"description":"Aeroporto Internacional de Salvador / Deputado Luis Eduardo Magalhães"},{"id":"BA2","x":491,"y":296,"description":"Aeroporto Internacional de Porto Seguro"},{"id":"PI1","x":450,"y":222,"description":"Aeroporto de Teresina – Senador Petrônio Portella"},{"id":"SE1","x":554,"y":257,"description":"Aeroporto Internacional de Aracaju / Santa Maria"},{"id":"AL1","x":572,"y":240,"description":"Aeroporto de Maceió / Zumbi dos Palmares"},{"id":"PB1","x":569,"y":201,"description":"Aeroporto Internacional de João Pessoa / Presidente Castro Pinto"},{"id":"PE1","x":569,"y":218,"description":"Aeroporto Internacional do Recife/ Guararapes – Gilberto Freyre"},{"id":"PE2","x":510,"y":216,"description":"Aeroporto de Petrolina / Senador Nilo Coelho"},{"id":"RN1","x":558,"y":184,"description":"Aeroporto Internacional de Natal / Augusto Severo"},{"id":"MA1","x":438,"y":158,"description":"Aeroporto Internacional de São Luís / Marechal Cunha Machado"},{"id":"CE1","x":520,"y":156,"description":"Aeroporto Internacional de Fortaleza / Pinto Martins"},{"id":"CE2","x":511,"y":188,"description":"Aeroporto de Juazeiro do Norte – Orlando Bezerra"},{"id":"AM1","x":133,"y":142,"description":"Aeroporto Internacional de Manaus / Eduardo Gomes"},{"id":"AP1","x":336,"y":84,"description":"Aeroporto Internacional de Macapá"},{"id":"RO1","x":180,"y":230,"description":"Aeroporto Internacional de Porto Velho / Governador Jorge Teixeira de Oliveira"},{"id":"RR1","x":206,"y":78,"description":"Aeroporto Internacional de Boa Vista / Atlas Brasil Cantanhede"},{"id":"TO1","x":391,"y":246,"description":"Aeroporto de Palmas/Brigadeiro Lysias Rodrigues"},{"id":"AC1","x":84,"y":239,"description":"Aeroporto Internacional de Rio Branco / Plácido de Castro"},{"id":"PA1","x":332,"y":196,"description":"Aeroporto Internacional de Belém / Val de Cans"}],"I_":[{"ids":["RS1","RS2"],"cost":0},{"ids":["RS1","SC1"],"cost":0},{"ids":["SC1","SC2"],"cost":0},{"ids":["SC1","PR2"],"cost":0},{"ids":["PR2","PR1"],"cost":0},{"ids":["PR2","SP3"],"cost":0},{"ids":["SP3","SP2"],"cost":0},{"ids":["SP2","SP1"],"cost":0},{"ids":["SP2","RJ1"],"cost":0},{"ids":["SP2","SP4"],"cost":0},{"ids":["SP4","MG2"],"cost":0},{"ids":["SP4","SP5"],"cost":0},{"ids":["RJ1","RJ2"],"cost":0},{"ids":["RJ2","RJ3"],"cost":0},{"ids":["RJ3","ES1"],"cost":0},{"ids":["ES1","MG2"],"cost":0},{"ids":["MG2","RJ2"],"cost":0},{"ids":["MG2","RJ3"],"cost":0},{"ids":["MG2","MG1"],"cost":0},{"ids":["MG2","MG3"],"cost":0},{"ids":["MG2","BA2"],"cost":0},{"ids":["MG1","SP5"],"cost":0},{"ids":["MG1","MG3"],"cost":0},{"ids":["MG1","DF1"],"cost":0},{"ids":["MG1","GO1"],"cost":0},{"ids":["MG1","MS1"],"cost":0},{"ids":["ES1","BA2"],"cost":0},{"ids":["ES1","MG3"],"cost":0},{"ids":["MG3","BA2"],"cost":0},{"ids":["MG3","DF1"],"cost":0},{"ids":["MG3","BA1"],"cost":0},{"ids":["BA2","SE1"],"cost":0},{"ids":["BA2","BA1"],"cost":0},{"ids":["BA1","SE1"],"cost":0},{"ids":["BA1","PI1"],"cost":0},{"ids":["BA1","PE2"],"cost":0},{"ids":["BA1","TO1"],"cost":0},{"ids":["PE2","AL1"],"cost":0},{"ids":["SE1","AL1"],"cost":0},{"ids":["AL1","PE1"],"cost":0},{"ids":["PE1","PB1"],"cost":0},{"ids":["PB1","RN1"],"cost":0},{"ids":["PE2","PE1"],"cost":0},{"ids":["PE2","CE2"],"cost":0},{"ids":["PE2","PI1"],"cost":0},{"ids":["CE2","PB1"],"cost":0},{"ids":["CE2","CE1"],"cost":0},{"ids":["CE2","MA1"],"cost":0},{"ids":["CE2","PI1"],"cost":0},{"ids":["PB1","AP1"],"cost":0},{"ids":["RN1","AP1"],"cost":0},{"ids":["RN1","CE1"],"cost":0},{"ids":["CE1","PI1"],"cost":0},{"ids":["CE1","AP1"],"cost":0},{"ids":["MA1","PI1"],"cost":0},{"ids":["MA1","TO1"],"cost":0},{"ids":["MA1","AP1"],"cost":0},{"ids":["MA1","PA1"],"cost":0},{"ids":["TO1","MT1"],"cost":0},{"ids":["TO1","PA1"],"cost":0},{"ids":["TO1","AP1"],"cost":0},{"ids":["GO1","MS1"],"cost":0},{"ids":["GO1","GO2"],"cost":0},{"ids":["GO1","MT1"],"cost":0},{"ids":["GO2","DF1"],"cost":0},{"ids":["GO2","MT1"],"cost":0},{"ids":["MT1","RO1"],"cost":0},{"ids":["MT1","AC1"],"cost":0},{"ids":["MT1","AM1"],"cost":0},{"ids":["MT1","AP1"],"cost":0},{"ids":["MT1","PA1"],"cost":0},{"ids":["PA1","AP1"],"cost":0},{"ids":["AP1","RR1"],"cost":0},{"ids":["RR1","AM1"],"cost":0},{"ids":["AC1","AM1"],"cost":0},{"ids":["AC1","RO1"],"cost":0}],"sL":[{"ids":["SC","RS","PR"],"color":"#D5E8D4"},{"ids":["SP","RJ","ES","MG"],"color":"#FFF2CC"},{"ids":["BA","PI","PE","SE","AL","PE","PB","RN","CE","MA"],"color":"#F8CECC"},{"ids":["MS","GO","DF","MT"],"color":"#D0CEE2"},{"ids":["RO","AM","AC","RR","AP","PA","TO"],"color":"#FFE6CC"}]}');const T={class:"d-flex flex-column justify-content-center align-items-center"},G=(0,s._)("img",{src:"img/loading.gif",alt:""},null,-1),D=(0,s._)("p",null,"Carregando...",-1),I=[G,D];function L(t,e){return(0,s.wg)(),(0,s.iD)("div",T,I)}var q=o(89);const V={},B=(0,q.Z)(V,[["render",L]]);var J=B;const $={class:"py-2"},j={class:"form-floating mb-3"},F=(0,s._)("label",{for:"inputSearch"},"Buscar...",-1),N=["onMouseover"];function Z(t,e,o,r,a,c){const d=(0,s.up)("EasyDataTable");return(0,s.wg)(),(0,s.iD)("div",$,[(0,s._)("div",j,[(0,s.wy)((0,s._)("input",{type:"text",class:"form-control",id:"inputSearch",placeholder:"Buscar...","onUpdate:modelValue":e[0]||(e[0]=e=>t.searchValue=e)},null,512),[[i.nr,t.searchValue]]),F]),(0,s.Wm)(d,{headers:t.headers,items:t.routes,"search-field":"path","search-value":t.searchValueDebouced,"rows-per-page":10,"buttons-pagination":"",alternating:""},{"item-path":(0,s.w5)((({path:o})=>[(0,s._)("div",{onMouseover:e=>t.$emit("activeRouteSelect",o),onMouseleave:e[1]||(e[1]=e=>t.$emit("activeRouteSelect",[])),class:"route-item"},(0,n.zw)(o),41,N)])),_:1},8,["headers","items","search-value"])])}var U=o(814),z=o(354),H=o.n(z);const W=[{text:"Pos.",value:"pos",sortable:!0},{text:"Distancia",value:"distance"},{text:"Caminho",value:"path"}];var K=(0,s.aZ)({props:{airportRoutes:{required:!0,type:Array}},data(){return{headers:W,searchValue:"",searchValueDebouced:"",updateSearchValue:null}},computed:{routes(){return this.airportRoutes.map((t=>t))}},mounted(){this.updateSearchValue=H()((()=>{this.searchValueDebouced=this.searchValue}),200)},directives:{tippy:U.XM},watch:{searchValue(){"function"==typeof this.updateSearchValue&&this.updateSearchValue()}}});const X=(0,q.Z)(K,[["render",Z]]);var Y=X,Q=o.p+"img/mapa-brasil.884d5862.svg";const tt=t=>((0,s.dD)("data-v-4ff43a18"),t=t(),(0,s.Cn)(),t),et={class:""},ot={ref:"map-image",id:"map-image",src:Q,width:"600",height:"600",alt:""},it={class:"p-1"},st={class:"text-center"},nt={class:"d-flex gap-2 mt-2"},rt=["onClick"],at=["onClick"],ct=["onClick"],dt=tt((()=>(0,s._)("i",{class:"fa fa-plus-circle"},null,-1))),lt=[dt],pt=["onClick"];function ut(t,e,o,i,r,a){const c=(0,s.up)("tippy");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("div",et,[(0,s._)("div",{ref:"map-container",id:"map-container",class:(0,n.C_)({"showing-active-route":t.activeRoute.length}),onMouseup:e[0]||(e[0]=e=>t.draggingAirport=null),onMousemove:e[1]||(e[1]=(...e)=>t.moveDraggingAirport&&t.moveDraggingAirport(...e))},[(0,s._)("img",ot,null,512),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.airports,((e,o)=>((0,s.wg)(),(0,s.j4)(c,{style:(0,n.j5)({left:`${e.x}px`,top:`${e.y}px`,"background-color":t.airportColors[e.id]}),class:(0,n.C_)(["airport",{"selected-end":e.id===t.selectedOptionEnd.value,"selected-start":e.id===t.selectedOptionStart.value}]),key:o,onMousedown:o=>t.draggingAirport=e,tag:"div","content-tag":"span","content-class":"airport",interactive:""},{default:(0,s.w5)((()=>[(0,s.Uk)((0,n.zw)(e.id),1)])),content:(0,s.w5)((()=>[(0,s._)("div",it,[(0,s._)("div",st,(0,n.zw)(e.description),1),(0,s._)("div",nt,[(0,s._)("button",{class:"btn btn-set-start btn-sm flex-grow-1",onClick:o=>t.$emit("setStartAirport",e.id)}," Partida ",8,rt),(0,s._)("button",{class:"btn btn-set-end btn-sm flex-grow-1",onClick:o=>t.$emit("setEndAirport",e.id)}," Destino ",8,at),""!=t.selectedOptionStart.value&&t.selectedOptionStart.value!=e.id?((0,s.wg)(),(0,s.iD)("button",{key:0,class:"btn btn-add-connection btn-sm flex-grow-0",onClick:o=>t.createConnectionWithSelected(e.id)},lt,8,ct)):(0,s.kq)("",!0)])])])),_:2},1032,["style","class","onMousedown"])))),128)),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.conectionLines,((e,o)=>((0,s.wg)(),(0,s.iD)("div",{class:(0,n.C_)(["connection-line",{active:e.isActive}]),key:o,onClick:o=>t.$emit("removeConnection",e.connection),style:(0,n.j5)({left:`${e.x}px`,top:`${e.y}px`,width:`${e.width}px`,transform:`rotate(${e.angle}deg)`})},null,14,pt)))),128))],34)]),(0,s._)("button",{class:"btn btn-outline-dark d-none",onClick:e[2]||(e[2]=(...e)=>t.copyAirportsJSON&&t.copyAirportsJSON(...e))}," Copy JSON ")])}o(6718);function ht(t,e,o,i){return Math.sqrt((t-o)*(t-o)+(e-i)*(e-i))}var vt=(0,s.aZ)({data(){return{draggingAirport:null,airportColors:{},timer:0}},props:{airports:{required:!0,type:Array},connections:{required:!0,type:Array},regionColors:{required:!0,type:Array},activeRoute:{required:!0,type:Array},selectedOptionStart:{required:!0,type:Object},selectedOptionEnd:{required:!0,type:Object}},methods:{moveDraggingAirport(t){this.draggingAirport&&this.$refs["map-container"]instanceof HTMLElement&&(this.draggingAirport.x=t.clientX-this.$refs["map-container"].offsetLeft,this.draggingAirport.y=t.clientY-this.$refs["map-container"].offsetTop)},copyAirportsJSON(){navigator.clipboard.writeText(JSON.stringify({airports:this.airports,connections:this.connections,regionColors:this.regionColors}))},setAirportColors(){let t={};this.regionColors.forEach((e=>{e.ids.forEach((o=>{t[o]=e.color}))}));let e={};this.airports.forEach((o=>{let i=o.id.substring(0,2);e[o.id]=t[i]})),this.airportColors=e},createConnectionWithSelected(t){if(""==this.selectedOptionStart.value||this.selectedOptionStart.value==t)return;const e={ids:[this.selectedOptionStart.value,t],cost:0};this.$emit("addConnection",e)}},computed:{conectionLines(){let t=[];return this.connections.forEach((e=>{const o=this.airports.find((t=>t.id==e.ids[0])),i=this.airports.find((t=>t.id==e.ids[1]));if(!o||!i)return;const s=o.x,n=o.y,r=i.x,a=i.y,c=ht(s,n,r,a),d=(s+r)/2,l=(n+a)/2,p=Math.atan2(n-a,s-r),u=180*p/Math.PI,h=this.activeRoute.join("-"),v=-1!=h.indexOf(`${o.id}-${i.id}`)||-1!=h.indexOf(`${i.id}-${o.id}`);t.push({x:d-c/2,y:l,width:c,angle:u,isActive:v,connection:e})})),t}},directives:{tippy:U.XM},created(){this.setAirportColors()}});const ft=(0,q.Z)(vt,[["render",ut],["__scopeId","data-v-4ff43a18"]]);var mt=ft;const gt={class:"alert alert-light mt-4 text-center",role:"alert"},At=(0,s._)("img",{src:"img/empty-box.jpg",class:"img-fluid w-25 d-block mx-auto",alt:""},null,-1);function yt(t,e){return(0,s.wg)(),(0,s.iD)("div",gt,[At,(0,s.Uk)(" Suas rotas aparecerão aqui ")])}const St={},Pt=(0,q.Z)(St,[["render",yt]]);var Ct=Pt,Rt=o(7327);class xt{constructor(t,e,o){(0,Rt.Z)(this,"points",void 0),(0,Rt.Z)(this,"initialPoint",void 0),(0,Rt.Z)(this,"finalPoint",void 0),(0,Rt.Z)(this,"validPaths",[]),(0,Rt.Z)(this,"longestDistance",-1),(0,Rt.Z)(this,"pathsLimit",0),t.forEach((t=>{const e=t.conections.map((t=>{const e=t.point.x,i=t.point.y,s=o.x,n=o.y,r=Math.sqrt((e-s)*(e-s)+(i-n)*(i-n));return{con:t,distance:r}})).sort(((t,e)=>t.distance-e.distance));t.conections=e.map((t=>t.con))})),this.points=t,this.initialPoint=e,this.finalPoint=o}setPathsLimit(t){this.pathsLimit=t}getValidPaths(){return this.validPaths}addValidPath(t){const e=this.longestDistance;let o=-1,i=!1;this.validPaths.length>=this.pathsLimit&&(i=!0,this.validPaths=this.validPaths.filter((t=>t.distance!=e&&(t.distance>o&&(o=t.distance),!0)))),this.validPaths.push(t),i&&t.distance>o||!i&&t.distance>this.longestDistance?this.longestDistance=t.distance:i&&(this.longestDistance=o)}traverse(t=this.initialPoint,e={sequence:"",distance:0}){if(e.sequence+="-"+t.id,t.id==this.finalPoint.id)return 0==this.pathsLimit?void this.validPaths.push(e):void this.addValidPath(e);t.conections.forEach((t=>{if(e.sequence.includes(t.point.id))return;if(0!==this.pathsLimit&&e.distance+t.cost>this.longestDistance&&this.validPaths.length>=this.pathsLimit)return;const o={sequence:e.sequence,distance:e.distance};o.distance+=t.cost,this.traverse(t.point,o)}))}}var Ot=(0,s.aZ)({name:"App",components:{ModelSelect:_.q2,RouteTable:Y,MapViewer:mt,LoadingState:J,EmptyState:Ct},data(){return{airportOptionsStart:[],airports:k.$1,connections:k.I_,regionColors:k.sL,selectedOptionStart:{value:""},selectedOptionEnd:{value:""},airportRoutes:[],isLoadingRoutes:!1,activeRoute:[],pathsLimit:100,searchType:"rapida",calculatedPathsCount:0,calculatedTime:0}},mounted(){this.loadAirportOptions()},methods:{loadAirportOptions(){this.airportOptionsStart=this.airports.map((t=>({value:t.id,text:`${t.id} - ${t.description}`})))},pickRoutes(){this.isLoadingRoutes=!0,this.airportRoutes=[],"server"==this.searchType?this.serverComputeRoutes():this.localComputeRoutes()},localComputeRoutes(){let t=[];this.airports.forEach((e=>{t.push({id:e.id,conections:[],x:e.x,y:e.y})}));const e=t.find((t=>t.id==this.selectedOptionStart.value)),o=t.find((t=>t.id==this.selectedOptionEnd.value));if(this.connections.forEach((e=>{const o=e.ids[0],i=e.ids[1],s=this.airports.find((t=>t.id==o)),n=this.airports.find((t=>t.id==i));if(!s||!n)return;const r=t.find((t=>t.id==o)),a=t.find((t=>t.id==i));if(!r||!a)return;const c=ht(s.x,s.y,n.x,n.y);r.conections.push({point:a,cost:c}),a.conections.push({point:r,cost:c})})),!e||!o)return;const i=new xt(t,e,o);"rapida"==this.searchType&&i.setPathsLimit(this.pathsLimit),setTimeout((()=>{const t=new Date,e=t.getTime();i.traverse();let o=[];o=i.getValidPaths(),this.calculatedPathsCount=o.length;const s=new Date,n=s.getTime();o=o.sort(((t,e)=>t.distance-e.distance)),o=o.slice(0,1e5),this.isLoadingRoutes=!1,this.airportRoutes=[],o.forEach(((t,e)=>{this.airportRoutes.push({pos:e.toString(),distance:Math.round(t.distance),path:t.sequence})})),this.calculatedTime=(n-e)/1e3}),30)},serverComputeRoutes(){const t=[];this.airports.forEach((e=>{t.push({id:e.id,connections:[]})})),this.connections.forEach((e=>{const o=e.ids[0],i=e.ids[1],s=this.airports.find((t=>t.id==o)),n=this.airports.find((t=>t.id==i));if(!s||!n)return;const r=t.find((t=>t.id==o)),a=t.find((t=>t.id==i));if(!r||!a)return;const c=ht(s.x,s.y,n.x,n.y);r.connections.push({id:a.id,cost:c}),a.connections.push({id:r.id,cost:c})})),console.log(t)},setActiveRoute(t){this.activeRoute=t instanceof Array?t:t.split("-")},setOptionStartAirport(t){this.selectedOptionEnd.value==t&&(this.selectedOptionEnd={value:""}),this.selectedOptionStart={value:t}},setOptionEndAirport(t){this.selectedOptionStart.value==t&&(this.selectedOptionStart={value:""}),this.selectedOptionEnd={value:t}},removeConnection(t){this.connections=this.connections.filter((e=>e.ids!==t.ids))},addConnection(t){this.connections.push(t)}},computed:{airportOptionsEnd(){return this.airportOptionsStart.filter((t=>this.selectedOptionStart.value!=t.value))},canpickRoutes(){return""!=this.selectedOptionEnd.value&&""!=this.selectedOptionStart.value}},watch:{selectedOptionStart(){this.selectedOptionStart.value==this.selectedOptionEnd.value&&(this.selectedOptionEnd={value:""})}}});const Mt=(0,q.Z)(Ot,[["render",w]]);var Et=Mt,bt=o(5893);const wt=(0,i.ri)(Et);wt.component("EasyDataTable",bt.Z),wt.use(U.ZP,{directive:"tippy",component:"tippy",defaultProps:{allowHTML:!0,placement:"top",delay:[300,50]}}),wt.mount("#app")}},e={};function o(i){var s=e[i];if(void 0!==s)return s.exports;var n=e[i]={exports:{}};return t[i].call(n.exports,n,n.exports,o),n.exports}o.m=t,function(){var t=[];o.O=function(e,i,s,n){if(!i){var r=1/0;for(l=0;l<t.length;l++){i=t[l][0],s=t[l][1],n=t[l][2];for(var a=!0,c=0;c<i.length;c++)(!1&n||r>=n)&&Object.keys(o.O).every((function(t){return o.O[t](i[c])}))?i.splice(c--,1):(a=!1,n<r&&(r=n));if(a){t.splice(l--,1);var d=s();void 0!==d&&(e=d)}}return e}n=n||0;for(var l=t.length;l>0&&t[l-1][2]>n;l--)t[l]=t[l-1];t[l]=[i,s,n]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var i in e)o.o(e,i)&&!o.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.p="/grafos-aeroporto-interface/"}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,i){var s,n,r=i[0],a=i[1],c=i[2],d=0;if(r.some((function(e){return 0!==t[e]}))){for(s in a)o.o(a,s)&&(o.m[s]=a[s]);if(c)var l=c(o)}for(e&&e(i);d<r.length;d++)n=r[d],o.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return o.O(l)},i=self["webpackChunkgrafos_aeroporto_interface"]=self["webpackChunkgrafos_aeroporto_interface"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=o.O(void 0,[998],(function(){return o(7105)}));i=o.O(i)})();
//# sourceMappingURL=app.b3b3556b.js.map