import router from './router'

const token = '12314324235254'
const menu = [
    {

    },{

    },{

    }
]

router.beforeEach((to,from,next)=>{
    console.log('to:',to);
    console.log('from:',from);
    next()
})

