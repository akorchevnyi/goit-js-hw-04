const profile = {
    username: "Jacob",
    playTime: 300,

    changeUsername(newName) {
        if (!newName || typeof newName !== "string" || newName.trim().length > 20 || !newName.trim().length) return;
        this.username = newName.trim();
    },

    updatePlayTime(hours) {
        if (!hours || !Number.isFinite(hours) || hours <= 0) return;
        this.playTime += hours;
    },

    getInfo() {
        return `${this.username} has ${this.playTime} active hours!`;
    }
};


console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
