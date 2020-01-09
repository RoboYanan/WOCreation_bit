/*
 * @file WOCreation Kit 
 * @brief WOCreation's Kit makecode library.
 * 
 * @copyright	[YOU](http://WOCreation.com), 2018
 * @copyright	GNU Lesser General Public License
 * @author [Robo_YaNan]
 * @date  2019.12.12
 */


enum joyButton {
    //% block="A Button"
    A_Button = 1,
    //% block="B Button"
    B_Button = 2,
    //% block="C Button"
    C_Button = 3,
    //% block="D Button"
    D_Button = 4
};

enum SHT20 {
    //%block="temperature"
    temperature = 1,
    //%block="humidity"
    humidity = 2

};

enum ColorSensor {
    //%block="red"
    red = 1,
    //%block="green"
    green = 2,
    //%block="blue"
    blue = 3
};


enum extendIO {
    //%block="P0"
    P0 = 0,
    //%block="P1"
    P1 = 1,
    //%block="P2"
    P2 = 2,
    //%block="P3"
    P3 = 3,
    //%block="P4"
    P4 = 4,
    //%block="P5"
    P5 = 5,
    //%block="P6"
    P6 = 6,
    //%block="P7"
    P7 = 7
};

enum extendIOMode {
    //%block="outpout"
    outpout = 0,
    //%block="inpout"
    inpout = 1
};

enum Scroll {
    //%block="left"
    left = 0,
    //%block="right"
    right = 1
};

enum MIDI_Note {
    //%block="off"
    OFF = 0,
    //%block="on"
    ON = 1
};

enum ComMon {
    //%block="off"
    OFF = 0,
    //%block="on"
    ON = 1
};

enum Rec_Play {
    //%block="rec"
    rec = 0,
    //%block="play"
    play = 1,
    //%block="stop"
    stop = 2
};

enum motor_status {
    //%block="clock"
    clock = 0,
    //%block="anticlock"
    anticlock = 1,
    //%block="stop"
    stop = 2
};

enum Rocker_axis {
    //%block="X"
    X = 0,
    //%block="Y"
    Y = 1
};

enum MP3 {
    //%block="Start"
    Start = 0,
    //%block="Pause"
    Pause = 1,
    //%block="Stop"
    Stop = 2
};

enum oledFont {
    //%block="Font5X7"
    Font5X7 = 0,
    //%block="SONG16X16"
    SONG16X16 = 1,
    //%block="SONG24X24"
    SONG24X24 = 2,
    //%block="Consolas32X32"
    Consolas32X32 = 4
};


//% icon="\uf26c"
//% color="255" weight="90" block="OLED"
//% groups='["Sensor传感器", "OLED显示器"]'

namespace OLED {



    let INITPIN = false;
    let LEDFREE = false;


    function init_pin(): void {
        pins.setPull(DigitalPin.P0, PinPullMode.PullNone);
        pins.setPull(DigitalPin.P1, PinPullMode.PullNone);
        pins.setPull(DigitalPin.P2, PinPullMode.PullNone);
        pins.setPull(DigitalPin.P8, PinPullMode.PullNone);
    }

    function ledPinfree(): void {

        led.enable(false);
        pins.setPull(DigitalPin.P3, PinPullMode.PullNone);
        pins.setPull(DigitalPin.P4, PinPullMode.PullNone);
        pins.setPull(DigitalPin.P6, PinPullMode.PullNone);
        pins.setPull(DigitalPin.P7, PinPullMode.PullNone);
        pins.setPull(DigitalPin.P9, PinPullMode.PullNone);
        pins.setPull(DigitalPin.P10, PinPullMode.PullNone);


    }

    function ifledPin(pin: number): boolean {
        if (DigitalPin.P3 || DigitalPin.P4 || DigitalPin.P6 || DigitalPin.P7
            || DigitalPin.P9 || DigitalPin.P10) {
            return true;
        }
        else
            return false;
    }
	
	
    // List of Sensor for the Sensor blocks to use. 
	// List of OLED显示器 for the OLED blocks显示器 to use. 
    /**
     * 按键传感器
     * 
     */

    //% blockId=Button_Press block="ButtonPress by|%pin"
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4 pin.fieldOptions.width="300" 
    //% weight=100
    //% blockGap=15
	//% color=160
	//% group=Sensor传感器
	
    export function ButtonPress(pin: DigitalPin): boolean {
        if (!INITPIN) {
            init_pin();
            INITPIN = true;
        }
        if (ifledPin(pin)) {
            if (!LEDFREE) {
                ledPinfree();
                LEDFREE = true;
            }
			
        }
		let status = false;
		
		if (pins.digitalReadPin(pin)){
			status = true;
		}
		else {
			status = false;
		}
        return status;


    }

    /**
     * 
     * 
     */
    //% blockId=infrared_is_triggered block="Triggered the infrared proximity sensor by|%pin"
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4 pin.fieldOptions.width="300" 
    //% weight=98
    //% blockGap=15
	//% color=160
	//% group=Sensor传感器
    export function infraredIsTriggered(pin: DigitalPin): boolean{
        if (!INITPIN) {
            init_pin();
            INITPIN = true;
        }
        if (ifledPin(pin)) {
            if (!LEDFREE) {
                ledPinfree();
                LEDFREE = true;
            }
			
        }
		let status = false;
		
		if (pins.digitalReadPin(pin)){
			status = true;
		}
		else {
			status = false;
		}
        return status;

    }

	/**
     * 
     * 
     */
    //% blockId=sound_is_triggered block="sound sensor is triggered in|%pin"
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4 pin.fieldOptions.width="300" 
    //% weight=98
    //% blockGap=15
	//% color=160
	//% group=Sensor传感器
    export function soundIsTriggered(pin: DigitalPin): boolean {
        if (!INITPIN) {
            init_pin();
            INITPIN = true;
        }
        if (ifledPin(pin)) {
            if (!LEDFREE) {
                ledPinfree();
                LEDFREE = true;
            }
			
        }
		let status = false;
		
		if (pins.digitalReadPin(pin)){
			status = true;
		}
		else {
			status = false;
		}
        return status;

    }

	/**
     * 
     * 
     */
    //% blockId=Track_is_Dark block="Track sensor detected black in|%pin"
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4 pin.fieldOptions.width="300" 
    //% weight=97
    //% blockGap=15
	//% color=160
	//% group=Sensor传感器
    export function TrackIsDark(pin: DigitalPin): boolean {
        if (!INITPIN) {
            init_pin();
            INITPIN = true;
        }
        if (ifledPin(pin)) {
            if (!LEDFREE) {
                ledPinfree();
                LEDFREE = true;
            }
			
        }
		let status = false;
		
		if (pins.digitalReadPin(pin)){
			status = true;
		}
		else {
			status = false;
		}
        return status;

    }

	/**
     * 
     * 
     */
    //% blockId=shockSensor_is_Triggered block="Shock Sensor is triggered in|%pin"
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4 pin.fieldOptions.width="300" 
    //% weight=96
    //% blockGap=15
	//% color=160
	//% group=Sensor传感器
    export function shockSensor(pin: DigitalPin): boolean {
        if (!INITPIN) {
            init_pin();
            INITPIN = true;
        }
        if (ifledPin(pin)) {
            if (!LEDFREE) {
                ledPinfree();
                LEDFREE = true;
            }
			
        }
		let status = false;
		
		if (pins.digitalReadPin(pin)){
			status = true;
		}
		else {
			status = false;
		}
        return status;

    }

	/**
     * 
     * 
     */
    //% blockId=get_Rfid block="Get the Rfid in|%pin"
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4 pin.fieldOptions.width="300" 
    //% weight=95
    //% blockGap=15
	//% color=160
	//% group=Sensor传感器
    export function getRfid(pin: DigitalPin): boolean {
        if (!INITPIN) {
            init_pin();
            INITPIN = true;
        }
        if (ifledPin(pin)) {
            if (!LEDFREE) {
                ledPinfree();
                LEDFREE = true;
            }
			
        }
		let status = false;
		
		if (pins.digitalReadPin(pin)){
			status = true;
		}
		else {
			status = false;
		}
        return status;

    }

	/**
     * 
     * 
     */
    //% blockId=finger_Print block="Fingerprint verification passed in|%pin"
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4 pin.fieldOptions.width="300" 
    //% weight=94
    //% blockGap=15
	//% color=160
	//% group=Sensor传感器
    export function fingerPrint(pin: DigitalPin): boolean {
        if (!INITPIN) {
            init_pin();
            INITPIN = true;
        }
        if (ifledPin(pin)) {
            if (!LEDFREE) {
                ledPinfree();
                LEDFREE = true;
            }
			
        }
		let status = false;
		
		if (pins.digitalReadPin(pin)){
			status = true;
		}
		else {
			status = false;
		}
        return status;

    }

	/**
     * 
     * 
     */
    //% blockId=Human_Infrared block="Human Infrared sensor is triggered in|%pin"
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4 pin.fieldOptions.width="300" 
    //% weight=93
    //% blockGap=15
	//% color=160
	//% group=Sensor传感器
    export function HumanInfrared(pin: DigitalPin): boolean {
        if (!INITPIN) {
            init_pin();
            INITPIN = true;
        }
        if (ifledPin(pin)) {
            if (!LEDFREE) {
                ledPinfree();
                LEDFREE = true;
            }
			
        }
		let status = false;
		
		if (pins.digitalReadPin(pin)){
			status = true;
		}
		else {
			status = false;
		}
        return status;

    }

	/**
     * 
     * 
     */
    //% blockId=magnetic_Switch block="Magnetic switch is triggered in|%pin"
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4 pin.fieldOptions.width="300" 
    //% weight=92
    //% blockGap=15
	//% color=160
	//% group=Sensor传感器
    export function magneticSwitch(pin: DigitalPin): boolean {
        if (!INITPIN) {
            init_pin();
            INITPIN = true;
        }
        if (ifledPin(pin)) {
            if (!LEDFREE) {
                ledPinfree();
                LEDFREE = true;
            }
			
        }
		let status = false;
		
		if (pins.digitalReadPin(pin)){
			status = true;
		}
		else {
			status = false;
		}
        return status;
    }





    /**
     * @param pin , eg: P0
     * @param value , eg: 1
     */
    //% blockId=usbSwitch block="In|%pin|USB switch ON_OFF|%value"
    //% value.min=0 value.max=1
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4 pin.fieldOptions.width="300" 
    //% weight=91
    //% blockGap=15
	//% color=160
	//% group=Sensor传感器
    export function usbSwitch(pin: DigitalPin, value: number): void {
        if (!INITPIN) {
            init_pin();
            INITPIN = true;
        }
        if (ifledPin(pin)) {
            if (!LEDFREE) {
                ledPinfree();
                LEDFREE = true;
            }
        }
        return pins.digitalWritePin(pin, value);
    }

    /**
     * @param pin , eg: P0
     * @param value , eg: 1
     */
    //% blockId=FanSwitch block="In|%pin|Fan switch ON_OFF|%value"
    //% value.min=0 value.max=1
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4 pin.fieldOptions.width="300" 
    //% weight=90
    //% blockGap=15
	//% color=160
	//% group=Sensor传感器
    export function FanSwitch(pin: DigitalPin, value: number): void {
        if (!INITPIN) {
            init_pin();
            INITPIN = true;
        }
        if (ifledPin(pin)) {
            if (!LEDFREE) {
                ledPinfree();
                LEDFREE = true;
            }
        }
        return pins.digitalWritePin(pin, value);
    }

    /**
        * @param pin , eg: P0
        * @param index , eg: ComMon.ON
        */
    //% blockId=LaserSwitch block="In|%pin|Laser ON_OFF|%value"
    //% value.min=0 value.max=1
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4 pin.fieldOptions.width="300" 
    //% weight=89
    //% blockGap=15
	//% color=160
	//% group=Sensor传感器
    export function LaserSwitch(pin: DigitalPin, value: number): void {
        if (!INITPIN) {
            init_pin();
            INITPIN = true;
        }
        if (ifledPin(pin)) {
            if (!LEDFREE) {
                ledPinfree();
                LEDFREE = true;
            }
        }
        return pins.digitalWritePin(pin, value);
    }

    /**
     * Rec_or_Play module.
     * @param status Rec or Play, eg: Rec_Play.rec 
     * @param rec P0~P20, eg: 0
     * @param play P0~P20, eg: 1
     */
    //% blockId=Rec_or_Play block="Recorder|%status|in RecPin|%rec|and PlayPin|%play"
    //% status.fieldEditor="gridpicker" status.fieldOptions.columns=3 status.fieldOptions.width="300" 
    //% rec.fieldEditor="gridpicker" rec.fieldOptions.columns=3 rec.fieldOptions.width="300" 
    //% play.fieldEditor="gridpicker" play.fieldOptions.columns=3 play.fieldOptions.width="300" 
    //% weight=88
    //% blockGap=15
	//% color=160
	//% group=Sensor传感器
    export function Rec_or_Play(status: Rec_Play, rec: DigitalPin, play: DigitalPin): void {
        //import { writeDigital } from "./WOCreation";

        //let writeDigital = new writeDigital();
        if (status == 2) {
            pins.digitalWritePin(rec, 0);
            pins.digitalWritePin(play, 0);
        }
        if (status == 1) {
            pins.digitalWritePin(rec, 0);
            pins.digitalWritePin(play, 1);
        }
        if (status == 0) {
            pins.digitalWritePin(rec, 1);
            pins.digitalWritePin(play, 0);
        }
        return; //实测：pins.digitalWritePin()换成writeDigital()来return无效
    }               //结论: 要return属性(附参数) 不能写了函数直接return

    /**
     * 
     * 
     */
    //% blockId=LEDbrightness block="Set LED brightness in pin|%pin|to|%value"
    //% value.min=0 value.max=1023
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4 pin.fieldOptions.width="300" 
    //% weight=87
    //% blockGap=40
    //% color=160
	//% group=Sensor传感器
    export function LEDbrightness(pin: AnalogPin, value: number): void {
        if (!INITPIN) {
            init_pin();
            INITPIN = true;
        }
        if (ifledPin(pin)) {
            if (!LEDFREE) {
                ledPinfree();
                LEDFREE = true;
            }
        }
        return pins.analogWritePin(pin, value);
    }

    /**
     * Motor_on_off module.
     * @param status motor status, eg: motor_status.clock 
     * @param speed 0~1023, eg: 300
     * @param ain1 P0~P20, eg: P1
     * @param ain2 P0~P20, eg: P0
     */
    //% blockId=Motor_on_off block="Set DC motor|%status|with|speed %speed|in|AIN1 %ain1|and|AIN2 %ain2"
    //% status.fieldEditor="gridpicker" status.fieldOptions.columns=3 status.fieldOptions.width="300"
    //% speed.min=0 speed.max=1023
    //% ain1.fieldEditor="gridpicker" ain1.fieldOptions.columns=3 ain1.fieldOptions.width="300" 
    //% ain2.fieldEditor="gridpicker" ain2.fieldOptions.columns=3 ain2.fieldOptions.width="300" 
    //% weight=86
    //% blockGap=15
	//% color=160
	//% group=Sensor传感器
    export function Motor_on_off(status: motor_status, speed: number, ain1: AnalogPin, ain2: AnalogPin): void {
        if (status == 2) {                          //停止
            pins.analogWritePin(ain1, 1);
            pins.analogWritePin(ain2, 1);
        }
        if (status == 1) {                         //反转
            pins.analogWritePin(ain1, 1);
            pins.analogWritePin(ain2, speed);
        }
        if (status == 0) {                         //正转
            pins.analogWritePin(ain1, speed);
            pins.analogWritePin(ain2, 1);
        }
        return;
    }

    /**
     * read analog pin only pin0/1/2/3/4/10
     * 
     */
    //% blockId=water_level block="Values of water level sensors in|%pin"
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4 pin.fieldOptions.width="300" 
    //% weight=85
    //% blockGap=15
	//% color=160
	//% group=Sensor传感器
    export function water_level(pin: AnalogPin): number {
        if (!INITPIN) {
            init_pin();
            INITPIN = true;
        }
        if (ifledPin(pin)) {
            if (!LEDFREE) {
                ledPinfree();
                LEDFREE = true;
            }

        }
        return pins.analogReadPin(pin);
    }

    /**
     * read analog pin only pin0/1/2/3/4/10
     */
    //% blockId=Rotational_sensors block="Values of rotational potentiometer in|%pin"
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4 pin.fieldOptions.width="300" 
    //% weight=84
    //% blockGap=15
	//% color=160
	//% group=Sensor传感器
    export function Rotational_sensors(pin: AnalogPin): number {
        if (!INITPIN) {
            init_pin();
            INITPIN = true;
        }
        if (ifledPin(pin)) {
            if (!LEDFREE) {
                ledPinfree();
                LEDFREE = true;
            }
        }
        return pins.analogReadPin(pin);
    }

    /**
     * read analog pin only pin0/1/2/3/4/10
     */
    //% blockId= sound_sensors block="Values of sound sensor in|%pin"
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4 pin.fieldOptions.width="300" 
    //% weight=83
    //% blockGap=15
	//% color=160
	//% group=Sensor传感器
    export function sound_sensors(pin: AnalogPin): number {
        if (!INITPIN) {
            init_pin();
            INITPIN = true;
        }
        if (ifledPin(pin)) {
            if (!LEDFREE) {
                ledPinfree();
                LEDFREE = true;
            }
        }
        return pins.analogReadPin(pin);
    }

    /**
     * read analog pin only pin0/1/2/3/4/10
     */
    //% blockId= soil_moisture_sensor block="Values of soil moisture sensor in|%pin"
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4 pin.fieldOptions.width="300" 
    //% weight=82
    //% blockGap=15
	//% color=160
	//% group=Sensor传感器
    export function soil_moisture_sensor(pin: AnalogPin): number {
        if (!INITPIN) {
            init_pin();
            INITPIN = true;
        }
        if (ifledPin(pin)) {
            if (!LEDFREE) {
                ledPinfree();
                LEDFREE = true;
            }
        }
        return pins.analogReadPin(pin);
    }

    /**
     * read analog pin only pin0/1/2/3/4/10
     */
    //% blockId= Analog_ray_sensor  block="Values of Analog ray sensor in|%pin"
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4 pin.fieldOptions.width="300" 
    //% weight=81
    //% blockGap=15
	//% color=160
	//% group=Sensor传感器
    export function Analog_ray_sensor(pin: AnalogPin): number {
        if (!INITPIN) {
            init_pin();
            INITPIN = true;
        }
        if (ifledPin(pin)) {
            if (!LEDFREE) {
                ledPinfree();
                LEDFREE = true;
            }
        }
        return pins.analogReadPin(pin);
    }

    /**
     * Rocker_sensor module.
     * @param axis Rocker_axis, eg: Rocker_axis.X 
     * @param A0 P0/P1/P2/P3/P4/P10, eg: P1
     * @param A1 P0/P1/P2/P3/P4/P10, eg: P0
     */
    //% blockId=Rocker_sensor block="Value of rocker sensor in|%axis|in A0|%A0|in A1|%A1"
    //% axis.fieldEditor="gridpicker" axis.fieldOptions.columns=3 axis.fieldOptions.width="300" 
    //% A0.fieldEditor="gridpicker" A0.fieldOptions.columns=3 A0.fieldOptions.width="300" 
    //% A1.fieldEditor="gridpicker" A1.fieldOptions.columns=3 A1.fieldOptions.width="300" 
    //% weight=80
    //% blockGap=15
	//% color=160
	//% group=Sensor传感器
    export function Rocker_sensor(axis: Rocker_axis, A0: AnalogPin, A1: AnalogPin): void {

        if (axis == 0) {                          //摇杆传感器X轴
            pins.analogReadPin(A1);
        }
        if (axis == 1) {                         //摇杆传感器Y轴
            pins.analogReadPin(A0);
        }
        return;
    }

    /**
     * 
     * 
     */
    //% blockId=read_digital block="WOCreation:bit readDigital|%pin"
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4 pin.fieldOptions.width="300" 
    //% weight=79
    //% blockGap=15
    //% color=160
	//% group=Sensor传感器
    export function readDigital(pin: DigitalPin): number {
        if (!INITPIN) {
            init_pin();
            INITPIN = true;
        }
        if (ifledPin(pin)) {
            if (!LEDFREE) {
                ledPinfree();
                LEDFREE = true;
            }

        }
        return pins.digitalReadPin(pin);

    }

    /**
     * 
     * 
     */
    //% blockId=write_digital block="WOCreation:bit writeDigital pin|%pin|to|%value"
    //% value.min=0 value.max=1
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4 pin.fieldOptions.width="300" 
    //% weight=78
    //% blockGap=15
	//% color=160
	//% group=Sensor传感器
    export function writeDigital(pin: DigitalPin, value: number): void {
        if (!INITPIN) {
            init_pin();
            INITPIN = true;
        }
        if (ifledPin(pin)) {
            if (!LEDFREE) {
                ledPinfree();
                LEDFREE = true;
            }
        }
        return pins.digitalWritePin(pin, value);

    }



    /**
       * read analog pin only pin0/1/2/3/4/10
       * 
       */
    //% blockId=read_analog block="WOCreation:bit read analog|%pin"
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4 pin.fieldOptions.width="300" 
    //% weight=77
    //% blockGap=15
	//% color=160
	//% group=Sensor传感器
    export function readAnalog(pin: AnalogPin): number {
        if (!INITPIN) {
            init_pin();
            INITPIN = true;
        }
        if (ifledPin(pin)) {
            if (!LEDFREE) {
                ledPinfree();
                LEDFREE = true;
            }

        }
        return pins.analogReadPin(pin);

    }

    /**
     * 
     * 
     */
    //% blockId=write_analog block="WOCreation:bit writeAnalog pin|%pin|to|%value"
    //% value.min=0 value.max=1023
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4 pin.fieldOptions.width="300" 
    //% weight=76
    //% blockGap=40
	//% color=160
	//% group=Sensor传感器
    export function writeAnalog(pin: AnalogPin, value: number): void {
        if (!INITPIN) {
            init_pin();
            INITPIN = true;
        }
        if (ifledPin(pin)) {
            if (!LEDFREE) {
                ledPinfree();
                LEDFREE = true;
            }
        }
        return pins.analogWritePin(pin, value);
    }


    //% shim=WOCreation::_getNTC
    function _getNTC(value: number) {
        // Dummy implementation for the simulator.
        return 0;
    }

    /**
       * WOCreation:bit- NTC Temp module.
       * return temperature,unit C.
       */
    //% blockId=getNTC block="get NTCTemp|%pin"
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4 pin.fieldOptions.width="300" 
    //% weight=75
    //% blockGap=15
	//% color=160
	//% group=Sensor传感器
    export function getNTC(pin: AnalogPin): number {
        return _getNTC(readAnalog(pin));
    }

    /**
         * WOCreation:bit-joy Button module.
         * have A/B/C/D button,return 'true' if pressed; return'false' if not.
         * read analog pin only pin0/1/2/3/4/10.
         */
    //% blockId=joyButtonVal block="joyButton|%button|is pressed|pin|%pin"
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4 pin.fieldOptions.width="300" 
    //% button.fieldEditor="gridpicker" button.fieldOptions.width=300  button.fieldOptions.columns=2
    //% weight=74
    //% blockGap=15
	//% color=160
	//% group="Sensor传感器"
    export function joyButtonVal(button: joyButton, pin: AnalogPin): boolean {
        if (!INITPIN) {
            init_pin();
            INITPIN = true;
        }
        if (ifledPin(pin)) {
            if (!LEDFREE) {
                ledPinfree();
                LEDFREE = true;
            }

        }
        let status = false;
        let val = readAnalog(pin);

        switch (button) {
            case 1: if (val < 51) {
                status = true;
            } break;
            case 2: if (val > 199 && val < 301) {
                status = true;
            } break;
            case 3: if (val > 449 && val < 551) {
                status = true;
            } break;
            case 4: if (val > 669 && val < 801) {
                status = true;
            } break;

            default:
                break;
        }
        return status;

    }









    /**
     * 初始化i2c OLED显示器
     * @param height height (in pixels)
     * @param width width (in pixels)
     */
    //% weight=73
    //% blockId=oled_init_terminal
    //% block="initialize OLED with height %height|width %width"
    //% icon="\uf1ec" 
    //% shim=OLED::init_terminal
	//% group=OLED显示器
    export function init(height: number = 64, width: number = 128): void {
        return;
    }

    /**
     * 清除OLED屏幕
     */
    //% weight=72
    //% blockId=oled_clear_screen
    //% block="clear OLED display"
    //% icon="\uf1ec" 
    //% shim=OLED::clearDisplay
	//% group=OLED显示器
    export function clear(): void {
        return;
    }

    /**
     * 在OLED显示器上打印字符串
     * @param text text to display
     */
    //% weight=71 blockGap=8
    //% block="show|string %text" 
    //% async
    //% blockId=oled_print_string
    //% icon="\uf1ec"
    //% shim=OLED::showString
	//% group=OLED显示器
    export function showString(text: string): void {
        console.log("display: " + text);
        return;
    }

    /**
     * 在OLED显示器上打印数字
     * @param number number to display
     */
    //% weight=70
    //% blockId=oled_print_number
    //% block="show|number %number" blockGap=8
    //% async 
    //% shim=OLED::showNumber
	//% group=OLED显示器
    export function showNumber(number: number): void {
        console.log("display: " + number);
        return;
    }


    /**
     * 在OLED显示器上启用画图显示或者关闭画图显示
     * @param onOffDisplay onOffDisplay to on or off display
     */
    //% weight=69
    //% blockId=oled_onOffDisplay
    //% block="show|onOff %onOff" blockGap=8
    //% async 
    //% shim=OLED::onOffDisplay
	//% group=OLED显示器
    export function onOffDisplay(onOff: boolean = true): void {
        console.log("display: " + onOff );
        return;
    }

    /**
     * 画圆
     * @param x x (in pixels)
     * @param y y (in pixels)
     * @param r r (in pixels)
     */
    //% weight=68
    //% blockId=oled_drawCircle
    //% block="draw circle with x %x|y %y|r %r"
    //% icon="\uf1ec" 
    //% shim=OLED::drawCircle
	//% group=OLED显示器
    export function drawCircle(x: number = 6, y: number = 6, r: number = 3): void {
        return;
    }

    /**
     * 填充圆
     * @param x x (in pixels)
     * @param y y (in pixels)
     * @param r r (in pixels)
     */
    //% weight=67
    //% blockId=oled_fillCircle
    //% block="fill circle with x %x|y %y|r %r"
    //% icon="\uf1ec" 
    //% shim=OLED::fillCircle
	//% group=OLED显示器
    export function fillCircle(x: number = 6, y: number = 6, r: number = 3): void {
        return;
    }

    /**
     * 画线
     * @param x0 x0 (in pixels)
     * @param y0 y0 (in pixels)
     * @param x1 x1 (in pixels)
     * @param y1 y1 (in pixels)
     */
    //% weight=66
    //% blockId=oled_drawLine
    //% block="draw line with x0 %x0|y0 %y0|x1 %x1|y1 %y1"
    //% icon="\uf1ec" 
    //% shim=OLED::drawLine
	//% group=OLED显示器
    export function drawLine(x0: number = 1, y0: number = 1, x1: number = 3, y1: number = 3): void {
        return;
    }

    /**
     * 画矩形
     * @param x x (in pixels)
     * @param y y (in pixels)
     * @param w w (in pixels)
     * @param h h (in pixels)
     */
    //% weight=65
    //% blockId=oled_drawRect
    //% block="draw rect with x %x|y %y|w %w|h %h"
    //% icon="\uf1ec" 
    //% shim=OLED::drawRect
	//% group=OLED显示器
    export function drawRect(x: number = 1, y: number = 1, w: number = 3, h: number = 3): void {
        return;
    }

    /**
     * 填充矩形
     * @param x x (in pixels)
     * @param y y (in pixels)
     * @param w w (in pixels)
     * @param h h (in pixels)
     */
    //% weight=64
    //% blockId=oled_fillRect
    //% block="fill rect with x %x|y %y|w %w|h %h"
    //% icon="\uf1ec" 
    //% shim=OLED::fillRect
	//% group=OLED显示器
    export function fillRect(x: number = 1, y: number = 1, w: number = 3, h: number = 3): void {
        return;
    }

    /**
     * 画带圆角的矩形
     * @param x x (in pixels)
     * @param y y (in pixels)
     * @param w w (in pixels)
     * @param h h (in pixels)
     * @param r r (in pixels)
     */
    //% weight=63
    //% blockId=oled_drawRoundRect
    //% block="draw round rect with x %x|y %y|w %w|h %h|r %r"
    //% icon="\uf1ec" 
    //% shim=OLED::drawRoundRect
	//% group=OLED显示器
    export function drawRoundRect(x: number = 1, y: number = 1, w: number = 3, h: number = 3, r: number = 2): void {
        return;
    }

    /**
     * 填充带圆角的矩形
     * @param x x (in pixels)
     * @param y y (in pixels)
     * @param w w (in pixels)
     * @param h h (in pixels)
     * @param r r (in pixels)
     */
    //% weight=62
    //% blockId=oled_fillRoundRect
    //% block="fill round rect with x %x|y %y|w %w|h %h|r %r"
    //% icon="\uf1ec" 
    //% shim=OLED::fillRoundRect
	//% group=OLED显示器
    export function fillRoundRect(x: number = 1, y: number = 1, w: number = 3, h: number = 3, r: number = 2): void {
        return;
    }

    /**
     * 画三角形
     * @param x0 x0 (in pixels)
     * @param y0 y0 (in pixels)
     * @param x1 x1 (in pixels)
     * @param y1 y1 (in pixels)
     * @param x2 x2 (in pixels)
     * @param y2 y2 (in pixels)
     */
    //% weight=61
    //% blockId=oled_drawTriangle
    //% block="draw triangle with x0 %x0|y0 %y0|x1 %x1|y1 %y1|x2 %x2|y2 %y2"
    //% icon="\uf1ec" 
    //% shim=OLED::drawTriangle
	//% group=OLED显示器
    export function drawTriangle(x0: number = 1, y0: number = 1, x1: number = 3, y1: number = 3, x2: number = 1, y2: number = 3): void {
        return;
    }

    /**
     * 填充三角形
     * @param x0 x0 (in pixels)
     * @param y0 y0 (in pixels)
     * @param x1 x1 (in pixels)
     * @param y1 y1 (in pixels)
     * @param x2 x2 (in pixels)
     * @param y2 y2 (in pixels)
     */
    //% weight=60
    //% blockId=oled_fillTriangle
    //% block="fill triangle with x0 %x0|y0 %y0|x1 %x1|y1 %y1|x2 %x2|y2 %y2"
    //% icon="\uf1ec" 
    //% shim=OLED::fillTriangle
	//% group=OLED显示器
    export function fillTriangle(x0: number = 1, y0: number = 1, x1: number = 3, y1: number = 3, x2: number = 1, y2: number = 3): void {
        return;
    }
}

