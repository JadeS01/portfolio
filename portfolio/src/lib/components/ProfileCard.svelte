<script lang="ts">
	export let profile: any = {};
</script>

<div>
	<img src={profile.avatar_url} alt="profile" />
	{profile.login}
	{profile.bio}
</div>
