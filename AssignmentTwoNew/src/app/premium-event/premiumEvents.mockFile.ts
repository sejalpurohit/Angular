  
import { PremiumEventsDictionary } from "./premiumEvent.model"

export let premiumEvents: PremiumEventsDictionary[] = [
    {
        name: "Halloween",
        date: "31 DEC",
        time: "22:00",
        location: [{
            address: "Royal Enclave",
            city: "Hyderabad",
            state: "Telangana",
            pin: 500032,
            country: "India"
        }]
    },
    {
        name: "Christmas",
        date: "25 Dec",
        time: "11: 00",
        onlineURL: "www.christmas.com"
    },
    {
        name: "ThanksGiving",
        date: "20 DEC",
        time: "12:00"
    }
];