<script lang="ts" setup>
import BaseButton from '~/shared/ui/BaseButton.vue';
</script>

<template>
	<div>
		Home
		<div class="dark">
			<BaseButton text> text </BaseButton>

			<BaseButton label="Link" link />

			<BaseButton label="Secondary" severity="secondary" rounded />

			<BaseButton icon="pi pi-check" aria-label="Submit" />
			<BaseButton label="Submit" icon="pi pi-check" />
			<BaseButton label="Submit" icon="pi pi-check" iconPos="right" />

			<BaseButton label="Primary" />
			<BaseButton label="Secondary" severity="secondary" />
			<BaseButton label="Success" severity="success" />
			<BaseButton label="Info" severity="info" />
			<BaseButton label="Warning" severity="warning" />
			<BaseButton label="Help" severity="help" />
			<BaseButton label="Danger" severity="danger" />

			<a href="https://primevue.org/icons/#list" target="_blank" rel="noopener noreferrer">icons</a>
			<BaseButton icon="pi pi-check" aria-label="Filter" />
			<BaseButton icon="pi pi-bookmark" severity="secondary" aria-label="Bookmark" />
			<BaseButton icon="pi pi-search" severity="success" aria-label="Search" />
			<BaseButton icon="pi pi-user" severity="info" aria-label="User" />
			<BaseButton icon="pi pi-bell" severity="warning" aria-label="Notification" />
			<BaseButton icon="pi pi-heart" severity="help" aria-label="Favorite" />
			<BaseButton icon="pi pi-times" severity="danger" aria-label="Cancel" />
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
