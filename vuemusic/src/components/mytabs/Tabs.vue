<script>
export default {
    name:'Tabs',
    data(){
        return{
            content:[]
        }
    },
    props:['activeKey'],
    methods:{
        changeKey(cs){
            this.$emit('changeKey',cs)
        }
    },
    render(){
        console.log(this.$slots.default,this.content)
        return(
            <div>
                {/**
                    jsx语法，大括号就是js执行环境
                    $slots.default默认插槽的内容
                 */}
                <div class='tab-head'>
                    {this.$slots.default}
                </div>
                <div class='tab-content'>
                    { this.content.map((ele)=>{
                        return <div class={this.activeKey == ele.akey?'contentActive base':'base'} key={ele._uid}>{ele.$slots.default}</div>})}
                </div>
            </div>
        )
    }
}
</script>

<style>
.active{
    color:red;
}
.base{
    display: none;
}
.contentActive{
    display: block !important;
}
</style>