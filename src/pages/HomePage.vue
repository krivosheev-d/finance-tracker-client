<script lang="ts" setup>
import BaseButton from '~/shared/ui/BaseButton.vue';
</script>

<template>
	<div>
		Home
		<div class="dark">
			<BaseButton text>
				sdfds
			</BaseButton>

			<base-button></base-button>
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


			<BaseButton icon="pi pi-check" aria-label="Filter" />
			<BaseButton icon="pi pi-bookmark" severity="secondary" aria-label="Bookmark" />
			<BaseButton icon="pi pi-search" severity="success" aria-label="Search" />
			<BaseButton icon="pi pi-user" severity="info" aria-label="User" />
			<BaseButton icon="pi pi-bell" severity="warning" aria-label="Notification" />
			<BaseButton icon="pi pi-heart" severity="help" aria-label="Favorite" />
			<BaseButton icon="pi pi-times" severity="danger" aria-label="Cancel" />

			<BaseButton icon="pi pi-check" rounded aria-label="Filter" />
			<BaseButton icon="pi pi-bookmark" severity="secondary" rounded aria-label="Bookmark" />
			<BaseButton icon="pi pi-search" severity="success" rounded aria-label="Search" />
			<BaseButton icon="pi pi-user" severity="info" rounded aria-label="User" />
			<BaseButton icon="pi pi-bell" severity="warning" rounded aria-label="Notification" />
			<BaseButton icon="pi pi-heart" severity="help" rounded aria-label="Favorite" />
			<BaseButton icon="pi pi-times" severity="danger" rounded aria-label="Cancel" />

			<BaseButton icon="pi pi-check" rounded outlined aria-label="Filter" />
			<BaseButton icon="pi pi-bookmark" severity="secondary" rounded outlined aria-label="Bookmark" />
			<BaseButton icon="pi pi-search" severity="success" rounded outlined aria-label="Search" />
			<BaseButton icon="pi pi-user" severity="info" rounded outlined aria-label="User" />
			<BaseButton icon="pi pi-bell" severity="warning" rounded outlined aria-label="Notification" />
			<BaseButton icon="pi pi-heart" severity="help" rounded outlined aria-label="Favorite" />
			<BaseButton icon="pi pi-times" severity="danger" rounded outlined aria-label="Cancel" />

			<BaseButton icon="pi pi-check" text raised rounded aria-label="Filter" />
			<BaseButton icon="pi pi-bookmark" severity="secondary" text raised rounded aria-label="Bookmark" />
			<BaseButton icon="pi pi-search" severity="success" text raised rounded aria-label="Search" />
			<BaseButton icon="pi pi-user" severity="info" text raised rounded aria-label="User" />
			<BaseButton icon="pi pi-bell" severity="warning" text raised rounded aria-label="Notification" />
			<BaseButton icon="pi pi-heart" severity="help" text raised rounded aria-label="Favorite" />
			<BaseButton icon="pi pi-times" severity="danger" text raised rounded aria-label="Cancel" />

			<BaseButton icon="pi pi-check" text rounded aria-label="Filter" />
			<BaseButton icon="pi pi-bookmark" severity="secondary" text rounded aria-label="Bookmark" />
			<BaseButton icon="pi pi-search" severity="success" text rounded aria-label="Search" />
			<BaseButton icon="pi pi-user" severity="info" text rounded aria-label="User" />
			<BaseButton icon="pi pi-bell" severity="warning" text rounded aria-label="Notification" />
			<BaseButton icon="pi pi-heart" severity="help" text rounded aria-label="Favorite" />
			<BaseButton icon="pi pi-times" severity="danger" text rounded aria-label="Cancel" />


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
