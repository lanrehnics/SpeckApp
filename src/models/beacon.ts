
export class Beacon {
    id: string;
    name: string;
    rssi: number;
    color: string;
    frameType: string;
    rangingData: string;
    nid: string;
    bid: string;
    rfu: string;
    lastUpdated: Date;
    isReachable: boolean;
    uniqueId: string;
    isDummy: boolean;

    constructor(id: string, name: string, rssi: number, frameType: string, rangingData: string, nid: string, bid: string, rfu: string, isDummy: boolean) {
        this.id = id;
        this.name = name == null ? 'N/A' : name;
        this.rssi = rssi;
        this.frameType = frameType;
        this.rangingData = rangingData;
        this.nid = nid;
        this.bid = bid;
        this.rfu = rfu;
        this.uniqueId = nid + ' - ' + bid;
        this.isReachable = true;
        this.lastUpdated = new Date();
        this.isDummy = isDummy;

        // console.log('Instantiated beacon with the following values:');
        // console.log(JSON.stringify(this));
    }

    getColor() {
        if (this.rssi > -65) {
            return "secondary";
        }
        if (this.rssi > -80) {
            return "yellow";
        }
        return "danger";
    }
}