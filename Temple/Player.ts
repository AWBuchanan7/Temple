import { ButtonMap, ButtonType } from "./ButtonMap";

export enum Players {
    ONE = 1,
    TWO = 2,
    THREE = 3,
    FOUR = 4
}

export class PlayerInput {

    input_player_A;
    input_player_B;
    input_player_analog_x;
    input_player_analog_y;

    number: number;

    constructor(_number: Players, mem, u8, u16, u32) {
        this.number = _number;
        switch(this.number) {
            case 1:
                mem.bindvar(this, 0x801C84B4, 'input_player_A', u16);
                mem.bindvar(this, 0x801C84B5, 'input_player_B', u16);
                mem.bindvar(this, 0x801C84B6, 'input_player_analog_x', u8);
                mem.bindvar(this, 0x801C84B7, 'input_player_analog_y', u8);
                break;
            case 2:
                break;
            case 3:
                mem.bindvar(this, 0x801C84E4, 'input_player_A', u16);
                mem.bindvar(this, 0x801C84E5, 'input_player_B', u16);
                mem.bindvar(this, 0x801C84E6, 'input_player_analog_x', u8);
                mem.bindvar(this, 0x801C84E7, 'input_player_analog_y', u8);
                break;
            case 4:
                break;
            default:
                break;
        }
    }

    isPressingButton(button: ButtonMap) {
        if (button.type == ButtonType.A) {
            return this.input_player_A == button.value;
        } else if (button.type == ButtonType.B) {
            return this.input_player_B == button.value;
        }
    }

    getAnalogStickX() {
        return this.input_player_analog_x;
    }

    getAnalogStickY() {
        return this.input_player_analog_y;
    }

    setZero() {
        this.input_player_A = 0;
        this.input_player_B = 0;
    }
}