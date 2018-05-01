import { extendObservable } from "mobx";

class questionStore {
    constructor() {
        extendObservable(this,{
            questionSet1:[
                {
                a:{
                    name:'aaa',
                    image:'aaa',
                    },
                b:{
                    name:'bbb',
                    image:'bbb',
                    },
                  nextQuestion:1
                },

                {
                    a:{
                        name:'aa222',
                        image:'aa2222',
                        },
                    b:{
                        name:'bb222',
                        image:'bb222',
                        },
                      nextQuestion:2
                }   
            ]
        }
    )
}
}


export default new questionStore()