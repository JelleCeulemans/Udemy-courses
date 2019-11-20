<template>
    <div>
        <div class="form-group">
            <label for="firstName">Full Name</label>
            <input type="text" id="firstName" :value="firstName" class="form-control" @input="nameChanged(true, $event)">
        </div>
        <div class="form-group">
            <label for="lastName">Full Name</label>
            <input type="text" id="lastName" :value="lastName" class="form-control" @input="nameChanged(false, $event)">
        </div>
    </div>
</template>

<script>
    export default {
        props: ['value'],
        methods: {
            nameChanged(isFirst, event) {
                let name = '';
                if (isFirst) {
                    name = event.target.value + ' ' +this.lastName;
                } else {
                    name = this.firstName + ' ' + event.target.value;
                }
                this.value = name;
                this.$emit('input', name);
            }
        },
        computed: {
            firstName() {
                return this.value.split(" ")[0];
            },
            lastName() {
                return this.value.split(" ")[1];
            }
        }

    }
</script>

<style scoped></style>