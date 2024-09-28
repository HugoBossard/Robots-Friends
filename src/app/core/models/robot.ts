import { RobotI } from "../interfaces/robot-i";

export class Robot implements RobotI {
    id!: String;
    name!: String;
    email!: String;
    country!: String;
    phone!: String;
    profession!: String;
    isFavorite!: boolean;

    constructor(robotObj?: Partial<Robot>) {
        if (robotObj) {
            Object.assign(this, robotObj);
        }
    }
}