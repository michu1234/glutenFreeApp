<template>
  <v-app id="inspire">
    <v-navigation-drawer persistent v-model="drawerRight" right clipped enable-resize-watcher app>
      <v-list dense>
        <v-list-tile @click.stop="right = !right">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dodaj nowy przepis</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="yellow accent-4" dark fixed app clipped-right>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>
        <div class="logo__box">
          <img class="logo" src="../src/assets/food-logo.png">
          <p>
            Gluten Free
            <br/>
            <small>
              <span class="text--pink">for...</span>
            </small>
          </p>
        </div>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon @click.stop="drawerRight = !drawerRight"></v-toolbar-side-icon>
    </v-toolbar>
    <v-navigation-drawer persistent v-model="drawer" enable-resize-watcher app>
      <v-list dense>
        <v-list-tile @click.stop="left = !left">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dodaj nowy produkt</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <main>
      <v-navigation-drawer temporary v-model="left" fixed></v-navigation-drawer>
      <v-content>
        <v-container fluid fill-height>
          <v-layout justify-center align-center>
            <v-tooltip right>
              <v-btn icon large :href="source" target="_blank" slot="activator">
                <v-icon large>code</v-icon>
              </v-btn>
              <span>Source</span>
            </v-tooltip>
          </v-layout>
        </v-container>
      </v-content>
      <v-navigation-drawer right temporary v-model="right" fixed></v-navigation-drawer>
    </main>
    <v-footer color="yellow accent-4" class="white--text" app>
      <span>
        <small>&copy; Copyright 2017, Dawid Nawrocki</small>
      </span>
      <v-spacer></v-spacer>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: true,
      drawerRight: true,
      right: null,
      left: null
    }),
    props: {
      source: String
    }
  }

</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Chewy');

  .logo {
    width: 100px;
    vertical-align: bottom;
  }

  .logo__box {
    display: inline-block;
    line-height: 16px;
    font-family: 'Chewy', cursive;


    text-shadow: 0px 0px 6px rgba(255, 255, 255, 0.7);
  }

  p {
    display: inline-block;
  }

  .text--pink {
    color: #f50057;
  }

</style>

