let stopHour = 0,
    stopMinute = 0,
    stopSecond = 0,
    stopMillisecond = 0;
let pushTime = document.getElementById("push-time");

class Clock {
    constructor(selector) {
        this.hour = 0;
        this.minute = 0;
        this.second = 0;
        this.millisecond = 0;
        this.el = document.querySelector(selector);
        this.render();
    }
    render() {
        this.el.textContent = `
        ${String(this.hour).padStart(2, "0")}
        : ${String(this.minute).padStart(2, "0")}
        : ${String(this.second).padStart(2, "0")}
        : ${String(this.millisecond).padStart(3, "0")}
        `;
    }
    exchangeTime() {
        if (this.millisecond == 100) {
            this.millisecond = 0;
            this.second++;
        }
        if (this.second == 60) {
            this.second = 0;
            this.minute++;
        }
        if (this.minute == 60) {
            this.minute = 0;
            this.hour++;
        }
        if (this.hour == 25) {
            this.hour = 0;
        }
    }
    start() {
        this.timer = setInterval(() => {
            this.millisecond++;
            this.render();
            this.exchangeTime();
        }, 1);
    }

    stop() {
        clearInterval(this.timer);
        stopHour = this.hour;
        stopMinute = this.minute;
        stopSecond = this.second;
        stopMillisecond = this.millisecond;
        pushTime.textContent = `
        ${String(stopHour).padStart(2, "0")}
        : ${String(stopMinute).padStart(2, "0")}
        : ${String(stopSecond).padStart(2, "0")}
        : ${String(stopMillisecond).padStart(3, "0")}
        `;
    }

    reset() {
        this.timer && clearInterval(this.timer);
        this.hour = 0;
        this.minute = 0;
        this.second = 0;
        this.millisecond = 0;
        this.render();
    }
}

let clock = new Clock(".clock");
