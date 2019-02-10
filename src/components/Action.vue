<template>
    <b-container>
        <b-row>
            <b-col cols="1">
            </b-col>
            <b-col cols="8">
                <b-form-textarea
                        v-model="actionContent"
                        placeholder="Enter something"
                        :rows="2"
                        :max-rows="6">
                </b-form-textarea>
            </b-col>
            <b-col cols="3">
                <button type="button" class="btn btn-success btn-lg" @click="addAction">
                    add
                </button>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="1">
            </b-col>
            <b-col cols="8">
                <transition-group appear tag="ul">
                    <li v-for="(item, index) in allActions" :key="item.actionId" @dblclick="deleteAction(index)">{{item.actionContent}}</li>
                </transition-group>
            </b-col>
            <b-col cols="3">
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    data(){
        return {
            actionContent:''
        }
    },
    computed:{
        allActions(){
            return this.$store.state.action.allActions;
        }
    },
    methods:{
        addAction(){
            this.$store.dispatch('action/addAction', {actionContent: this.actionContent})
        },
        deleteAction(index){
            this.$store.dispatch('action/deleteAction', {index})
        }
    }
}
</script>

<style lang="less" scoped>
.container{
    padding: 15px;
    textarea{
        resize: none;
    }

    ul{
        padding: 0;
        li {
            list-style: none;
            border: 1px dashed #999;
            margin: 5px 0;
            line-height: 35px;
            padding-left: 5px;
            font-size: 12px;
            width: 100%;
        }

        li:hover {
            background-color: hotpink;
            transition: all 0.8s ease;
            cursor: pointer;
        }
    }
}

</style>
