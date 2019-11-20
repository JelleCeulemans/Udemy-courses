<template>
    <div class="container">
        <form>
            <div class="row" v-show="!isSubmitted">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">

<!--                    <div class="form-group">-->
<!--                        <label for="firstName">Full Name</label>-->
<!--                        <input type="text" id="firstName" v-model="signup.firstName" class="form-control">-->
<!--                    </div>-->
<!--                    <div class="form-group">-->
<!--                        <label for="lastName">Full Name</label>-->
<!--                        <input type="text" id="lastName" v-model="signup.lastName" class="form-control">-->
<!--                    </div>-->
                    <app-full-name v-model="signup.fullName"></app-full-name>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" v-model="signup.email" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" v-model="signup.password" class="form-control">
                    </div>
                    <div class="form-group">
                        <p>Store data ?</p>
                        <label for="yes">Yes</label>
                        <input type="radio" id="yes" v-model="signup.storeData" value="Yes" class="radio">
                        <label for="no">No</label>
                        <input type="radio" id="no" v-model="signup.storeData" value="No" class="radio">
                    </div>

                    <button class="btn btn-info" type="submit" @click.prevent="onSubmit">Sumit</button>
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-show="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{signup.fullName}}</p>
                        <p>Mail: {{signup.email}}</p>
                        <p>Password: {{signup.password}}</p>
                        <p>Store in Database?: {{signup.storeData}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from './components/FullName.vue';
    export default {
        data() {
            return {
                signup: {
                    fullName: 'Jelle Ceulemans',
                    email: '',
                    password: '',
                    storeData: 'Yes'
                },
                isSubmitted: false
            }
        },
        methods: {
            onSubmit() {
                this.isSubmitted = true;
            }
        },
        components: {
            appFullName: FullName
        }
    }
</script>

<style>
</style>
