var runner = {
    $$runnerId: null,
    $$tasks: [],
    setSpeed: function (speed) {
        this.stop();
        this.start(speed);
    },
    add: function (task) {
        this.$$tasks.push(task);
    },
    start: function (speed) {
        var _this = this;
        this.$$runnerId = setTimeout(function callback() {
            _this.$$tasks.forEach(function (value) {
               value()
            })
            _this.$$runnerId = setTimeout(callback, speed);
        }, speed);
    },
    stop: function () {
        clearTimeout(this.$$runnerId);
    }
}
runner.add(()=>{
    console.log('hello');
    console.log('world');
});
runner.setSpeed(2000);


 let arr = ['map','good','apple'];
 const newArr = (array) => {
 for (let index = 0; index < array.length; index++) {
     const element = array[index].length;
     console.log(element)
 };
 }
newArr(arr);