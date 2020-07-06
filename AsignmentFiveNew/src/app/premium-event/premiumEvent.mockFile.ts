import { PremiumEventsDictionary } from "./premiumEvent.model"

export let premiumEvent: PremiumEventsDictionary[] = [
    {
        name: "New Year",
        date: "31 Dec",
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
        name: "Halloween",
        date: "20 Dec",
        time: "12:00",
        onlineURL: "www.halloween.com",
        format: "Online"
    },
    {
        name: "Christmas",
        date: "25 Dec",
        time: "10:00",
        format: "InPerson"
    },
    {
        name: "ThanksGiving",
        date: "12 Dec",
        time: "11:11"
    }

];