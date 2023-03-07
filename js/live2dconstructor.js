

//Add event to check if checkbox value changes

var checkbox = document.getElementById("mousetrack");
var checkbox_val;
var checked_val = false;

checkbox.addEventListener('change', function(event) {
	checkbox = document.getElementById("mousetrack");
	checkbox_val = checkbox.checked;
	});
	
//Add event for background music

var checkbox_music = document.getElementById("backgroundmusic");
const audio = new Audio("assets/audio/shuqing.mp3");

checkbox_music.addEventListener("change", function() {
  if (checkbox_music.checked) {
    audio.play();
	audio.loop = true;
	
  } else {
    audio.pause();
  }
});

var checkbox_voice = document.getElementById("voice");
let voice_setting = 'no';

checkbox_voice.addEventListener("change", function() {
  if (checkbox_voice.checked) {
    voice_setting = 'yes'
	
  } else {
    voice_setting = 'no';
  }
});

//Events to draw model + setup settings

var fixed_scale = 0;
var prior_character ;

const {
        Application,
        Container,
        live2d: { Live2DModel, Live2DFactory, InteractionManager, SoundManager, MotionPriority, config}
		
      } = PIXI;
	  

      async function render({ usePixiContainer, canvasEl, parentEl, modelUrl, motion, load, selectedOption, motionarray}) {
        const app = new Application({
          view: canvasEl,
          autoStart: true,
          transparent: true,
          backgroundAlpha: 0,
          resizeTo: parentEl
        });
    
	
		var checkbox = document.getElementById("mousetrack");
		//clear any prior model displayed - hopefully helps with performance who knows

		app.stage.removeChildren();
		
		//Create model
		
        const currentModel = await Live2DModel.from(modelUrl, { idleMotionGroup: 'idle' });
		const motion_name = motion
		
		let settingsJSON = await fetch(modelUrl).then(res => res.json());
		settingsJSON.url = modelUrl
		Settings = new PIXI.live2d.Cubism4ModelSettings(settingsJSON);
		
		//Update Motion list based on selected character - only when new character is selected
		
		if (load === '1') {
		
		// Add blank option to allow selecting the only animation for SSR skins (idle)
		
		updated_motions = {'':'' };
	
		for (let motion in Settings?.motions) {
			updated_motions[motion] = motion;
			
		}
		
		selectMotion.populateOptions(updated_motions);
		}
		
		//Default model scale - might need to tidy up/ allow options on page
		
		
		if (fixed_scale <= 0 || selectedOption != prior_character) {
		
        currentModel.scale.set(0.3);
		scale = 0.3;
		
		} else if (selectedOption == prior_character) {currentModel.scale.set(fixed_scale)}
		
		//Add voice
		
		const index = selectedOption.indexOf("_");
		if (index !== -1) {
			const charname = selectedOption.substr(0, index);
		}
	
		if (motion != 'idle') {
			var listsound = ['introduction','start','bond1','bond2','bond3','bond4','bond5','bond6','bond7','bond8'];
			var rand = listsound[~~(Math.random() * listsound.length)];
			
			//currentModel.internalModel.settings.motions[motion_name][0].Sound = 'https://raw.githubusercontent.com/Misekato/TestIHAud/main/char/' + charname + '/' + randsound + '.mp3'
			}
		
		//Manually adjust scale for some characters
		
		if ($.inArray(selectedOption, ['hannibal_ur' ]) >= 0) {
		currentModel.scale.set(0.25);
			scale=0.25;
		}
		
		if ($.inArray(selectedOption, ['ashikaga_2','takenaka_ur','chiyome_3']) >= 0) {
		currentModel.scale.set(0.40);
			scale=0.40;
		}
		
		if ($.inArray(selectedOption, ['ashikaga_ssr_1']) >= 0) {
		currentModel.scale.set(0.15);
			scale=0.15;
		}
		
		//Create function to get internal model parameters - possibly combine with below later
/*		currentModel.getCoreModel = () => {
        return currentModel.internalModel.coreModel
			}
*/	
		//Default model settings - might need to tidy up/ allow options on page
			
        currentModel.interactive = true;
        currentModel.anchor.set(0.5, 0.5);
        currentModel.position.set(parentEl.offsetWidth * 0.5, parentEl.offsetHeight * 0.5);
		
		//Adjust breath parameter - default values appear to be a bit understated compared to when viewed in live2dviewer
		//ParamX , Y, Z, BodyAngelX, ParamBreath
		currentModel.internalModel.breath._breathParameters[0]['peak'] = 30
		currentModel.internalModel.breath._breathParameters[1]['peak'] = 16
		currentModel.internalModel.breath._breathParameters[2]['peak'] = 20
		currentModel.internalModel.breath._breathParameters[3]['peak'] = 20
		currentModel.internalModel.breath._breathParameters[4]['peak'] = 1.5
		
		config.idleMotionFadingDuration = 0;
		
		//Obtain Parameter values
/*		
		currentModel.ParametersValues.parameter = [] //Get parameter values
		
        currentModel.getCoreModel()._parameterIds.map((p, index) => {
            let parameter = {}
            parameter.parameterIds = p
            parameter.max = currentModel.getCoreModel()._parameterMaximumValues[index]
            parameter.min = currentModel.getCoreModel()._parameterMinimumValues[index]
            parameter.defaultValue = currentModel.getCoreModel()._parameterValues[index]

            currentModel.ParametersValues.parameter.push(parameter)
        })
*/		
		
        // Add events to drag model
        currentModel.on('pointerdown', e => {
        currentModel.offsetX = e.data.global.x - currentModel.position.x;
        currentModel.offsetY = e.data.global.y - currentModel.position.y;
        currentModel.dragging = true;
		
        });
		
        currentModel.on('pointerup', e => {
          currentModel.dragging = false;
        });
		
        currentModel.on('pointermove', e => {
          if (currentModel.dragging) {
            currentModel.position.set(
              e.data.global.x - currentModel.offsetX,
              e.data.global.y - currentModel.offsetY
            );
          }
        });
		
		//Zoom on mouse scroll
		currentModel.on('wheel', e => {
			currentModel.scale.set(scale - (event.deltaY *0.0001));
			scale = scale - (event.deltaY *0.0001);
			scale = Math.min(Math.max(0.1, scale), 0.6);
			fixed_scale = scale;
		})
		
		//Interaction -- hmmm hitareas not importing correctly so this does nothing
		
		currentModel.on('hit', (hitAreas) => {
        if (hitAreas.includes('Body')) {
            currentModel.motion('idle');
        }})
		
		//console.log(stringCharacter);
		currentModel.on('click', e => {
			
			var listmotion = ['idle','act_touch01','act_touch02'];
			var rand = listmotion[~~(Math.random() * listmotion.length)];
					
		if (rand != 'idle') {
			var listsound = ['introduction','start','bond1','bond2','bond3','bond4','bond5','bond6','bond7','bond8'];
			var randsound = listsound[~~(Math.random() * listsound.length)];
			
			//currentModel.internalModel.settings.motions[rand][0].Sound = 'https://raw.githubusercontent.com/Misekato/TestIHAud/main/char/' + charname + '/' + randsound + '.mp3' 
			}
			
			currentModel.internalModel.motionManager.startMotion(rand,0,MotionPriority.FORCE)
		})
		
		//Add mouse motion tracking if selected in tickbox, disable on mobile  
		
		if  (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){} else{
		
		if (checked_val === true) {
			currentModel.on("pointermove", function(e) {
			  currentModel.focus(event.clientX, event.clientY);
		})};

		$('#mousetrack').click(function() {
			console.log(this.checked)
			checked_val = this.checked
		
		  if (this.checked === true) {
			currentModel.on("pointermove", function(e) {
			  currentModel.focus(event.clientX, event.clientY);
			});
		  } else {}
		});
		};
		
		//Set prior character for the purpose of determining whether to retain scale
		
		prior_character = selectedOption;
		//Draw model on screen

        app.stage.addChild(currentModel);
		
		//Play relevant motion
		
		app.stage.children[0].internalModel.motionManager.startMotion(motion_name,0);
      }
	  
 //Update location when new character selected

var ddlArray = []; 

$('.selectCharacter').change(function(){
  (async function () {
	let selectedOption = $('.selectCharacter').val();
	// Data stored in separate repo to avoid 1GB threshold per repo/500GB artifact build limitation for Github free
    let modelUrl = 'https://raw.githubusercontent.com/Misekato/TestIHd/main/assets/' + selectedOption + '/live2d.model3.json';

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
			}}
			
	let selectMotion = new SelectMotion($(".selectMotion"));

/* 	var selected = selectMotion['selectElement']['0'];

	var motionarray = [];
	console.log(motionarray);
	
	for (var i = 1, l = selected.childNodes.length; i < l; i++) {
		if (selected.childNodes[i].nodeName === 'OPTION') motionarray.push(selected.childNodes[i].innerHTML);
	} */
	
	
    await render({
      usePixiContainer: false,
      canvasEl: document.getElementById('canvas-1'),
      parentEl: document.getElementById('container-1'),
      modelUrl: modelUrl,
	  motion: "idle",
	  load: '1',
	  selectedOption: selectedOption,
    });
	
  })();
});

//Play motion when selected - probably a better way to initialise this but whatever - tested having loading motions (one after the other, but think hard reset is better)
//will keep like this for now


$('.selectMotion').change(function(){
  (async function () {
	let selectedOption = $('.selectCharacter').val();
    let modelUrl = 'https://raw.githubusercontent.com/Misekato/TestIHd/main/assets/' + selectedOption + '/live2d.model3.json';
	
	let selectedOption2 = $('.selectMotion').val();
	let motionselect = motion[selectedOption2];
	
    await render({
      usePixiContainer: false,
      canvasEl: document.getElementById('canvas-1'),
      parentEl: document.getElementById('container-1'),
      modelUrl: modelUrl,
	  motion: motionselect,
	  load: '2',
	  selectedOption: selectedOption
    });
  })();
});


