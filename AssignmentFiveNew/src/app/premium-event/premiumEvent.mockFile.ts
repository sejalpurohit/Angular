import { PremiumEventDictionary } from "./premiumEvent.model"

export let premiumEvent: PremiumEventDictionary[] = [
    {
        name: "New year",
        date: "31 DEC",
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
        name: "New Year",
        date: "01 Jan",
        time: "1:00",
        onlineURL: "www.newYear.com",
        format: "Online"
    },
    {
        name: "Haloloween",
        date: "25 Dec",
        time: "12:00",
        format: "InPerson"
    }
];