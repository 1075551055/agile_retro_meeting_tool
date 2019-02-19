<template>
    <b-container>
        <b-row>
            <b-col cols="1"></b-col>
             <b-col cols="9">
                 <b-input-group class="mb-3" size="lg" prepend="">
                    <b-form-input v-model="actionContent" placeholder="Enter something"/>
                    <b-input-group-append>
                        <b-btn size="lg" text="Button" variant="success" @click="addAction">add</b-btn>
                    </b-input-group-append>
                </b-input-group>
             </b-col>
             <b-modal v-model="deleteModalShow" @ok="handleOkForDeleteAction">
                        Are you sure to delete this item ? 
             </b-modal>
        </b-row>
        <!-- <b-row>
            <b-col cols="1">
            </b-col>
            <b-col cols="8">
                <b-form-textarea
                        v-model="actionContent"
                        placeholder="Enter something"
                        :max-rows="6">
                </b-form-textarea>
            </b-col>
            <b-col cols="2">
                <button type="button" class="btn btn-success btn-lg" @click="addAction">
                    add
                </button>
                <b-modal v-model="deleteModalShow" @ok="handleOkForDeleteAction">
                        Are you sure to delete this item ? 
                </b-modal>
            </b-col>
            
        </b-row> -->
        <b-row>
            <b-col cols="1">
            </b-col>
            <b-col cols="9">
                <p class="delete-tips">Tips: double click to delete item.</p>
                <transition-group appear tag="ul">
                    <li v-for="(item, index) in allActions" :key="item.actionId" @dblclick="deleteAction(index, item.actionId)">
                        {{item.actionContent}}

                    </li>
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
            actionContent:'',
            deleteModalShow: false,
            deletedActionIndex: "",
            deletedActionId: ""
        }
    },
    computed:{
        allActions(){
            return this.$store.state.action.allActions;
        }
    },
    created(){
        this.$store.dispatch('action/getAllActions',{meetingId: this.$route.params.meetingId})
    },
    methods:{
        addAction(){
            this.$store.dispatch('action/addAction', {actionContent: this.actionContent, meetingId: this.$route.params.meetingId});
            this.actionContent = "";
        },
        deleteAction(index, acitonId){
            this.deleteModalShow = true;
            this.deletedActionIndex = index;
            this.deletedActionId = acitonId;
        },
        handleOkForDeleteAction(evt){
            this.$store.dispatch('action/deleteAction', {index: this.deletedActionIndex, actionId: this.deletedActionId})
        }
    }
}
</script>

<style lang="less" scoped>
.container{
    padding: 15px;
    textarea{
        resize: none;
        height: 100%;
    }
    .delete-tips {
        margin-top: 5px;
        color: red;
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
            word-break : break-all; 
            // word-wrap: break-word;
        }

        li:hover {
            background-color: #87CEEB;
            transition: all 0.8s ease;
            cursor: pointer;
        }
    }
}

// transition
.v-leave-to{
    opacity: 0;
    transform: translateY(80px);
}

.v-leave-active{
    transition: all 0.6 ease;
    position: absolute;
}

.v-move{
    transition: all 0.6s ease;
}


</style>
