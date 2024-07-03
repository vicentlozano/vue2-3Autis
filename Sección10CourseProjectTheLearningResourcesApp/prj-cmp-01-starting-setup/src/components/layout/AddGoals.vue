<template>
    <form @submit.prevent>
    <span>Title</span>
    <input type='text' v-model="title">
    <span>Text</span>
    <input type="text" v-model="text">
    <span>Url</span>
    <input type="url" v-model="url">

    <button type="submit">Submit</button>
</form>
</template>

<script>
export default {
    emits: [

    ],
data () {
    return {
        title: '',
        text: '',
        url: '',
    }
},
methods: {

}


}


</script>