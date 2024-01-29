<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <label>Email</label>
            <input type="email" required v-model="email">
            <label>Password</label>
            <input type="password" required v-model="password">
            <div v-if="passwordError" class="error">
                {{ passwordError }}
            </div>
            <label>Role</label>
            <select v-model="role">
                <option value="developer">Web Developer</option>
                <option value="designer">Web Designer</option>
            </select>
            <label>Skills</label>
            <input type="text" v-model="tempSkill" @keyup.alt="addSkill">
            <div class="pill" v-for="skill in skills" :key="skill">
                <span @click="deleteSkill(skill)">{{ skill }}</span>
            </div>
            <div class="terms">
                <input type="checkbox" required v-model="terms">
                <label>Accept terms and conditions</label>
            </div>
            <!-- <div>
                <input type="checkbox" value="student" v-model="names">
                <label>Student</label>
            </div>
            <div>
                <input type="checkbox" value="software engineer" v-model="names">
                <label>Software Engineer</label>
            </div>
            <div>
                <input type="checkbox" value="full stack" v-model="names">
                <label>Full Stack Developer</label>
            </div> -->
            <div class="submit">
                <button>Create account</button>
            </div>
        </form>

    </div>
</template>
<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            role: '',
            terms: false,
            // names: []
            tempSkill: '',
            skills: [],
            passwordError: ''
        }
    },
    methods: {
        addSkill(event) {
            if (event.key === 'Enter' || event.key === ',' || event.key === '.' || event.key === '-' && this.tempSkill) {
                if (!this.skills.includes(this.tempSkill)) {
                    this.skills.push(this.tempSkill);
                    this.tempSkill = '';
                }
            }
        },
        deleteSkill(skill) {
            this.skills = this.skills.filter((item) => {
                return skill !== item;
            })
        },
        handleSubmit() {
            this.passwordError = this.password.length > 5 ? '' : 'Password must be at least 6 chars long.';
            if (!this.passwordError) {
                let user = {
                    email: this.email,
                    password: this.password,
                    role: this.role,
                    skills: this.skills,
                    terms: this.terms
                }
                console.log(user);
            }
        }
    }
}
</script> 
<style>
form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}

label {
    color: #AAA;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}

input,
select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #DDD;
    color: #555;
}

input[type="checkbox"] {
    display: inline-block;
    width: 10px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px
}

.pill {
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #EEE;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
}

button {
    background: #0faf87;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
}

.submit {
    text-align: center;
}

.error {
    color: #ff0062;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
}
</style>