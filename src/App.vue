<template>
	<div>
		<SearchBar @termChange="onTermChange"></SearchBar>
	</div>
</template>

<script>
	import axios from 'axios';
	import SearchBar from './components/SearchBar';
	const API_KEY = 'AIzaSyCK8dU13qsTCS-ntJgXxOGGG1Lk3CUP9m0';
	
	export default {
		name: 'App',
		components: {
			SearchBar
		},
		methods: {
			onTermChange(searchTerm) {
				axios.get('https://www.googleapis.com/youtube/v3/search',
					{
						params: {
							key: API_KEY,
							type: 'video',
							part: 'snippet',
							q: searchTerm
						}
					}
				).then(response => console.log(response))
			}
		}
	}
</script>