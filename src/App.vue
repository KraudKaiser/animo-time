<template>
	<v-app id="inspire">
	<v-system-bar>
		<v-spacer></v-spacer>
  
		<v-icon>mdi-square</v-icon>
  
		<v-icon>mdi-circle</v-icon>
  
		<v-icon>mdi-triangle</v-icon>
	</v-system-bar>
  
	<v-app-bar>  
		<v-toolbar-title>¡Animo-Time!</v-toolbar-title>
		<v-btn>Inicio</v-btn>
		<v-btn>Directorio Anime</v-btn>
		
		<v-text-field prepend-inner-icon="mdi-magnify" label="Buscar..."></v-text-field>
	</v-app-bar>
  
  
	<v-main class="bg-grey-lighten-2">
		<v-container>
		<v-row>
			
		</v-row>
		</v-container>
	</v-main>
	</v-app>
  </template>
  
  <script>
	export default {
	data: () => ({ drawer: null }),
	}
  </script>