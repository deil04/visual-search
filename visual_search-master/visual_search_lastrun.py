#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2024.2.4),
    on พฤษภาคม 29, 2025, at 21:05
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
from psychopy import plugins
plugins.activatePlugins()
prefs.hardware['audioLib'] = 'ptb'
prefs.hardware['audioLatencyMode'] = '3'
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout, hardware
from psychopy.tools import environmenttools
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER, priority)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

import psychopy.iohub as io
from psychopy.hardware import keyboard

# --- Setup global variables (available in all functions) ---
# create a device manager to handle hardware (keyboards, mice, mirophones, speakers, etc.)
deviceManager = hardware.DeviceManager()
# ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
# store info about the experiment session
psychopyVersion = '2024.2.4'
expName = 'corsi_blocks'  # from the Builder filename that created this script
# information about this experiment
expInfo = {
    'participant': f"{randint(0, 999999):06.0f}",
    'session': '001',
    'date|hid': data.getDateStr(),
    'expName|hid': expName,
    'psychopyVersion|hid': psychopyVersion,
}

# --- Define some variables which will change depending on pilot mode ---
'''
To run in pilot mode, either use the run/pilot toggle in Builder, Coder and Runner, 
or run the experiment with `--pilot` as an argument. To change what pilot 
#mode does, check out the 'Pilot mode' tab in preferences.
'''
# work out from system args whether we are running in pilot mode
PILOTING = core.setPilotModeFromArgs()
# start off with values from experiment settings
_fullScr = False
_winSize = [1920, 1080]
# if in pilot mode, apply overrides according to preferences
if PILOTING:
    # force windowed mode
    if prefs.piloting['forceWindowed']:
        _fullScr = False
        # set window size
        _winSize = prefs.piloting['forcedWindowSize']

def showExpInfoDlg(expInfo):
    """
    Show participant info dialog.
    Parameters
    ==========
    expInfo : dict
        Information about this experiment.
    
    Returns
    ==========
    dict
        Information about this experiment.
    """
    # show participant info dialog
    dlg = gui.DlgFromDict(
        dictionary=expInfo, sortKeys=False, title=expName, alwaysOnTop=True
    )
    if dlg.OK == False:
        core.quit()  # user pressed cancel
    # return expInfo
    return expInfo


def setupData(expInfo, dataDir=None):
    """
    Make an ExperimentHandler to handle trials and saving.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    dataDir : Path, str or None
        Folder to save the data to, leave as None to create a folder in the current directory.    
    Returns
    ==========
    psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    # remove dialog-specific syntax from expInfo
    for key, val in expInfo.copy().items():
        newKey, _ = data.utils.parsePipeSyntax(key)
        expInfo[newKey] = expInfo.pop(key)
    
    # data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
    if dataDir is None:
        dataDir = _thisDir
    filename = u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])
    # make sure filename is relative to dataDir
    if os.path.isabs(filename):
        dataDir = os.path.commonprefix([dataDir, filename])
        filename = os.path.relpath(filename, dataDir)
    
    # an ExperimentHandler isn't essential but helps with data saving
    thisExp = data.ExperimentHandler(
        name=expName, version='',
        extraInfo=expInfo, runtimeInfo=None,
        originPath='C:\\Users\\Dell\\Downloads\\visual_search-master\\visual_search-master-demo3\\visual_search-master\\visual_search_lastrun.py',
        savePickle=True, saveWideText=True,
        dataFileName=dataDir + os.sep + filename, sortColumns='time'
    )
    thisExp.setPriority('thisRow.t', priority.CRITICAL)
    thisExp.setPriority('expName', priority.LOW)
    # return experiment handler
    return thisExp


def setupLogging(filename):
    """
    Setup a log file and tell it what level to log at.
    
    Parameters
    ==========
    filename : str or pathlib.Path
        Filename to save log file and data files as, doesn't need an extension.
    
    Returns
    ==========
    psychopy.logging.LogFile
        Text stream to receive inputs from the logging system.
    """
    # set how much information should be printed to the console / app
    if PILOTING:
        logging.console.setLevel(
            prefs.piloting['pilotConsoleLoggingLevel']
        )
    else:
        logging.console.setLevel('warning')
    # save a log file for detail verbose info
    logFile = logging.LogFile(filename+'.log')
    if PILOTING:
        logFile.setLevel(
            prefs.piloting['pilotLoggingLevel']
        )
    else:
        logFile.setLevel(
            logging.getLevel('exp')
        )
    
    return logFile


def setupWindow(expInfo=None, win=None):
    """
    Setup the Window
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    win : psychopy.visual.Window
        Window to setup - leave as None to create a new window.
    
    Returns
    ==========
    psychopy.visual.Window
        Window in which to run this experiment.
    """
    if win is None:
        # if not given a window to setup, make one
        win = visual.Window(
            size=_winSize, fullscr=_fullScr, screen=0,
            winType='pyglet', allowGUI=True, allowStencil=True,
            monitor='testMonitor', color=[1.0000, 1.0000, 1.0000], colorSpace='rgb',
            backgroundImage='', backgroundFit='none',
            blendMode='avg', useFBO=True,
            units='height',
            checkTiming=False  # we're going to do this ourselves in a moment
        )
    else:
        # if we have a window, just set the attributes which are safe to set
        win.color = [1.0000, 1.0000, 1.0000]
        win.colorSpace = 'rgb'
        win.backgroundImage = ''
        win.backgroundFit = 'none'
        win.units = 'height'
    if expInfo is not None:
        # get/measure frame rate if not already in expInfo
        if win._monitorFrameRate is None:
            win._monitorFrameRate = win.getActualFrameRate(infoMsg='Attempting to measure frame rate of screen, please wait...')
        expInfo['frameRate'] = win._monitorFrameRate
    win.hideMessage()
    # show a visual indicator if we're in piloting mode
    if PILOTING and prefs.piloting['showPilotingIndicator']:
        win.showPilotingIndicator()
    
    return win


def setupDevices(expInfo, thisExp, win):
    """
    Setup whatever devices are available (mouse, keyboard, speaker, eyetracker, etc.) and add them to 
    the device manager (deviceManager)
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window in which to run this experiment.
    Returns
    ==========
    bool
        True if completed successfully.
    """
    # --- Setup input devices ---
    ioConfig = {}
    
    # Setup iohub keyboard
    ioConfig['Keyboard'] = dict(use_keymap='psychopy')
    
    # Setup iohub experiment
    ioConfig['Experiment'] = dict(filename=thisExp.dataFileName)
    
    # Start ioHub server
    ioServer = io.launchHubServer(window=win, **ioConfig)
    
    # store ioServer object in the device manager
    deviceManager.ioServer = ioServer
    
    # create a default keyboard (e.g. to check for escape)
    if deviceManager.getDevice('defaultKeyboard') is None:
        deviceManager.addDevice(
            deviceClass='keyboard', deviceName='defaultKeyboard', backend='iohub'
        )
    # return True if completed successfully
    return True

def pauseExperiment(thisExp, win=None, timers=[], playbackComponents=[]):
    """
    Pause this experiment, preventing the flow from advancing to the next routine until resumed.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window for this experiment.
    timers : list, tuple
        List of timers to reset once pausing is finished.
    playbackComponents : list, tuple
        List of any components with a `pause` method which need to be paused.
    """
    # if we are not paused, do nothing
    if thisExp.status != PAUSED:
        return
    
    # start a timer to figure out how long we're paused for
    pauseTimer = core.Clock()
    # pause any playback components
    for comp in playbackComponents:
        comp.pause()
    # make sure we have a keyboard
    defaultKeyboard = deviceManager.getDevice('defaultKeyboard')
    if defaultKeyboard is None:
        defaultKeyboard = deviceManager.addKeyboard(
            deviceClass='keyboard',
            deviceName='defaultKeyboard',
            backend='ioHub',
        )
    # run a while loop while we wait to unpause
    while thisExp.status == PAUSED:
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=['escape']):
            endExperiment(thisExp, win=win)
        # sleep 1ms so other threads can execute
        clock.time.sleep(0.001)
    # if stop was requested while paused, quit
    if thisExp.status == FINISHED:
        endExperiment(thisExp, win=win)
    # resume any playback components
    for comp in playbackComponents:
        comp.play()
    # reset any timers
    for timer in timers:
        timer.addTime(-pauseTimer.getTime())


def run(expInfo, thisExp, win, globalClock=None, thisSession=None):
    """
    Run the experiment flow.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    psychopy.visual.Window
        Window in which to run this experiment.
    globalClock : psychopy.core.clock.Clock or None
        Clock to get global time from - supply None to make a new one.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    # mark experiment as started
    thisExp.status = STARTED
    # make sure window is set to foreground to prevent losing focus
    win.winHandle.activate()
    # make sure variables created by exec are available globally
    exec = environmenttools.setExecEnvironment(globals())
    # get device handles from dict of input devices
    ioServer = deviceManager.ioServer
    # get/create a default keyboard (e.g. to check for escape)
    defaultKeyboard = deviceManager.getDevice('defaultKeyboard')
    if defaultKeyboard is None:
        deviceManager.addDevice(
            deviceClass='keyboard', deviceName='defaultKeyboard', backend='ioHub'
        )
    eyetracker = deviceManager.getDevice('eyetracker')
    # make sure we're running in the directory for this experiment
    os.chdir(_thisDir)
    # get filename from ExperimentHandler for convenience
    filename = thisExp.dataFileName
    frameTolerance = 0.001  # how close to onset before 'same' frame
    endExpNow = False  # flag for 'escape' or other condition => quit the exp
    # get frame duration from frame rate in expInfo
    if 'frameRate' in expInfo and expInfo['frameRate'] is not None:
        frameDur = 1.0 / round(expInfo['frameRate'])
    else:
        frameDur = 1.0 / 60.0  # could not measure, so guess
    
    # Start Code - component code to be run after the window creation
    
    # --- Initialize components for Routine "instructions_t" ---
    mouse_instructions_t = event.Mouse(win=win)
    x, y = [None, None]
    mouse_instructions_t.mouseClock = core.Clock()
    text_instructions_t = visual.TextStim(win=win, name='text_instructions_t',
        text='คุณจะเห็นรูปทรงหลายรูปปรากฏบนหน้าจอในแต่ละรอบ\nคุณต้องหา "สามเหลี่ยม" เมื่อเจอให้กดปุ่มสึเขียว\nถ้าไม่มี "สามเหลี่ยม" ให้กดปุ่มสีแดง\nแตะเพื่อดำเนินการต่อ',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    
    # --- Initialize components for Routine "countdown" ---
    text_3 = visual.TextStim(win=win, name='text_3',
        text='3',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.2, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    text_2 = visual.TextStim(win=win, name='text_2',
        text='2',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.2, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    text_1 = visual.TextStim(win=win, name='text_1',
        text='1',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.2, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    
    # --- Initialize components for Routine "ISI" ---
    blank = visual.TextStim(win=win, name='blank',
        text='+',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.2, wrapWidth=None, ori=0, 
        color='black', colorSpace='rgb', opacity=1, 
        languageStyle='LTR',
        depth=0.0);
    
    # --- Initialize components for Routine "visual_search_1" ---
    square_1 = visual.Rect(
        win=win, name='square_1',
        width=(0.6, 0.6)[0], height=(0.6, 0.6)[1],
        ori=0.0, pos=(0, 0), draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor=[-1.0000, -1.0000, -1.0000], fillColor='white',
        opacity=None, depth=0.0, interpolate=True)
    instruct_1 = visual.TextStim(win=win, name='instruct_1',
        text='มีสามเหลี่ยมสีฟ้า     หรือไม่',
        font='Arial',
        pos=(0, 0.4), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    mouse_1 = event.Mouse(win=win)
    x, y = [None, None]
    mouse_1.mouseClock = core.Clock()
    target_1 = visual.ShapeStim(
        win=win, name='target_1',
        size=(0.039, 0.035), vertices='triangle',
        ori=0.0, pos=[0,0], draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor=[-1.0000, -1.0000, -1.0000], fillColor=[-1.0000, 0.5059, 1.0000],
        opacity=None, depth=-4.0, interpolate=True)
    C_1 = visual.ImageStim(
        win=win,
        name='C_1', 
        image='Images/Yes.png', mask=None, anchor='center',
        ori=0.0, pos=(0.15, -0.4), draggable=False, size=(0.15, 0.15),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-5.0)
    InC_1 = visual.ImageStim(
        win=win,
        name='InC_1', 
        image='Images/No.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.15, -0.4), draggable=False, size=(0.15, 0.15),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-6.0)
    image_1 = visual.ImageStim(
        win=win,
        name='image_1', 
        image='Images/1.png', mask=None, anchor='center',
        ori=0.0, pos=(0.1, 0.395), draggable=False, size=(0.07, 0.07),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-7.0)
    
    # --- Initialize components for Routine "feedback_1" ---
    fb_1 = visual.TextStim(win=win, name='fb_1',
        text='',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    trial_counter_1 = visual.TextStim(win=win, name='trial_counter_1',
        text='',
        font='Arial',
        pos=(0, -0.4), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    # Run 'Begin Experiment' code from track_rt_1
    rts = [];
    n_round = 0;
    
    FB_1 = visual.TextStim(win=win, name='FB_1',
        text='',
        font='Arial',
        pos=(0, 0.06), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    
    # --- Initialize components for Routine "instructions" ---
    text_instructions = visual.TextStim(win=win, name='text_instructions',
        text='',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    mouse_instructions = event.Mouse(win=win)
    x, y = [None, None]
    mouse_instructions.mouseClock = core.Clock()
    
    # --- Initialize components for Routine "countdown" ---
    text_3 = visual.TextStim(win=win, name='text_3',
        text='3',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.2, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    text_2 = visual.TextStim(win=win, name='text_2',
        text='2',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.2, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    text_1 = visual.TextStim(win=win, name='text_1',
        text='1',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.2, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    
    # --- Initialize components for Routine "ISI" ---
    blank = visual.TextStim(win=win, name='blank',
        text='+',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.2, wrapWidth=None, ori=0, 
        color='black', colorSpace='rgb', opacity=1, 
        languageStyle='LTR',
        depth=0.0);
    
    # --- Initialize components for Routine "visual_search_2" ---
    square = visual.Rect(
        win=win, name='square',
        width=(0.6, 0.6)[0], height=(0.6, 0.6)[1],
        ori=0.0, pos=(0, 0), draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor=[-1.0000, -1.0000, -1.0000], fillColor=[1.0000, 1.0000, 1.0000],
        opacity=None, depth=0.0, interpolate=True)
    instruct = visual.TextStim(win=win, name='instruct',
        text='มีสามเหลี่ยม     หรือไม่',
        font='Arial',
        pos=(0, 0.4), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    mouse = event.Mouse(win=win)
    x, y = [None, None]
    mouse.mouseClock = core.Clock()
    target = visual.ShapeStim(
        win=win, name='target',
        size=(0.039, 0.035), vertices='triangle',
        ori=0.0, pos=(10, 10), draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='grey', fillColor='grey',
        opacity=None, depth=-4.0, interpolate=True)
    C = visual.ImageStim(
        win=win,
        name='C', 
        image='Images/Yes.png', mask=None, anchor='center',
        ori=0.0, pos=(0.15, -0.4), draggable=False, size=(0.15, 0.15),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-5.0)
    InC = visual.ImageStim(
        win=win,
        name='InC', 
        image='Images/No.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.15, -0.4), draggable=False, size=(0.15, 0.15),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-6.0)
    image = visual.ImageStim(
        win=win,
        name='image', 
        image='Images/2.png', mask=None, anchor='center',
        ori=0.0, pos=(0.055, 0.395), draggable=False, size=(0.07, 0.07),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-7.0)
    
    # --- Initialize components for Routine "feedback_2" ---
    fb_2 = visual.TextStim(win=win, name='fb_2',
        text='',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    trial_counter = visual.TextStim(win=win, name='trial_counter',
        text='',
        font='Arial',
        pos=(0, -0.4), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    # Run 'Begin Experiment' code from track_rt_2
    rts = [];
    n_round = 0;
    
    FB_2 = visual.TextStim(win=win, name='FB_2',
        text='',
        font='Arial',
        pos=(0, 0.06), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    
    # --- Initialize components for Routine "end" ---
    
    # create some handy timers
    
    # global clock to track the time since experiment started
    if globalClock is None:
        # create a clock if not given one
        globalClock = core.Clock()
    if isinstance(globalClock, str):
        # if given a string, make a clock accoridng to it
        if globalClock == 'float':
            # get timestamps as a simple value
            globalClock = core.Clock(format='float')
        elif globalClock == 'iso':
            # get timestamps in ISO format
            globalClock = core.Clock(format='%Y-%m-%d_%H:%M:%S.%f%z')
        else:
            # get timestamps in a custom format
            globalClock = core.Clock(format=globalClock)
    if ioServer is not None:
        ioServer.syncClock(globalClock)
    logging.setDefaultClock(globalClock)
    # routine timer to track time remaining of each (possibly non-slip) routine
    routineTimer = core.Clock()
    win.flip()  # flip window to reset last flip timer
    # store the exact time the global clock started
    expInfo['expStart'] = data.getDateStr(
        format='%Y-%m-%d %Hh%M.%S.%f %z', fractionalSecondDigits=6
    )
    
    # --- Prepare to start Routine "instructions_t" ---
    # create an object to store info about Routine instructions_t
    instructions_t = data.Routine(
        name='instructions_t',
        components=[mouse_instructions_t, text_instructions_t],
    )
    instructions_t.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # setup some python lists for storing info about the mouse_instructions_t
    gotValidClick = False  # until a click is received
    # store start times for instructions_t
    instructions_t.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    instructions_t.tStart = globalClock.getTime(format='float')
    instructions_t.status = STARTED
    instructions_t.maxDuration = None
    # keep track of which components have finished
    instructions_tComponents = instructions_t.components
    for thisComponent in instructions_t.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "instructions_t" ---
    instructions_t.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        # *mouse_instructions_t* updates
        
        # if mouse_instructions_t is starting this frame...
        if mouse_instructions_t.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            mouse_instructions_t.frameNStart = frameN  # exact frame index
            mouse_instructions_t.tStart = t  # local t and not account for scr refresh
            mouse_instructions_t.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mouse_instructions_t, 'tStartRefresh')  # time at next scr refresh
            # update status
            mouse_instructions_t.status = STARTED
            mouse_instructions_t.mouseClock.reset()
            prevButtonState = mouse_instructions_t.getPressed()  # if button is down already this ISN'T a new click
        if mouse_instructions_t.status == STARTED:  # only update if started and not finished!
            buttons = mouse_instructions_t.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    pass
                    continueRoutine = False  # end routine on response        
        # *text_instructions_t* updates
        
        # if text_instructions_t is starting this frame...
        if text_instructions_t.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_instructions_t.frameNStart = frameN  # exact frame index
            text_instructions_t.tStart = t  # local t and not account for scr refresh
            text_instructions_t.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_instructions_t, 'tStartRefresh')  # time at next scr refresh
            # update status
            text_instructions_t.status = STARTED
            text_instructions_t.setAutoDraw(True)
        
        # if text_instructions_t is active this frame...
        if text_instructions_t.status == STARTED:
            # update params
            pass
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            instructions_t.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in instructions_t.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "instructions_t" ---
    for thisComponent in instructions_t.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for instructions_t
    instructions_t.tStop = globalClock.getTime(format='float')
    instructions_t.tStopRefresh = tThisFlipGlobal
    # store data for thisExp (ExperimentHandler)
    thisExp.nextEntry()
    # the Routine "instructions_t" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "countdown" ---
    # create an object to store info about Routine countdown
    countdown = data.Routine(
        name='countdown',
        components=[text_3, text_2, text_1],
    )
    countdown.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # store start times for countdown
    countdown.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    countdown.tStart = globalClock.getTime(format='float')
    countdown.status = STARTED
    thisExp.addData('countdown.started', countdown.tStart)
    countdown.maxDuration = None
    # keep track of which components have finished
    countdownComponents = countdown.components
    for thisComponent in countdown.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "countdown" ---
    countdown.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 3.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_3* updates
        
        # if text_3 is starting this frame...
        if text_3.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_3.frameNStart = frameN  # exact frame index
            text_3.tStart = t  # local t and not account for scr refresh
            text_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_3, 'tStartRefresh')  # time at next scr refresh
            # update status
            text_3.status = STARTED
            text_3.setAutoDraw(True)
        
        # if text_3 is active this frame...
        if text_3.status == STARTED:
            # update params
            pass
        
        # if text_3 is stopping this frame...
        if text_3.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_3.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                text_3.tStop = t  # not accounting for scr refresh
                text_3.tStopRefresh = tThisFlipGlobal  # on global time
                text_3.frameNStop = frameN  # exact frame index
                # update status
                text_3.status = FINISHED
                text_3.setAutoDraw(False)
        
        # *text_2* updates
        
        # if text_2 is starting this frame...
        if text_2.status == NOT_STARTED and t >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            text_2.frameNStart = frameN  # exact frame index
            text_2.tStart = t  # local t and not account for scr refresh
            text_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_2, 'tStartRefresh')  # time at next scr refresh
            # update status
            text_2.status = STARTED
            text_2.setAutoDraw(True)
        
        # if text_2 is active this frame...
        if text_2.status == STARTED:
            # update params
            pass
        
        # if text_2 is stopping this frame...
        if text_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_2.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                text_2.tStop = t  # not accounting for scr refresh
                text_2.tStopRefresh = tThisFlipGlobal  # on global time
                text_2.frameNStop = frameN  # exact frame index
                # update status
                text_2.status = FINISHED
                text_2.setAutoDraw(False)
        
        # *text_1* updates
        
        # if text_1 is starting this frame...
        if text_1.status == NOT_STARTED and t >= 2.0-frameTolerance:
            # keep track of start time/frame for later
            text_1.frameNStart = frameN  # exact frame index
            text_1.tStart = t  # local t and not account for scr refresh
            text_1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_1, 'tStartRefresh')  # time at next scr refresh
            # update status
            text_1.status = STARTED
            text_1.setAutoDraw(True)
        
        # if text_1 is active this frame...
        if text_1.status == STARTED:
            # update params
            pass
        
        # if text_1 is stopping this frame...
        if text_1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_1.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                text_1.tStop = t  # not accounting for scr refresh
                text_1.tStopRefresh = tThisFlipGlobal  # on global time
                text_1.frameNStop = frameN  # exact frame index
                # update status
                text_1.status = FINISHED
                text_1.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            countdown.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in countdown.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "countdown" ---
    for thisComponent in countdown.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for countdown
    countdown.tStop = globalClock.getTime(format='float')
    countdown.tStopRefresh = tThisFlipGlobal
    thisExp.addData('countdown.stopped', countdown.tStop)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if countdown.maxDurationReached:
        routineTimer.addTime(-countdown.maxDuration)
    elif countdown.forceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-3.000000)
    thisExp.nextEntry()
    
    # set up handler to look after randomisation of conditions etc
    trials_1 = data.TrialHandler2(
        name='trials_1',
        nReps=1.0, 
        method='random', 
        extraInfo=expInfo, 
        originPath=-1, 
        trialList=data.importConditions('conditions1.csv'), 
        seed=None, 
    )
    thisExp.addLoop(trials_1)  # add the loop to the experiment
    thisTrial_1 = trials_1.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrial_1.rgb)
    if thisTrial_1 != None:
        for paramName in thisTrial_1:
            globals()[paramName] = thisTrial_1[paramName]
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    for thisTrial_1 in trials_1:
        currentLoop = trials_1
        thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
        # abbreviate parameter names if possible (e.g. rgb = thisTrial_1.rgb)
        if thisTrial_1 != None:
            for paramName in thisTrial_1:
                globals()[paramName] = thisTrial_1[paramName]
        
        # --- Prepare to start Routine "ISI" ---
        # create an object to store info about Routine ISI
        ISI = data.Routine(
            name='ISI',
            components=[blank],
        )
        ISI.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        # store start times for ISI
        ISI.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        ISI.tStart = globalClock.getTime(format='float')
        ISI.status = STARTED
        thisExp.addData('ISI.started', ISI.tStart)
        ISI.maxDuration = None
        # keep track of which components have finished
        ISIComponents = ISI.components
        for thisComponent in ISI.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "ISI" ---
        # if trial has changed, end Routine now
        if isinstance(trials_1, data.TrialHandler2) and thisTrial_1.thisN != trials_1.thisTrial.thisN:
            continueRoutine = False
        ISI.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine and routineTimer.getTime() < 0.5:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *blank* updates
            
            # if blank is starting this frame...
            if blank.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                blank.frameNStart = frameN  # exact frame index
                blank.tStart = t  # local t and not account for scr refresh
                blank.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(blank, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'blank.started')
                # update status
                blank.status = STARTED
                blank.setAutoDraw(True)
            
            # if blank is active this frame...
            if blank.status == STARTED:
                # update params
                pass
            
            # if blank is stopping this frame...
            if blank.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > blank.tStartRefresh + .5-frameTolerance:
                    # keep track of stop time/frame for later
                    blank.tStop = t  # not accounting for scr refresh
                    blank.tStopRefresh = tThisFlipGlobal  # on global time
                    blank.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'blank.stopped')
                    # update status
                    blank.status = FINISHED
                    blank.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
                )
                # skip the frame we paused on
                continue
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                ISI.forceEnded = routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in ISI.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "ISI" ---
        for thisComponent in ISI.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for ISI
        ISI.tStop = globalClock.getTime(format='float')
        ISI.tStopRefresh = tThisFlipGlobal
        thisExp.addData('ISI.stopped', ISI.tStop)
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if ISI.maxDurationReached:
            routineTimer.addTime(-ISI.maxDuration)
        elif ISI.forceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-0.500000)
        
        # --- Prepare to start Routine "visual_search_1" ---
        # create an object to store info about Routine visual_search_1
        visual_search_1 = data.Routine(
            name='visual_search_1',
            components=[square_1, instruct_1, mouse_1, target_1, C_1, InC_1, image_1],
        )
        visual_search_1.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        # Run 'Begin Routine' code from code_1
        n_distractors = decoy # how many distractors on screen
        n_target = tar
        
        # empty list for distractors
        distractors = []
        targets = []
        
        
        xys = [[-0.25, -0.25], [-0.194444, -0.25], [-0.138889, -0.25], [-0.083333, -0.25], [-0.027778, -0.25], 
               [0.027778, -0.25], [0.083333, -0.25], [0.138889, -0.25], [0.194444, -0.25], [0.25, -0.25],
               
               [-0.25, -0.194444], [-0.194444, -0.194444], [-0.138889, -0.194444], [-0.083333, -0.194444], [-0.027778, -0.194444], 
               [0.027778, -0.194444], [0.083333, -0.194444], [0.138889, -0.194444], [0.194444, -0.194444], [0.25, -0.194444],
        
               [-0.25, -0.138889], [-0.194444, -0.138889], [-0.138889, -0.138889], [-0.083333, -0.138889], [-0.027778, -0.138889], 
               [0.027778, -0.138889], [0.083333, -0.138889], [0.138889, -0.138889], [0.194444, -0.138889], [0.25, -0.138889],
        
               [-0.25, -0.083333], [-0.194444, -0.083333], [-0.138889, -0.083333], [-0.083333, -0.083333], [-0.027778, -0.083333], 
               [0.027778, -0.083333], [0.083333, -0.083333], [0.138889, -0.083333], [0.194444, -0.083333], [0.25, -0.083333],
        
               [-0.25, -0.027778], [-0.194444, -0.027778], [-0.138889, -0.027778], [-0.083333, -0.027778], [-0.027778, -0.027778], 
               [0.027778, -0.027778], [0.083333, -0.027778], [0.138889, -0.027778], [0.194444, -0.027778], [0.25, -0.027778],
        
               [-0.25, 0.027778], [-0.194444, 0.027778], [-0.138889, 0.027778], [-0.083333, 0.027778], [-0.027778, 0.027778], 
               [0.027778, 0.027778], [0.083333, 0.027778], [0.138889, 0.027778], [0.194444, 0.027778], [0.25, 0.027778],
        
               [-0.25, 0.083333], [-0.194444, 0.083333], [-0.138889, 0.083333], [-0.083333, 0.083333], [-0.027778, 0.083333], 
               [0.027778, 0.083333], [0.083333, 0.083333], [0.138889, 0.083333], [0.194444, 0.083333], [0.25, 0.083333],
        
               [-0.25, 0.138889], [-0.194444, 0.138889], [-0.138889, 0.138889], [-0.083333, 0.138889], [-0.027778, 0.138889], 
               [0.027778, 0.138889], [0.083333, 0.138889], [0.138889, 0.138889], [0.194444, 0.138889], [0.25, 0.138889],
        
               [-0.25, 0.194444], [-0.194444, 0.194444], [-0.138889, 0.194444], [-0.083333, 0.194444], [-0.027778, 0.194444], 
               [0.027778, 0.194444], [0.083333, 0.194444], [0.138889, 0.194444], [0.194444, 0.194444], [0.25, 0.194444],
        
               [-0.25, 0.25], [-0.194444, 0.25], [-0.138889, 0.25], [-0.083333, 0.25], [-0.027778, 0.25], 
               [0.027778, 0.25], [0.083333, 0.25], [0.138889, 0.25], [0.194444, 0.25], [0.25, 0.25]]
        
        # randomise the coordinates
        shuffle(xys)
        count = 0 # used to iterate through list
        positions = []
        
        
        for i in range(n_distractors):
            # Create a triangle polygon
            distractor = visual.Polygon(win=win, edges=3, size=0.05,
                pos=([xys[count][0], xys[count][1]]), 
                lineColor='yellow', fillColor='yellow', opacity=1.0, depth=-1.0)
            distractors.append(distractor)
            positions.append(xys[count])
            count += 1
            
        for i in range(n_target):
            # Create a triangle polygon
            target = visual.Polygon(win=win, edges=3, size=0.05,
                pos=([xys[count][0], xys[count][1]]), 
                lineColor=[-1.0000, 0.2000, 1.0000], fillColor=[-1.0000, 0.2000, 1.0000], opacity=1.0, depth=-1.0)
            targets.append(target)
            positions.append(xys[count])
        
        # present the distractors on screen
        for distractor in distractors:
            distractor.setAutoDraw(True)
            
        for target in targets:
            target.setAutoDraw(True)
        # setup some python lists for storing info about the mouse_1
        mouse_1.x = []
        mouse_1.y = []
        mouse_1.leftButton = []
        mouse_1.midButton = []
        mouse_1.rightButton = []
        mouse_1.time = []
        mouse_1.clicked_name = []
        gotValidClick = False  # until a click is received
        target_1.setPos((10, 10))
        # store start times for visual_search_1
        visual_search_1.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        visual_search_1.tStart = globalClock.getTime(format='float')
        visual_search_1.status = STARTED
        thisExp.addData('visual_search_1.started', visual_search_1.tStart)
        visual_search_1.maxDuration = None
        # keep track of which components have finished
        visual_search_1Components = visual_search_1.components
        for thisComponent in visual_search_1.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "visual_search_1" ---
        # if trial has changed, end Routine now
        if isinstance(trials_1, data.TrialHandler2) and thisTrial_1.thisN != trials_1.thisTrial.thisN:
            continueRoutine = False
        visual_search_1.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *square_1* updates
            
            # if square_1 is starting this frame...
            if square_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                square_1.frameNStart = frameN  # exact frame index
                square_1.tStart = t  # local t and not account for scr refresh
                square_1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_1, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_1.started')
                # update status
                square_1.status = STARTED
                square_1.setAutoDraw(True)
            
            # if square_1 is active this frame...
            if square_1.status == STARTED:
                # update params
                pass
            
            # *instruct_1* updates
            
            # if instruct_1 is starting this frame...
            if instruct_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                instruct_1.frameNStart = frameN  # exact frame index
                instruct_1.tStart = t  # local t and not account for scr refresh
                instruct_1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(instruct_1, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'instruct_1.started')
                # update status
                instruct_1.status = STARTED
                instruct_1.setAutoDraw(True)
            
            # if instruct_1 is active this frame...
            if instruct_1.status == STARTED:
                # update params
                pass
            # *mouse_1* updates
            
            # if mouse_1 is starting this frame...
            if mouse_1.status == NOT_STARTED and t >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                mouse_1.frameNStart = frameN  # exact frame index
                mouse_1.tStart = t  # local t and not account for scr refresh
                mouse_1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(mouse_1, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.addData('mouse_1.started', t)
                # update status
                mouse_1.status = STARTED
                mouse_1.mouseClock.reset()
                prevButtonState = mouse_1.getPressed()  # if button is down already this ISN'T a new click
            if mouse_1.status == STARTED:  # only update if started and not finished!
                buttons = mouse_1.getPressed()
                if buttons != prevButtonState:  # button state changed?
                    prevButtonState = buttons
                    if sum(buttons) > 0:  # state changed to a new click
                        # check if the mouse was inside our 'clickable' objects
                        gotValidClick = False
                        clickableList = environmenttools.getFromNames([target_1,C_1,InC_1], namespace=locals())
                        for obj in clickableList:
                            # is this object clicked on?
                            if obj.contains(mouse_1):
                                gotValidClick = True
                                mouse_1.clicked_name.append(obj.name)
                                mouse_1.clicked_name.append(obj.name)
                        if gotValidClick:
                            x, y = mouse_1.getPos()
                            mouse_1.x.append(x)
                            mouse_1.y.append(y)
                            buttons = mouse_1.getPressed()
                            mouse_1.leftButton.append(buttons[0])
                            mouse_1.midButton.append(buttons[1])
                            mouse_1.rightButton.append(buttons[2])
                            mouse_1.time.append(mouse_1.mouseClock.getTime())
                        if gotValidClick:
                            continueRoutine = False  # end routine on response
            
            # *target_1* updates
            
            # if target_1 is starting this frame...
            if target_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                target_1.frameNStart = frameN  # exact frame index
                target_1.tStart = t  # local t and not account for scr refresh
                target_1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(target_1, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'target_1.started')
                # update status
                target_1.status = STARTED
                target_1.setAutoDraw(True)
            
            # if target_1 is active this frame...
            if target_1.status == STARTED:
                # update params
                pass
            
            # *C_1* updates
            
            # if C_1 is starting this frame...
            if C_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                C_1.frameNStart = frameN  # exact frame index
                C_1.tStart = t  # local t and not account for scr refresh
                C_1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(C_1, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'C_1.started')
                # update status
                C_1.status = STARTED
                C_1.setAutoDraw(True)
            
            # if C_1 is active this frame...
            if C_1.status == STARTED:
                # update params
                pass
            
            # *InC_1* updates
            
            # if InC_1 is starting this frame...
            if InC_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                InC_1.frameNStart = frameN  # exact frame index
                InC_1.tStart = t  # local t and not account for scr refresh
                InC_1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(InC_1, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'InC_1.started')
                # update status
                InC_1.status = STARTED
                InC_1.setAutoDraw(True)
            
            # if InC_1 is active this frame...
            if InC_1.status == STARTED:
                # update params
                pass
            
            # *image_1* updates
            
            # if image_1 is starting this frame...
            if image_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                image_1.frameNStart = frameN  # exact frame index
                image_1.tStart = t  # local t and not account for scr refresh
                image_1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_1, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image_1.started')
                # update status
                image_1.status = STARTED
                image_1.setAutoDraw(True)
            
            # if image_1 is active this frame...
            if image_1.status == STARTED:
                # update params
                pass
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
                )
                # skip the frame we paused on
                continue
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                visual_search_1.forceEnded = routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in visual_search_1.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "visual_search_1" ---
        for thisComponent in visual_search_1.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for visual_search_1
        visual_search_1.tStop = globalClock.getTime(format='float')
        visual_search_1.tStopRefresh = tThisFlipGlobal
        thisExp.addData('visual_search_1.stopped', visual_search_1.tStop)
        # Run 'End Routine' code from code_1
        if mouse_1.clicked_name[-1] == corrAns_1:
            correct = 1
        else:
            correct = 0
            
        # undraw the distractors
        for distractor in distractors:
            distractor.setAutoDraw(False)
            
        for target in targets:
            target.setAutoDraw(False)
        
        # store data for trials_1 (TrialHandler)
        trials_1.addData('mouse_1.x', mouse_1.x)
        trials_1.addData('mouse_1.y', mouse_1.y)
        trials_1.addData('mouse_1.leftButton', mouse_1.leftButton)
        trials_1.addData('mouse_1.midButton', mouse_1.midButton)
        trials_1.addData('mouse_1.rightButton', mouse_1.rightButton)
        trials_1.addData('mouse_1.time', mouse_1.time)
        trials_1.addData('mouse_1.clicked_name', mouse_1.clicked_name)
        # the Routine "visual_search_1" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # --- Prepare to start Routine "feedback_1" ---
        # create an object to store info about Routine feedback_1
        feedback_1 = data.Routine(
            name='feedback_1',
            components=[fb_1, trial_counter_1, FB_1],
        )
        feedback_1.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        fb_1.setText('คุณพบเป้าหมายใน ' + str(int(mouse_1.time[-1]*1000)) + 'ms')
        trial_counter_1.setText(str(trials_1.thisN) + '/' + str(trials_1.nTotal))
        # Run 'Begin Routine' code from track_rt_1
        if correct == 1:
            feedback_text = "ถูกต้อง!"
        else:
            feedback_text = "ผิด!"
        FB_1.setText(feedback_text)
        # store start times for feedback_1
        feedback_1.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        feedback_1.tStart = globalClock.getTime(format='float')
        feedback_1.status = STARTED
        feedback_1.maxDuration = None
        # keep track of which components have finished
        feedback_1Components = feedback_1.components
        for thisComponent in feedback_1.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "feedback_1" ---
        # if trial has changed, end Routine now
        if isinstance(trials_1, data.TrialHandler2) and thisTrial_1.thisN != trials_1.thisTrial.thisN:
            continueRoutine = False
        feedback_1.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine and routineTimer.getTime() < 1.0:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *fb_1* updates
            
            # if fb_1 is starting this frame...
            if fb_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                fb_1.frameNStart = frameN  # exact frame index
                fb_1.tStart = t  # local t and not account for scr refresh
                fb_1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(fb_1, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'fb_1.started')
                # update status
                fb_1.status = STARTED
                fb_1.setAutoDraw(True)
            
            # if fb_1 is active this frame...
            if fb_1.status == STARTED:
                # update params
                pass
            
            # if fb_1 is stopping this frame...
            if fb_1.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > fb_1.tStartRefresh + 1.0-frameTolerance:
                    # keep track of stop time/frame for later
                    fb_1.tStop = t  # not accounting for scr refresh
                    fb_1.tStopRefresh = tThisFlipGlobal  # on global time
                    fb_1.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'fb_1.stopped')
                    # update status
                    fb_1.status = FINISHED
                    fb_1.setAutoDraw(False)
            
            # *trial_counter_1* updates
            
            # if trial_counter_1 is starting this frame...
            if trial_counter_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                trial_counter_1.frameNStart = frameN  # exact frame index
                trial_counter_1.tStart = t  # local t and not account for scr refresh
                trial_counter_1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(trial_counter_1, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'trial_counter_1.started')
                # update status
                trial_counter_1.status = STARTED
                trial_counter_1.setAutoDraw(True)
            
            # if trial_counter_1 is active this frame...
            if trial_counter_1.status == STARTED:
                # update params
                pass
            
            # if trial_counter_1 is stopping this frame...
            if trial_counter_1.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > trial_counter_1.tStartRefresh + 1-frameTolerance:
                    # keep track of stop time/frame for later
                    trial_counter_1.tStop = t  # not accounting for scr refresh
                    trial_counter_1.tStopRefresh = tThisFlipGlobal  # on global time
                    trial_counter_1.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'trial_counter_1.stopped')
                    # update status
                    trial_counter_1.status = FINISHED
                    trial_counter_1.setAutoDraw(False)
            
            # *FB_1* updates
            
            # if FB_1 is starting this frame...
            if FB_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                FB_1.frameNStart = frameN  # exact frame index
                FB_1.tStart = t  # local t and not account for scr refresh
                FB_1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(FB_1, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'FB_1.started')
                # update status
                FB_1.status = STARTED
                FB_1.setAutoDraw(True)
            
            # if FB_1 is active this frame...
            if FB_1.status == STARTED:
                # update params
                pass
            
            # if FB_1 is stopping this frame...
            if FB_1.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > FB_1.tStartRefresh + 1.0-frameTolerance:
                    # keep track of stop time/frame for later
                    FB_1.tStop = t  # not accounting for scr refresh
                    FB_1.tStopRefresh = tThisFlipGlobal  # on global time
                    FB_1.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'FB_1.stopped')
                    # update status
                    FB_1.status = FINISHED
                    FB_1.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
                )
                # skip the frame we paused on
                continue
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                feedback_1.forceEnded = routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in feedback_1.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "feedback_1" ---
        for thisComponent in feedback_1.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for feedback_1
        feedback_1.tStop = globalClock.getTime(format='float')
        feedback_1.tStopRefresh = tThisFlipGlobal
        # Run 'End Routine' code from track_rt_1
        rts.append(mouse_t.time[-1])
        
        n_round +=1
        
        if n_round > 1:
            trials_t.finished = True
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if feedback_1.maxDurationReached:
            routineTimer.addTime(-feedback_1.maxDuration)
        elif feedback_1.forceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-1.000000)
        thisExp.nextEntry()
        
    # completed 1.0 repeats of 'trials_1'
    
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    # --- Prepare to start Routine "instructions" ---
    # create an object to store info about Routine instructions
    instructions = data.Routine(
        name='instructions',
        components=[text_instructions, mouse_instructions],
    )
    instructions.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    text_instructions.setText('\nแตะหน้าจอเพื่อเริ่มเล่น')
    # setup some python lists for storing info about the mouse_instructions
    gotValidClick = False  # until a click is received
    # store start times for instructions
    instructions.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    instructions.tStart = globalClock.getTime(format='float')
    instructions.status = STARTED
    instructions.maxDuration = None
    # keep track of which components have finished
    instructionsComponents = instructions.components
    for thisComponent in instructions.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "instructions" ---
    instructions.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_instructions* updates
        
        # if text_instructions is starting this frame...
        if text_instructions.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_instructions.frameNStart = frameN  # exact frame index
            text_instructions.tStart = t  # local t and not account for scr refresh
            text_instructions.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_instructions, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_instructions.started')
            # update status
            text_instructions.status = STARTED
            text_instructions.setAutoDraw(True)
        
        # if text_instructions is active this frame...
        if text_instructions.status == STARTED:
            # update params
            pass
        # *mouse_instructions* updates
        
        # if mouse_instructions is starting this frame...
        if mouse_instructions.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            mouse_instructions.frameNStart = frameN  # exact frame index
            mouse_instructions.tStart = t  # local t and not account for scr refresh
            mouse_instructions.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mouse_instructions, 'tStartRefresh')  # time at next scr refresh
            # update status
            mouse_instructions.status = STARTED
            mouse_instructions.mouseClock.reset()
            prevButtonState = mouse_instructions.getPressed()  # if button is down already this ISN'T a new click
        if mouse_instructions.status == STARTED:  # only update if started and not finished!
            buttons = mouse_instructions.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    pass
                    continueRoutine = False  # end routine on response        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            instructions.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in instructions.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "instructions" ---
    for thisComponent in instructions.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for instructions
    instructions.tStop = globalClock.getTime(format='float')
    instructions.tStopRefresh = tThisFlipGlobal
    # store data for thisExp (ExperimentHandler)
    thisExp.nextEntry()
    # the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "countdown" ---
    # create an object to store info about Routine countdown
    countdown = data.Routine(
        name='countdown',
        components=[text_3, text_2, text_1],
    )
    countdown.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # store start times for countdown
    countdown.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    countdown.tStart = globalClock.getTime(format='float')
    countdown.status = STARTED
    thisExp.addData('countdown.started', countdown.tStart)
    countdown.maxDuration = None
    # keep track of which components have finished
    countdownComponents = countdown.components
    for thisComponent in countdown.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "countdown" ---
    countdown.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 3.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_3* updates
        
        # if text_3 is starting this frame...
        if text_3.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_3.frameNStart = frameN  # exact frame index
            text_3.tStart = t  # local t and not account for scr refresh
            text_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_3, 'tStartRefresh')  # time at next scr refresh
            # update status
            text_3.status = STARTED
            text_3.setAutoDraw(True)
        
        # if text_3 is active this frame...
        if text_3.status == STARTED:
            # update params
            pass
        
        # if text_3 is stopping this frame...
        if text_3.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_3.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                text_3.tStop = t  # not accounting for scr refresh
                text_3.tStopRefresh = tThisFlipGlobal  # on global time
                text_3.frameNStop = frameN  # exact frame index
                # update status
                text_3.status = FINISHED
                text_3.setAutoDraw(False)
        
        # *text_2* updates
        
        # if text_2 is starting this frame...
        if text_2.status == NOT_STARTED and t >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            text_2.frameNStart = frameN  # exact frame index
            text_2.tStart = t  # local t and not account for scr refresh
            text_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_2, 'tStartRefresh')  # time at next scr refresh
            # update status
            text_2.status = STARTED
            text_2.setAutoDraw(True)
        
        # if text_2 is active this frame...
        if text_2.status == STARTED:
            # update params
            pass
        
        # if text_2 is stopping this frame...
        if text_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_2.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                text_2.tStop = t  # not accounting for scr refresh
                text_2.tStopRefresh = tThisFlipGlobal  # on global time
                text_2.frameNStop = frameN  # exact frame index
                # update status
                text_2.status = FINISHED
                text_2.setAutoDraw(False)
        
        # *text_1* updates
        
        # if text_1 is starting this frame...
        if text_1.status == NOT_STARTED and t >= 2.0-frameTolerance:
            # keep track of start time/frame for later
            text_1.frameNStart = frameN  # exact frame index
            text_1.tStart = t  # local t and not account for scr refresh
            text_1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_1, 'tStartRefresh')  # time at next scr refresh
            # update status
            text_1.status = STARTED
            text_1.setAutoDraw(True)
        
        # if text_1 is active this frame...
        if text_1.status == STARTED:
            # update params
            pass
        
        # if text_1 is stopping this frame...
        if text_1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_1.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                text_1.tStop = t  # not accounting for scr refresh
                text_1.tStopRefresh = tThisFlipGlobal  # on global time
                text_1.frameNStop = frameN  # exact frame index
                # update status
                text_1.status = FINISHED
                text_1.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            countdown.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in countdown.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "countdown" ---
    for thisComponent in countdown.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for countdown
    countdown.tStop = globalClock.getTime(format='float')
    countdown.tStopRefresh = tThisFlipGlobal
    thisExp.addData('countdown.stopped', countdown.tStop)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if countdown.maxDurationReached:
        routineTimer.addTime(-countdown.maxDuration)
    elif countdown.forceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-3.000000)
    thisExp.nextEntry()
    
    # set up handler to look after randomisation of conditions etc
    trials_2 = data.TrialHandler2(
        name='trials_2',
        nReps=1.0, 
        method='random', 
        extraInfo=expInfo, 
        originPath=-1, 
        trialList=data.importConditions('conditions1.csv'), 
        seed=None, 
    )
    thisExp.addLoop(trials_2)  # add the loop to the experiment
    thisTrial_2 = trials_2.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrial_2.rgb)
    if thisTrial_2 != None:
        for paramName in thisTrial_2:
            globals()[paramName] = thisTrial_2[paramName]
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    for thisTrial_2 in trials_2:
        currentLoop = trials_2
        thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
        # abbreviate parameter names if possible (e.g. rgb = thisTrial_2.rgb)
        if thisTrial_2 != None:
            for paramName in thisTrial_2:
                globals()[paramName] = thisTrial_2[paramName]
        
        # --- Prepare to start Routine "ISI" ---
        # create an object to store info about Routine ISI
        ISI = data.Routine(
            name='ISI',
            components=[blank],
        )
        ISI.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        # store start times for ISI
        ISI.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        ISI.tStart = globalClock.getTime(format='float')
        ISI.status = STARTED
        thisExp.addData('ISI.started', ISI.tStart)
        ISI.maxDuration = None
        # keep track of which components have finished
        ISIComponents = ISI.components
        for thisComponent in ISI.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "ISI" ---
        # if trial has changed, end Routine now
        if isinstance(trials_2, data.TrialHandler2) and thisTrial_2.thisN != trials_2.thisTrial.thisN:
            continueRoutine = False
        ISI.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine and routineTimer.getTime() < 0.5:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *blank* updates
            
            # if blank is starting this frame...
            if blank.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                blank.frameNStart = frameN  # exact frame index
                blank.tStart = t  # local t and not account for scr refresh
                blank.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(blank, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'blank.started')
                # update status
                blank.status = STARTED
                blank.setAutoDraw(True)
            
            # if blank is active this frame...
            if blank.status == STARTED:
                # update params
                pass
            
            # if blank is stopping this frame...
            if blank.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > blank.tStartRefresh + .5-frameTolerance:
                    # keep track of stop time/frame for later
                    blank.tStop = t  # not accounting for scr refresh
                    blank.tStopRefresh = tThisFlipGlobal  # on global time
                    blank.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'blank.stopped')
                    # update status
                    blank.status = FINISHED
                    blank.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
                )
                # skip the frame we paused on
                continue
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                ISI.forceEnded = routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in ISI.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "ISI" ---
        for thisComponent in ISI.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for ISI
        ISI.tStop = globalClock.getTime(format='float')
        ISI.tStopRefresh = tThisFlipGlobal
        thisExp.addData('ISI.stopped', ISI.tStop)
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if ISI.maxDurationReached:
            routineTimer.addTime(-ISI.maxDuration)
        elif ISI.forceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-0.500000)
        
        # --- Prepare to start Routine "visual_search_2" ---
        # create an object to store info about Routine visual_search_2
        visual_search_2 = data.Routine(
            name='visual_search_2',
            components=[square, instruct, mouse, target, C, InC, image],
        )
        visual_search_2.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        # Run 'Begin Routine' code from code
        n_distractors = decoy # how many distractors on screen
        n_target = tar
        
        # empty list for distractors
        distractors = []
        targets = []
        
        
        xys = [[-0.25, -0.25], [-0.194444, -0.25], [-0.138889, -0.25], [-0.083333, -0.25], [-0.027778, -0.25], 
               [0.027778, -0.25], [0.083333, -0.25], [0.138889, -0.25], [0.194444, -0.25], [0.25, -0.25],
               
               [-0.25, -0.194444], [-0.194444, -0.194444], [-0.138889, -0.194444], [-0.083333, -0.194444], [-0.027778, -0.194444], 
               [0.027778, -0.194444], [0.083333, -0.194444], [0.138889, -0.194444], [0.194444, -0.194444], [0.25, -0.194444],
        
               [-0.25, -0.138889], [-0.194444, -0.138889], [-0.138889, -0.138889], [-0.083333, -0.138889], [-0.027778, -0.138889], 
               [0.027778, -0.138889], [0.083333, -0.138889], [0.138889, -0.138889], [0.194444, -0.138889], [0.25, -0.138889],
        
               [-0.25, -0.083333], [-0.194444, -0.083333], [-0.138889, -0.083333], [-0.083333, -0.083333], [-0.027778, -0.083333], 
               [0.027778, -0.083333], [0.083333, -0.083333], [0.138889, -0.083333], [0.194444, -0.083333], [0.25, -0.083333],
        
               [-0.25, -0.027778], [-0.194444, -0.027778], [-0.138889, -0.027778], [-0.083333, -0.027778], [-0.027778, -0.027778], 
               [0.027778, -0.027778], [0.083333, -0.027778], [0.138889, -0.027778], [0.194444, -0.027778], [0.25, -0.027778],
        
               [-0.25, 0.027778], [-0.194444, 0.027778], [-0.138889, 0.027778], [-0.083333, 0.027778], [-0.027778, 0.027778], 
               [0.027778, 0.027778], [0.083333, 0.027778], [0.138889, 0.027778], [0.194444, 0.027778], [0.25, 0.027778],
        
               [-0.25, 0.083333], [-0.194444, 0.083333], [-0.138889, 0.083333], [-0.083333, 0.083333], [-0.027778, 0.083333], 
               [0.027778, 0.083333], [0.083333, 0.083333], [0.138889, 0.083333], [0.194444, 0.083333], [0.25, 0.083333],
        
               [-0.25, 0.138889], [-0.194444, 0.138889], [-0.138889, 0.138889], [-0.083333, 0.138889], [-0.027778, 0.138889], 
               [0.027778, 0.138889], [0.083333, 0.138889], [0.138889, 0.138889], [0.194444, 0.138889], [0.25, 0.138889],
        
               [-0.25, 0.194444], [-0.194444, 0.194444], [-0.138889, 0.194444], [-0.083333, 0.194444], [-0.027778, 0.194444], 
               [0.027778, 0.194444], [0.083333, 0.194444], [0.138889, 0.194444], [0.194444, 0.194444], [0.25, 0.194444],
        
               [-0.25, 0.25], [-0.194444, 0.25], [-0.138889, 0.25], [-0.083333, 0.25], [-0.027778, 0.25], 
               [0.027778, 0.25], [0.083333, 0.25], [0.138889, 0.25], [0.194444, 0.25], [0.25, 0.25]]
        
        # randomise the coordinates
        shuffle(xys)
        count = 0 # used to iterate through list
        positions = []
        
        
        for i in range(n_distractors):
            # Create a triangle polygon
            distractor = visual.Polygon(win=win, edges=4, size=0.05,
                pos=([xys[count][0], xys[count][1]+0.01]), 
                lineColor='grey', fillColor='grey', opacity=1.0, depth=-1.0, ori=45)
            distractors.append(distractor)
            positions.append(xys[count])
            count += 1
            
        for i in range(n_target):
            # Create a triangle polygon
            target = visual.Polygon(win=win, edges=3, size=0.05,
                pos=([xys[count][0], xys[count][1]]),
                lineColor='grey', fillColor='grey', opacity=1.0, depth=-1.0)
            targets.append(target)
            positions.append(xys[count])
        
        # present the distractors on screen
        for distractor in distractors:
            distractor.setAutoDraw(True)
            
        for target in targets:
            target.setAutoDraw(True)
        # setup some python lists for storing info about the mouse
        mouse.x = []
        mouse.y = []
        mouse.leftButton = []
        mouse.midButton = []
        mouse.rightButton = []
        mouse.time = []
        mouse.clicked_name = []
        gotValidClick = False  # until a click is received
        # store start times for visual_search_2
        visual_search_2.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        visual_search_2.tStart = globalClock.getTime(format='float')
        visual_search_2.status = STARTED
        thisExp.addData('visual_search_2.started', visual_search_2.tStart)
        visual_search_2.maxDuration = None
        # keep track of which components have finished
        visual_search_2Components = visual_search_2.components
        for thisComponent in visual_search_2.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "visual_search_2" ---
        # if trial has changed, end Routine now
        if isinstance(trials_2, data.TrialHandler2) and thisTrial_2.thisN != trials_2.thisTrial.thisN:
            continueRoutine = False
        visual_search_2.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *square* updates
            
            # if square is starting this frame...
            if square.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                square.frameNStart = frameN  # exact frame index
                square.tStart = t  # local t and not account for scr refresh
                square.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square.started')
                # update status
                square.status = STARTED
                square.setAutoDraw(True)
            
            # if square is active this frame...
            if square.status == STARTED:
                # update params
                pass
            
            # *instruct* updates
            
            # if instruct is starting this frame...
            if instruct.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                instruct.frameNStart = frameN  # exact frame index
                instruct.tStart = t  # local t and not account for scr refresh
                instruct.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(instruct, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'instruct.started')
                # update status
                instruct.status = STARTED
                instruct.setAutoDraw(True)
            
            # if instruct is active this frame...
            if instruct.status == STARTED:
                # update params
                pass
            # *mouse* updates
            
            # if mouse is starting this frame...
            if mouse.status == NOT_STARTED and t >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                mouse.frameNStart = frameN  # exact frame index
                mouse.tStart = t  # local t and not account for scr refresh
                mouse.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(mouse, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.addData('mouse.started', t)
                # update status
                mouse.status = STARTED
                mouse.mouseClock.reset()
                prevButtonState = mouse.getPressed()  # if button is down already this ISN'T a new click
            if mouse.status == STARTED:  # only update if started and not finished!
                buttons = mouse.getPressed()
                if buttons != prevButtonState:  # button state changed?
                    prevButtonState = buttons
                    if sum(buttons) > 0:  # state changed to a new click
                        # check if the mouse was inside our 'clickable' objects
                        gotValidClick = False
                        clickableList = environmenttools.getFromNames([target,C,InC], namespace=locals())
                        for obj in clickableList:
                            # is this object clicked on?
                            if obj.contains(mouse):
                                gotValidClick = True
                                mouse.clicked_name.append(obj.name)
                                mouse.clicked_name.append(obj.name)
                        if gotValidClick:
                            x, y = mouse.getPos()
                            mouse.x.append(x)
                            mouse.y.append(y)
                            buttons = mouse.getPressed()
                            mouse.leftButton.append(buttons[0])
                            mouse.midButton.append(buttons[1])
                            mouse.rightButton.append(buttons[2])
                            mouse.time.append(mouse.mouseClock.getTime())
                        if gotValidClick:
                            continueRoutine = False  # end routine on response
            
            # *target* updates
            
            # if target is starting this frame...
            if target.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                target.frameNStart = frameN  # exact frame index
                target.tStart = t  # local t and not account for scr refresh
                target.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(target, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'target.started')
                # update status
                target.status = STARTED
                target.setAutoDraw(True)
            
            # if target is active this frame...
            if target.status == STARTED:
                # update params
                pass
            
            # *C* updates
            
            # if C is starting this frame...
            if C.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                C.frameNStart = frameN  # exact frame index
                C.tStart = t  # local t and not account for scr refresh
                C.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(C, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'C.started')
                # update status
                C.status = STARTED
                C.setAutoDraw(True)
            
            # if C is active this frame...
            if C.status == STARTED:
                # update params
                pass
            
            # *InC* updates
            
            # if InC is starting this frame...
            if InC.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                InC.frameNStart = frameN  # exact frame index
                InC.tStart = t  # local t and not account for scr refresh
                InC.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(InC, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'InC.started')
                # update status
                InC.status = STARTED
                InC.setAutoDraw(True)
            
            # if InC is active this frame...
            if InC.status == STARTED:
                # update params
                pass
            
            # *image* updates
            
            # if image is starting this frame...
            if image.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                image.frameNStart = frameN  # exact frame index
                image.tStart = t  # local t and not account for scr refresh
                image.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image.started')
                # update status
                image.status = STARTED
                image.setAutoDraw(True)
            
            # if image is active this frame...
            if image.status == STARTED:
                # update params
                pass
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
                )
                # skip the frame we paused on
                continue
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                visual_search_2.forceEnded = routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in visual_search_2.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "visual_search_2" ---
        for thisComponent in visual_search_2.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for visual_search_2
        visual_search_2.tStop = globalClock.getTime(format='float')
        visual_search_2.tStopRefresh = tThisFlipGlobal
        thisExp.addData('visual_search_2.stopped', visual_search_2.tStop)
        # Run 'End Routine' code from code
        if mouse.clicked_name[-1] == corrAns:
            correct = 1
        else:
            correct = 0
            
        # undraw the distractors
        for distractor in distractors:
            distractor.setAutoDraw(False)
            
        for target in targets:
            target.setAutoDraw(False)
        # store data for trials_2 (TrialHandler)
        trials_2.addData('mouse.x', mouse.x)
        trials_2.addData('mouse.y', mouse.y)
        trials_2.addData('mouse.leftButton', mouse.leftButton)
        trials_2.addData('mouse.midButton', mouse.midButton)
        trials_2.addData('mouse.rightButton', mouse.rightButton)
        trials_2.addData('mouse.time', mouse.time)
        trials_2.addData('mouse.clicked_name', mouse.clicked_name)
        # the Routine "visual_search_2" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # --- Prepare to start Routine "feedback_2" ---
        # create an object to store info about Routine feedback_2
        feedback_2 = data.Routine(
            name='feedback_2',
            components=[fb_2, trial_counter, FB_2],
        )
        feedback_2.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        fb_2.setText('คุณพบเป้าหมายใน ' + str(int(mouse.time[-1]*1000)) + 'ms')
        trial_counter.setText(str(trials.thisN) + '/' + str(trials.nTotal))
        # Run 'Begin Routine' code from track_rt_2
        if correct == 1:
            feedback_text = "ถูกต้อง!"
        else:
            feedback_text = "ผิด!"
        FB_2.setText(feedback_text)
        # store start times for feedback_2
        feedback_2.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        feedback_2.tStart = globalClock.getTime(format='float')
        feedback_2.status = STARTED
        feedback_2.maxDuration = None
        # keep track of which components have finished
        feedback_2Components = feedback_2.components
        for thisComponent in feedback_2.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "feedback_2" ---
        # if trial has changed, end Routine now
        if isinstance(trials_2, data.TrialHandler2) and thisTrial_2.thisN != trials_2.thisTrial.thisN:
            continueRoutine = False
        feedback_2.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine and routineTimer.getTime() < 1.0:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *fb_2* updates
            
            # if fb_2 is starting this frame...
            if fb_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                fb_2.frameNStart = frameN  # exact frame index
                fb_2.tStart = t  # local t and not account for scr refresh
                fb_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(fb_2, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'fb_2.started')
                # update status
                fb_2.status = STARTED
                fb_2.setAutoDraw(True)
            
            # if fb_2 is active this frame...
            if fb_2.status == STARTED:
                # update params
                pass
            
            # if fb_2 is stopping this frame...
            if fb_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > fb_2.tStartRefresh + 1.0-frameTolerance:
                    # keep track of stop time/frame for later
                    fb_2.tStop = t  # not accounting for scr refresh
                    fb_2.tStopRefresh = tThisFlipGlobal  # on global time
                    fb_2.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'fb_2.stopped')
                    # update status
                    fb_2.status = FINISHED
                    fb_2.setAutoDraw(False)
            
            # *trial_counter* updates
            
            # if trial_counter is starting this frame...
            if trial_counter.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                trial_counter.frameNStart = frameN  # exact frame index
                trial_counter.tStart = t  # local t and not account for scr refresh
                trial_counter.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(trial_counter, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'trial_counter.started')
                # update status
                trial_counter.status = STARTED
                trial_counter.setAutoDraw(True)
            
            # if trial_counter is active this frame...
            if trial_counter.status == STARTED:
                # update params
                pass
            
            # if trial_counter is stopping this frame...
            if trial_counter.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > trial_counter.tStartRefresh + 1-frameTolerance:
                    # keep track of stop time/frame for later
                    trial_counter.tStop = t  # not accounting for scr refresh
                    trial_counter.tStopRefresh = tThisFlipGlobal  # on global time
                    trial_counter.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'trial_counter.stopped')
                    # update status
                    trial_counter.status = FINISHED
                    trial_counter.setAutoDraw(False)
            
            # *FB_2* updates
            
            # if FB_2 is starting this frame...
            if FB_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                FB_2.frameNStart = frameN  # exact frame index
                FB_2.tStart = t  # local t and not account for scr refresh
                FB_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(FB_2, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'FB_2.started')
                # update status
                FB_2.status = STARTED
                FB_2.setAutoDraw(True)
            
            # if FB_2 is active this frame...
            if FB_2.status == STARTED:
                # update params
                pass
            
            # if FB_2 is stopping this frame...
            if FB_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > FB_2.tStartRefresh + 1.0-frameTolerance:
                    # keep track of stop time/frame for later
                    FB_2.tStop = t  # not accounting for scr refresh
                    FB_2.tStopRefresh = tThisFlipGlobal  # on global time
                    FB_2.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'FB_2.stopped')
                    # update status
                    FB_2.status = FINISHED
                    FB_2.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
                )
                # skip the frame we paused on
                continue
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                feedback_2.forceEnded = routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in feedback_2.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "feedback_2" ---
        for thisComponent in feedback_2.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for feedback_2
        feedback_2.tStop = globalClock.getTime(format='float')
        feedback_2.tStopRefresh = tThisFlipGlobal
        # Run 'End Routine' code from track_rt_2
        rts.append(mouse_t.time[-1])
        
        n_round +=1
        
        if n_round > 1:
            trials_t.finished = True
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if feedback_2.maxDurationReached:
            routineTimer.addTime(-feedback_2.maxDuration)
        elif feedback_2.forceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-1.000000)
        thisExp.nextEntry()
        
    # completed 1.0 repeats of 'trials_2'
    
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    # --- Prepare to start Routine "end" ---
    # create an object to store info about Routine end
    end = data.Routine(
        name='end',
        components=[],
    )
    end.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # store start times for end
    end.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    end.tStart = globalClock.getTime(format='float')
    end.status = STARTED
    thisExp.addData('end.started', end.tStart)
    end.maxDuration = None
    # keep track of which components have finished
    endComponents = end.components
    for thisComponent in end.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "end" ---
    end.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            end.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in end.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "end" ---
    for thisComponent in end.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for end
    end.tStop = globalClock.getTime(format='float')
    end.tStopRefresh = tThisFlipGlobal
    thisExp.addData('end.stopped', end.tStop)
    thisExp.nextEntry()
    # the Routine "end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # mark experiment as finished
    endExperiment(thisExp, win=win)


def saveData(thisExp):
    """
    Save data from this experiment
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    filename = thisExp.dataFileName
    # these shouldn't be strictly necessary (should auto-save)
    thisExp.saveAsWideText(filename + '.csv', delim='auto')
    thisExp.saveAsPickle(filename)


def endExperiment(thisExp, win=None):
    """
    End this experiment, performing final shut down operations.
    
    This function does NOT close the window or end the Python process - use `quit` for this.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window for this experiment.
    """
    if win is not None:
        # remove autodraw from all current components
        win.clearAutoDraw()
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed
        win.flip()
    # return console logger level to WARNING
    logging.console.setLevel(logging.WARNING)
    # mark experiment handler as finished
    thisExp.status = FINISHED
    logging.flush()


def quit(thisExp, win=None, thisSession=None):
    """
    Fully quit, closing the window and ending the Python process.
    
    Parameters
    ==========
    win : psychopy.visual.Window
        Window to close.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    thisExp.abort()  # or data files will save again on exit
    # make sure everything is closed down
    if win is not None:
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed before quitting
        win.flip()
        win.close()
    logging.flush()
    if thisSession is not None:
        thisSession.stop()
    # terminate Python process
    core.quit()


# if running this experiment as a script...
if __name__ == '__main__':
    # call all functions in order
    expInfo = showExpInfoDlg(expInfo=expInfo)
    thisExp = setupData(expInfo=expInfo)
    logFile = setupLogging(filename=thisExp.dataFileName)
    win = setupWindow(expInfo=expInfo)
    setupDevices(expInfo=expInfo, thisExp=thisExp, win=win)
    run(
        expInfo=expInfo, 
        thisExp=thisExp, 
        win=win,
        globalClock='float'
    )
    saveData(thisExp=thisExp)
    quit(thisExp=thisExp, win=win)
