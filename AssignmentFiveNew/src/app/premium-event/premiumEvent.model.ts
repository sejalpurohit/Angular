export interface PremiumEventDictionary{
    name: string,
    date: string,
    time: string,
    location?: [{
        address: string,
        city: string,
        state: string,
        pin: number,
        country: string
    }],
    onlineURL?: string,
    hidden?: boolean,
    format?:string
}