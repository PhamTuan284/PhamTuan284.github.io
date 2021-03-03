let stopHour = 0,
    stopMinute = 0,
    stopSecond = 0,
    stopMillisecond = 0;
class Clock {
    constructor(selector) {
        this.hour = 0;
        this.minute = 0;
        this.second = 0;
        this.millisecond = 0;
        this.el = document.querySelector(selector);
        this.btnStart = document.getElementById("btnStart");
        this.btnStop = document.getElementById("btnStop");
        this.btnReset = document.getElementById("btnReset");
        this.btnRecord = document.getElementById("btnRecord");
        this.record = document.getElementById("record");
        this.render();
    }

    render() {
        this.el.textContent = `
        ${String(this.hour).padStart(2, "0")}
        : ${String(this.minute).padStart(2, "0")}
        : ${String(this.second).padStart(2, "0")}
        : ${String(this.millisecond).padStart(2, "0")}
        `;
    }

    exchangeTime() {
        if (this.millisecond == 10) {
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
        }, 100); 
        this.btnStart.disabled = true;
        this.btnStop.disabled = false;
        this.btnReset.disabled = false;
        this.btnRecord.disabled = false;
    }

    stop() {
        clearInterval(this.timer);

        this.btnStart.disabled = false;
        this.btnStop.disabled = false;
        this.btnReset.disabled = false;
        this.btnRecord.disabled = false;

    }

    recordfnc() {
        stopHour = this.hour;
        stopMinute = this.minute;
        stopSecond = this.second;
        stopMillisecond = this.millisecond;
        let p = document.createElement("p");
        p.textContent = `
        ${String(stopHour).padStart(2, "0")}
        : ${String(stopMinute).padStart(2, "0")}
        : ${String(stopSecond).padStart(2, "0")}
        : ${String(stopMillisecond).padStart(3, "0")}
        `;
        this.record.appendChild(p);
    }

    reset() {
        this.timer && clearInterval(this.timer);
        this.hour = 0;
        this.minute = 0;
        this.second = 0;
        this.millisecond = 0;
        this.render();
        this.btnStart.disabled = false;
        this.btnStop.disabled = true;
        this.btnReset.disabled = true;
        this.btnRecord.disabled = true;
        this.record.innerHTML = "";
    }

}

let clock = new Clock(".clock");
