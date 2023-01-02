const promise1 = new Promise((resolve,reject) => {
        setTimeout(() => {
          resolve('a')
        })
      })
      
      const promise2 = new Promise((resolve,reject) => {
        resolve('b')
      })
      
      const promise3 = new Promise((resolve,reject) => {
        setTimeout(() => {
          resolve('c')
        },10)
      })
      
      
      Promise.race([promise1,promise2,promise3])
      .then((msg) => {
        console.log(msg)
      })const promise1 = new Promise((resolve,reject) => {
        setTimeout(() => {
          resolve('a')
        })
      })
      
      const promise2 = new Promise((resolve,reject) => {
        resolve('b')
      })
      
      const promise3 = new Promise((resolve,reject) => {
        setTimeout(() => {
          resolve('c')
        },10)
      })
      
      
      Promise.race([promise1,promise2,promise3])
      .then((msg) => {
        console.log(msg)
      })


const delay = (time) => {
        return new Promise((resolve, reject) => {
                setTimeout(resolve, time)
        })
}

const counter = () => {
        let time = 0
        let pause = false
        return {
                start: async function start() {
                        for(let i = time;;i++){
                                time++;
                                if(pause) break
                                console.log(i)
                                await delay(1000)
                        }
                },
                stop: function stop() {
                        pause = true
                }
        }
}

let count = counter()

count.start()
setTimeout(() => {
        count.stop()
}, 6000)


function randomAsyncFuntion() {
        const time = Math.floor(Math.random * 100)
        const x = setTimeout(() => {
                console.log('finished!!')
        }, time)
}

async function asyncWithCallback(callback) {
        randomAsyncFuntion()
        setTimeout(() => {
                callback()
        }, 5000)
}

asyncWithCallback(() => {
        console.log("angadwithasyncfunction")
})


function randomAsyncFuntion(){
        const time = Math.floor(Math.random * 100)
        const x = setTimeout(() =>{
                console.log('finished!!byAngad')
        }, time)
}

async function asyncWithCallback(callback){
        randomAsyncFuntion()
        setTimeout(() => {
                callback()
        },1000)
}

asyncWithCallback(() =>{
        console.log("customasyncfuntion")
})