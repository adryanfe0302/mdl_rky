<template>
  <div class="header" id='extended-nav'>  
    <div>
	  <b-navbar toggleable="lg" type="dark" variant="">
	    <b-navbar-brand href="#">
	      <img width="32.58" height="32.58" src="https://i2.wp.com/www.vectorico.com/wp-content/uploads/2018/02/LinkedIn-Icon-Square.png?resize=300%2C300">
	    </b-navbar-brand>
	    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

	    <b-collapse id="nav-collapse" is-nav>
	      <b-navbar-nav>
	      	<b-nav-form sm="12">
	         <b-form-input class='inputsearch' list="my-list-id" @input='toProfile'></b-form-input>
			  <datalist id="my-list-id">
			    <option>Manual Option</option>
			    <option v-for="size in sizes"> 
			    {{ size }}
				</option>
			  </datalist>
	        </b-nav-form> 
	        <b-nav-item to='/'>
	        	<li-icon aria-hidden="true" type="nav-small-home-icon" color="true"><svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" class="nav-icon" focusable="false" xmlns="http://www.w3.org/2000/svg"><path d="M22,8.45L12.85,2.26a1.5,1.5,0,0,0-1.69,0L2,8.45,3.06,10,4,9.37V19a1,1,0,0,0,1,1h5V15h4v5h5a1,1,0,0,0,1-1V9.37L20.94,10Z"></path><path d="M22,9.45L12.85,3.26a1.5,1.5,0,0,0-1.69,0L2,9.45,3.06,11,4,10.37V20a1,1,0,0,0,1,1h6V16h2v5h6a1,1,0,0,0,1-1V10.37L20.94,11ZM18,19H15V15a1,1,0,0,0-1-1H10a1,1,0,0,0-1,1v4H6V8.89l6-4,6,4V19Z" class="inactive-item" style="fill: currentColor"></path></svg></li-icon>
	        	<br>Home
	    	</b-nav-item>
	    	<b-nav-item to='/Jobs'>
	        	<li-icon class="svg-icon " type="people-icon" size="large" color="" tabindex="-1" aria-hidden="true"><svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" class="artdeco-icon" focusable="false"><path d="M20.74,14.2L19,13.54V12.86l0.25-.41A5,5,0,0,0,20,9.82V9a3,3,0,0,0-6,0V9.82a5,5,0,0,0,.75,2.63L15,12.86v0.68l-1,.37a4,4,0,0,0-.58-0.28l-2.45-1V10.83A8,8,0,0,0,12,7V6A4,4,0,0,0,4,6V7a8,8,0,0,0,1,3.86v1.84l-2.45,1A4,4,0,0,0,0,17.35V20a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V17.47A3.5,3.5,0,0,0,20.74,14.2ZM16,8.75a1,1,0,0,1,2,0v1.44a3,3,0,0,1-.38,1.46l-0.33.6a0.25,0.25,0,0,1-.22.13H16.93a0.25,0.25,0,0,1-.22-0.13l-0.33-.6A3,3,0,0,1,16,10.19V8.75ZM6,5.85a2,2,0,0,1,4,0V7.28a6,6,0,0,1-.71,2.83L9,10.72a1,1,0,0,1-.88.53H7.92A1,1,0,0,1,7,10.72l-0.33-.61A6,6,0,0,1,6,7.28V5.85ZM14,19H2V17.25a2,2,0,0,1,1.26-1.86L7,13.92v-1a3,3,0,0,0,1,.18H8a3,3,0,0,0,1-.18v1l3.72,1.42A2,2,0,0,1,14,17.21V19Zm7,0H16V17.35a4,4,0,0,0-.55-2l1.05-.4V14.07a2,2,0,0,0,.4.05h0.2a2,2,0,0,0,.4-0.05v0.88l2.53,1a1.5,1.5,0,0,1,1,1.4V19Z" class="large-icon" style="fill: currentColor"></path></svg></li-icon>
	        	<br>My Networks
	    	</b-nav-item>
	    	<b-nav-item to='/Jobs'>
	        	<li-icon class="svg-icon " type="briefcase-icon" size="large" color="" tabindex="-1" aria-hidden="true"><svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" class="artdeco-icon" focusable="false"><path d="M21,7H17V6a3,3,0,0,0-3-3H10A3,3,0,0,0,7,6V7H3A1,1,0,0,0,2,8V19a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V8A1,1,0,0,0,21,7ZM9,6a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1V7H9V6ZM20,18H4V13H20v5Zm0-6H4V9H20v3Z" class="large-icon" style="fill: currentColor"></path></svg></li-icon>
	        	<br>Jobs
	    	</b-nav-item>
	    	<b-nav-item to='/Jobs'>
	        	<li-icon class="svg-icon " type="messages-icon" size="large" color="" tabindex="-1" aria-hidden="true"><svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" class="artdeco-icon" focusable="false"><path d="M21,8H8A1,1,0,0,0,7,9V19a1,1,0,0,0,1,1H18l4,3V9A1,1,0,0,0,21,8ZM20,19.11L18.52,18H9V10H20v9.11ZM12,15h5v1H12V15ZM4,13H5v2H3a1,1,0,0,1-1-1V4A1,1,0,0,1,3,3H16a1,1,0,0,1,1,1V6H15V5H4v8Zm14,0H11V12h7v1Z" class="large-icon" style="fill: currentColor"></path></svg></li-icon>
	        	<br>Messaging
	    	</b-nav-item>
	    	 <b-nav-item to='/Jobs'>
	        	<li-icon class="svg-icon " type="bell-icon" size="large" color="" tabindex="-1" aria-hidden="true"><svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" class="artdeco-icon" focusable="false"><path d="M20.94,19L19,14.49s-0.41-3.06-.8-6.06A6.26,6.26,0,0,0,12,3h0A6.26,6.26,0,0,0,5.79,8.44L5,14.49,3.06,19a0.71,0.71,0,0,0-.06.28,0.75,0.75,0,0,0,.75.76H10a2,2,0,1,0,4,0h6.27A0.74,0.74,0,0,0,20.94,19ZM12,4.75h0a4.39,4.39,0,0,1,4.35,3.81c0.28,2.1.56,4.35,0.7,5.44H7L7.65,8.56A4.39,4.39,0,0,1,12,4.75ZM5.52,18l1.3-3H17.18l1.3,3h-13Z" class="large-icon" style="fill: currentColor"></path></svg></li-icon>
	        	<br>Notifications
	    	</b-nav-item>
	    	<b-nav-item to='/Jobs'>
	        	<li-icon class="svg-icon " type="me-icon" size="large" color="" tabindex="-1" aria-hidden="true"><svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" class="artdeco-icon" focusable="false"><path d="M22,12a10,10,0,0,1-1.22,4.79L19,16.09A8.12,8.12,0,1,0,3.88,12,8.06,8.06,0,0,0,5,16.09l-1.77.7A10,10,0,1,1,22,12Zm-7,4.66,3.55,1.43a0.75,0.75,0,0,1,.24,1.25,10,10,0,0,1-13.58,0,0.75,0.75,0,0,1,.24-1.25L9,16.66V14.83A8,8,0,0,1,8,11V10a4,4,0,0,1,8,0v1a8,8,0,0,1-1,3.86v1.84Zm-5-5.51A6,6,0,0,0,10.71,14L11,14.6a1,1,0,0,0,.88.53h0.16A1,1,0,0,0,13,14.6L13.29,14A6,6,0,0,0,14,11.16V9.85a2,2,0,0,0-4,0v1.3Zm3,6.76v-1.1A3,3,0,0,1,12,17H12a3,3,0,0,1-1-.18v1.1L8.06,19.1a8.07,8.07,0,0,0,7.89,0Z" class="large-icon" style="fill: currentColor"></path></svg></li-icon>
	        	<br>Me
	    	</b-nav-item>
	      </b-navbar-nav>

	      <b-navbar-nav class='borderbr'>
	        <b-nav-item-dropdown>
	          <template slot="button-content">
	          	<li-icon class="svg-icon " type="grid-icon" size="large" color="" tabindex="-1" aria-hidden="true"><svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" class="artdeco-icon" focusable="false"><path d="M10,10h4v4H10V10Zm0,11h4V17H10v4ZM3,14H7V10H3v4Zm0,7H7V17H3v4ZM3,7H7V3H3V7Zm14,7h4V10H17v4ZM17,3V7h4V3H17ZM10,7h4V3H10V7Zm7,14h4V17H17v4Z" class="large-icon" style="fill: currentColor"></path></svg></li-icon>
	        	<br>Work
	          </template>
	          <b-dropdown-item to='/profile'>Profile</b-dropdown-item>
	          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
	        </b-nav-item-dropdown>
	      </b-navbar-nav>
	    </b-collapse>
	  </b-navbar>
	</div>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
  	return {
       sizes: ['Hanze', 'Timotious', 'Andoko', 'Richart', 'Siska', 'Siska', 'Tania', 'Anthony', 'Matthew']
     }
  },
  methods: {
  	toProfile (e) {
  		this.sizes.forEach(x => {
  			if (x == e) {
  				this.$router.push({name: 'profile' })
  			}
  		})
  	}
  }
}
</script>
<style type="text/css">
	#extended-nav {
	    padding: 0 30px;
	    background: #283e4a !important;
	    border-top: none;
	    box-shadow: none;
	}
	.navbar{
		padding: 0px !important;
	}
	.nav-link{
		color: white !important;
		font-size: 13px;
	}
	.inputsearch{
		width: 400px !important;
		margin-right: 100px;
	}
	.borderbr{
		margin-left: 10px;
		border-left:1px solid #888;
		padding-left: 5px !important;
	}
</style>