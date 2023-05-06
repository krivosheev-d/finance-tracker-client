<script lang="ts" setup>
import BaseButton from '~/shared/ui/BaseButton.vue';
</script>

<template>
        <div>
                Home
                <div class="dark">
                        <base-button icon="add" text="Okay" />

                        <base-button icon="add" text="Okay" outlined />

                        <base-button icon="done" text="Approve" variant="success" />

                        <base-button icon="done" text="Approve" variant="success" outlined />

                        <base-button icon="close" text="Dismiss" variant="error" />

                        <base-button icon="close" text="Dismiss" variant="error" outlined />

                        <base-button icon="home" text="Go home" variant="primary" />

                        <base-button icon="home" text="Go home" variant="primary" outlined />
                </div>
                <div class="light">
                        <base-button icon="add" text="Okay" />

                        <base-button icon="add" text="Okay" outlined />

                        <base-button icon="done" text="Approve" variant="success" />

                        <base-button icon="done" text="Approve" variant="success" outlined />

                        <base-button icon="close" text="Dismiss" variant="error" />

                        <base-button icon="close" text="Dismiss" variant="error" outlined />

                        <base-button icon="home" text="Go home" variant="primary" />

                        <base-button icon="home" text="Go home" variant="primary" outlined />
                </div>
        </div>
</template>



<style scoped>
.dark,
.light {
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 16px;
}

.dark {
        background-color: #424242;
}
</style>
