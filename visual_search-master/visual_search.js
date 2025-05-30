/********************** 
 * Visual_Search *
 **********************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'visual_search';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: false,
  color: new util.Color([1.0, 1.0, 1.0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instructions_tRoutineBegin());
flowScheduler.add(instructions_tRoutineEachFrame());
flowScheduler.add(instructions_tRoutineEnd());
flowScheduler.add(countdownRoutineBegin());
flowScheduler.add(countdownRoutineEachFrame());
flowScheduler.add(countdownRoutineEnd());
const trials_tLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_tLoopBegin(trials_tLoopScheduler));
flowScheduler.add(trials_tLoopScheduler);
flowScheduler.add(trials_tLoopEnd);


flowScheduler.add(instructionsRoutineBegin());
flowScheduler.add(instructionsRoutineEachFrame());
flowScheduler.add(instructionsRoutineEnd());
flowScheduler.add(countdownRoutineBegin());
flowScheduler.add(countdownRoutineEachFrame());
flowScheduler.add(countdownRoutineEnd());
const trials_1LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_1LoopBegin(trials_1LoopScheduler));
flowScheduler.add(trials_1LoopScheduler);
flowScheduler.add(trials_1LoopEnd);




flowScheduler.add(instructionsRoutineBegin());
flowScheduler.add(instructionsRoutineEachFrame());
flowScheduler.add(instructionsRoutineEnd());
flowScheduler.add(countdownRoutineBegin());
flowScheduler.add(countdownRoutineEachFrame());
flowScheduler.add(countdownRoutineEnd());
const trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2LoopBegin(trials_2LoopScheduler));
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);




flowScheduler.add(instructionsRoutineBegin());
flowScheduler.add(instructionsRoutineEachFrame());
flowScheduler.add(instructionsRoutineEnd());
flowScheduler.add(countdownRoutineBegin());
flowScheduler.add(countdownRoutineEachFrame());
flowScheduler.add(countdownRoutineEnd());
const trials_3LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_3LoopBegin(trials_3LoopScheduler));
flowScheduler.add(trials_3LoopScheduler);
flowScheduler.add(trials_3LoopEnd);




flowScheduler.add(instructionsRoutineBegin());
flowScheduler.add(instructionsRoutineEachFrame());
flowScheduler.add(instructionsRoutineEnd());
flowScheduler.add(countdownRoutineBegin());
flowScheduler.add(countdownRoutineEachFrame());
flowScheduler.add(countdownRoutineEnd());
const trials_4LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_4LoopBegin(trials_4LoopScheduler));
flowScheduler.add(trials_4LoopScheduler);
flowScheduler.add(trials_4LoopEnd);




flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'conditions_t.xlsx', 'path': 'conditions_t.xlsx'},
    {'name': 'conditions2.csv', 'path': 'conditions2.csv'},
    {'name': 'conditions2.csv', 'path': 'conditions2.csv'},
    {'name': 'conditions2.csv', 'path': 'conditions2.csv'},
    {'name': 'conditions2.csv', 'path': 'conditions2.csv'},
    {'name': 'Images/Yes.png', 'path': 'Images/Yes.png'},
    {'name': 'Images/No.png', 'path': 'Images/No.png'},
    {'name': 'Images/1.png', 'path': 'Images/1.png'},
    {'name': 'Images/2.png', 'path': 'Images/2.png'},
    {'name': 'Images/3.png', 'path': 'Images/3.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var instructions_tClock;
var mouse_instructions_t;
var text_instructions_t;
var countdownClock;
var text_3;
var text_2;
var text_1;
var ISIClock;
var blank;
var instructionsClock;
var text_instructions;
var mouse_instructions;
var visual_search_1Clock;
var square_1;
var instruct_1;
var mouse_1;
var target_1;
var C_1;
var InC_1;
var image_1;
var feedback_1Clock;
var fb_1;
var trial_counter_1;
var rts;
var n_round_1;
var FB_1;
var visual_search_2Clock;
var square_2;
var instruct_2;
var mouse_2;
var target_2;
var C_2;
var InC_2;
var image_2;
var feedback_2Clock;
var fb_2;
var trial_counter_2;
var n_round_2;
var FB_2;
var visual_search_3Clock;
var square_3;
var instruct_3;
var mouse_3;
var target_3;
var C_3;
var InC_3;
var image_3;
var feedback_3Clock;
var fb_3;
var trial_counter_3;
var n_round_3;
var FB_3;
var visual_search_4Clock;
var square_4;
var instruct_4;
var mouse_4;
var target_4;
var C_4;
var InC_4;
var image_4;
var feedback_4Clock;
var fb_4;
var trial_counter_4;
var n_round_4;
var FB_4;
var endClock;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instructions_t"
  instructions_tClock = new util.Clock();
  mouse_instructions_t = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_instructions_t.mouseClock = new util.Clock();
  text_instructions_t = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instructions_t',
    text: 'คุณจะเห็นรูปทรงหลายรูปปรากฏบนหน้าจอในแต่ละรอบ\nคุณต้องหา "สามเหลี่ยม" เมื่อเจอให้กดปุ่มสึเขียว\nถ้าไม่มี "สามเหลี่ยม" ให้กดปุ่มสีแดง\nแตะเพื่อดำเนินการต่อ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "countdown"
  countdownClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: '3',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.2,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '2',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.2,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_1',
    text: '1',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.2,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "ISI"
  ISIClock = new util.Clock();
  blank = new visual.TextStim({
    win: psychoJS.window,
    name: 'blank',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.2,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  text_instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instructions',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  mouse_instructions = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_instructions.mouseClock = new util.Clock();
  // Initialize components for Routine "visual_search_1"
  visual_search_1Clock = new util.Clock();
  square_1 = new visual.Rect ({
    win: psychoJS.window, name: 'square_1', 
    width: [0.6, 0.6][0], height: [0.6, 0.6][1],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  instruct_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruct_1',
    text: 'มีสามเหลี่ยมสีฟ้า     หรือไม่',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  mouse_1 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_1.mouseClock = new util.Clock();
  target_1 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'target_1', 
    vertices: [[-[0.039, 0.035][0]/2.0, -[0.039, 0.035][1]/2.0], [+[0.039, 0.035][0]/2.0, -[0.039, 0.035][1]/2.0], [0, [0.039, 0.035][1]/2.0]],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    fillColor: new util.Color([(- 0.3255), 0.4118, 1.0]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -4, 
    interpolate: true, 
  });
  
  C_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'C_1', units : undefined, 
    image : 'Images/Yes.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.15, (- 0.4)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  InC_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'InC_1', units : undefined, 
    image : 'Images/No.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.15), (- 0.4)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  image_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_1', units : undefined, 
    image : 'Images/1.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.1, 0.395], 
    draggable: false,
    size : [0.07, 0.07],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  // Initialize components for Routine "feedback_1"
  feedback_1Clock = new util.Clock();
  fb_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fb_1',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  trial_counter_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'trial_counter_1',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Run 'Begin Experiment' code from track_rt_1
  rts = [];
  n_round_1 = 0;
  
  FB_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'FB_1',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.06], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "visual_search_2"
  visual_search_2Clock = new util.Clock();
  square_2 = new visual.Rect ({
    win: psychoJS.window, name: 'square_2', 
    width: [0.6, 0.6][0], height: [0.6, 0.6][1],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    fillColor: new util.Color([1.0, 1.0, 1.0]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  instruct_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruct_2',
    text: 'มีสามเหลี่ยม     หรือไม่',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  mouse_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_2.mouseClock = new util.Clock();
  target_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'target_2', 
    vertices: [[-[0.039, 0.035][0]/2.0, -[0.039, 0.035][1]/2.0], [+[0.039, 0.035][0]/2.0, -[0.039, 0.035][1]/2.0], [0, [0.039, 0.035][1]/2.0]],
    ori: 0.0, 
    pos: [10, 10], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('grey'), 
    fillColor: new util.Color('grey'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -4, 
    interpolate: true, 
  });
  
  C_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'C_2', units : undefined, 
    image : 'Images/Yes.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.15, (- 0.4)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  InC_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'InC_2', units : undefined, 
    image : 'Images/No.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.15), (- 0.4)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : undefined, 
    image : 'Images/2.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.055, 0.395], 
    draggable: false,
    size : [0.07, 0.07],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  // Initialize components for Routine "feedback_2"
  feedback_2Clock = new util.Clock();
  fb_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fb_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  trial_counter_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'trial_counter_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Run 'Begin Experiment' code from track_rt_2
  rts = [];
  n_round_2 = 0;
  
  FB_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'FB_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.06], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "visual_search_3"
  visual_search_3Clock = new util.Clock();
  square_3 = new visual.Rect ({
    win: psychoJS.window, name: 'square_3', 
    width: [0.6, 0.6][0], height: [0.6, 0.6][1],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    fillColor: new util.Color([1.0, 1.0, 1.0]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  instruct_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruct_3',
    text: 'มีวงกลมสีฟ้าอมเขียว      หรือไม่',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  mouse_3 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_3.mouseClock = new util.Clock();
  target_3 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'target_3', 
    vertices: [[-[0.039, 0.035][0]/2.0, -[0.039, 0.035][1]/2.0], [+[0.039, 0.035][0]/2.0, -[0.039, 0.035][1]/2.0], [0, [0.039, 0.035][1]/2.0]],
    ori: 0.0, 
    pos: [10, 10], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([1.0, 0.5059, 0.5922]), 
    fillColor: new util.Color([(- 0.4902), 0.7647, 0.6314]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -4, 
    interpolate: true, 
  });
  
  C_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'C_3', units : undefined, 
    image : 'Images/Yes.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.15, (- 0.4)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  InC_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'InC_3', units : undefined, 
    image : 'Images/No.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.15), (- 0.4)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  image_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_3', units : undefined, 
    image : 'Images/3.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.14, 0.395], 
    draggable: false,
    size : [0.07, 0.07],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  // Initialize components for Routine "feedback_3"
  feedback_3Clock = new util.Clock();
  fb_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fb_3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  trial_counter_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'trial_counter_3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Run 'Begin Experiment' code from track_rt_3
  rts = [];
  n_round_3 = 0;
  
  FB_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'FB_3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.06], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "visual_search_4"
  visual_search_4Clock = new util.Clock();
  square_4 = new visual.Rect ({
    win: psychoJS.window, name: 'square_4', 
    width: [0.6, 0.6][0], height: [0.6, 0.6][1],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    fillColor: new util.Color([1.0, 1.0, 1.0]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  instruct_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruct_4',
    text: 'มีสามเหลี่ยมสีฟ้า     หรือไม่',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  mouse_4 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_4.mouseClock = new util.Clock();
  target_4 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'target_4', 
    vertices: [[-[0.039, 0.035][0]/2.0, -[0.039, 0.035][1]/2.0], [+[0.039, 0.035][0]/2.0, -[0.039, 0.035][1]/2.0], [0, [0.039, 0.035][1]/2.0]],
    ori: 0.0, 
    pos: [10, 10], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([0.1608, (- 0.7412), 1.0]), 
    fillColor: new util.Color([(- 1.0), 0.2, 1.0]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -4, 
    interpolate: true, 
  });
  
  C_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'C_4', units : undefined, 
    image : 'Images/Yes.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.15, (- 0.4)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  InC_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'InC_4', units : undefined, 
    image : 'Images/No.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.15), (- 0.4)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  image_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_4', units : undefined, 
    image : 'Images/1.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.1, 0.395], 
    draggable: false,
    size : [0.07, 0.07],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  // Initialize components for Routine "feedback_4"
  feedback_4Clock = new util.Clock();
  fb_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fb_4',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  trial_counter_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'trial_counter_4',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Run 'Begin Experiment' code from track_rt_4
  rts = [];
  n_round_4 = 0;
  
  FB_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'FB_4',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.06], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var instructions_tMaxDurationReached;
var gotValidClick;
var instructions_tMaxDuration;
var instructions_tComponents;
function instructions_tRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions_t' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instructions_tClock.reset();
    routineTimer.reset();
    instructions_tMaxDurationReached = false;
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_instructions_t
    gotValidClick = false; // until a click is received
    instructions_tMaxDuration = null
    // keep track of which components have finished
    instructions_tComponents = [];
    instructions_tComponents.push(mouse_instructions_t);
    instructions_tComponents.push(text_instructions_t);
    
    for (const thisComponent of instructions_tComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
function instructions_tRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions_t' ---
    // get current time
    t = instructions_tClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *mouse_instructions_t* updates
    if (t >= 0.0 && mouse_instructions_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_instructions_t.tStart = t;  // (not accounting for frame time here)
      mouse_instructions_t.frameNStart = frameN;  // exact frame index
      
      mouse_instructions_t.status = PsychoJS.Status.STARTED;
      mouse_instructions_t.mouseClock.reset();
      prevButtonState = mouse_instructions_t.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_instructions_t.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_instructions_t.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // end routine on response
          continueRoutine = false;
        }
      }
    }
    
    // *text_instructions_t* updates
    if (t >= 0.0 && text_instructions_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instructions_t.tStart = t;  // (not accounting for frame time here)
      text_instructions_t.frameNStart = frameN;  // exact frame index
      
      text_instructions_t.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructions_tComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructions_tRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions_t' ---
    for (const thisComponent of instructions_tComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "instructions_t" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var countdownMaxDurationReached;
var countdownMaxDuration;
var countdownComponents;
function countdownRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'countdown' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    countdownClock.reset(routineTimer.getTime());
    routineTimer.add(3.000000);
    countdownMaxDurationReached = false;
    // update component parameters for each repeat
    countdownMaxDuration = null
    // keep track of which components have finished
    countdownComponents = [];
    countdownComponents.push(text_3);
    countdownComponents.push(text_2);
    countdownComponents.push(text_1);
    
    for (const thisComponent of countdownComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function countdownRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'countdown' ---
    // get current time
    t = countdownClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_3.setAutoDraw(false);
    }
    
    
    // *text_2* updates
    if (t >= 1.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    frameRemains = 1.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_2.setAutoDraw(false);
    }
    
    
    // *text_1* updates
    if (t >= 2.0 && text_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_1.tStart = t;  // (not accounting for frame time here)
      text_1.frameNStart = frameN;  // exact frame index
      
      text_1.setAutoDraw(true);
    }
    
    frameRemains = 2.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_1.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of countdownComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function countdownRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'countdown' ---
    for (const thisComponent of countdownComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if (countdownMaxDurationReached) {
        countdownClock.add(countdownMaxDuration);
    } else {
        countdownClock.add(3.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials_t;
function trials_tLoopBegin(trials_tLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_t = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions_t.xlsx',
      seed: undefined, name: 'trials_t'
    });
    psychoJS.experiment.addLoop(trials_t); // add the loop to the experiment
    currentLoop = trials_t;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrials_t of trials_t) {
      snapshot = trials_t.getSnapshot();
      trials_tLoopScheduler.add(importConditions(snapshot));
      trials_tLoopScheduler.add(ISIRoutineBegin(snapshot));
      trials_tLoopScheduler.add(ISIRoutineEachFrame());
      trials_tLoopScheduler.add(ISIRoutineEnd(snapshot));
      trials_tLoopScheduler.add(trials_tLoopEndIteration(trials_tLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_tLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_t);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_tLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_1;
function trials_1LoopBegin(trials_1LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_1 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions2.csv',
      seed: undefined, name: 'trials_1'
    });
    psychoJS.experiment.addLoop(trials_1); // add the loop to the experiment
    currentLoop = trials_1;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_1 of trials_1) {
      snapshot = trials_1.getSnapshot();
      trials_1LoopScheduler.add(importConditions(snapshot));
      trials_1LoopScheduler.add(ISIRoutineBegin(snapshot));
      trials_1LoopScheduler.add(ISIRoutineEachFrame());
      trials_1LoopScheduler.add(ISIRoutineEnd(snapshot));
      trials_1LoopScheduler.add(visual_search_1RoutineBegin(snapshot));
      trials_1LoopScheduler.add(visual_search_1RoutineEachFrame());
      trials_1LoopScheduler.add(visual_search_1RoutineEnd(snapshot));
      trials_1LoopScheduler.add(feedback_1RoutineBegin(snapshot));
      trials_1LoopScheduler.add(feedback_1RoutineEachFrame());
      trials_1LoopScheduler.add(feedback_1RoutineEnd(snapshot));
      trials_1LoopScheduler.add(trials_1LoopEndIteration(trials_1LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_1LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_1);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_1LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_2;
function trials_2LoopBegin(trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions2.csv',
      seed: undefined, name: 'trials_2'
    });
    psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
    currentLoop = trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_2 of trials_2) {
      snapshot = trials_2.getSnapshot();
      trials_2LoopScheduler.add(importConditions(snapshot));
      trials_2LoopScheduler.add(ISIRoutineBegin(snapshot));
      trials_2LoopScheduler.add(ISIRoutineEachFrame());
      trials_2LoopScheduler.add(ISIRoutineEnd(snapshot));
      trials_2LoopScheduler.add(visual_search_2RoutineBegin(snapshot));
      trials_2LoopScheduler.add(visual_search_2RoutineEachFrame());
      trials_2LoopScheduler.add(visual_search_2RoutineEnd(snapshot));
      trials_2LoopScheduler.add(feedback_2RoutineBegin(snapshot));
      trials_2LoopScheduler.add(feedback_2RoutineEachFrame());
      trials_2LoopScheduler.add(feedback_2RoutineEnd(snapshot));
      trials_2LoopScheduler.add(trials_2LoopEndIteration(trials_2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_3;
function trials_3LoopBegin(trials_3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions2.csv',
      seed: undefined, name: 'trials_3'
    });
    psychoJS.experiment.addLoop(trials_3); // add the loop to the experiment
    currentLoop = trials_3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_3 of trials_3) {
      snapshot = trials_3.getSnapshot();
      trials_3LoopScheduler.add(importConditions(snapshot));
      trials_3LoopScheduler.add(ISIRoutineBegin(snapshot));
      trials_3LoopScheduler.add(ISIRoutineEachFrame());
      trials_3LoopScheduler.add(ISIRoutineEnd(snapshot));
      trials_3LoopScheduler.add(visual_search_3RoutineBegin(snapshot));
      trials_3LoopScheduler.add(visual_search_3RoutineEachFrame());
      trials_3LoopScheduler.add(visual_search_3RoutineEnd(snapshot));
      trials_3LoopScheduler.add(feedback_3RoutineBegin(snapshot));
      trials_3LoopScheduler.add(feedback_3RoutineEachFrame());
      trials_3LoopScheduler.add(feedback_3RoutineEnd(snapshot));
      trials_3LoopScheduler.add(trials_3LoopEndIteration(trials_3LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_3LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_3);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_3LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_4;
function trials_4LoopBegin(trials_4LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_4 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions2.csv',
      seed: undefined, name: 'trials_4'
    });
    psychoJS.experiment.addLoop(trials_4); // add the loop to the experiment
    currentLoop = trials_4;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_4 of trials_4) {
      snapshot = trials_4.getSnapshot();
      trials_4LoopScheduler.add(importConditions(snapshot));
      trials_4LoopScheduler.add(ISIRoutineBegin(snapshot));
      trials_4LoopScheduler.add(ISIRoutineEachFrame());
      trials_4LoopScheduler.add(ISIRoutineEnd(snapshot));
      trials_4LoopScheduler.add(visual_search_4RoutineBegin(snapshot));
      trials_4LoopScheduler.add(visual_search_4RoutineEachFrame());
      trials_4LoopScheduler.add(visual_search_4RoutineEnd(snapshot));
      trials_4LoopScheduler.add(feedback_4RoutineBegin(snapshot));
      trials_4LoopScheduler.add(feedback_4RoutineEachFrame());
      trials_4LoopScheduler.add(feedback_4RoutineEnd(snapshot));
      trials_4LoopScheduler.add(trials_4LoopEndIteration(trials_4LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_4LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_4);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_4LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var ISIMaxDurationReached;
var ISIMaxDuration;
var ISIComponents;
function ISIRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ISI' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    ISIClock.reset(routineTimer.getTime());
    routineTimer.add(0.500000);
    ISIMaxDurationReached = false;
    // update component parameters for each repeat
    ISIMaxDuration = null
    // keep track of which components have finished
    ISIComponents = [];
    ISIComponents.push(blank);
    
    for (const thisComponent of ISIComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ISIRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ISI' ---
    // get current time
    t = ISIClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *blank* updates
    if (t >= 0.0 && blank.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blank.tStart = t;  // (not accounting for frame time here)
      blank.frameNStart = frameN;  // exact frame index
      
      blank.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (blank.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      blank.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ISIComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ISIRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ISI' ---
    for (const thisComponent of ISIComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if (ISIMaxDurationReached) {
        ISIClock.add(ISIMaxDuration);
    } else {
        ISIClock.add(0.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instructionsMaxDurationReached;
var instructionsMaxDuration;
var instructionsComponents;
function instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instructionsClock.reset();
    routineTimer.reset();
    instructionsMaxDurationReached = false;
    // update component parameters for each repeat
    text_instructions.setText('\nแตะหน้าจอเพื่อเริ่มเล่น');
    // setup some python lists for storing info about the mouse_instructions
    gotValidClick = false; // until a click is received
    instructionsMaxDuration = null
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(text_instructions);
    instructionsComponents.push(mouse_instructions);
    
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions' ---
    // get current time
    t = instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_instructions* updates
    if (t >= 0.0 && text_instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instructions.tStart = t;  // (not accounting for frame time here)
      text_instructions.frameNStart = frameN;  // exact frame index
      
      text_instructions.setAutoDraw(true);
    }
    
    // *mouse_instructions* updates
    if (t >= 0.0 && mouse_instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_instructions.tStart = t;  // (not accounting for frame time here)
      mouse_instructions.frameNStart = frameN;  // exact frame index
      
      mouse_instructions.status = PsychoJS.Status.STARTED;
      mouse_instructions.mouseClock.reset();
      prevButtonState = mouse_instructions.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_instructions.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_instructions.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // end routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions' ---
    for (const thisComponent of instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var visual_search_1MaxDurationReached;
var n_distractors;
var n_target;
var distractors;
var targets;
var xys;
var count;
var positions;
var visual_search_1MaxDuration;
var visual_search_1Components;
function visual_search_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'visual_search_1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    visual_search_1Clock.reset();
    routineTimer.reset();
    visual_search_1MaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_1
    n_distractors = decoy;
    n_target = tar;
    distractors = [];
    targets = [];
    xys = [[(- 0.25), (- 0.25)], [(- 0.194444), (- 0.25)], [(- 0.138889), (- 0.25)], [(- 0.083333), (- 0.25)], [(- 0.027778), (- 0.25)], [0.027778, (- 0.25)], [0.083333, (- 0.25)], [0.138889, (- 0.25)], [0.194444, (- 0.25)], [0.25, (- 0.25)], [(- 0.25), (- 0.194444)], [(- 0.194444), (- 0.194444)], [(- 0.138889), (- 0.194444)], [(- 0.083333), (- 0.194444)], [(- 0.027778), (- 0.194444)], [0.027778, (- 0.194444)], [0.083333, (- 0.194444)], [0.138889, (- 0.194444)], [0.194444, (- 0.194444)], [0.25, (- 0.194444)], [(- 0.25), (- 0.138889)], [(- 0.194444), (- 0.138889)], [(- 0.138889), (- 0.138889)], [(- 0.083333), (- 0.138889)], [(- 0.027778), (- 0.138889)], [0.027778, (- 0.138889)], [0.083333, (- 0.138889)], [0.138889, (- 0.138889)], [0.194444, (- 0.138889)], [0.25, (- 0.138889)], [(- 0.25), (- 0.083333)], [(- 0.194444), (- 0.083333)], [(- 0.138889), (- 0.083333)], [(- 0.083333), (- 0.083333)], [(- 0.027778), (- 0.083333)], [0.027778, (- 0.083333)], [0.083333, (- 0.083333)], [0.138889, (- 0.083333)], [0.194444, (- 0.083333)], [0.25, (- 0.083333)], [(- 0.25), (- 0.027778)], [(- 0.194444), (- 0.027778)], [(- 0.138889), (- 0.027778)], [(- 0.083333), (- 0.027778)], [(- 0.027778), (- 0.027778)], [0.027778, (- 0.027778)], [0.083333, (- 0.027778)], [0.138889, (- 0.027778)], [0.194444, (- 0.027778)], [0.25, (- 0.027778)], [(- 0.25), 0.027778], [(- 0.194444), 0.027778], [(- 0.138889), 0.027778], [(- 0.083333), 0.027778], [(- 0.027778), 0.027778], [0.027778, 0.027778], [0.083333, 0.027778], [0.138889, 0.027778], [0.194444, 0.027778], [0.25, 0.027778], [(- 0.25), 0.083333], [(- 0.194444), 0.083333], [(- 0.138889), 0.083333], [(- 0.083333), 0.083333], [(- 0.027778), 0.083333], [0.027778, 0.083333], [0.083333, 0.083333], [0.138889, 0.083333], [0.194444, 0.083333], [0.25, 0.083333], [(- 0.25), 0.138889], [(- 0.194444), 0.138889], [(- 0.138889), 0.138889], [(- 0.083333), 0.138889], [(- 0.027778), 0.138889], [0.027778, 0.138889], [0.083333, 0.138889], [0.138889, 0.138889], [0.194444, 0.138889], [0.25, 0.138889], [(- 0.25), 0.194444], [(- 0.194444), 0.194444], [(- 0.138889), 0.194444], [(- 0.083333), 0.194444], [(- 0.027778), 0.194444], [0.027778, 0.194444], [0.083333, 0.194444], [0.138889, 0.194444], [0.194444, 0.194444], [0.25, 0.194444], [(- 0.25), 0.25], [(- 0.194444), 0.25], [(- 0.138889), 0.25], [(- 0.083333), 0.25], [(- 0.027778), 0.25], [0.027778, 0.25], [0.083333, 0.25], [0.138889, 0.25], [0.194444, 0.25], [0.25, 0.25]];
    util.shuffle(xys);
    count = 0;
    positions = [];
    for (var i, _pj_c = 0, _pj_a = util.range(n_distractors), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        distractor = new visual.Polygon({"win": psychoJS.window, "edges": 3, "size": 0.05, "pos": [xys[count][0], xys[count][1]], "lineColor": "yellow", "fillColor": "yellow", "opacity": 1.0, "depth": (- 1.0)});
        distractors.push(distractor);
        positions.push(xys[count]);
        count += 1;
    }
    for (var i, _pj_c = 0, _pj_a = util.range(n_target), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        target = new visual.Polygon({"win": psychoJS.window, "edges": 3, "size": 0.05, "pos": [xys[count][0], xys[count][1]], "lineColor": [(- 1.0), 0.2, 1.0], "fillColor": [(- 1.0), 0.2, 1.0], "opacity": 1.0, "depth": (- 1.0)});
        targets.push(target);
        positions.push(xys[count]);
    }
    for (var distractor, _pj_c = 0, _pj_a = distractors, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        distractor = _pj_a[_pj_c];
        distractor.setAutoDraw(true);
    }
    for (var target, _pj_c = 0, _pj_a = targets, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        target = _pj_a[_pj_c];
        target.setAutoDraw(true);
    }
    
    // setup some python lists for storing info about the mouse_1
    // current position of the mouse:
    mouse_1.x = [];
    mouse_1.y = [];
    mouse_1.leftButton = [];
    mouse_1.midButton = [];
    mouse_1.rightButton = [];
    mouse_1.time = [];
    mouse_1.clicked_name = [];
    gotValidClick = false; // until a click is received
    target_1.setPos([10, 10]);
    psychoJS.experiment.addData('visual_search_1.started', globalClock.getTime());
    visual_search_1MaxDuration = null
    // keep track of which components have finished
    visual_search_1Components = [];
    visual_search_1Components.push(square_1);
    visual_search_1Components.push(instruct_1);
    visual_search_1Components.push(mouse_1);
    visual_search_1Components.push(target_1);
    visual_search_1Components.push(C_1);
    visual_search_1Components.push(InC_1);
    visual_search_1Components.push(image_1);
    
    for (const thisComponent of visual_search_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var _mouseXYs;
function visual_search_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'visual_search_1' ---
    // get current time
    t = visual_search_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *square_1* updates
    if (t >= 0.0 && square_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_1.tStart = t;  // (not accounting for frame time here)
      square_1.frameNStart = frameN;  // exact frame index
      
      square_1.setAutoDraw(true);
    }
    
    
    // *instruct_1* updates
    if (t >= 0.0 && instruct_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruct_1.tStart = t;  // (not accounting for frame time here)
      instruct_1.frameNStart = frameN;  // exact frame index
      
      instruct_1.setAutoDraw(true);
    }
    
    // *mouse_1* updates
    if (t >= 0.0 && mouse_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_1.tStart = t;  // (not accounting for frame time here)
      mouse_1.frameNStart = frameN;  // exact frame index
      
      mouse_1.status = PsychoJS.Status.STARTED;
      mouse_1.mouseClock.reset();
      prevButtonState = mouse_1.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_1.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_1.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_1.clickableObjects = eval([target_1, C_1, InC_1])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_1.clickableObjects)) {
              mouse_1.clickableObjects = [mouse_1.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_1.clickableObjects) {
              if (obj.contains(mouse_1)) {
                  gotValidClick = true;
                  mouse_1.clicked_name.push(obj.name);
              }
          }
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_1.clickableObjects = eval([target_1, C_1, InC_1])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_1.clickableObjects)) {
              mouse_1.clickableObjects = [mouse_1.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_1.clickableObjects) {
              if (obj.contains(mouse_1)) {
                  gotValidClick = true;
                  mouse_1.clicked_name.push(obj.name);
              }
          }
          if (gotValidClick === true) { 
            _mouseXYs = mouse_1.getPos();
            mouse_1.x.push(_mouseXYs[0]);
            mouse_1.y.push(_mouseXYs[1]);
            mouse_1.leftButton.push(_mouseButtons[0]);
            mouse_1.midButton.push(_mouseButtons[1]);
            mouse_1.rightButton.push(_mouseButtons[2]);
            mouse_1.time.push(mouse_1.mouseClock.getTime());
          }
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *target_1* updates
    if (t >= 0.0 && target_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      target_1.tStart = t;  // (not accounting for frame time here)
      target_1.frameNStart = frameN;  // exact frame index
      
      target_1.setAutoDraw(true);
    }
    
    
    // *C_1* updates
    if (t >= 0.0 && C_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      C_1.tStart = t;  // (not accounting for frame time here)
      C_1.frameNStart = frameN;  // exact frame index
      
      C_1.setAutoDraw(true);
    }
    
    
    // *InC_1* updates
    if (t >= 0.0 && InC_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      InC_1.tStart = t;  // (not accounting for frame time here)
      InC_1.frameNStart = frameN;  // exact frame index
      
      InC_1.setAutoDraw(true);
    }
    
    
    // *image_1* updates
    if (t >= 0.0 && image_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_1.tStart = t;  // (not accounting for frame time here)
      image_1.frameNStart = frameN;  // exact frame index
      
      image_1.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of visual_search_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var correct;
function visual_search_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'visual_search_1' ---
    for (const thisComponent of visual_search_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('visual_search_1.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_1
    if ((mouse_1.clicked_name.slice((- 1))[0] === corrAns_1)) {
        correct = 1;
    } else {
        correct = 0;
    }
    for (var distractor, _pj_c = 0, _pj_a = distractors, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        distractor = _pj_a[_pj_c];
        distractor.setAutoDraw(false);
    }
    for (var target, _pj_c = 0, _pj_a = targets, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        target = _pj_a[_pj_c];
        target.setAutoDraw(false);
    }
    
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_1.x', mouse_1.x);
    psychoJS.experiment.addData('mouse_1.y', mouse_1.y);
    psychoJS.experiment.addData('mouse_1.leftButton', mouse_1.leftButton);
    psychoJS.experiment.addData('mouse_1.midButton', mouse_1.midButton);
    psychoJS.experiment.addData('mouse_1.rightButton', mouse_1.rightButton);
    psychoJS.experiment.addData('mouse_1.time', mouse_1.time);
    psychoJS.experiment.addData('mouse_1.clicked_name', mouse_1.clicked_name);
    
    // the Routine "visual_search_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var feedback_1MaxDurationReached;
var feedback_text;
var feedback_1MaxDuration;
var feedback_1Components;
function feedback_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback_1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    feedback_1Clock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    feedback_1MaxDurationReached = false;
    // update component parameters for each repeat
    fb_1.setText((("\u0e04\u0e38\u0e13\u0e1e\u0e1a\u0e40\u0e1b\u0e49\u0e32\u0e2b\u0e21\u0e32\u0e22\u0e43\u0e19 " + Number.parseInt((mouse_1.time.slice((- 1))[0] * 1000)).toString()) + "ms"));
    trial_counter_1.setText(((trials_1.thisN.toString() + "/") + trials_1.nTotal.toString()));
    // Run 'Begin Routine' code from track_rt_1
    if ((correct === 1)) {
        feedback_text = "ถูกต้อง!";
    } else {
        if ((correct === 0)) {
            feedback_text = "ผิด!";
        }
    }
    FB_1.setText(feedback_text);
    feedback_1MaxDuration = null
    // keep track of which components have finished
    feedback_1Components = [];
    feedback_1Components.push(fb_1);
    feedback_1Components.push(trial_counter_1);
    feedback_1Components.push(FB_1);
    
    for (const thisComponent of feedback_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function feedback_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback_1' ---
    // get current time
    t = feedback_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fb_1* updates
    if (t >= 0.0 && fb_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fb_1.tStart = t;  // (not accounting for frame time here)
      fb_1.frameNStart = frameN;  // exact frame index
      
      fb_1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fb_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fb_1.setAutoDraw(false);
    }
    
    
    // *trial_counter_1* updates
    if (t >= 0.0 && trial_counter_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_counter_1.tStart = t;  // (not accounting for frame time here)
      trial_counter_1.frameNStart = frameN;  // exact frame index
      
      trial_counter_1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (trial_counter_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trial_counter_1.setAutoDraw(false);
    }
    
    
    // *FB_1* updates
    if (t >= 0.0 && FB_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      FB_1.tStart = t;  // (not accounting for frame time here)
      FB_1.frameNStart = frameN;  // exact frame index
      
      FB_1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (FB_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      FB_1.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of feedback_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedback_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback_1' ---
    for (const thisComponent of feedback_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from track_rt_1
    rts.push(mouse_1.time.slice((- 1))[0]);
    n_round_1 += 1;
    if ((n_round_1 > 1)) {
        trials_1.finished = true;
    }
    
    if (feedback_1MaxDurationReached) {
        feedback_1Clock.add(feedback_1MaxDuration);
    } else {
        feedback_1Clock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var visual_search_2MaxDurationReached;
var visual_search_2MaxDuration;
var visual_search_2Components;
function visual_search_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'visual_search_2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    visual_search_2Clock.reset();
    routineTimer.reset();
    visual_search_2MaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_2
    n_distractors = decoy;
    n_target = tar;
    distractors = [];
    targets = [];
    xys = [[(- 0.25), (- 0.25)], [(- 0.194444), (- 0.25)], [(- 0.138889), (- 0.25)], [(- 0.083333), (- 0.25)], [(- 0.027778), (- 0.25)], [0.027778, (- 0.25)], [0.083333, (- 0.25)], [0.138889, (- 0.25)], [0.194444, (- 0.25)], [0.25, (- 0.25)], [(- 0.25), (- 0.194444)], [(- 0.194444), (- 0.194444)], [(- 0.138889), (- 0.194444)], [(- 0.083333), (- 0.194444)], [(- 0.027778), (- 0.194444)], [0.027778, (- 0.194444)], [0.083333, (- 0.194444)], [0.138889, (- 0.194444)], [0.194444, (- 0.194444)], [0.25, (- 0.194444)], [(- 0.25), (- 0.138889)], [(- 0.194444), (- 0.138889)], [(- 0.138889), (- 0.138889)], [(- 0.083333), (- 0.138889)], [(- 0.027778), (- 0.138889)], [0.027778, (- 0.138889)], [0.083333, (- 0.138889)], [0.138889, (- 0.138889)], [0.194444, (- 0.138889)], [0.25, (- 0.138889)], [(- 0.25), (- 0.083333)], [(- 0.194444), (- 0.083333)], [(- 0.138889), (- 0.083333)], [(- 0.083333), (- 0.083333)], [(- 0.027778), (- 0.083333)], [0.027778, (- 0.083333)], [0.083333, (- 0.083333)], [0.138889, (- 0.083333)], [0.194444, (- 0.083333)], [0.25, (- 0.083333)], [(- 0.25), (- 0.027778)], [(- 0.194444), (- 0.027778)], [(- 0.138889), (- 0.027778)], [(- 0.083333), (- 0.027778)], [(- 0.027778), (- 0.027778)], [0.027778, (- 0.027778)], [0.083333, (- 0.027778)], [0.138889, (- 0.027778)], [0.194444, (- 0.027778)], [0.25, (- 0.027778)], [(- 0.25), 0.027778], [(- 0.194444), 0.027778], [(- 0.138889), 0.027778], [(- 0.083333), 0.027778], [(- 0.027778), 0.027778], [0.027778, 0.027778], [0.083333, 0.027778], [0.138889, 0.027778], [0.194444, 0.027778], [0.25, 0.027778], [(- 0.25), 0.083333], [(- 0.194444), 0.083333], [(- 0.138889), 0.083333], [(- 0.083333), 0.083333], [(- 0.027778), 0.083333], [0.027778, 0.083333], [0.083333, 0.083333], [0.138889, 0.083333], [0.194444, 0.083333], [0.25, 0.083333], [(- 0.25), 0.138889], [(- 0.194444), 0.138889], [(- 0.138889), 0.138889], [(- 0.083333), 0.138889], [(- 0.027778), 0.138889], [0.027778, 0.138889], [0.083333, 0.138889], [0.138889, 0.138889], [0.194444, 0.138889], [0.25, 0.138889], [(- 0.25), 0.194444], [(- 0.194444), 0.194444], [(- 0.138889), 0.194444], [(- 0.083333), 0.194444], [(- 0.027778), 0.194444], [0.027778, 0.194444], [0.083333, 0.194444], [0.138889, 0.194444], [0.194444, 0.194444], [0.25, 0.194444], [(- 0.25), 0.25], [(- 0.194444), 0.25], [(- 0.138889), 0.25], [(- 0.083333), 0.25], [(- 0.027778), 0.25], [0.027778, 0.25], [0.083333, 0.25], [0.138889, 0.25], [0.194444, 0.25], [0.25, 0.25]];
    util.shuffle(xys);
    count = 0;
    positions = [];
    for (var i, _pj_c = 0, _pj_a = util.range(n_distractors), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        distractor = new visual.Polygon({"win": psychoJS.window, "edges": 4, "size": 0.05, "pos": [xys[count][0], (xys[count][1] + 0.01)], "lineColor": "grey", "fillColor": "grey", "opacity": 1.0, "depth": (- 1.0), "ori": 45});
        distractors.push(distractor);
        positions.push(xys[count]);
        count += 1;
    }
    for (var i, _pj_c = 0, _pj_a = util.range(n_target), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        target = new visual.Polygon({"win": psychoJS.window, "edges": 3, "size": 0.05, "pos": [xys[count][0], xys[count][1]], "lineColor": "grey", "fillColor": "grey", "opacity": 1.0, "depth": (- 1.0)});
        targets.push(target);
        positions.push(xys[count]);
    }
    for (var distractor, _pj_c = 0, _pj_a = distractors, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        distractor = _pj_a[_pj_c];
        distractor.setAutoDraw(true);
    }
    for (var target, _pj_c = 0, _pj_a = targets, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        target = _pj_a[_pj_c];
        target.setAutoDraw(true);
    }
    
    // setup some python lists for storing info about the mouse_2
    // current position of the mouse:
    mouse_2.x = [];
    mouse_2.y = [];
    mouse_2.leftButton = [];
    mouse_2.midButton = [];
    mouse_2.rightButton = [];
    mouse_2.time = [];
    mouse_2.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('visual_search_2.started', globalClock.getTime());
    visual_search_2MaxDuration = null
    // keep track of which components have finished
    visual_search_2Components = [];
    visual_search_2Components.push(square_2);
    visual_search_2Components.push(instruct_2);
    visual_search_2Components.push(mouse_2);
    visual_search_2Components.push(target_2);
    visual_search_2Components.push(C_2);
    visual_search_2Components.push(InC_2);
    visual_search_2Components.push(image_2);
    
    for (const thisComponent of visual_search_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function visual_search_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'visual_search_2' ---
    // get current time
    t = visual_search_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *square_2* updates
    if (t >= 0.0 && square_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_2.tStart = t;  // (not accounting for frame time here)
      square_2.frameNStart = frameN;  // exact frame index
      
      square_2.setAutoDraw(true);
    }
    
    
    // *instruct_2* updates
    if (t >= 0.0 && instruct_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruct_2.tStart = t;  // (not accounting for frame time here)
      instruct_2.frameNStart = frameN;  // exact frame index
      
      instruct_2.setAutoDraw(true);
    }
    
    // *mouse_2* updates
    if (t >= 0.0 && mouse_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_2.tStart = t;  // (not accounting for frame time here)
      mouse_2.frameNStart = frameN;  // exact frame index
      
      mouse_2.status = PsychoJS.Status.STARTED;
      mouse_2.mouseClock.reset();
      prevButtonState = mouse_2.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_2.clickableObjects = eval([target_2, C_2, InC_2])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_2.clickableObjects)) {
              mouse_2.clickableObjects = [mouse_2.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_2.clickableObjects) {
              if (obj.contains(mouse_2)) {
                  gotValidClick = true;
                  mouse_2.clicked_name.push(obj.name);
              }
          }
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_2.clickableObjects = eval([target_2, C_2, InC_2])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_2.clickableObjects)) {
              mouse_2.clickableObjects = [mouse_2.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_2.clickableObjects) {
              if (obj.contains(mouse_2)) {
                  gotValidClick = true;
                  mouse_2.clicked_name.push(obj.name);
              }
          }
          if (gotValidClick === true) { 
            _mouseXYs = mouse_2.getPos();
            mouse_2.x.push(_mouseXYs[0]);
            mouse_2.y.push(_mouseXYs[1]);
            mouse_2.leftButton.push(_mouseButtons[0]);
            mouse_2.midButton.push(_mouseButtons[1]);
            mouse_2.rightButton.push(_mouseButtons[2]);
            mouse_2.time.push(mouse_2.mouseClock.getTime());
          }
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *target_2* updates
    if (t >= 0.0 && target_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      target_2.tStart = t;  // (not accounting for frame time here)
      target_2.frameNStart = frameN;  // exact frame index
      
      target_2.setAutoDraw(true);
    }
    
    
    // *C_2* updates
    if (t >= 0.0 && C_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      C_2.tStart = t;  // (not accounting for frame time here)
      C_2.frameNStart = frameN;  // exact frame index
      
      C_2.setAutoDraw(true);
    }
    
    
    // *InC_2* updates
    if (t >= 0.0 && InC_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      InC_2.tStart = t;  // (not accounting for frame time here)
      InC_2.frameNStart = frameN;  // exact frame index
      
      InC_2.setAutoDraw(true);
    }
    
    
    // *image_2* updates
    if (t >= 0.0 && image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2.tStart = t;  // (not accounting for frame time here)
      image_2.frameNStart = frameN;  // exact frame index
      
      image_2.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of visual_search_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function visual_search_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'visual_search_2' ---
    for (const thisComponent of visual_search_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('visual_search_2.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_2
    if ((mouse_2.clicked_name.slice((- 1))[0] === corrAns_2)) {
        correct = 1;
    } else {
        correct = 0;
    }
    for (var distractor, _pj_c = 0, _pj_a = distractors, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        distractor = _pj_a[_pj_c];
        distractor.setAutoDraw(false);
    }
    for (var target, _pj_c = 0, _pj_a = targets, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        target = _pj_a[_pj_c];
        target.setAutoDraw(false);
    }
    
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_2.x', mouse_2.x);
    psychoJS.experiment.addData('mouse_2.y', mouse_2.y);
    psychoJS.experiment.addData('mouse_2.leftButton', mouse_2.leftButton);
    psychoJS.experiment.addData('mouse_2.midButton', mouse_2.midButton);
    psychoJS.experiment.addData('mouse_2.rightButton', mouse_2.rightButton);
    psychoJS.experiment.addData('mouse_2.time', mouse_2.time);
    psychoJS.experiment.addData('mouse_2.clicked_name', mouse_2.clicked_name);
    
    // the Routine "visual_search_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var feedback_2MaxDurationReached;
var feedback_2MaxDuration;
var feedback_2Components;
function feedback_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback_2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    feedback_2Clock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    feedback_2MaxDurationReached = false;
    // update component parameters for each repeat
    fb_2.setText((("\u0e04\u0e38\u0e13\u0e1e\u0e1a\u0e40\u0e1b\u0e49\u0e32\u0e2b\u0e21\u0e32\u0e22\u0e43\u0e19 " + Number.parseInt((mouse_2.time.slice((- 1))[0] * 1000)).toString()) + "ms"));
    trial_counter_2.setText(((trials_2.thisN.toString() + "/") + trials_2.nTotal.toString()));
    // Run 'Begin Routine' code from track_rt_2
    if ((correct === 1)) {
        feedback_text = "ถูกต้อง!";
    } else {
        if ((correct === 0)) {
            feedback_text = "ผิด!";
        }
    }
    FB_2.setText(feedback_text);
    feedback_2MaxDuration = null
    // keep track of which components have finished
    feedback_2Components = [];
    feedback_2Components.push(fb_2);
    feedback_2Components.push(trial_counter_2);
    feedback_2Components.push(FB_2);
    
    for (const thisComponent of feedback_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function feedback_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback_2' ---
    // get current time
    t = feedback_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fb_2* updates
    if (t >= 0.0 && fb_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fb_2.tStart = t;  // (not accounting for frame time here)
      fb_2.frameNStart = frameN;  // exact frame index
      
      fb_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fb_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fb_2.setAutoDraw(false);
    }
    
    
    // *trial_counter_2* updates
    if (t >= 0.0 && trial_counter_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_counter_2.tStart = t;  // (not accounting for frame time here)
      trial_counter_2.frameNStart = frameN;  // exact frame index
      
      trial_counter_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (trial_counter_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trial_counter_2.setAutoDraw(false);
    }
    
    
    // *FB_2* updates
    if (t >= 0.0 && FB_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      FB_2.tStart = t;  // (not accounting for frame time here)
      FB_2.frameNStart = frameN;  // exact frame index
      
      FB_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (FB_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      FB_2.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of feedback_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedback_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback_2' ---
    for (const thisComponent of feedback_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from track_rt_2
    rts.push(mouse_2.time.slice((- 1))[0]);
    n_round_2 += 1;
    if ((n_round_2 > 1)) {
        trials_2.finished = true;
    }
    
    if (feedback_2MaxDurationReached) {
        feedback_2Clock.add(feedback_2MaxDuration);
    } else {
        feedback_2Clock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var visual_search_3MaxDurationReached;
var n_distractors1;
var n_distractors2;
var distractors1;
var distractors2;
var count1;
var visual_search_3MaxDuration;
var visual_search_3Components;
function visual_search_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'visual_search_3' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    visual_search_3Clock.reset();
    routineTimer.reset();
    visual_search_3MaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_3
    n_distractors1 = decoy_1;
    n_distractors2 = decoy_2;
    n_target = tar;
    distractors1 = [];
    distractors2 = [];
    targets = [];
    xys = [[(- 0.25), (- 0.25)], [(- 0.194444), (- 0.25)], [(- 0.138889), (- 0.25)], [(- 0.083333), (- 0.25)], [(- 0.027778), (- 0.25)], [0.027778, (- 0.25)], [0.083333, (- 0.25)], [0.138889, (- 0.25)], [0.194444, (- 0.25)], [0.25, (- 0.25)], [(- 0.25), (- 0.194444)], [(- 0.194444), (- 0.194444)], [(- 0.138889), (- 0.194444)], [(- 0.083333), (- 0.194444)], [(- 0.027778), (- 0.194444)], [0.027778, (- 0.194444)], [0.083333, (- 0.194444)], [0.138889, (- 0.194444)], [0.194444, (- 0.194444)], [0.25, (- 0.194444)], [(- 0.25), (- 0.138889)], [(- 0.194444), (- 0.138889)], [(- 0.138889), (- 0.138889)], [(- 0.083333), (- 0.138889)], [(- 0.027778), (- 0.138889)], [0.027778, (- 0.138889)], [0.083333, (- 0.138889)], [0.138889, (- 0.138889)], [0.194444, (- 0.138889)], [0.25, (- 0.138889)], [(- 0.25), (- 0.083333)], [(- 0.194444), (- 0.083333)], [(- 0.138889), (- 0.083333)], [(- 0.083333), (- 0.083333)], [(- 0.027778), (- 0.083333)], [0.027778, (- 0.083333)], [0.083333, (- 0.083333)], [0.138889, (- 0.083333)], [0.194444, (- 0.083333)], [0.25, (- 0.083333)], [(- 0.25), (- 0.027778)], [(- 0.194444), (- 0.027778)], [(- 0.138889), (- 0.027778)], [(- 0.083333), (- 0.027778)], [(- 0.027778), (- 0.027778)], [0.027778, (- 0.027778)], [0.083333, (- 0.027778)], [0.138889, (- 0.027778)], [0.194444, (- 0.027778)], [0.25, (- 0.027778)], [(- 0.25), 0.027778], [(- 0.194444), 0.027778], [(- 0.138889), 0.027778], [(- 0.083333), 0.027778], [(- 0.027778), 0.027778], [0.027778, 0.027778], [0.083333, 0.027778], [0.138889, 0.027778], [0.194444, 0.027778], [0.25, 0.027778], [(- 0.25), 0.083333], [(- 0.194444), 0.083333], [(- 0.138889), 0.083333], [(- 0.083333), 0.083333], [(- 0.027778), 0.083333], [0.027778, 0.083333], [0.083333, 0.083333], [0.138889, 0.083333], [0.194444, 0.083333], [0.25, 0.083333], [(- 0.25), 0.138889], [(- 0.194444), 0.138889], [(- 0.138889), 0.138889], [(- 0.083333), 0.138889], [(- 0.027778), 0.138889], [0.027778, 0.138889], [0.083333, 0.138889], [0.138889, 0.138889], [0.194444, 0.138889], [0.25, 0.138889], [(- 0.25), 0.194444], [(- 0.194444), 0.194444], [(- 0.138889), 0.194444], [(- 0.083333), 0.194444], [(- 0.027778), 0.194444], [0.027778, 0.194444], [0.083333, 0.194444], [0.138889, 0.194444], [0.194444, 0.194444], [0.25, 0.194444], [(- 0.25), 0.25], [(- 0.194444), 0.25], [(- 0.138889), 0.25], [(- 0.083333), 0.25], [(- 0.027778), 0.25], [0.027778, 0.25], [0.083333, 0.25], [0.138889, 0.25], [0.194444, 0.25], [0.25, 0.25]];
    util.shuffle(xys);
    count = 0;
    count1 = 0;
    positions = [];
    for (var i, _pj_c = 0, _pj_a = util.range(n_distractors1), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        distractor1 = new visual.Polygon({"win": psychoJS.window, "edges": 4, "size": 0.05, "pos": [xys[count][0], (xys[count][1] + 0.01)], "lineColor": [(- 0.4902), 0.7647, 0.6314], "fillColor": [(- 0.4902), 0.7647, 0.6314], "opacity": 1.0, "depth": (- 1.0), "ori": 45});
        distractors1.push(distractor1);
        positions.push(xys[count]);
        count += 1;
    }
    for (var i, _pj_c = 0, _pj_a = util.range(n_distractors2), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        distractor2 = new visual.Polygon({"win": psychoJS.window, "edges": 1000, "size": 0.04, "pos": [xys[count][0], (xys[count][1] + 0.01)], "lineColor": [1.0, 0.5059, 0.5922], "fillColor": [1.0, 0.5059, 0.5922], "opacity": 1.0, "depth": (- 1.0), "ori": 45});
        distractors2.push(distractor2);
        positions.push(xys[count]);
        count += 1;
    }
    for (var i, _pj_c = 0, _pj_a = util.range(n_target), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        target = new visual.Polygon({"win": psychoJS.window, "edges": 1000, "size": 0.04, "pos": [xys[count][0], xys[count][1]], "lineColor": [(- 0.4902), 0.7647, 0.6314], "fillColor": [(- 0.4902), 0.7647, 0.6314], "opacity": 1.0, "depth": (- 1.0)});
        targets.push(target);
        positions.push(xys[count]);
    }
    for (var distractor1, _pj_c = 0, _pj_a = distractors1, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        distractor1 = _pj_a[_pj_c];
        distractor1.setAutoDraw(true);
    }
    for (var distractor2, _pj_c = 0, _pj_a = distractors2, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        distractor2 = _pj_a[_pj_c];
        distractor2.setAutoDraw(true);
    }
    for (var target, _pj_c = 0, _pj_a = targets, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        target = _pj_a[_pj_c];
        target.setAutoDraw(true);
    }
    
    // setup some python lists for storing info about the mouse_3
    // current position of the mouse:
    mouse_3.x = [];
    mouse_3.y = [];
    mouse_3.leftButton = [];
    mouse_3.midButton = [];
    mouse_3.rightButton = [];
    mouse_3.time = [];
    mouse_3.clicked_name = [];
    gotValidClick = false; // until a click is received
    visual_search_3MaxDuration = null
    // keep track of which components have finished
    visual_search_3Components = [];
    visual_search_3Components.push(square_3);
    visual_search_3Components.push(instruct_3);
    visual_search_3Components.push(mouse_3);
    visual_search_3Components.push(target_3);
    visual_search_3Components.push(C_3);
    visual_search_3Components.push(InC_3);
    visual_search_3Components.push(image_3);
    
    for (const thisComponent of visual_search_3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function visual_search_3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'visual_search_3' ---
    // get current time
    t = visual_search_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *square_3* updates
    if (t >= 0.0 && square_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_3.tStart = t;  // (not accounting for frame time here)
      square_3.frameNStart = frameN;  // exact frame index
      
      square_3.setAutoDraw(true);
    }
    
    
    // *instruct_3* updates
    if (t >= 0.0 && instruct_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruct_3.tStart = t;  // (not accounting for frame time here)
      instruct_3.frameNStart = frameN;  // exact frame index
      
      instruct_3.setAutoDraw(true);
    }
    
    // *mouse_3* updates
    if (t >= 0.0 && mouse_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_3.tStart = t;  // (not accounting for frame time here)
      mouse_3.frameNStart = frameN;  // exact frame index
      
      mouse_3.status = PsychoJS.Status.STARTED;
      mouse_3.mouseClock.reset();
      prevButtonState = mouse_3.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_3.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_3.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_3.clickableObjects = eval([target_3, C_3, InC_3])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_3.clickableObjects)) {
              mouse_3.clickableObjects = [mouse_3.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_3.clickableObjects) {
              if (obj.contains(mouse_3)) {
                  gotValidClick = true;
                  mouse_3.clicked_name.push(obj.name);
              }
          }
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_3.clickableObjects = eval([target_3, C_3, InC_3])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_3.clickableObjects)) {
              mouse_3.clickableObjects = [mouse_3.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_3.clickableObjects) {
              if (obj.contains(mouse_3)) {
                  gotValidClick = true;
                  mouse_3.clicked_name.push(obj.name);
              }
          }
          if (gotValidClick === true) { 
            _mouseXYs = mouse_3.getPos();
            mouse_3.x.push(_mouseXYs[0]);
            mouse_3.y.push(_mouseXYs[1]);
            mouse_3.leftButton.push(_mouseButtons[0]);
            mouse_3.midButton.push(_mouseButtons[1]);
            mouse_3.rightButton.push(_mouseButtons[2]);
            mouse_3.time.push(mouse_3.mouseClock.getTime());
          }
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *target_3* updates
    if (t >= 0.0 && target_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      target_3.tStart = t;  // (not accounting for frame time here)
      target_3.frameNStart = frameN;  // exact frame index
      
      target_3.setAutoDraw(true);
    }
    
    
    // *C_3* updates
    if (t >= 0.0 && C_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      C_3.tStart = t;  // (not accounting for frame time here)
      C_3.frameNStart = frameN;  // exact frame index
      
      C_3.setAutoDraw(true);
    }
    
    
    // *InC_3* updates
    if (t >= 0.0 && InC_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      InC_3.tStart = t;  // (not accounting for frame time here)
      InC_3.frameNStart = frameN;  // exact frame index
      
      InC_3.setAutoDraw(true);
    }
    
    
    // *image_3* updates
    if (t >= 0.0 && image_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_3.tStart = t;  // (not accounting for frame time here)
      image_3.frameNStart = frameN;  // exact frame index
      
      image_3.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of visual_search_3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function visual_search_3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'visual_search_3' ---
    for (const thisComponent of visual_search_3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from code_3
    if ((mouse_3.clicked_name.slice((- 1))[0] === corrAns_3)) {
        correct = 1;
    } else {
        correct = 0;
    }
    for (var distractor1, _pj_c = 0, _pj_a = distractors1, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        distractor1 = _pj_a[_pj_c];
        distractor1.setAutoDraw(false);
    }
    for (var distractor2, _pj_c = 0, _pj_a = distractors2, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        distractor2 = _pj_a[_pj_c];
        distractor2.setAutoDraw(false);
    }
    for (var target, _pj_c = 0, _pj_a = targets, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        target = _pj_a[_pj_c];
        target.setAutoDraw(false);
    }
    
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_3.x', mouse_3.x);
    psychoJS.experiment.addData('mouse_3.y', mouse_3.y);
    psychoJS.experiment.addData('mouse_3.leftButton', mouse_3.leftButton);
    psychoJS.experiment.addData('mouse_3.midButton', mouse_3.midButton);
    psychoJS.experiment.addData('mouse_3.rightButton', mouse_3.rightButton);
    psychoJS.experiment.addData('mouse_3.time', mouse_3.time);
    psychoJS.experiment.addData('mouse_3.clicked_name', mouse_3.clicked_name);
    
    // the Routine "visual_search_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var feedback_3MaxDurationReached;
var feedback_3MaxDuration;
var feedback_3Components;
function feedback_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback_3' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    feedback_3Clock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    feedback_3MaxDurationReached = false;
    // update component parameters for each repeat
    fb_3.setText((("\u0e04\u0e38\u0e13\u0e1e\u0e1a\u0e40\u0e1b\u0e49\u0e32\u0e2b\u0e21\u0e32\u0e22\u0e43\u0e19 " + Number.parseInt((mouse_3.time.slice((- 1))[0] * 1000)).toString()) + "ms"));
    trial_counter_3.setText(((trials_3.thisN.toString() + "/") + trials_3.nTotal.toString()));
    // Run 'Begin Routine' code from track_rt_3
    if ((correct === 1)) {
        feedback_text = "ถูกต้อง!";
    } else {
        if ((correct === 0)) {
            feedback_text = "ผิด!";
        }
    }
    FB_3.setText(feedback_text);
    feedback_3MaxDuration = null
    // keep track of which components have finished
    feedback_3Components = [];
    feedback_3Components.push(fb_3);
    feedback_3Components.push(trial_counter_3);
    feedback_3Components.push(FB_3);
    
    for (const thisComponent of feedback_3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function feedback_3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback_3' ---
    // get current time
    t = feedback_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fb_3* updates
    if (t >= 0.0 && fb_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fb_3.tStart = t;  // (not accounting for frame time here)
      fb_3.frameNStart = frameN;  // exact frame index
      
      fb_3.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fb_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fb_3.setAutoDraw(false);
    }
    
    
    // *trial_counter_3* updates
    if (t >= 0.0 && trial_counter_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_counter_3.tStart = t;  // (not accounting for frame time here)
      trial_counter_3.frameNStart = frameN;  // exact frame index
      
      trial_counter_3.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (trial_counter_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trial_counter_3.setAutoDraw(false);
    }
    
    
    // *FB_3* updates
    if (t >= 0.0 && FB_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      FB_3.tStart = t;  // (not accounting for frame time here)
      FB_3.frameNStart = frameN;  // exact frame index
      
      FB_3.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (FB_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      FB_3.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of feedback_3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedback_3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback_3' ---
    for (const thisComponent of feedback_3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from track_rt_3
    rts.push(mouse_3.time.slice((- 1))[0]);
    n_round_3 += 1;
    if ((n_round_3 > 1)) {
        trials_3.finished = true;
    }
    
    if (feedback_3MaxDurationReached) {
        feedback_3Clock.add(feedback_3MaxDuration);
    } else {
        feedback_3Clock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var visual_search_4MaxDurationReached;
var visual_search_4MaxDuration;
var visual_search_4Components;
function visual_search_4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'visual_search_4' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    visual_search_4Clock.reset();
    routineTimer.reset();
    visual_search_4MaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_4
    n_distractors1 = decoy_1;
    n_distractors2 = decoy_2;
    n_target = tar;
    distractors1 = [];
    distractors2 = [];
    targets = [];
    xys = [[(- 0.25), (- 0.25)], [(- 0.194444), (- 0.25)], [(- 0.138889), (- 0.25)], [(- 0.083333), (- 0.25)], [(- 0.027778), (- 0.25)], [0.027778, (- 0.25)], [0.083333, (- 0.25)], [0.138889, (- 0.25)], [0.194444, (- 0.25)], [0.25, (- 0.25)], [(- 0.25), (- 0.194444)], [(- 0.194444), (- 0.194444)], [(- 0.138889), (- 0.194444)], [(- 0.083333), (- 0.194444)], [(- 0.027778), (- 0.194444)], [0.027778, (- 0.194444)], [0.083333, (- 0.194444)], [0.138889, (- 0.194444)], [0.194444, (- 0.194444)], [0.25, (- 0.194444)], [(- 0.25), (- 0.138889)], [(- 0.194444), (- 0.138889)], [(- 0.138889), (- 0.138889)], [(- 0.083333), (- 0.138889)], [(- 0.027778), (- 0.138889)], [0.027778, (- 0.138889)], [0.083333, (- 0.138889)], [0.138889, (- 0.138889)], [0.194444, (- 0.138889)], [0.25, (- 0.138889)], [(- 0.25), (- 0.083333)], [(- 0.194444), (- 0.083333)], [(- 0.138889), (- 0.083333)], [(- 0.083333), (- 0.083333)], [(- 0.027778), (- 0.083333)], [0.027778, (- 0.083333)], [0.083333, (- 0.083333)], [0.138889, (- 0.083333)], [0.194444, (- 0.083333)], [0.25, (- 0.083333)], [(- 0.25), (- 0.027778)], [(- 0.194444), (- 0.027778)], [(- 0.138889), (- 0.027778)], [(- 0.083333), (- 0.027778)], [(- 0.027778), (- 0.027778)], [0.027778, (- 0.027778)], [0.083333, (- 0.027778)], [0.138889, (- 0.027778)], [0.194444, (- 0.027778)], [0.25, (- 0.027778)], [(- 0.25), 0.027778], [(- 0.194444), 0.027778], [(- 0.138889), 0.027778], [(- 0.083333), 0.027778], [(- 0.027778), 0.027778], [0.027778, 0.027778], [0.083333, 0.027778], [0.138889, 0.027778], [0.194444, 0.027778], [0.25, 0.027778], [(- 0.25), 0.083333], [(- 0.194444), 0.083333], [(- 0.138889), 0.083333], [(- 0.083333), 0.083333], [(- 0.027778), 0.083333], [0.027778, 0.083333], [0.083333, 0.083333], [0.138889, 0.083333], [0.194444, 0.083333], [0.25, 0.083333], [(- 0.25), 0.138889], [(- 0.194444), 0.138889], [(- 0.138889), 0.138889], [(- 0.083333), 0.138889], [(- 0.027778), 0.138889], [0.027778, 0.138889], [0.083333, 0.138889], [0.138889, 0.138889], [0.194444, 0.138889], [0.25, 0.138889], [(- 0.25), 0.194444], [(- 0.194444), 0.194444], [(- 0.138889), 0.194444], [(- 0.083333), 0.194444], [(- 0.027778), 0.194444], [0.027778, 0.194444], [0.083333, 0.194444], [0.138889, 0.194444], [0.194444, 0.194444], [0.25, 0.194444], [(- 0.25), 0.25], [(- 0.194444), 0.25], [(- 0.138889), 0.25], [(- 0.083333), 0.25], [(- 0.027778), 0.25], [0.027778, 0.25], [0.083333, 0.25], [0.138889, 0.25], [0.194444, 0.25], [0.25, 0.25]];
    util.shuffle(xys);
    count = 0;
    positions = [];
    for (var i, _pj_c = 0, _pj_a = util.range(n_distractors1), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        distractor1 = new visual.Polygon({"win": psychoJS.window, "edges": 4, "size": 0.05, "pos": [xys[count][0], (xys[count][1] + 0.01)], "lineColor": [(- 1.0), 0.2, 1.0], "fillColor": [(- 1.0), 0.2, 1.0], "opacity": 1.0, "depth": (- 1.0)});
        distractors1.push(distractor1);
        positions.push(xys[count]);
        count += 1;
    }
    for (var i, _pj_c = 0, _pj_a = util.range(n_distractors2), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        distractor2 = new visual.Polygon({"win": psychoJS.window, "edges": 3, "size": 0.05, "pos": [xys[count][0], xys[count][1]], "lineColor": [0.1608, (- 0.7412), 1.0], "fillColor": [0.1608, (- 0.7412), 1.0], "opacity": 1.0, "depth": (- 1.0)});
        distractors2.push(distractor2);
        positions.push(xys[count]);
        count += 1;
    }
    for (var i, _pj_c = 0, _pj_a = util.range(n_target), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        target = new visual.Polygon({"win": psychoJS.window, "edges": 3, "size": 0.05, "pos": [xys[count][0], xys[count][1]], "lineColor": [(- 1.0), 0.2, 1.0], "fillColor": [(- 1.0), 0.2, 1.0], "opacity": 1.0, "depth": (- 1.0)});
        targets.push(target);
        positions.push(xys[count]);
    }
    for (var distractor1, _pj_c = 0, _pj_a = distractors1, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        distractor1 = _pj_a[_pj_c];
        distractor1.setAutoDraw(true);
    }
    for (var distractor2, _pj_c = 0, _pj_a = distractors2, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        distractor2 = _pj_a[_pj_c];
        distractor2.setAutoDraw(true);
    }
    for (var target, _pj_c = 0, _pj_a = targets, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        target = _pj_a[_pj_c];
        target.setAutoDraw(true);
    }
    
    // setup some python lists for storing info about the mouse_4
    // current position of the mouse:
    mouse_4.x = [];
    mouse_4.y = [];
    mouse_4.leftButton = [];
    mouse_4.midButton = [];
    mouse_4.rightButton = [];
    mouse_4.time = [];
    mouse_4.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('visual_search_4.started', globalClock.getTime());
    visual_search_4MaxDuration = null
    // keep track of which components have finished
    visual_search_4Components = [];
    visual_search_4Components.push(square_4);
    visual_search_4Components.push(instruct_4);
    visual_search_4Components.push(mouse_4);
    visual_search_4Components.push(target_4);
    visual_search_4Components.push(C_4);
    visual_search_4Components.push(InC_4);
    visual_search_4Components.push(image_4);
    
    for (const thisComponent of visual_search_4Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function visual_search_4RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'visual_search_4' ---
    // get current time
    t = visual_search_4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *square_4* updates
    if (t >= 0.0 && square_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_4.tStart = t;  // (not accounting for frame time here)
      square_4.frameNStart = frameN;  // exact frame index
      
      square_4.setAutoDraw(true);
    }
    
    
    // *instruct_4* updates
    if (t >= 0.0 && instruct_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruct_4.tStart = t;  // (not accounting for frame time here)
      instruct_4.frameNStart = frameN;  // exact frame index
      
      instruct_4.setAutoDraw(true);
    }
    
    // *mouse_4* updates
    if (t >= 0.0 && mouse_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_4.tStart = t;  // (not accounting for frame time here)
      mouse_4.frameNStart = frameN;  // exact frame index
      
      mouse_4.status = PsychoJS.Status.STARTED;
      mouse_4.mouseClock.reset();
      prevButtonState = mouse_4.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_4.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_4.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_4.clickableObjects = eval([target_4, C_4, InC_4])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_4.clickableObjects)) {
              mouse_4.clickableObjects = [mouse_4.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_4.clickableObjects) {
              if (obj.contains(mouse_4)) {
                  gotValidClick = true;
                  mouse_4.clicked_name.push(obj.name);
              }
          }
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_4.clickableObjects = eval([target_4, C_4, InC_4])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_4.clickableObjects)) {
              mouse_4.clickableObjects = [mouse_4.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_4.clickableObjects) {
              if (obj.contains(mouse_4)) {
                  gotValidClick = true;
                  mouse_4.clicked_name.push(obj.name);
              }
          }
          if (gotValidClick === true) { 
            _mouseXYs = mouse_4.getPos();
            mouse_4.x.push(_mouseXYs[0]);
            mouse_4.y.push(_mouseXYs[1]);
            mouse_4.leftButton.push(_mouseButtons[0]);
            mouse_4.midButton.push(_mouseButtons[1]);
            mouse_4.rightButton.push(_mouseButtons[2]);
            mouse_4.time.push(mouse_4.mouseClock.getTime());
          }
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *target_4* updates
    if (t >= 0.0 && target_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      target_4.tStart = t;  // (not accounting for frame time here)
      target_4.frameNStart = frameN;  // exact frame index
      
      target_4.setAutoDraw(true);
    }
    
    
    // *C_4* updates
    if (t >= 0.0 && C_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      C_4.tStart = t;  // (not accounting for frame time here)
      C_4.frameNStart = frameN;  // exact frame index
      
      C_4.setAutoDraw(true);
    }
    
    
    // *InC_4* updates
    if (t >= 0.0 && InC_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      InC_4.tStart = t;  // (not accounting for frame time here)
      InC_4.frameNStart = frameN;  // exact frame index
      
      InC_4.setAutoDraw(true);
    }
    
    
    // *image_4* updates
    if (t >= 0.0 && image_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_4.tStart = t;  // (not accounting for frame time here)
      image_4.frameNStart = frameN;  // exact frame index
      
      image_4.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of visual_search_4Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function visual_search_4RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'visual_search_4' ---
    for (const thisComponent of visual_search_4Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('visual_search_4.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_4
    if ((mouse_4.clicked_name.slice((- 1))[0] === corrAns_4)) {
        correct = 1;
    } else {
        correct = 0;
    }
    for (var distractor1, _pj_c = 0, _pj_a = distractors1, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        distractor1 = _pj_a[_pj_c];
        distractor1.setAutoDraw(false);
    }
    for (var distractor2, _pj_c = 0, _pj_a = distractors2, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        distractor2 = _pj_a[_pj_c];
        distractor2.setAutoDraw(false);
    }
    for (var target, _pj_c = 0, _pj_a = targets, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        target = _pj_a[_pj_c];
        target.setAutoDraw(false);
    }
    
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_4.x', mouse_4.x);
    psychoJS.experiment.addData('mouse_4.y', mouse_4.y);
    psychoJS.experiment.addData('mouse_4.leftButton', mouse_4.leftButton);
    psychoJS.experiment.addData('mouse_4.midButton', mouse_4.midButton);
    psychoJS.experiment.addData('mouse_4.rightButton', mouse_4.rightButton);
    psychoJS.experiment.addData('mouse_4.time', mouse_4.time);
    psychoJS.experiment.addData('mouse_4.clicked_name', mouse_4.clicked_name);
    
    // the Routine "visual_search_4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var feedback_4MaxDurationReached;
var feedback_4MaxDuration;
var feedback_4Components;
function feedback_4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback_4' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    feedback_4Clock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    feedback_4MaxDurationReached = false;
    // update component parameters for each repeat
    fb_4.setText((("\u0e04\u0e38\u0e13\u0e1e\u0e1a\u0e40\u0e1b\u0e49\u0e32\u0e2b\u0e21\u0e32\u0e22\u0e43\u0e19 " + Number.parseInt((mouse_4.time.slice((- 1))[0] * 1000)).toString()) + "ms"));
    trial_counter_4.setText(((trials_4.thisN.toString() + "/") + trials_4.nTotal.toString()));
    // Run 'Begin Routine' code from track_rt_4
    if ((correct === 1)) {
        feedback_text = "ถูกต้อง!";
    } else {
        if ((correct === 0)) {
            feedback_text = "ผิด!";
        }
    }
    FB_4.setText(feedback_text);
    psychoJS.experiment.addData('feedback_4.started', globalClock.getTime());
    feedback_4MaxDuration = null
    // keep track of which components have finished
    feedback_4Components = [];
    feedback_4Components.push(fb_4);
    feedback_4Components.push(trial_counter_4);
    feedback_4Components.push(FB_4);
    
    for (const thisComponent of feedback_4Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function feedback_4RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback_4' ---
    // get current time
    t = feedback_4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fb_4* updates
    if (t >= 0.0 && fb_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fb_4.tStart = t;  // (not accounting for frame time here)
      fb_4.frameNStart = frameN;  // exact frame index
      
      fb_4.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fb_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fb_4.setAutoDraw(false);
    }
    
    
    // *trial_counter_4* updates
    if (t >= 0.0 && trial_counter_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_counter_4.tStart = t;  // (not accounting for frame time here)
      trial_counter_4.frameNStart = frameN;  // exact frame index
      
      trial_counter_4.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (trial_counter_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trial_counter_4.setAutoDraw(false);
    }
    
    
    // *FB_4* updates
    if (t >= 0.0 && FB_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      FB_4.tStart = t;  // (not accounting for frame time here)
      FB_4.frameNStart = frameN;  // exact frame index
      
      FB_4.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (FB_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      FB_4.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of feedback_4Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedback_4RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback_4' ---
    for (const thisComponent of feedback_4Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('feedback_4.stopped', globalClock.getTime());
    // Run 'End Routine' code from track_rt_4
    rts.push(mouse_4.time.slice((- 1))[0]);
    n_round_4 += 1;
    if ((n_round_4 > 1)) {
        trials_4.finished = true;
    }
    
    if (feedback_4MaxDurationReached) {
        feedback_4Clock.add(feedback_4MaxDuration);
    } else {
        feedback_4Clock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var endMaxDurationReached;
var endMaxDuration;
var endComponents;
function endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    endClock.reset();
    routineTimer.reset();
    endMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('end.started', globalClock.getTime());
    endMaxDuration = null
    // keep track of which components have finished
    endComponents = [];
    
    for (const thisComponent of endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end' ---
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end' ---
    for (const thisComponent of endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('end.stopped', globalClock.getTime());
    // the Routine "end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
