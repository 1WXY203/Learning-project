<script>
export default {
    name:'Tab',
    mounted(){
        // 边界处理，直接获取父级组件上的属性
        this.$parent.content.push(this)
    },
    props:['akey'],
    methods:{
        clickme(){
            // console.log(this.akey)
            this.$parent.changeKey(this.akey);
        }
    },
    render(){
        // console.log(this)
        return(
            <div  
                onClick={this.clickme}
                class={{'active':this.akey == this.$parent.activeKey}}
            >
                {this.$attrs.label}
            </div>
        )
    }
}
</script>

<style>

</style>