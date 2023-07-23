<script lang="ts">
	export let backgroundColor: string = '';
	export let padding: string = '0';
	export let margin: string = '0';
	export let borderRadius: string = '0';
</script>

<div
	class="root"
	style="background-color: {backgroundColor}; padding: {padding}; border-radius: {borderRadius}; margin: {margin}"
>
	<slot />
</div>
