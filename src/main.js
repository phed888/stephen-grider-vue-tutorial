import Vue from 'vue';
import App from './App';

// 'h' stands for createElement in the new Vue below
// 'h => h(App)' is the same as 'function(h) { return h(App); }

new Vue({
	render: h => h(App)
}).$mount('#app');