<script lang="ts">
	export let repo: any = {};
</script>

<div class="light-card">
	<div>{repo.name}</div>
	<div>{repo.language || 'README'}</div>
	<div>{repo.description || 'No Description'}</div>
	<a href={repo.html_url}>View Repo</a>
</div>
