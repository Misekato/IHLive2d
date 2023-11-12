var backgroundData = [
"bg_lihui_11_suoer.png",
"bg_lihui_03_suoer.png",
"bg_lihui_04_suoer.png",
"bg_1STsheji.png",
"bg_648libao.png",
"bg_lihui_01_beiduofen.png",
"bg_lihui_01_dafenqi.png",
"bg_lihui_03_daerwen.png",
"bg_lihui_03_hanniba.png",
"bg_lihui_03_luobinhan.png",
"bg_lihui_03_ruijileifu.png",
"bg_lihui_04_danding.png",


];

//Character list options - possibly have this dynamically generated based on folder list

var charlist = [
	"akechi","ares","artemis","arthur","ashikaga","beethoven","benkei","caesar","carmen","catherine","charlemagne",	
	"chiyome","cleo","columbus","copernicus","daji","dante","daqiaoxiaoqiao","darwin","date","davinci","donquixote","dracula","enako","freya",
	"hannibal","hanzo",
	"helen","hercules","himiko","honda","honoka","huangzhong","huatuo","hugo","iori","iori_ss_","isis","izumo","jingke","kasumi","katsuie","kongming",
	"lancelot","loki","lubu","marierose","medea","medusa","mendel","merlin","michelangelo","minamoto","misaki","miyamoto","mobius","mordred",
	"morgana","mozart","napoleon","nene","nero",
	"niwa","octavius","odanobunaga","oichi","pandora","plato","prometheus","raphael","regin","remus","richard",
	"robinhood","romulus","set","shakespeare","simayi","solomon","taishi","takeda","takenaka","taira","tamamo","thor",
	"tokugawa","uesugi","venus","watt","xuchu","yagyuu","yoshiaki","zhangfei","zhaoyun","zhenji","zhouyu",
];


var charData = [
	"akechi_swimsuit",
	"akechi_1","akechi_2","akechi_3","ares_1","ares_2","ares_3","ares_ur","artemis_1","artemis_2","artemis_3",
	"aphrodite_1","aphrodite_2",
	"arthur_1","arthur_2","arthur_ssr_1","arthur_ssr_2",
	"ashikaga_1","ashikaga_2","ashikaga_ssr_1","ashikaga_ssr_2",
	"beethoven_1","beethoven_2","beethoven_ssr_1","beethoven_ssr_2",
	"benkei_1","benkei_2","benkei_3",
	"caesar_1","caesar_2",
	"carmen_1","carmen_2","carmen_ssr_1","carmen_ssr_2",
	"catherine_1","catherine_2","catherine_3","catherine_ur",
	"charlemagne_1","charlemagne_2","charlemagne_ssr_1","charlemagne_ssr_2",
	"chiyome_1","chiyome_2","chiyome_3","chiyome_4","chiyome_ur",
	"cleo_1","cleo_2","cleo_ssr_1","cleo_ssr_2",
	"columbus_1","columbus_2","columbus_3","columbus_valentine",
	"copernicus_1","copernicus_2","copernicus_3",
	"daji_1","daji_2","daji_ssr_1","daji_ssr_2",
	"daqiaoxiaoqiao_ur","daqiaoxiaoqiao_1","daqiaoxiaoqiao_2","daqiaoxiaoqiao_3",
	"dante_1","dante_2","dante_3","dante_ur",
	"date_1","date_2","date_3","date_masamune_ur",
	"davinci_1","davinci_2","davinci_3","davinci_ur",
	"darwin_1","darwin_2","darwin_3",
	"dracula_1","dracula_2","dracula_3","dracula_ur",
	"donquixote_1","donquixote_2","donquixote_3","donquixote_ur",
	"enako_1","enako_2",
	"freya",
	"hannibal_1","hannibal_2","hannibal_3","hannibal_ur",
	"hanzo_1","hanzo_2",
	"helen_1","helen_2","helen_3","helen_christmas","helen_ur",
	"hercules_1","hercules_2","hercules_ssr_1","hercules_ssr_2",
	"himiko_1","himiko_2","himiko_3","himiko_ur",
	"honoka_1","honoka_2","honoka_3",
	"honda_1","honda_2","honda_3","honda_ur",
	"huangzhong_1","huangzhong_2","huangzhong_3","huangzhong_ur",
	"huatuo_1","huatuo_2","huatuo_3","huatuo_skin",
	"hugo_1","hugo_2","hugo_3",
	"iori_1","iori_2","iori_ssr_1","iori_ssr_2",
	"iori_ss_ssr_1","iori_ss_ssr_2","iori_ss_ssr_3","iori_ss_ssr_4","iori_ss_ur",
	"isis_1","isis_2",
	"izumo_1","izumo_2","izumo_3","izumo_ur",
	"jingke_1","jingke_2","jingke_3","jingke_ur",
	"kasumi_1","kasumi_2","kasumi_3",
	"katsuie_1","katsuie_2","katsuie_ssr_1","katsuie_ssr_2",
	"kongming_1","kongming_2",
	"lancelot_1","lancelot_2","lancelot_3","lancelot_valentine",
	"loki_1","loki_2","loki_3","loki_ur",
	"lubu_1","lubu_2",
	"marierose_1","marierose_2","marierose_3",
	"medea_1","medea_2","medea_ssr_1","medea_ssr_2",
	"medusa_1","medusa_2","medusa_ssr_1","medusa_ssr_2",
	"merlin_1","merlin_2","merlin_3","merlin_special","merlin_ur",
	"mendel_1","mendel_2","mendel_3","mendel_ur",
	"michelangelo_1","michelangelo_2","michelangelo_3","michelangelo_ur",
	"minamoto_1","minamoto_2","minamoto_3",
	"misaki_1","misaki_2","misaki_3",
	"mobius_1","mobius_2","mobius_ssr_1","mobius_ssr_2",
	"mordred_1","mordred_2",
	"morgana_1","morgana_2","morgana_3",
	"mozart_1","mozart_2","mozart_3",
	"napoleon_1","napoleon_2","napoleon_3",
	"nene_1","nene_2","nene_3",
	"nero_1","nero_2","nero_ssr_1","nero_ssr_2",
	"niwa_1","niwa_2","niwa_ssr_1","niwa_ssr_2",
	"octavius_ur","octavius_wedding","octavius_1","octavius_2","octavius_3",
	"odanobunaga_skin",
	"oichi_1","oichi_2",
	"pandora_1","pandora_2","pandora_ssr_1","pandora_ssr_2",
	"plato_1","plato_2","plato_ssr_1","plato_ssr_2",
	"prometheus_1","prometheus_2","prometheus_ssr_1","prometheus_ssr_2",
	"raphael_1","raphael_2","raphael_3",
	"regin_ur","regin_1","regin_2","regin_3",
	"remus_1","remus_2","remus_3",
	"romulus_1","romulus_2","romulus_3","romulus_ur",
	"richard_ur", "richard_1","richard_2","richard_3",
	"robinhood_ur","robinhood_1","robinhood_2","robinhood_3","robinhood_4",
	"set_1","set_2","set_ssr_1","set_ssr_2",
	"shakespeare_1","shakespeare_2","shakespeare_3",
	"simayi_ur","simayi_1","simayi_2","simayi_3",
	"solomon_1","solomon_2",
	"takeda_1","takeda_2","takeda_ssr_1","takeda_ssr_2",
	"taira_1","taira_2","taira_ssr_1","taira_ssr_2",
	"taishi_1","taishi_2","taishi_3",
	"takenaka_ur","takenaka_1","takenaka_2","takenaka_3",
	"tamamo_swimsuit","tamamo_1","tamamo_2","tamamo_3",
	"tokugawa_1","tokugawa_2","tokugawa_3",
	"thor_ur","thor_1","thor_2","thor_3",
	"uesugi_1","uesugi_2","uesugi_ssr_1","uesugi_ssr_2",
	"venus_1","venus_2","venus_ssr_1","venus_ssr_2",
	"watt_1","watt_2","watt_3",
	"xuchu_1","xuchu_2","xuchu_3",
	"yagyuu_1","yagyuu_2","yagyuu_3","yagyuu_swimsuit",
	"yoshiaki_1","yoshiaki_2",
	"zhouyu_1","zhouyu_2","zhouyu_ssr_1","zhouyu_ssr_2",
	"zhangfei_1","zhangfei_2",
	"zhaoyun_ur",
	"zhenji_ur","zhenji_1","zhenji_2","zhenji_3",

];



function onSelectBG(){
    var div = document.createElement('div');
    div.className = "darken";
    div.id = "darken";
    div.style.top = window.pageYOffset + "px";
    div.addEventListener("click", function(e) {
            document.body.removeChild(document.getElementById("selector"));
            document.body.removeChild(document.getElementById("darken"));
            document.body.style.overflow = "auto";
        }, false);
    document.body.appendChild(div);
    document.body.style.overflow = "hidden";
    var selector = document.createElement('div');
    selector.id = "selector";
    selector.className = "selector";
    selector.style.top = (window.pageYOffset + (window.innerHeight * 0.05)) + "px" ;
    document.body.appendChild(selector);
    for (var i = 0; i < backgroundData.length; i++){
        var img = document.createElement('div');
        img.className = "thumbbutton";
		let test = 'assets/bg/' + backgroundData[i];  
			fetch(test)
			.then(res => res.blob())
			.then(blob => {
			PNG = URL.createObjectURL(blob)
				});
        img.style.backgroundImage = "url(../IHLive2d/assets/bg/"+backgroundData[i]+")"
        img.style.backgroundSize = "100%";
        img.id = backgroundData[i];
        img.addEventListener("click", function(e) {
			document.getElementById("container-1").style.backgroundImage = "url(../IHLive2d/assets/bg/"+this.id+")"
			document.getElementById("container-1").style.backgroundRepeat = "no-repeat";
			
            document.body.removeChild(document.getElementById("selector"));
            document.body.removeChild(document.getElementById("darken"));
            document.body.style.overflow = "auto";
        }, false);
        document.getElementById("selector").appendChild(img);
    }
}

function SelectChar() {
	var div = document.createElement('div');
    div.className = "darken";
    div.id = "darken";
    div.style.top = window.pageYOffset + "px";
    div.addEventListener("click", function(e) {
            document.body.removeChild(document.getElementById("selector"));
            document.body.removeChild(document.getElementById("darken"));
            document.body.style.overflow = "auto";
        }, false);
	document.body.appendChild(div);
    document.body.style.overflow = "hidden";
    var selector = document.createElement('div');
    selector.id = "selector";
    selector.className = "selector";
    selector.style.top = (window.pageYOffset + (window.innerHeight * 0.05)) + "px" ;
    document.body.appendChild(selector);
	for (var i = 0; i < charlist.length; i++){
        var img = document.createElement('div');
        img.className = "thumbbuttonchar";
		let test = 'assets/icon/' + charlist[i]+".png";  
		let characterselect = charlist[i];
			fetch(test)
			.then(res => res.blob())
			.then(blob => {
			PNG = URL.createObjectURL(blob)
				});
		
		img.style.backgroundImage = "url(../IHLive2d/assets/icon/"+charlist[i]+".png)"
        img.style.backgroundSize = "100%";
        img.addEventListener("click", function(e) {
				document.body.removeChild(document.getElementById("selector"));
				document.body.removeChild(document.getElementById("darken"));
				document.body.style.overflow = "auto";
			
			    var selector2 = document.createElement('div');
				selector2.id = "selector2";
				selector2.className = "selector";
				selector2.style.top = (window.pageYOffset + (window.innerHeight * 0.05)) + "px" ;
				document.body.appendChild(selector2);
				var characterselect2 ;

				
				for (var k = 0; k < charData.length; k++){
					var img2 = document.createElement('div');
					img2.className = "thumbbuttonchar";
					let test = 'assets/char/' + charData[k]+".png";  
					characterselect2 = charData[k];
					let character_final = charData[k];
					fetch(test)
					.then(res => res.blob())
					.then(blob => {
					PNG = URL.createObjectURL(blob)
						});
						
					
					img2.style.backgroundImage = "url(../IHLive2d/assets/char/"+charData[k]+".png)"
					img2.style.backgroundSize = "100%";
					img2.addEventListener("click", function(e) {
						$('.selectCharacter').val(character_final).trigger('change');
						document.body.removeChild(document.getElementById("selector2"));
						document.body.style.overflow = "auto";
				},false);
				if (characterselect2.startsWith(characterselect)){
					
				document.getElementById("selector2").appendChild(img2)};
				};
				
				
			
        }, false);
        document.getElementById("selector").appendChild(img);
    }
}


//Hide dropdown 

$('.selectCharacter').hide().css('height', 0);
$('#dropdown-container').hide();

//Population of character drop down

 class SelectCharacter {
  constructor(selectElement) {
    this.selectElement = selectElement;
  }

  populateOptions(charData) {
    let stringCharacter = "";
    for (let val in charData) {
      stringCharacter += '<option value="' + charData[val] + '">' + charData[val] + '</option>';
    }
    this.selectElement.html(stringCharacter);
  }
}
let selectCharacter = new SelectCharacter($(".selectCharacter"));
selectCharacter.populateOptions(charData);


//Initial motion dropdown intialisation - need to have this populated for some reason? Will investigate

var motion = {
	"":"",
	"act_touch01": "act_touch01",
	"act_touch02": "act_touch02",
	"act_touch03": "act_touch03",
	"act_touch04": "act_touch04",
	"act_touch05": "act_touch05",
	"act_touch06": "act_touch06",
	"act_touch07": "act_touch07",
	"idle": "idle",
	

};

// Initial motion dropdown list creation
	
	class SelectMotion {
		constructor(selectElement) {
    this.selectElement = selectElement;
  }

	populateOptions(motion) {
		let stringCharacter = "";
			for (let val in motion) {
				stringCharacter += '<option value="' + motion[val] + '">' + val + '</option>';
				}
		this.selectElement.html(stringCharacter);
			}
	}
	let selectMotion = new SelectMotion($(".selectMotion"));
	selectMotion.populateOptions(motion);
  
	let selectedOption2 = $('.selectMotion').val();
	let motionselect = motion[selectedOption2];
  

  
  