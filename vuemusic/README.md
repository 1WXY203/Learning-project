1. 路由：
    - 6个页面，4个需要导航条，2个不需要
    - 列表页面和播放页面需要定义为动态路由，其他4个不需要
    - 部分页面需要导航条的处理方法
        - 那些页面需要就在那些页面中添加
        - 做一个嵌套路由，父级组件有有导航条，哪些也需要导航条，就把这些页面作为这个父级组件的子级
2. 接口地址
    - 百度音乐接口：http://tingapi.ting.baidu.com/v1/restserver/ting
    - 获取列表：
        method=baidu.ting.billboard.billList&type=1&size=10&offset=0
    - 播放：
        method=baidu.ting.song.play&songid=877578
    - 歌词：
        method=baidu.ting.song.lry&songid=877578
    
    - 这个数据地址不支持cors,我们需要解决跨域问题，使用代理
    创建配置文件vue.config.js
    配置devServer:{proxy:{'/api':{
        target:'',
        ws: true,
        changeOrigin: true,
        pathRewrite:{
            '^/api':''
        }
    }}}

3. tabs切换插件开发
实现后的效果
    <div>
        <div class='active'>tab1</div>
        <div>tab2</div>
    </div>
    <div>
        <div class='contentActvie'>tab1的内容</div>
        <div>tab2的内容</div>
    </div>

插件调用时
    <Tabs activeKey='2'>
        <Tab label='tab1' akey='1'>
            tab1的内容
        </Tab>
        <Tab label='tab2' akey='2'>
            tab2的内容
        </Tab>
    </Tabs>

这个插件是有页面，也有业务逻辑
Vue.component() //注册全局组件的
页面部分可以使用.vue结尾的组件
这是一个插件，里面暴露一个Install方法
会用到插槽(使用api形式的插槽),使用jsx
