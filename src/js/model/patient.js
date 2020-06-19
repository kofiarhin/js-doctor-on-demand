import User from "./user";
import _ from "lodash";
import { firebase, firebaseLooper } from "../firebase";

export default class Patient extends User {

    constructor() {
        super()

        console.log("patient controller")
    }

    async getPatients() {

        const users = await this.getUsers("patient");
        const details = await firebase.database().ref("patients").once("value").then(snapshot => firebaseLooper(snapshot));


        const data = await Promise.all([users, details]);

        const [usersData, detailsData] = data;

        if (!_.isEmpty(usersData)) {

            usersData.forEach((userData, index) => {

                const { id } = userData;

                const detail = detailsData.find(d => {
                    return d.userId === id;
                });

                if (!_.isEmpty(detail)) {
                    const { id: patientId, userId, ...rest } = detail;

                    usersData[index] = { patientId, ...userData, ...rest }
                }
            });



            return usersData;
        }
    }
}