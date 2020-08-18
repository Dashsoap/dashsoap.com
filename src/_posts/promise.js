const PENDING = 'pending'
const FULLFILLED = 'fullfilled'
const REJECTED = 'rejected'


class MyPromise {
    constructor(executor) {
        executor(this.resolve, this.reject)
    }
    status = PENDING
    value = undefined
    reason = undefined
    //成功回调
    successCallback = []
    //失败回调
    failCallback = []
    resolve = value => {
        //如果状态不是pending 阻止程序向下执行
        if (this.status !== PENDING) return
        //更新状态为成功
        this.status = FULLFILLED
        //保存成功之后的值
        this.value = value
        //如果成功回调存在 则调用
        // this.successCallback&& this.successCallback(this.value)
        while (this.successCallback.length) {
            this.successCallback.shift()(this.reason)
        }
    }
    reject = reason => {
        if (this.status !== PENDING) return
        this.status = REJECTED
        this.reason = reason
        // this.successCallback&& this.successCallback(this.value)
        while (this.failCallback.length) {
            this.failCallback.shift()(this.value)
        }

    }
    then(successCallback, failCallback) {
        //判断状态
        let promise2 = new MyPromise((resolve,reject) => {
            if (this.status === FULLFILLED) {
              let x =  successCallback(this.value)
              resolve(x)
            } else if (this.status === REJECTED) {
                let y = failCallback(this.reason)
                reject(y)
            } else {
                //等待
                //将回调都存储起来
                this.successCallback.push(successCallback)
                this.failCallback.push(failCallback)
            }
        })

        return promise2
    }
}

// module.exports = MyPromise

