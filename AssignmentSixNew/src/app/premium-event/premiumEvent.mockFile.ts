  
import { PremiumEventsDictionary } from "./premiumEvent.model"

export let premiumEvents: PremiumEventsDictionary[] = [
    {
        name: "Christmas",
        date: "25 Dec",
        time: "12:00",
        location: [{
            address: "Royal Enclave",
            city: "Hyderabad",
            state: "Telangana",
            pin: 500032,
            country: "India"
        }]
    },
    {
        name: "ThnaksGiving",
        date: "31 Dec",
        time: "11:00",
        onlineURL: "www.thanksGiving.com",
        format: "Online"
    },
    {
        name: "New Year",
        date: "20 Dec",
        time: "10:00",
        format: "InPerson"
    }
];