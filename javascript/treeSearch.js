var obj = [
    { title: 'title', id: 'box', pid: 'main' },
    { title: 'title1', id: 'a', pid: 'box' },
    { title: 'title2', id: 'b', pid: 'a' },
    { title: 'title3', id: 'c', pid: 'b' },
    { title: 'title5', id: 'e', pid: 'd' },
    { title: 'title19', id: 'gg', pid: 'p' },
    { title: 'title19', id: 'ggf', pid: 'pd' }
]

function fun(title) {
    function push_data(a) {
        arr.push(a.title)
        search(a.pid)
    }

    var arr = []
        , result = void 0
        , dom = obj
        // title 解析
        , titleArr = []
        , id = void 0

        /**
         * Title字符 解析
         */
        ; (function () {
            dom.forEach(function (e) {
                if (e.title == title) {
                    titleArr.push(e)
                }
            })
        })()

    titleArr.forEach(function (e) {
        search(e.id)
    })


    /**
     * 向上搜索
     */
    function search(id) {
        if (!id) return false
        dom.forEach(function (e) {
            if (e.id == id) {
                push_data(e)
            }
        })
    }

    return arr.length === 0 ? 0 : arr
}

console.log(fun('title19'))
