<script>
	import Dashboard from "./Dashboard.svelte"
	import createAuth0Client from '@auth0/auth0-spa-js';
	let page = "metrics";
	let auth0 = null;
	const fetchAuthConfig = () => fetch("/auth_config.json");
	const configureClient = async () => {
		const response = await fetchAuthConfig();
		const config = await response.json();
		auth0 = await createAuth0Client({
			domain: config.domain,
			client_id: config.clientId
		});
	};

	window.onload = async () => {
		await configureClient();
	}

	function method(newPage){
		page = newPage;
		//alert(page)
	}

	function login(){
		alert("login");
	}

	function logout(){
		alert("logout");
	}
</script> 

<style>
	:global(h1) {
		color: lightblue;
		font-family: "Verdana";
		font-size: 25px
	}
</style>

<h1>Welcome</h1>
<button on:click={() => { method("metrics") }}>Metrics</button>
<button on:click={() => { method("about") }}>About</button>
<button on:click={() => { method("new-screen") }}>New Screen</button>

<h1>App Loaded</h1>
<h2>SPA Authentication Sample</h2>
<p>Welcome to our page!</p>
<button id="btn-login" disabled="true" on:click={login}>Log in</button>
<button id="btn-logout" disabled="true" on:click={logout}>Log out</button>
  
<Dashboard page={page}></Dashboard>