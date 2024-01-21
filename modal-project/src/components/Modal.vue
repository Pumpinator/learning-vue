<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{ sale: theme === 'sale' }">
            <slot>Slot content</slot>
            <div class="actions">
                <slot name="links"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'theme'
    ],
    methods: {
        closeModal() {
            this.$emit('close');
        }
    }
}
</script>

<style>
.modal {
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
}

.backdrop {
    top: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
}

.modal h1 {
    border-bottom: none;
    padding: 0;
}

.modal p {
    font-style: normal;
}

.modal.sale {
    background: #41B883;
    color: white;
}

.modal.sale h1 {
    color: #35495E;
}

.modal .actions {
    text-align: center;
    margin: 30px 0 10px 0;
}

.modal .actions a {
    color: #41B883;
    background-color: white;
    padding: 8px;
    border: 1px solid white;
    border-radius: 4px;
    text-decoration: none;
    margin: 10px;
}</style>