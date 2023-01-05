new Vue({
    data: function () {
        this.$notify({
            title: "，抓到你了🐖，欢迎来到pipi的blog😜",
            message: "小伙子，扒源记住要遵循GPL协议！有想问的欢迎评论哦📃",
            position: 'top-left',
            offset: 50,
            showClose: true,
            type: "warning",
            duration: 5000
        });
    }
})