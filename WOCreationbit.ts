/*
 * @file WOCreation Kit 
 * @brief WOCreation's Kit makecode library.
 * 
 * @copyright	[YOU](http://WOCreation.com), 2018
 * @copyright	GNU Lesser General Public License
 * @author [Robo_YaNan]
 * @date  2019.12.12
 */

    
/**
 * Well known colors for a NeoPixel strip
 */
enum NeoPixelColors {
    //% block=red
    Red = 0xFF0000,
    //% block=orange
    Orange = 0xFFA500,
    //% block=yellow
    Yellow = 0xFFFF00,
    //% block=green
    Green = 0x00FF00,
    //% block=blue
    Blue = 0x0000FF,
    //% block=indigo
    Indigo = 0x4b0082,
    //% block=violet
    Violet = 0x8a2be2,
    //% block=purple
    Purple = 0xFF00FF,
    //% block=white
    White = 0xFFFFFF,
    //% block=black
    Black = 0x000000
}

/**
 * Different modes for RGB or RGB+W NeoPixel strips
 */
enum NeoPixelMode {
    //% block="RGB (GRB format)"
    RGB = 0,
    //% block="RGB+W"
    RGBW = 1,
    //% block="RGB (RGB format)"
    RGB_RGB = 2
}






enum Dht11Result {
    //% block="Celsius"
    Celsius,
    //% block="Fahrenheit"
    Fahrenheit,
    //% block="humidity"
    humidity
}


enum LEDType {
    //% block="cathode"
    cathode,
    //% block="anode"
    anode
}

enum PingUnit {
    //% block="μs"
    MicroSeconds,
    //% block="cm"
    Centimeters,
    //% block="inches"
    Inches
}

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

    //% blockId=sensor_ping block="ultrasonic trig %trig|echo %echo|get distance %unit"
    //% trig.fieldEditor="gridpicker" trig.fieldOptions.columns=4
    //% trig.fieldOptions.tooltips="false" trig.fieldOptions.width="300"
    //% echo.fieldEditor="gridpicker" echo.fieldOptions.columns=4
    //% echo.fieldOptions.tooltips="false" echo.fieldOptions.width="300"
    //% weight=74
	//% color=160
	//% group=Sensor传感器
    export function sensor_ping(trig: DigitalPin, echo: DigitalPin, unit: PingUnit, maxCmDistance = 500): number {
        // send pulse
        pins.setPull(trig, PinPullMode.PullNone);
        pins.digitalWritePin(trig, 0);
        control.waitMicros(2);
        pins.digitalWritePin(trig, 1);
        control.waitMicros(10);
        pins.digitalWritePin(trig, 0);

        // read pulse
        const d = pins.pulseIn(echo, PulseValue.High, maxCmDistance * 43);

        switch (unit) {
            case PingUnit.Centimeters: return d / 43;
            case PingUnit.Inches: return d / 110;
            default: return d;
        }
    }



    function signal_dht11(pin: DigitalPin): void {
        pins.digitalWritePin(pin, 0);
        basic.pause(18);
        let i = pins.digitalReadPin(pin);
        pins.setPull(pin, PinPullMode.PullUp);
    }


    function dht11_read(pin: DigitalPin): number {
        signal_dht11(pin);

        // Wait for response header to finish
        while (pins.digitalReadPin(pin) == 1);
        while (pins.digitalReadPin(pin) == 0);
        while (pins.digitalReadPin(pin) == 1);

        let value = 0;
        let counter = 0;

        for (let i = 0; i <= 32 - 1; i++) {
            while (pins.digitalReadPin(pin) == 0);
            counter = 0
            while (pins.digitalReadPin(pin) == 1) {
                counter += 1;
            }
            if (counter > 4) {
                value = value + (1 << (31 - i));
            }
        }
        return value;
    }


    //% blockId=get_DHT11_value block="DHT11 set pin %pin_arg|get %dhtResult" blockExternalInputs=true
    //% pin_arg.fieldEditor="gridpicker" pin_arg.fieldOptions.columns=4
    //% pin_arg.fieldOptions.tooltips="false" pin_arg.fieldOptions.width="300"
    //% weight=74
	//% color=160
	//% group=Sensor传感器
    export function get_DHT11_value(pin_arg: DigitalPin, dhtResult: Dht11Result): number {
        switch (dhtResult) {
            case Dht11Result.Celsius: return (dht11_read(pin_arg) & 0x0000ff00) >> 8;
            case Dht11Result.Fahrenheit: return ((dht11_read(pin_arg) & 0x0000ff00) >> 8) * 9 / 5 + 32;
            case Dht11Result.humidity: return dht11_read(pin_arg) >> 24;
            default: return 0;
        }
    }



    //% blockId=RGBLight block="set RGB type:common %myType|red pin %RedPin|green pin %GreenPin|blue pin %BluePin|value of red(0~255) %RedValue|value of green(0~255) %GreenValue|value of blue(0~255) %BlueValue" blockExternalInputs=false
    //% RedValue.min=0 RedValue.max=255 GreenValue.min=0 GreenValue.max=255 BlueValue.min=0 BlueValue.max=255
    //% RedPin.fieldEditor="gridpicker" RedPin.fieldOptions.columns=4
    //% RedPin.fieldOptions.tooltips="false" RedPin.fieldOptions.width="300"
    //% GreenPin.fieldEditor="gridpicker" GreenPin.fieldOptions.columns=4
    //% GreenPin.fieldOptions.tooltips="false" GreenPin.fieldOptions.width="300"
    //% BluePin.fieldEditor="gridpicker" BluePin.fieldOptions.columns=4
    //% BluePin.fieldOptions.tooltips="false" BluePin.fieldOptions.width="300"
    //% weight=74
	//% color=160
	//% group=Sensor传感器
    export function RGBLight(myType: LEDType, RedPin: AnalogPin, GreenPin: AnalogPin, BluePin: AnalogPin, RedValue: number, GreenValue: number, BlueValue: number): void {
        pins.analogWritePin(RedPin, pins.map((myType == LEDType.cathode ? RedValue : (255 - RedValue)), 0, 255, 0, 1023));
        pins.analogWritePin(GreenPin, pins.map((myType == LEDType.cathode ? GreenValue : (255 - GreenValue)), 0, 255, 0, 1023));
        pins.analogWritePin(BluePin, pins.map((myType == LEDType.cathode ? BlueValue : (255 - BlueValue)), 0, 255, 0, 1023));
    }



    /**
     * A NeoPixel strip
     */
    export class Strip {
        buf: Buffer;
        pin: DigitalPin;
        // TODO: encode as bytes instead of 32bit
        brightness: number;
        start: number; // start offset in LED strip
        _length: number; // number of LEDs
        _mode: NeoPixelMode;
        _matrixWidth: number; // number of leds in a matrix - if any

        /**
         * Shows all LEDs to a given color (range 0-255 for r, g, b). 
         * @param rgb RGB color of the LED
         */
        //% blockId="neopixel_set_strip_color" block="%strip|show color %rgb=neopixel_colors" 
        //% weight=85 blockGap=8
        //% parts="neopixel"
        showColor(rgb: number) {
            rgb = rgb >> 0;
            this.setAllRGB(rgb);
            this.show();
        }

        /**
         * Shows a rainbow pattern on all LEDs. 
         * @param startHue the start hue value for the rainbow, eg: 1
         * @param endHue the end hue value for the rainbow, eg: 360
         */
        //% blockId="neopixel_set_strip_rainbow" block="%strip|show rainbow from %startHue|to %endHue" 
        //% weight=85 blockGap=8
        //% parts="neopixel"
        showRainbow(startHue: number = 1, endHue: number = 360) {
            if (this._length <= 0) return;

            startHue = startHue >> 0;
            endHue = endHue >> 0;
            const saturation = 100;
            const luminance = 50;
            const steps = this._length;
            const direction = HueInterpolationDirection.Clockwise;

            //hue
            const h1 = startHue;
            const h2 = endHue;
            const hDistCW = ((h2 + 360) - h1) % 360;
            const hStepCW = (hDistCW * 100) / steps
            const hDistCCW = ((h1 + 360) - h2) % 360;
            const hStepCCW = -(hDistCCW * 100) / steps;
            let hStep: number;
            if (direction === HueInterpolationDirection.Clockwise) {
                hStep = hStepCW;
            } else if (direction === HueInterpolationDirection.CounterClockwise) {
                hStep = hStepCCW;
            } else {
                hStep = hDistCW < hDistCCW ? hStepCW : hStepCCW;
            }
            const h1_100 = h1 * 100; //we multiply by 100 so we keep more accurate results while doing interpolation

            //sat
            const s1 = saturation;
            const s2 = saturation;
            const sDist = s2 - s1;
            const sStep = sDist / steps;
            const s1_100 = s1 * 100;

            //lum
            const l1 = luminance;
            const l2 = luminance;
            const lDist = l2 - l1;
            const lStep = lDist / steps;
            const l1_100 = l1 * 100

            //interpolate
            if (steps === 1) {
                this.setPixelColor(0, hsl(h1 + hStep, s1 + sStep, l1 + lStep))
            } else {
                this.setPixelColor(0, hsl(startHue, saturation, luminance));
                for (let i = 1; i < steps - 1; i++) {
                    const h = (h1_100 + i * hStep) / 100 + 360;
                    const s = (s1_100 + i * sStep) / 100;
                    const l = (l1_100 + i * lStep) / 100;
                    this.setPixelColor(i, hsl(h, s, l));
                }
                this.setPixelColor(steps - 1, hsl(endHue, saturation, luminance));
            }
            this.show();
        }

        /**
         * Displays a vertical bar graph based on the `value` and `high` value.
         * If `high` is 0, the chart gets adjusted automatically.
         * @param value current value to plot
         * @param high maximum value, eg: 255
         */
        //% weight=84
        //% blockId=neopixel_show_bar_graph block="%strip|show bar graph of %value|up to %high" 
        //% icon="\uf080"
        //% parts="neopixel"
        showBarGraph(value: number, high: number): void {
            if (high <= 0) {
                this.clear();
                this.setPixelColor(0, NeoPixelColors.Yellow);
                this.show();
                return;
            }

            value = Math.abs(value);
            const n = this._length;
            const n1 = n - 1;
            let v = (value * n) / high;
            if (v == 0) {
                this.setPixelColor(0, 0x666600);
                for (let i = 1; i < n; ++i)
                    this.setPixelColor(i, 0);
            } else {
                for (let i = 0; i < n; ++i) {
                    if (i <= v) {
                        let b = i * 255 / n1;
                        this.setPixelColor(i, OLED.rgb(b, 0, 255 - b));
                    }
                    else this.setPixelColor(i, 0);
                }
            }
            this.show();
        }

        /**
         * Set LED to a given color (range 0-255 for r, g, b). 
         * You need to call ``show`` to make the changes visible.
         * @param pixeloffset position of the NeoPixel in the strip
         * @param rgb RGB color of the LED
         */
        //% blockId="neopixel_set_pixel_color" block="%strip|set pixel color at %pixeloffset|to %rgb=neopixel_colors" 
        //% blockGap=8
        //% weight=80
        //% parts="neopixel" advanced=true
        setPixelColor(pixeloffset: number, rgb: number): void {
            this.setPixelRGB(pixeloffset >> 0, rgb >> 0);
        }

        /**
         * Sets the number of pixels in a matrix shaped strip
         * @param width number of pixels in a row
         */
        //% blockId=neopixel_set_matrix_width block="%strip|set matrix width %width"
        //% blockGap=8
        //% weight=5
        //% parts="neopixel" advanced=true
        setMatrixWidth(width: number) {
            this._matrixWidth = Math.min(this._length, width >> 0);
        }

        /**
         * Set LED to a given color (range 0-255 for r, g, b) in a matrix shaped strip 
         * You need to call ``show`` to make the changes visible.
         * @param x horizontal position
         * @param y horizontal position
         * @param rgb RGB color of the LED
         */
        //% blockId="neopixel_set_matrix_color" block="%strip|set matrix color at x %x|y %y|to %rgb=neopixel_colors" 
        //% weight=4
        //% parts="neopixel" advanced=true
        setMatrixColor(x: number, y: number, rgb: number) {
            if (this._matrixWidth <= 0) return; // not a matrix, ignore
            x = x >> 0;
            y = y >> 0;
            rgb = rgb >> 0;
            const cols = this._length / this._matrixWidth;
            if (x < 0 || x >= this._matrixWidth || y < 0 || y >= cols) return;
            let i = x + y * this._matrixWidth;
            this.setPixelColor(i, rgb);
        }
        
        /**
         * For NeoPixels with RGB+W LEDs, set the white LED brightness. This only works for RGB+W NeoPixels.
         * @param pixeloffset position of the LED in the strip
         * @param white brightness of the white LED
         */
        //% blockId="neopixel_set_pixel_white" block="%strip|set pixel white LED at %pixeloffset|to %white" 
        //% blockGap=8
        //% weight=80
        //% parts="neopixel" advanced=true
        setPixelWhiteLED(pixeloffset: number, white: number): void {            
            if (this._mode === NeoPixelMode.RGBW) {
                this.setPixelW(pixeloffset >> 0, white >> 0);
            }
        }

        /** 
         * Send all the changes to the strip.
         */
        //% blockId="neopixel_show" block="%strip|show" blockGap=8
        //% weight=79
        //% parts="neopixel"
        show() {
            ws2812b.sendBuffer(this.buf, this.pin);
        }

        /**
         * Turn off all LEDs.
         * You need to call ``show`` to make the changes visible.
         */
        //% blockId="neopixel_clear" block="%strip|clear"
        //% weight=76
        //% parts="neopixel"
        clear(): void {
            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            this.buf.fill(0, this.start * stride, this._length * stride);
        }

        /**
         * Gets the number of pixels declared on the strip
         */
        //% blockId="neopixel_length" block="%strip|length" blockGap=8
        //% weight=60 advanced=true
        length() {
            return this._length;
        }

        /**
         * Set the brightness of the strip. This flag only applies to future operation.
         * @param brightness a measure of LED brightness in 0-255. eg: 255
         */
        //% blockId="neopixel_set_brightness" block="%strip|set brightness %brightness" blockGap=8
        //% weight=59
        //% parts="neopixel" advanced=true
        setBrightness(brightness: number): void {
            this.brightness = brightness & 0xff;
        }

        /**
         * Apply brightness to current colors using a quadratic easing function.
         **/
        //% blockId="neopixel_each_brightness" block="%strip|ease brightness" blockGap=8
        //% weight=58
        //% parts="neopixel" advanced=true
        easeBrightness(): void {
            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            const br = this.brightness;
            const buf = this.buf;
            const end = this.start + this._length;
            const mid = this._length / 2;
            for (let i = this.start; i < end; ++i) {
                const k = i - this.start;
                const ledoffset = i * stride;
                const br = k > mid ? 255 * (this._length - 1 - k) * (this._length - 1 - k) / (mid * mid) : 255 * k * k / (mid * mid);
                const r = (buf[ledoffset + 0] * br) >> 8; buf[ledoffset + 0] = r;
                const g = (buf[ledoffset + 1] * br) >> 8; buf[ledoffset + 1] = g;
                const b = (buf[ledoffset + 2] * br) >> 8; buf[ledoffset + 2] = b;
                if (stride == 4) {
                    const w = (buf[ledoffset + 3] * br) >> 8; buf[ledoffset + 3] = w;
                }
            }
        }

	 clamp(x: number, min: number, max: number): number {

		if (x < min) {
			return min;
		}

		if (x > max) {
			return max;
		}

		return x;
	    };



        /** 
         * Create a range of LEDs.
         * @param start offset in the LED strip to start the range
         * @param length number of LEDs in the range. eg: 4
         */
        //% weight=89
        //% blockId="neopixel_range" block="%strip|range from %start|with %length|leds"
        //% parts="neopixel"
        //% blockSetVariable=range
        range(start: number, length: number): Strip {
            start = start >> 0;
            length = length >> 0;
            let strip = new Strip();
            strip.buf = this.buf;
            strip.pin = this.pin;
            strip.brightness = this.brightness;
            strip.start = this.start + this.clamp(0, this._length - 1, start);
            strip._length = this.clamp(0, this._length - (strip.start - this.start), length);
            strip._matrixWidth = 0;
            strip._mode = this._mode;
            return strip;
        }




        /**
         * Shift LEDs forward and clear with zeros.
         * You need to call ``show`` to make the changes visible.
         * @param offset number of pixels to shift forward, eg: 1
         */
        //% blockId="neopixel_shift" block="%strip|shift pixels by %offset" blockGap=8
        //% weight=40
        //% parts="neopixel"
        shift(offset: number = 1): void {
            offset = offset >> 0;
            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            this.buf.shift(-offset * stride, this.start * stride, this._length * stride)
        }

        /**
         * Rotate LEDs forward.
         * You need to call ``show`` to make the changes visible.
         * @param offset number of pixels to rotate forward, eg: 1
         */
        //% blockId="neopixel_rotate" block="%strip|rotate pixels by %offset" blockGap=8
        //% weight=39
        //% parts="neopixel"
        rotate(offset: number = 1): void {
            offset = offset >> 0;
            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            this.buf.rotate(-offset * stride, this.start * stride, this._length * stride)
        }

        /**
         * Set the pin where the neopixel is connected, defaults to P0.
         */
        //% weight=10
        //% parts="neopixel" advanced=true
        setPin(pin: DigitalPin): void {
            this.pin = pin;
            pins.digitalWritePin(this.pin, 0);
            // don't yield to avoid races on initialization
        }

        /**
         * Estimates the electrical current (mA) consumed by the current light configuration.
         */
        //% weight=9 blockId=neopixel_power block="%strip|power (mA)"
        //% advanced=true
        power(): number {
            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            const end = this.start + this._length;
            let p = 0;
            for (let i = this.start; i < end; ++i) {
                const ledoffset = i * stride;
                for (let j = 0; j < stride; ++j) {
                    p += this.buf[i + j];
                }
            }
            return this.length() / 2  /* 0.7mA per neopixel */
                + (p * 433) / 10000; /* rought approximation */
        }

        private setBufferRGB(offset: number, red: number, green: number, blue: number): void {
            if (this._mode === NeoPixelMode.RGB_RGB) {
                this.buf[offset + 0] = red;
                this.buf[offset + 1] = green;
            } else {
                this.buf[offset + 0] = green;
                this.buf[offset + 1] = red;
            }
            this.buf[offset + 2] = blue;
        }

        private setAllRGB(rgb: number) {
            let red = unpackR(rgb);
            let green = unpackG(rgb);
            let blue = unpackB(rgb);

            const br = this.brightness;
            if (br < 255) {
                red = (red * br) >> 8;
                green = (green * br) >> 8;
                blue = (blue * br) >> 8;
            }
            const end = this.start + this._length;
            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            for (let i = this.start; i < end; ++i) {
                this.setBufferRGB(i * stride, red, green, blue)
            }
        }
        private setAllW(white: number) {
            if (this._mode !== NeoPixelMode.RGBW)
                return;

            let br = this.brightness;
            if (br < 255) {
                white = (white * br) >> 8;
            }
            let buf = this.buf;
            let end = this.start + this._length;
            for (let i = this.start; i < end; ++i) {
                let ledoffset = i * 4;
                buf[ledoffset + 3] = white;
            }
        }
        private setPixelRGB(pixeloffset: number, rgb: number): void {
            if (pixeloffset < 0
                || pixeloffset >= this._length)
                return;

            let stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            pixeloffset = (pixeloffset + this.start) * stride;

            let red = unpackR(rgb);
            let green = unpackG(rgb);
            let blue = unpackB(rgb);

            let br = this.brightness;
            if (br < 255) {
                red = (red * br) >> 8;
                green = (green * br) >> 8;
                blue = (blue * br) >> 8;
            }
            this.setBufferRGB(pixeloffset, red, green, blue)
        }
        private setPixelW(pixeloffset: number, white: number): void {
            if (this._mode !== NeoPixelMode.RGBW)
                return;

            if (pixeloffset < 0
                || pixeloffset >= this._length)
                return;

            pixeloffset = (pixeloffset + this.start) * 4;

            let br = this.brightness;
            if (br < 255) {
                white = (white * br) >> 8;
            }
            let buf = this.buf;
            buf[pixeloffset + 3] = white;
        }
    }

    /**
     * Create a new NeoPixel driver for `numleds` LEDs.
     * @param pin the pin where the neopixel is connected.
     * @param numleds number of leds in the strip, eg: 24,30,60,64
     */
    //% blockId="neopixel_create" block="NeoPixel at pin %pin|with %numleds|leds as %mode"
    //% weight=90 blockGap=8
    //% parts="neopixel"
    //% trackArgs=0,2
    //% blockSetVariable=strip
    export function create(pin: DigitalPin, numleds: number, mode: NeoPixelMode): Strip {
        let strip = new Strip();
        let stride = mode === NeoPixelMode.RGBW ? 4 : 3;
        strip.buf = pins.createBuffer(numleds * stride);
        strip.start = 0;
        strip._length = numleds;
        strip._mode = mode;
        strip._matrixWidth = 0;
        strip.setBrightness(128)
        strip.setPin(pin)
        return strip;
    }

    /**
     * Converts red, green, blue channels into a RGB color
     * @param red value of the red channel between 0 and 255. eg: 255
     * @param green value of the green channel between 0 and 255. eg: 255
     * @param blue value of the blue channel between 0 and 255. eg: 255
     */
    //% weight=1
    //% blockId="neopixel_rgb" block="red %red|green %green|blue %blue"
    //% advanced=true
    export function rgb(red: number, green: number, blue: number): number {
        return packRGB(red, green, blue);
    }

    /**
     * Gets the RGB value of a known color
    */
    //% weight=2 blockGap=8
    //% blockId="neopixel_colors" block="%color"
    //% advanced=true
    export function colors(color: NeoPixelColors): number {
        return color;
    }

    function packRGB(a: number, b: number, c: number): number {
        return ((a & 0xFF) << 16) | ((b & 0xFF) << 8) | (c & 0xFF);
    }
    function unpackR(rgb: number): number {
        let r = (rgb >> 16) & 0xFF;
        return r;
    }
    function unpackG(rgb: number): number {
        let g = (rgb >> 8) & 0xFF;
        return g;
    }
    function unpackB(rgb: number): number {
        let b = (rgb) & 0xFF;
        return b;
    }

    /**
     * Converts a hue saturation luminosity value into a RGB color
     * @param h hue from 0 to 360
     * @param s saturation from 0 to 99
     * @param l luminosity from 0 to 99
     */
    //% blockId=neopixelHSL block="hue %h|saturation %s|luminosity %l"
    export function hsl(h: number, s: number, l: number): number {
        h = Math.round(h);
        s = Math.round(s);
        l = Math.round(l);
        
        h = h % 360;
        s = this.clamp(0, 99, s);
        l = this.clamp(0, 99, l);
        let c = (((100 - Math.abs(2 * l - 100)) * s) << 8) / 10000; //chroma, [0,255]
        let h1 = h / 60;//[0,6]
        let h2 = (h - h1 * 60) * 256 / 60;//[0,255]
        let temp = Math.abs((((h1 % 2) << 8) + h2) - 256);
        let x = (c * (256 - (temp))) >> 8;//[0,255], second largest component of this color
        let r$: number;
        let g$: number;
        let b$: number;
        if (h1 == 0) {
            r$ = c; g$ = x; b$ = 0;
        } else if (h1 == 1) {
            r$ = x; g$ = c; b$ = 0;
        } else if (h1 == 2) {
            r$ = 0; g$ = c; b$ = x;
        } else if (h1 == 3) {
            r$ = 0; g$ = x; b$ = c;
        } else if (h1 == 4) {
            r$ = x; g$ = 0; b$ = c;
        } else if (h1 == 5) {
            r$ = c; g$ = 0; b$ = x;
        }
        let m = ((l * 2 << 8) / 100 - c) / 2;
        let r = r$ + m;
        let g = g$ + m;
        let b = b$ + m;
        return packRGB(r, g, b);
    }
    export enum HueInterpolationDirection {
        Clockwise,
        CounterClockwise,
        Shortest
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

