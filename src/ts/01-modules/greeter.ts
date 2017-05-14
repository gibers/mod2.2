export class Greeter {
    public static message() : string {
        let currentTime = new Date().getHours();
        return "Good " + (currentTime<12 ? "Morning" : currentTime<18 ? "afternoon" : "evening")
    }
}
