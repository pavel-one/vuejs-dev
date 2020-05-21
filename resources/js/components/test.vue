<template>
    <div>
        {{message}}
    </div>
</template>

<script>
    export default {
        data() {
            return {message: 'Привет, я VUE'}
        },
        mounted() {
            console.log('test');
        }
    }
</script>